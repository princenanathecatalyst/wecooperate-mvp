import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Membership | WeCooperate',
  description: 'Join thousands of Nigerians building structured collaboration. ₦1,000/month subscription for access to all digital programs.',
}

export default function MembershipPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Become a Member
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                Join a structured digital network of ambitious Nigerians committed to collective prosperity through organized collaboration.
              </p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-400">₦1,000</div>
                  <div className="text-lg text-white/80">per month</div>
                </div>
              </div>
              <p className="text-sm text-white/70 mb-8">Monthly subscription - Cancel anytime</p>
              <Link href="/auth/register" className="inline-block bg-gold-500 hover:bg-gold-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 text-lg">
                Join WeCooperate Now
              </Link>
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                What's Included in Your Membership
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Full access to all seven pillars of structured collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 7 Pillars */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                The 7 Pillars of Collaboration
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Structured programs designed for collective economic advancement
              </p>
            </div>

            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-primary-900 mb-3">{pillar.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Opportunity */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Leadership Opportunities
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  Members with demonstrated commitment and engagement can apply for leadership positions and earn structured honorarium while guiding others.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="text-gold-400 font-semibold mb-1">Silver Leaders</div>
                    <div className="text-2xl font-bold">500 Positions</div>
                    <div className="text-sm text-white/70">Lead 200 members each</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="text-gold-400 font-semibold mb-1">Gold Leaders</div>
                    <div className="text-2xl font-bold">5 Positions</div>
                    <div className="text-sm text-white/70">Oversee 100 Silver Leaders</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="text-gold-400 font-semibold mb-1">Platinum Director</div>
                    <div className="text-2xl font-bold">1 Position</div>
                    <div className="text-sm text-white/70">Overall network coordination</div>
                  </div>
                </div>
                <Link href="/leadership" className="inline-block bg-gold-500 hover:bg-gold-600 text-primary-900 font-semibold px-6 py-3 rounded-lg transition-colors">
                  Learn About Leadership Structure
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
        <section className="py-16 bg-amber-50 border-t border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Important Membership Disclaimers</h3>
                <div className="space-y-3 text-amber-900/80">
                  <p className="leading-relaxed">
                    <strong>Not a Registered Cooperative Society:</strong> WeCooperate is a digital membership network promoted by Bizbridges Universal Limited. We are NOT a registered cooperative society, bank, microfinance institution, or financial services provider.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Subscription Model:</strong> Your ₦1,000 monthly payment is a subscription fee for access to digital programs, educational content, and networking opportunities. It is not an investment, savings deposit, or loan repayment.
                  </p>
                  <p className="leading-relaxed">
                    <strong>No Guaranteed Returns:</strong> Membership does not guarantee financial returns, profits, dividends, or any form of monetary gain. Benefits are educational, collaborative, and developmental in nature.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Voluntary Participation:</strong> All activities are voluntary. Members participate at their own discretion and assume full responsibility for their decisions.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Cancellation Policy:</strong> You may cancel your membership at any time. Cancellation prevents renewal but does not provide refunds for the current billing period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display font-bold text-primary-900 mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of Nigerians building collective prosperity through structured digital collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                Start Your Membership
              </Link>
              <Link href="/how-it-works" className="inline-block bg-gray-100 hover:bg-gray-200 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                Learn How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const benefits = [
  {
    title: "Cooperative Bulk Buying Access",
    description: "Participate in group purchasing initiatives for essential goods and services at reduced rates through collective bargaining power."
  },
  {
    title: "Digital Blogging Platform",
    description: "Access our blogging network to share knowledge, build your personal brand, and explore content monetization opportunities."
  },
  {
    title: "Investment Education Programs",
    description: "Structured financial literacy sessions covering investment principles, risk management, and wealth-building strategies."
  },
  {
    title: "Agricultural Partnerships",
    description: "Connect with agricultural initiatives, farm-gate pricing programs, and food security collaborations."
  },
  {
    title: "Real Estate Collaboration",
    description: "Join property acquisition groups, learn about real estate investment, and access collective land banking opportunities."
  },
  {
    title: "Fintech Literacy",
    description: "Master digital financial tools, payment systems, mobile banking, and emerging fintech solutions."
  },
  {
    title: "Training & Development",
    description: "Access workshops, webinars, skill development programs, and professional growth resources."
  },
  {
    title: "Leadership Eligibility",
    description: "Apply for leadership positions with structured honorarium opportunities based on performance and commitment."
  },
  {
    title: "Priority Event Access",
    description: "Exclusive invitations to member meetups, conferences, networking events, and leadership summits."
  }
]

const pillars = [
  {
    title: "Cooperative Bulk Buying",
    description: "Through collective coordination, members access essential goods and services at wholesale rates. The network negotiates with suppliers on behalf of groups, enabling members to reduce costs on items ranging from food staples to business supplies. This pillar demonstrates how structured collaboration creates immediate economic advantages through purchasing power aggregation."
  },
  {
    title: "Cooperative Social Blogging",
    description: "Members access a digital publishing platform designed to amplify Nigerian voices and perspectives. The blogging network provides tools for content creation, audience building, and potential monetization pathways. This pillar emphasizes knowledge sharing, personal branding, and creating digital income streams through coordinated content strategies."
  },
  {
    title: "Cooperative Investment Education",
    description: "Financial literacy is foundational to wealth creation. This pillar offers structured education on investment principles, asset classes, risk assessment, and portfolio diversification. Members learn to evaluate opportunities, understand market dynamics, and make informed financial decisions through workshops and expert-led sessions."
  },
  {
    title: "Cooperative Agriculture",
    description: "Agriculture remains Nigeria's economic backbone. This pillar connects urban members with agricultural value chains, providing access to farm-gate pricing, bulk food procurement, and agricultural investment opportunities. Members participate in farm sponsorship programs, direct producer relationships, and food security initiatives."
  },
  {
    title: "Cooperative Real Estate",
    description: "Property ownership through collaboration. Members explore land banking, property development groups, and real estate investment education. This pillar demystifies property acquisition by creating pathways for collective land purchases, mortgage optimization, and strategic property investment through structured group participation."
  },
  {
    title: "Cooperative Fintech Literacy",
    description: "As Nigeria advances digitally, understanding fintech becomes critical. This pillar provides training on digital payments, mobile banking, cryptocurrency awareness, and blockchain fundamentals. Members learn to navigate the digital financial ecosystem safely and leverage technology for financial management and opportunities."
  },
  {
    title: "Cooperative Training & Development",
    description: "Continuous learning drives progress. This pillar offers access to skill development workshops, professional certifications, entrepreneurship training, and leadership programs. Members benefit from curated content, expert speakers, and peer learning sessions designed to enhance employability and business capability."
  }
]
