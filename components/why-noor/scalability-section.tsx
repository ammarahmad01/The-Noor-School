"use client"

import { motion } from "framer-motion"
import { Rocket, Copy, Map, TrendingUp, Package, Users } from "lucide-react"
import { CTABlock } from "@/components/ui/cta-block"
import Link from "next/link"

export default function ScalabilitySection() {
  const scalabilityFactors = [
    {
      icon: Copy,
      title: "Replicable Model",
      description: "Clear systems, documented processes, and proven curriculum make Noor easy to replicate in new locations.",
    },
    {
      icon: Package,
      title: "Franchise-Ready",
      description: "Turn-key franchise package including brand guidelines, curriculum materials, teacher training, and operational SOPs.",
    },
    {
      icon: Map,
      title: "Market Demand",
      description: "Pakistan's education sector is massively underserved. Affordable, quality, values-driven schools are in high demand nationwide.",
    },
    {
      icon: TrendingUp,
      title: "Strong Unit Economics",
      description: "Each institution is financially viable. Affordable fees with sustainable margins — not dependent on subsidies or donations.",
    },
    {
      icon: Users,
      title: "Pipeline Effect",
      description: "ECE-to-School-to-College pipeline creates predictable enrollment and reduces customer acquisition costs.",
    },
    {
      icon: Rocket,
      title: "Low Capital Entry",
      description: "Modest facility requirements keep startup costs manageable, enabling faster expansion and franchise adoption.",
    },
  ]

  const handleFranchiseClick = () => {
    window.location.href = "/franchise"
  }

  const handleInvestorClick = () => {
    window.location.href = "/investors"
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
            Built to Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Noor is not just a successful school — it's a replicable system ready for nationwide expansion through franchising and partnerships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {scalabilityFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <factor.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h3>
              <p className="text-gray-600 leading-relaxed">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 border border-blue-200 mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Vision: Noor Nationwide</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            By 2030, we envision Noor Educational System operating in multiple cities across Pakistan, serving tens of thousands of families through company-owned campuses and franchise partnerships.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're not building a chain of schools. We're building a movement — a scalable, values-driven education system that proves quality and affordability can coexist.
          </p>
        </motion.div>

        {/* CTA */}
        <CTABlock
          title="Join the Noor Movement"
          description="Whether as a franchise partner, investor, or supporter — be part of transforming Pakistan's education landscape."
          primaryButton={{
            label: "Explore Franchise",
            onClick: handleFranchiseClick,
          }}
          secondaryButton={{
            label: "Investor Overview",
            onClick: handleInvestorClick,
          }}
          icon={Rocket}
          gradient="from-blue-600 to-blue-700"
        />
      </div>
    </section>
  )
}
