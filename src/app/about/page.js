import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Target, Eye, Heart, Shield, Users, Award } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Structure',
      description: 'We believe in organized, systematic approaches to collective progress with clear roles and accountability.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Transparency and honesty guide every interaction and transaction within our network.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Together we achieve more through coordinated effort and shared resources.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Professional Excellence',
      description: 'We maintain high standards in all our programs and member interactions.',
    },
  ]

  return (
    <>
      <Header />
      
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About WeCooperate</h1>
            <p className="text-xl text-primary-50 max-w-3xl">
              Building Africa's most structured digital membership collaboration network
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card">
                <div className="text-primary-500 mb-4">
                  <Target size={48} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To build Africa's most structured digital membership collaboration network, 
                  empowering Nigerians to achieve collective economic advancement through 
                  organized, technology-driven coordination and transparent leadership.
                </p>
              </div>

              <div className="card">
                <div className="text-accent-500 mb-4">
                  <Eye size={48} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower Nigerians to achieve collective economic advancement through 
                  organized digital collaboration, creating sustainable pathways to prosperity 
                  for millions across Nigeria and the diaspora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                Principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Are */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">What We Are</h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                WeCooperate is a digital membership network designed for structured collaboration 
                among Nigerian professionals, entrepreneurs, students, civil servants, farmers, 
                market traders, and diaspora Nigerians.
              </p>
              
              <p>
                Through our platform, members access seven comprehensive collaboration pillars: 
                Bulk Buying, Social Blogging, Investment Education, Agriculture, Real Estate, 
                Fintech Literacy, and Professional Training & Development.
              </p>

              <p>
                Our leadership structure ensures accountability and organization. Members can 
                progress from General Membership to Silver Leadership (coordinating 200 members), 
                Gold Leadership (overseeing 100 Silver Leaders), and potentially to Platinum 
                Director level.
              </p>

              <p>
                We are promoted and operated under Bizbridges Universal Limited, maintaining 
                professional standards and legal compliance in all operations.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="py-16 md:py-24 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Legal Positioning</h2>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-bold text-lg mb-2">WeCooperate IS:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>A digital membership network</li>
                    <li>A subscription-based online community</li>
                    <li>Promoted by Bizbridges Universal Limited</li>
                    <li>A platform for structured collaboration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">WeCooperate IS NOT:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>A registered cooperative society</li>
                    <li>A bank or financial institution</li>
                    <li>A microfinance institution</li>
                    <li>An investment company</li>
                    <li>A regulated fund manager</li>
                  </ul>
                </div>

                <p className="text-sm pt-4 border-t">
                  <strong>Important:</strong> All financial activities are framed as subscription 
                  payments for digital services. Participation is voluntary. WeCooperate does not 
                  guarantee financial returns. Members are responsible for their own investment 
                  decisions made through knowledge gained from our educational programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Who We Serve</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {[
                'Students',
                'NYSC Members',
                'Civil Servants',
                'Office Workers',
                'SME Owners',
                'Market Women',
                'Tech Professionals',
                'Farmers',
                'Diaspora Nigerians',
                'Entrepreneurs',
                'Teachers',
                'Healthcare Workers'
              ].map((audience, index) => (
                <div key={index} className="card">
                  <div className="text-primary-500 mb-2">
                    <Users size={32} className="mx-auto" />
                  </div>
                  <p className="font-semibold">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
