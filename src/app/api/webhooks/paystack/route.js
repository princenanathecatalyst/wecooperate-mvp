import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyWebhookSignature } from '@/lib/paystack'
import { calculateSubscriptionExpiry } from '@/lib/utils'

export async function POST(req) {
  try {
    const signature = req.headers.get('x-paystack-signature')
    const body = await req.json()

    // Verify webhook signature
    if (!verifyWebhookSignature(body, signature)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    const { event, data } = body

    // Handle successful charge
    if (event === 'charge.success') {
      const { reference, amount, customer, metadata } = data

      // Find payment record
      const payment = await prisma.payment.findUnique({
        where: { reference },
      })

      if (!payment) {
        console.error('Payment not found for reference:', reference)
        return NextResponse.json({ received: true })
      }

      // Update payment status if not already completed
      if (payment.status !== 'COMPLETED') {
        const expiryDate = calculateSubscriptionExpiry(1)
        
        await prisma.payment.update({
          where: { id: payment.id },
          data: {
            status: 'COMPLETED',
            paymentDate: new Date(),
            expiryDate,
            paystackRef: reference,
            webhookPayload: data,
          },
        })

        console.log(`Payment completed for reference: ${reference}`)
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
