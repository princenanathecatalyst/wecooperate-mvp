import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Users, 
  ShoppingCart, 
  BookOpen, 
  TrendingUp, 
  Home, 
  Smartphone, 
  GraduationCap,
  CheckCircle,
  ArrowRight 
} from 'lucide-react'

export default function HomePage() {
  const pillars = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Cooperative Bulk Buying',
      description: 'Members coordinate to purchase essential goods and services in bulk, accessing wholesale prices and significant discounts through collective bargaining power.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Cooperative Social Blogging',
      description: 'Structured content creation and monetization platform where members share knowledge, build audiences, and generate income through coordinated digital content strategies.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cooperative Investment Education',
      description: 'Comprehensive financial literacy programs teaching members about investment vehicles, wealth building strategies, and sustainable personal finance management.',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Cooperative Real Estate',
      description: 'Collaborative property investment opportunities where members pool resources and knowledge to access real estate markets previously out of individual reach.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cooperative Agriculture',
      description: 'Agricultural partnerships connecting urban professionals with rural farmers, creating sustainable food supply chains and investment opportunities in agriculture.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Cooperative Fintech Literacy',
      description: 'Digital financial technology education helping members navigate online banking, digital payments, cryptocurrencies, and emerging financial technologies.',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Cooperative Training & Development',
      description: 'Professional skill development programs providing members access to courses, certifications, mentorship, and career advancement opportunities.',
    },
  ]

  const benefits = [
    'Access to all 7 digital collaboration pillars',
    'Eligibility for leadership roles',
    'Priority participation in bulk buying programs',
    'Investment education group membership',
    'Agricultural coordination opportunities',
    'Digital content monetization support',
    'Priority event access and networking',
    'Structured community support system',
  ]

  const leadershipLevels = [
    {
      title: 'General Member',
      description: 'Full access to all WeCooperate programs and benefits',
      color: 'bg-gray-100',
    },
    {
      title: 'Silver Leader',
      description: 'Coordinates 200 members, receives structured honorarium',
      color: 'bg-gray-300',
    },
    {
      title: 'Gold Leader',
      description: 'Oversees 100 Silver Leaders, enhanced compensation',
      color: 'bg-accent-400',
    },
    {
      title: 'Platinum Director',
      description: 'Ultimate network leadership and coordination',
      color: 'bg-purple-500',
    },
  ]

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Building Collective Prosperity for Nigerians — Digitally
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-50 leading-relaxed">
                WeCooperate is a premium digital membership network connecting Nigerian professionals, 
                entrepreneurs, and communities for structured collaboration and shared growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="btn-secondary text-center">
                  Become a Member
                </Link>
                <Link 
                  href="/how-it-works" 
                  className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors text-center"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What Is WeCooperate */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="section-title">What Is WeCooperate?</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  WeCooperate is a structured digital network designed to help Nigerians collaborate 
                  for collective economic advantage. Through organized leadership, subscription-based 
                  membership, and technology-driven coordination, members access structured programs 
                  that promote bulk purchasing coordination, financial literacy, real estate 
                  collaboration, agricultural partnerships, digital monetization, and professional development.
                </p>
                <p className="font-semibold text-primary-600">
                  We provide the framework. Members create the progress.
                </p>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-amber-900">Important Notice:</strong> WeCooperate is a digital 
                membership network promoted by Bizbridges Universal Limited. WeCooperate is NOT a 
                registered cooperative society, bank, microfinance institution, or investment company. 
                Membership does not guarantee financial returns. All participation is voluntary.
              </p>
            </div>
          </div>
        </section>

        {/* 7 Pillars */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Our 7 Pillars of Collaboration</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Comprehensive programs designed to create structured economic opportunities 
                for all members
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <div className="text-primary-500 mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Structure */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Structured Leadership</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Organized hierarchy ensures accountability, coordination, and sustainable growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipLevels.map((level, index) => (
                <div key={index} className="text-center">
                  <div className={`${level.color} h-32 rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="text-white text-4xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                  <p className="text-gray-600 text-sm">{level.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/leadership" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold">
                Learn More About Leadership Structure
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-16 md:py-24 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Membership Benefits</h2>
                <p className="text-lg text-gray-700 mb-8">
                  For just ₦1,000 per month, gain access to a comprehensive network of 
                  opportunities designed for Nigerian professionals and entrepreneurs.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/membership" className="btn-primary">
                    View Full Membership Details
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary-500 mb-2">₦1,000</div>
                  <div className="text-gray-600">per month</div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Subscription Type</span>
                    <span className="font-semibold">Monthly</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Access Level</span>
                    <span className="font-semibold">Full Platform</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Cancellation</span>
                    <span className="font-semibold">Anytime</span>
                  </div>
                </div>
                <Link href="/register" className="btn-primary w-full text-center block">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Thousands of Nigerians Building Structured Collaboration
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Start your journey toward collective prosperity today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-secondary">
                Become a Member
              </Link>
              <Link 
                href="/how-it-works"
                className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
