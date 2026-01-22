"use client"

import { motion } from "framer-motion"
import { Sprout, Users, Target, Heart, Scale, TrendingUp } from "lucide-react"

export default function GrowthPhilosophySection() {
  const principles = [
    {
      icon: Sprout,
      title: "Organic Growth",
      description: "We prioritize sustainable, community-rooted expansion over aggressive scaling. Quality before quantity, impact before reach.",
    },
    {
      icon: Users,
      title: "Partner Success = Our Success",
      description: "Your success is our success. We provide continuous support, guidance, and resources to ensure every partner thrives.",
    },
    {
      icon: Target,
      title: "Mission-Driven Alignment",
      description: "We partner with those who share our values and commitment to education excellence. Financial sustainability with social purpose.",
    },
    {
      icon: Heart,
      title: "Community Integration",
      description: "Each Noor campus should be deeply integrated with its community — not a corporate franchise but a local institution with global standards.",
    },
    {
      icon: Scale,
      title: "Balanced Economics",
      description: "Affordable fees for families, sustainable margins for partners, fair compensation for teachers — a balanced model that works for everyone.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Partnership",
      description: "We're building generational institutions, not short-term ventures. Patient growth, enduring relationships, lasting impact.",
    },
  ]

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
            Our Growth Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we approach expansion, partnerships, and building sustainable education institutions across communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <principle.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 border border-blue-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Core Commitment</h3>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              <strong>Not Franchising for Profit Maximization:</strong> While franchise partnerships help us expand, our primary goal is impact — providing quality, values-driven education to more communities.
            </p>
            <p>
              <strong>Protecting Brand Integrity:</strong> Every Noor campus must uphold our standards of quality, values integration, and operational excellence. We protect the brand by ensuring consistency across all locations.
            </p>
            <p>
              <strong>Building an Ecosystem:</strong> We're not just creating individual schools — we're building an interconnected education ecosystem where best practices are shared, teachers are continuously trained, and families experience consistent quality.
            </p>
            <p>
              <strong>Empowering Local Leadership:</strong> We believe in empowering local partners to lead their campuses while benefiting from centralized curriculum, training, and operational systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
