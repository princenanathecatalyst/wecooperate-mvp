import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { requireAuth } from '@/lib/middleware'
import { verifyPayment } from '@/lib/paystack'
import { calculateSubscriptionExpiry } from '@/lib/utils'

async function handleGET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const reference = searchParams.get('reference')

    if (!reference) {
      return NextResponse.json(
        { error: 'Payment reference is required' },
        { status: 400 }
      )
    }

    // Find payment record
    const payment = await prisma.payment.findUnique({
      where: { reference },
      include: { user: true },
    })

    if (!payment) {
      return NextResponse.json(
        { error: 'Payment not found' },
        { status: 404 }
      )
    }

    // Verify with Paystack
    const verification = await verifyPayment(reference)

    if (verification.status && verification.data.status === 'success') {
      // Update payment record
      const expiryDate = calculateSubscriptionExpiry(1)
      
      const updatedPayment = await prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: 'COMPLETED',
          paymentDate: new Date(),
          expiryDate,
          paystackRef: verification.data.reference,
          webhookPayload: verification.data,
        },
      })

      return NextResponse.json({
        message: 'Payment verified successfully',
        payment: {
          reference: updatedPayment.reference,
          amount: updatedPayment.amount,
          status: updatedPayment.status,
          expiryDate: updatedPayment.expiryDate,
        },
      })
    } else {
      // Mark as failed
      await prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: 'FAILED',
          webhookPayload: verification.data,
        },
      })

      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: error.message || 'Payment verification failed' },
      { status: 500 }
    )
  }
}

export const GET = requireAuth(handleGET)
