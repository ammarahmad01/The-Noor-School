"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"

export default function MissionVisionSection() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide accessible, high-quality education rooted in Islamic values, fostering intellectual growth, moral character, and community responsibility across all levels of learning.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become Pakistan's leading educational system, recognized for excellence, integrity, and innovation — creating learners who are confident, compassionate, and capable of positive change.",
      gradient: "from-blue-500 to-blue-600",
    },
  ]

  const values = [
    { icon: Heart, title: "Values-Driven", description: "Islamic principles guide every decision" },
    { icon: Lightbulb, title: "Innovation", description: "Modern methods with traditional wisdom" },
    { icon: Target, title: "Excellence", description: "High standards in all we do" },
    { icon: Eye, title: "Accessibility", description: "Quality education for all families" },
  ]

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-lg leading-relaxed text-white/90">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
