"use client"

import { motion } from "framer-motion"
import { Baby, GraduationCap, Building2, Globe, Shield, DollarSign, TrendingUp, Heart } from "lucide-react"
import { CTABlock } from "@/components/ui/cta-block"

export default function GrowthAreasSection() {
  const growthAreas = [
    {
      icon: Baby,
      title: "ECE Expansion",
      description: "Early Childhood Education is our core IP and flagship offering. Massive market demand, proven model, franchise-ready.",
      investment: "High Priority",
    },
    {
      icon: GraduationCap,
      title: "New School Campuses",
      description: "Replicate The Noor School model in new cities. Strong brand recognition and proven academic results.",
      investment: "Medium Priority",
    },
    {
      icon: Building2,
      title: "Noor College Growth",
      description: "Expand women's higher education programs. Growing demand for values-driven higher ed options.",
      investment: "Medium Priority",
    },
    {
      icon: Globe,
      title: "Digital Platform",
      description: "Online learning resources, teacher training modules, and digital content monetization.",
      investment: "Future Phase",
    },
  ]

  const investmentHighlights = [
    {
      icon: Shield,
      title: "Low-Risk Profile",
      description: "25-year track record, proven model, and strong community trust minimize execution risk.",
    },
    {
      icon: DollarSign,
      title: "Sustainable Economics",
      description: "Affordable fees with viable margins. Not dependent on subsidies or philanthropy.",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Franchise model allows rapid expansion with manageable capital requirements.",
    },
    {
      icon: Heart,
      title: "Impact + Returns",
      description: "Combining social impact (quality education access) with financial sustainability.",
    },
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Growth Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic priorities for expansion and investment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {growthAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {area.investment}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Investment Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Invest in Noor?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Governance Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Governance & Sustainability</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Noor Educational System operates with strong governance principles, financial transparency, and long-term sustainability focus. We're building an institution, not chasing short-term profits.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Investment discussions are welcome from partners aligned with our values and committed to education sector impact. We're seeking patient capital for sustainable growth, not speculative returns.
          </p>
        </motion.div>

        {/* CTA */}
        <CTABlock
          title="Interested in Investment Opportunities?"
          description="Contact us to discuss how you can be part of transforming Pakistan's education landscape."
          primaryButton={{
            label: "Contact Us",
            onClick: handleContactClick,
          }}
          gradient="from-blue-600 to-blue-700"
        />
      </div>
    </section>
  )
}
