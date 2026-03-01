import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Users, Award, TrendingUp, Shield } from 'lucide-react'

export const metadata = {
  title: 'Leadership Structure | WeCooperate',
  description: 'Learn about the four-tier leadership structure organizing 100,000 members for effective collaboration',
}

export default function LeadershipPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Leadership Structure
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Four tiers of organized leadership ensuring accountability, structure, and effective coordination across 100,000 members
              </p>
            </div>
          </div>
        </section>

        {/* Structure Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                Hierarchical Coordination Model
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven structure that ensures every member receives attention while maintaining network-wide coordination
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roles.map((role, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${role.bgColor}`}>
                      <role.icon className={`w-8 h-8 ${role.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{role.title}</h3>
                    <div className="text-3xl font-bold text-gold-600 mb-1">{role.count}</div>
                    <div className="text-sm text-gray-600">{role.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Role Breakdown */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* General Members */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-white">
                  <div className="flex items-center gap-4">
                    <Users className="w-12 h-12" />
                    <div>
                      <h3 className="text-3xl font-display font-bold">General Members</h3>
                      <p className="text-white/90">The Foundation of the Network</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">100,000</div>
                      <div className="text-sm text-gray-600">Total Capacity</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">₦1,000</div>
                      <div className="text-sm text-gray-600">Monthly Subscription</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">7 Pillars</div>
                      <div className="text-sm text-gray-600">Full Access</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>Role:</strong> General members form the core of the WeCooperate network. They participate in all seven pillars of collaboration, engage in bulk purchasing programs, access educational content, and build their professional network within their assigned groups.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Responsibilities:</strong> Active participation in group activities, timely subscription payments, respectful engagement with fellow members, adherence to community guidelines, and contributing to collaborative initiatives.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Benefits:</strong> Full access to all programs, group coordination support, educational resources, bulk buying opportunities, blogging platform, investment education, agricultural partnerships, real estate collaboration, fintech training, and professional development workshops.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Path to Leadership:</strong> After 3 months of consistent active participation, members become eligible to apply for Silver Leadership positions. Applications are evaluated based on engagement metrics, group contributions, and demonstrated leadership potential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Silver Leaders */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-8 text-white">
                  <div className="flex items-center gap-4">
                    <Award className="w-12 h-12" />
                    <div>
                      <h3 className="text-3xl font-display font-bold">Silver Leaders</h3>
                      <p className="text-white/90">Group Coordinators & Facilitators</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">500</div>
                      <div className="text-sm text-gray-600">Available Positions</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">200</div>
                      <div className="text-sm text-gray-600">Members per Group</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">Performance</div>
                      <div className="text-sm text-gray-600">Based Honorarium</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>Role:</strong> Silver Leaders coordinate groups of up to 200 general members. They facilitate group activities, organize bulk purchasing rounds, broadcast important announcements, monitor member engagement, and serve as the primary point of contact for their group members.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Responsibilities:</strong> Weekly group communication, monthly activity planning, coordination of bulk purchases, engagement tracking, member support and guidance, conflict resolution, reporting to Gold Leader, and ensuring value delivery to group members.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Compensation:</strong> Structured honorarium based on group performance metrics including member retention rate (target: 85%+), engagement scores, activity participation, and satisfaction ratings. Honorarium ranges from ₦20,000 to ₦80,000 monthly depending on performance tier achieved.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Requirements:</strong> Minimum 3 months as active general member, completion of leadership training program, demonstrated commitment to network values, strong communication skills, time availability of 10-15 hours weekly for coordination duties.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Support Provided:</strong> Comprehensive leadership training, coordination tools and templates, Gold Leader mentorship, monthly leadership webinars, and access to leadership community for peer learning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gold Leaders */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gold-400 to-gold-600 p-8 text-primary-900">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="w-12 h-12" />
                    <div>
                      <h3 className="text-3xl font-display font-bold">Gold Leaders</h3>
                      <p className="text-primary-800">Regional Coordinators</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">5</div>
                      <div className="text-sm text-gray-600">Elite Positions</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">100</div>
                      <div className="text-sm text-gray-600">Silver Leaders per Gold</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary-900">20,000</div>
                      <div className="text-sm text-gray-600">Members Overseen</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>Role:</strong> Gold Leaders oversee 100 Silver Leaders each (representing 20,000 total members). They provide strategic guidance, monitor Silver Leader performance, coordinate large-scale initiatives, analyze network metrics, and ensure consistent value delivery across their region.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Responsibilities:</strong> Weekly Silver Leader meetings, monthly performance reviews, strategic planning for regional initiatives, quality assurance across groups, escalation handling, collaboration with Platinum Director on network-wide programs, and mentoring Silver Leaders for excellence.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Compensation:</strong> Substantial structured honorarium based on regional metrics including overall retention rates, aggregate engagement scores, initiative success rates, and Silver Leader development. Compensation ranges from ₦150,000 to ₦400,000 monthly depending on regional performance.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Requirements:</strong> Minimum 6 months proven excellence as Silver Leader, demonstrated strategic thinking capability, strong analytical skills, proven mentorship ability, time availability of 20-30 hours weekly. Candidates undergo rigorous selection including performance reviews and leadership assessments.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Strategic Impact:</strong> Gold Leaders shape regional strategies, pilot new programs, identify emerging trends, optimize group dynamics at scale, and serve as key advisors to the Platinum Director on network evolution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Platinum Director */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-primary-500">
                <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-gold-600 p-8 text-white">
                  <div className="flex items-center gap-4">
                    <Shield className="w-12 h-12" />
                    <div>
                      <h3 className="text-3xl font-display font-bold">Platinum Director</h3>
                      <p className="text-white/90">Network-Wide Coordination</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-gold-50 rounded-lg border border-gold-200">
                      <div className="text-3xl font-bold text-primary-900">1</div>
                      <div className="text-sm text-gray-600">Apex Position</div>
                    </div>
                    <div className="text-center p-4 bg-gold-50 rounded-lg border border-gold-200">
                      <div className="text-3xl font-bold text-primary-900">100,000</div>
                      <div className="text-sm text-gray-600">Total Network</div>
                    </div>
                    <div className="text-center p-4 bg-gold-50 rounded-lg border border-gold-200">
                      <div className="text-3xl font-bold text-primary-900">Strategic</div>
                      <div className="text-sm text-gray-600">Leadership Level</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>Role:</strong> The Platinum Director provides overall strategic direction and operational oversight for the entire WeCooperate network. This individual ensures mission alignment, maintains quality standards, drives innovation, represents the network publicly, and coordinates with Bizbridges Universal Limited leadership.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Responsibilities:</strong> Setting network-wide strategy, oversight of all 5 Gold Leaders, approval of major initiatives, quality and compliance assurance, stakeholder management, partnership development, financial oversight, brand stewardship, crisis management, and continuous improvement of the membership experience.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Compensation:</strong> Executive-level compensation commensurate with responsibility for 100,000-member network. Structured package includes base honorarium plus performance incentives tied to network growth, member satisfaction, retention metrics, and strategic milestone achievement.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Requirements:</strong> Proven executive leadership experience, demonstrated success in large-scale organization management, strategic vision, exceptional communication skills, deep understanding of Nigerian market dynamics, full-time commitment, and alignment with WeCooperate's mission and values.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Appointment:</strong> The Platinum Director is appointed by Bizbridges Universal Limited based on exceptional performance as Gold Leader and comprehensive leadership assessment. This is not an open application position but rather an invitation-based executive appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                Why Pursue Leadership?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leadership positions offer meaningful impact and structured compensation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-primary-600 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">
                How to Apply for Leadership
              </h2>
              <p className="text-xl text-gray-600">
                A merit-based pathway to leadership positions
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <Link href="/auth/register" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                  Start Your Leadership Journey
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const roles = [
  {
    title: "General Members",
    count: "100,000",
    subtitle: "Network Foundation",
    icon: Users,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Silver Leaders",
    count: "500",
    subtitle: "Group Coordinators",
    icon: Award,
    bgColor: "bg-gray-100",
    iconColor: "text-gray-600"
  },
  {
    title: "Gold Leaders",
    count: "5",
    subtitle: "Regional Oversight",
    icon: TrendingUp,
    bgColor: "bg-gold-100",
    iconColor: "text-gold-600"
  },
  {
    title: "Platinum Director",
    count: "1",
    subtitle: "Network Coordination",
    icon: Shield,
    bgColor: "bg-primary-100",
    iconColor: "text-primary-600"
  }
]

const leadershipBenefits = [
  {
    icon: <Users className="w-10 h-10" />,
    title: "Meaningful Impact",
    description: "Directly influence the success and growth of hundreds or thousands of members while building lasting relationships and community."
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Structured Honorarium",
    description: "Earn performance-based compensation that rewards effective leadership, member value creation, and consistent excellence."
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Professional Development",
    description: "Develop leadership, management, and coordination skills applicable across any industry or career path."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Recognition & Status",
    description: "Gain recognition as a trusted leader within the network and broader Nigerian professional community."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Expanded Network",
    description: "Build relationships with fellow leaders, create partnerships, and expand your professional connections exponentially."
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Career Advancement",
    description: "Leadership experience and demonstrated results open doors to higher roles within WeCooperate and beyond."
  }
]

const applicationSteps = [
  {
    title: "Meet Eligibility Requirements",
    description: "Complete 3 months of consistent active participation as a general member with good standing (no violations, regular engagement, positive group contributions)."
  },
  {
    title: "Submit Leadership Application",
    description: "Access the leadership application form in your member dashboard. Provide detailed responses about your motivation, relevant experience, and leadership vision."
  },
  {
    title: "Performance Review",
    description: "Admin reviews your participation metrics, engagement history, group leader feedback, and overall contribution to the network over your membership period."
  },
  {
    title: "Leadership Assessment",
    description: "Shortlisted candidates complete a leadership assessment covering communication skills, problem-solving, group dynamics, and alignment with network values."
  },
  {
    title: "Interview Process",
    description: "Final candidates participate in a structured interview with Gold Leader and/or Platinum Director to assess fit and readiness for leadership responsibility."
  },
  {
    title: "Decision & Onboarding",
    description: "Successful applicants receive formal offer, complete leadership training program, and transition into their leadership role with full support and mentorship."
  }
]
