import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { requireAuth } from '@/lib/middleware'
import { initializePayment, generatePaymentReference } from '@/lib/paystack'
import { calculateSubscriptionExpiry } from '@/lib/utils'

async function handlePOST(req) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, email: true, firstName: true, lastName: true },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Check for active subscription
    const activePayment = await prisma.payment.findFirst({
      where: {
        userId: user.id,
        status: 'COMPLETED',
        expiryDate: {
          gt: new Date(),
        },
      },
    })

    if (activePayment) {
      return NextResponse.json(
        { error: 'You already have an active subscription' },
        { status: 400 }
      )
    }

    // Generate payment reference
    const reference = generatePaymentReference()

    // Create payment record
    const payment = await prisma.payment.create({
      data: {
        userId: user.id,
        amount: parseFloat(process.env.MONTHLY_SUBSCRIPTION_FEE || 1000),
        currency: 'NGN',
        reference,
        status: 'PENDING',
        metadata: {
          firstName: user.firstName,
          lastName: user.lastName,
        },
      },
    })

    // Initialize Paystack payment
    const paystackResponse = await initializePayment({
      email: user.email,
      amount: payment.amount,
      reference,
      metadata: {
        userId: user.id,
        paymentId: payment.id,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    })

    return NextResponse.json({
      message: 'Payment initialized',
      payment: {
        reference: payment.reference,
        amount: payment.amount,
      },
      authorization_url: paystackResponse.data.authorization_url,
      access_code: paystackResponse.data.access_code,
    })
  } catch (error) {
    console.error('Payment initialization error:', error)
    return NextResponse.json(
      { error: error.message || 'Payment initialization failed' },
      { status: 500 }
    )
  }
}

export const POST = requireAuth(handlePOST)
