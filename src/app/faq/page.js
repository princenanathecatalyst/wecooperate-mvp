import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export const metadata = {
  title: 'Frequently Asked Questions | WeCooperate',
  description: 'Get answers to common questions about WeCooperate Digital Membership Network',
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Everything you need to know about WeCooperate
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                  <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-primary-900">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-primary-600 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="mb-6">Our support team is here to help you understand how WeCooperate works</p>
              <Link href="/auth/register" className="inline-block bg-gold-500 hover:bg-gold-600 text-primary-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                Join WeCooperate Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const faqs = [
  {
    question: "Is WeCooperate a registered cooperative society?",
    answer: "No. WeCooperate is a digital membership network promoted and operated by Bizbridges Universal Limited. We are NOT a registered cooperative society under the Nigerian Cooperatives Act. We are a technology-enabled membership platform that facilitates structured collaboration among members. Our legal structure is that of a limited liability company providing digital subscription services."
  },
  {
    question: "Is my money safe with WeCooperate?",
    answer: "Your ₦1,000 monthly payment is a subscription fee processed through Paystack, Nigeria's most trusted payment gateway, which is regulated by the Central Bank of Nigeria. This is not a savings deposit or investment — it's a subscription payment for access to digital services, programs, and networking opportunities. WeCooperate does not hold or manage investment funds. All transactions are logged and transparent through your member dashboard."
  },
  {
    question: "Do you guarantee profits or financial returns?",
    answer: "No. WeCooperate does NOT guarantee profits, financial returns, dividends, or any form of monetary gain. We are an educational and collaborative membership network, not an investment company. Benefits are structured access to programs, educational content, bulk purchasing opportunities, networking, and personal development resources. Any economic advantages come from your own participation in collaborative initiatives, not from guaranteed returns on membership fees."
  },
  {
    question: "Can I become a leader?",
    answer: "Yes. Leadership positions (Silver and Gold Leaders) are performance-based and subject to availability. After 3 months of consistent active participation as a general member, you become eligible to apply for Silver Leadership. Applications are reviewed based on engagement metrics, participation history, and demonstrated commitment. Approved leaders receive structured honorarium based on their group's engagement and retention metrics."
  },
  {
    question: "How are leaders compensated?",
    answer: "Leaders receive structured honorarium based on group performance metrics including member retention, engagement rates, activity coordination, and value delivery. Compensation is NOT guaranteed and varies based on performance. Silver Leaders coordinate 200-member groups; Gold Leaders oversee 100 Silver Leaders. The honorarium structure rewards effective leadership and member value creation, not just recruitment."
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes. You can cancel your membership at any time with no penalties. Simply log into your dashboard and cancel your subscription before the next billing cycle. Once canceled, you retain access until the end of your current paid month, after which your subscription will not renew. Cancellation does not provide refunds for the current billing period — this follows standard subscription service practices."
  },
  {
    question: "Is WeCooperate only for Nigerians?",
    answer: "Our primary focus is Nigerians globally, including diaspora members. While we welcome all participants, our programs, partnerships, and collaborative initiatives are designed specifically around Nigerian contexts, needs, and market realities. This includes bulk purchasing from Nigerian suppliers, investment education relevant to Nigerian markets, agricultural programs in Nigeria, and networking within the Nigerian professional ecosystem."
  },
  {
    question: "What happens if I stop paying my subscription?",
    answer: "If your monthly subscription payment fails or you don't renew, your access to member benefits is automatically paused. You won't be charged, and your account enters an inactive state. You will not be able to participate in programs, access educational content, or engage in bulk purchasing initiatives. To reactivate, simply log in and complete your payment — your previous participation history is retained."
  },
  {
    question: "Do you hold members' investment funds?",
    answer: "No. WeCooperate does NOT operate investment funds, hold members' money for investment purposes, or manage any form of collective investment scheme. We are not a fund manager, bank, or financial institution. Our role is to facilitate education, coordination, and networking. Any investment activities members choose to pursue are their own independent decisions through third-party regulated platforms — not through WeCooperate."
  },
  {
    question: "Who owns WeCooperate?",
    answer: "WeCooperate is promoted and operated under Bizbridges Universal Limited, a Nigerian registered company. The platform is owned and managed by this corporate entity, which is responsible for all operations, compliance, and service delivery. We are not a member-owned cooperative or mutual organization. This is a for-profit digital membership service business."
  },
  {
    question: "How does group assignment work?",
    answer: "Upon payment confirmation, our automated system assigns you to a Silver Leader group within 24 hours. Assignment considers factors like registration timing, location (for physical meetups), and group capacity (200 members per Silver Leader). Your assigned leader will contact you with group details. If you have specific preferences or concerns about your assignment, you can request a review through your dashboard within 7 days of assignment."
  },
  {
    question: "What are the 7 pillars of collaboration?",
    answer: "The seven pillars are: (1) Cooperative Bulk Buying for reduced costs through collective purchasing; (2) Cooperative Social Blogging for content creation and monetization; (3) Cooperative Investment Education for financial literacy; (4) Cooperative Agriculture for food security and farm partnerships; (5) Cooperative Real Estate for property collaboration; (6) Cooperative Fintech Literacy for digital financial skills; (7) Cooperative Training & Development for professional growth. Each pillar offers structured programs and activities."
  },
  {
    question: "Is there a setup fee or registration cost?",
    answer: "No. There is no setup fee, registration fee, or one-time enrollment cost. The ONLY cost is the ₦1,000 monthly subscription. There are no hidden fees, administrative charges, or mandatory additional purchases. Your subscription covers full access to all programs and benefits. Any optional paid workshops or special programs will be clearly communicated in advance with member-only discounted rates."
  },
  {
    question: "How do I verify payment was received?",
    answer: "After payment through Paystack, you receive an instant email confirmation. Your member dashboard immediately updates to show your payment status, subscription expiry date, and access level. All payments are also logged in your Payment History section with transaction references, amounts, dates, and status. If you don't see confirmation within 5 minutes, check your spam folder or contact support with your payment reference number."
  },
  {
    question: "Can I pause my membership temporarily?",
    answer: "Currently, memberships cannot be paused — they're either active (paid) or inactive (unpaid). If you need a break, you can cancel and reactivate later. Your participation history, group assignment, and profile information are retained for 6 months after cancellation. When you reactivate by paying your subscription, you'll be reassigned to a group (may be the same or different depending on capacity and availability)."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We process all payments through Paystack, which accepts Nigerian debit/credit cards (Verve, Visa, Mastercard), bank transfers, and USSD codes. Payment is in Nigerian Naira only. International payments through dollar cards are also supported subject to Paystack's policies. All payment processing complies with CBN regulations and PCI-DSS security standards."
  },
  {
    question: "Do you offer refunds?",
    answer: "Subscription payments are generally non-refundable once access has been granted for that billing period. However, if there's a technical error that prevented you from accessing services you paid for, or if you were incorrectly charged, contact support within 7 days with your transaction details. Each case is reviewed individually. Refunds, if approved, are processed back to your original payment method within 7-14 business days."
  },
  {
    question: "How is my personal information protected?",
    answer: "We implement industry-standard security measures including encrypted data transmission (SSL/TLS), secure password hashing (bcrypt), and role-based access controls. Your payment information is processed through Paystack and never stored on our servers. We comply with Nigeria Data Protection Regulation (NDPR) requirements. Your personal information is used only for membership services and is never sold to third parties. See our Privacy Policy for complete details."
  },
  {
    question: "What happens if WeCooperate stops operating?",
    answer: "While we're committed to long-term sustainable operations, if for any reason the platform must cease operations, active members will be notified at least 30 days in advance. No new billing will occur after announcement. Members will retain access through their paid periods. As a subscription service (not an investment or savings platform), there are no accumulated funds to return — only prepaid subscription access that will be honored through your paid term."
  },
  {
    question: "Can I change my assigned group?",
    answer: "Group assignments are generally permanent to maintain group cohesion and coordination effectiveness. However, you can request a group change within 7 days of initial assignment if there's a valid reason (location incompatibility, significant concerns, etc.). After this period, changes are only approved in exceptional circumstances like leadership misconduct or harassment. Requests are submitted through your dashboard and reviewed by admin within 3-5 business days."
  }
]
