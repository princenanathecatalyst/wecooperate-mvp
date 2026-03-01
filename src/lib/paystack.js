import crypto from 'crypto'
import axios from 'axios'

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY
const PAYSTACK_BASE_URL = 'https://api.paystack.co'

export const initializePayment = async ({ email, amount, reference, metadata = {} }) => {
  try {
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/transaction/initialize`,
      {
        email,
        amount: amount * 100, // Convert to kobo
        reference,
        metadata,
        callback_url: `${process.env.NEXTAUTH_URL}/dashboard/verify-payment`,
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Paystack initialization error:', error.response?.data || error.message)
    throw new Error('Payment initialization failed')
  }
}

export const verifyPayment = async (reference) => {
  try {
    const response = await axios.get(
      `${PAYSTACK_BASE_URL}/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Paystack verification error:', error.response?.data || error.message)
    throw new Error('Payment verification failed')
  }
}

export const verifyWebhookSignature = (payload, signature) => {
  const hash = crypto
    .createHmac('sha512', PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(payload))
    .digest('hex')
  return hash === signature
}

export const generatePaymentReference = () => {
  return `WC-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
}
