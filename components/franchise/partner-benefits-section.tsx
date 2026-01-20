"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Award, Package, Headphones, TrendingUp, Shield, Heart } from "lucide-react"

export default function PartnerBenefitsSection() {
  const benefits = [
    {
      icon: Award,
      title: "Established Brand",
      description: "Leverage 25 years of trust, reputation, and community goodwill. Start with a recognized name, not from scratch.",
    },
    {
      icon: BookOpen,
      title: "Complete Curriculum",
      description: "Receive our proven, values-integrated curriculum for ECE, primary, and secondary levels — ready to implement.",
    },
    {
      icon: Users,
      title: "Teacher Training",
      description: "Comprehensive teacher training programs to ensure quality delivery. Access to Noor's training and certification programs.",
    },
    {
      icon: Package,
      title: "Operational SOPs",
      description: "Detailed standard operating procedures for admissions, academics, finance, HR, and day-to-day management.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Continuous support from Noor's team — troubleshooting, guidance, quality assurance, and best practice sharing.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Assets",
      description: "Brand guidelines, marketing materials, website templates, and social media content to attract families.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Regular quality checks and adherence to Noor standards ensure consistency and protect brand reputation.",
    },
    {
      icon: Heart,
      title: "Values Alignment",
      description: "Join a mission-driven organization committed to education with values — not just profit maximization.",
    },
  ]

  const whoShouldPartner = [
    "Educators passionate about values-driven education",
    "Entrepreneurs seeking impact + income opportunity",
    "Existing school owners wanting brand upgrade",
    "Community leaders committed to local education improvement",
    "Philanthropists wanting sustainable social enterprise model",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Partners Receive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support to launch and operate a successful Noor campus in your community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Who Should Partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Who Should Partner with Noor?</h3>
          <p className="text-lg text-gray-700 mb-6 text-center">
            We're looking for partners who share our values and are committed to educational excellence.
          </p>
          <ul className="space-y-3">
            {whoShouldPartner.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
