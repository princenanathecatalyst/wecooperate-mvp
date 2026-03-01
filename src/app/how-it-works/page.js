import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { UserPlus, CreditCard, Users, Activity, Award, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'How It Works | WeCooperate',
  description: 'Step-by-step guide to joining and participating in the WeCooperate Digital Membership Network.',
}

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                How WeCooperate Works
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                A simple, structured process to join Nigeria's premier digital membership network
              </p>
            </div>
          </div>
        </section>

        {/* Steps Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                Join in 5 Simple Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From registration to active participation in minutes
              </p>
            </div>

            <div className="grid gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl font-display font-bold text-gold-500">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="font-semibold text-primary-900 mb-2">What Happens Next:</div>
                      <p className="text-gray-700">{step.nextStep}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Journey Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                Your Membership Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                What to expect as you grow within the network
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {journeyStages.map((stage, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-primary-600 mb-4">{stage.icon}</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{stage.title}</h3>
                  <p className="text-gray-700 mb-4">{stage.description}</p>
                  <ul className="space-y-2">
                    {stage.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Group Assignment System */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                Structured Group Assignment
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every member is assigned to a structured group for coordinated activities
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">How Group Assignment Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 font-bold text-primary-900">1</div>
                      <div>
                        <div className="font-semibold">Automatic Assignment</div>
                        <div className="text-white/80 text-sm">Upon subscription confirmation, you're assigned to a Silver Leader group</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 font-bold text-primary-900">2</div>
                      <div>
                        <div className="font-semibold">Group Capacity</div>
                        <div className="text-white/80 text-sm">Each Silver Leader manages up to 200 members for effective coordination</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 font-bold text-primary-900">3</div>
                      <div>
                        <div className="font-semibold">Coordinated Activities</div>
                        <div className="text-white/80 text-sm">Your group participates in bulk buying, events, and collaborative programs</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 font-bold text-primary-900">4</div>
                      <div>
                        <div className="font-semibold">Leadership Support</div>
                        <div className="text-white/80 text-sm">Your Silver Leader provides guidance and facilitates group initiatives</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-gold-400 font-semibold mb-2">Network Structure</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">100,000</div>
                      <div className="text-sm text-white/70">Total Members</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">500</div>
                      <div className="text-sm text-white/70">Silver Leaders</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">5</div>
                      <div className="text-sm text-white/70">Gold Leaders</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">1</div>
                      <div className="text-sm text-white/70">Platinum Director</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment & Subscription */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                Subscription Details
              </h2>
              <p className="text-xl text-gray-600">
                Simple, transparent pricing with no hidden fees
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">Payment Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">Monthly Subscription</span>
                      <span className="text-2xl font-bold text-primary-900">₦1,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">Billing Cycle</span>
                      <span className="font-semibold text-primary-900">Monthly</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">Payment Method</span>
                      <span className="font-semibold text-primary-900">Card/Bank Transfer</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-700">Setup Fee</span>
                      <span className="font-semibold text-green-600">₦0 (Free)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-primary-900 mb-4">What You Get</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Access to all 7 collaboration pillars</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Group assignment and coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Leadership eligibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Priority event access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Digital blogging platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Cancel anytime, no penalties</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display font-bold text-primary-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of Nigerians building structured collaboration today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                Create Your Account
              </Link>
              <Link href="/membership" className="inline-block bg-gray-100 hover:bg-gray-200 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                View Membership Benefits
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const steps = [
  {
    icon: UserPlus,
    title: "Register Your Account",
    description: "Complete our simple registration form with your basic information. Provide your full name, email address, phone number, and create a secure password. Your information is encrypted and protected according to industry standards.",
    nextStep: "You'll receive a verification email instantly. Click the verification link to activate your account. If you don't see the email, check your spam folder or request a new verification link."
  },
  {
    icon: CreditCard,
    title: "Pay Your Subscription",
    description: "After verification, log in to your dashboard and initiate your first monthly subscription payment of ₦1,000. Payment is processed securely through Paystack, Nigeria's leading payment gateway. You can pay via debit card, bank transfer, or USSD.",
    nextStep: "Payment is verified in real-time. Once confirmed, your subscription becomes active immediately, and you gain full access to all membership benefits and programs."
  },
  {
    icon: Users,
    title: "Get Assigned to a Group",
    description: "Our automated system assigns you to a Silver Leader group within 24 hours of payment confirmation. Group assignment considers factors like location, interests, and group capacity to ensure optimal coordination and participation.",
    nextStep: "Your Silver Leader will send you a welcome message with group details, communication channels, and upcoming activities. You'll also be added to your group's coordination platform."
  },
  {
    icon: Activity,
    title: "Participate in Activities",
    description: "Begin engaging with the seven pillars of collaboration. Access bulk buying programs, join educational webinars, participate in blogging initiatives, explore investment groups, connect with agricultural partnerships, and attend skill development workshops.",
    nextStep: "Track your participation through your dashboard. Active members receive priority notifications for special programs, leadership opportunities, and exclusive events."
  },
  {
    icon: Award,
    title: "Access Benefits & Grow",
    description: "As an active member, you continuously access new opportunities. Participate in bulk purchasing rounds, learn through structured educational content, network with other members, and build your profile. Demonstrated commitment and engagement make you eligible for leadership positions.",
    nextStep: "Members showing exceptional engagement can apply for Silver Leadership positions after 3 months of consistent participation. Leadership roles come with structured honorarium and increased coordination responsibilities."
  }
]

const journeyStages = [
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Month 1-3: Foundation",
    description: "Establish your presence in the network",
    milestones: [
      "Complete profile setup",
      "Attend orientation webinar",
      "First bulk purchase participation",
      "Join interest-based sub-groups",
      "Complete financial literacy module"
    ]
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Month 4-6: Engagement",
    description: "Deepen your network participation",
    milestones: [
      "Active in multiple pillars",
      "Contribute to blogging platform",
      "Attend member meetups",
      "Eligible for leadership application",
      "Mentoring newer members"
    ]
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Month 7+: Leadership Track",
    description: "Transition into leadership opportunities",
    milestones: [
      "Apply for Silver Leadership",
      "Lead group initiatives",
      "Coordinate bulk buying rounds",
      "Facilitate training sessions",
      "Earn structured honorarium"
    ]
  }
]
