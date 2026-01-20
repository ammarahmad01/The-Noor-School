"use client"

import { motion } from "framer-motion"
import { Target, Eye, TrendingUp, Calendar } from "lucide-react"

export default function VisionSection() {
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
            Vision 2026-2030
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear roadmap for sustainable growth and nationwide impact.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">The Grand Vision</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  By 2030, Noor Educational System will operate <strong>10+ campuses</strong> across major Pakistani cities, serving <strong>5,000+ students</strong> through a combination of company-owned institutions and franchise partnerships.
                </p>
                <p>
                  We'll establish Noor as Pakistan's leading values-driven education brand, known for quality, affordability, and impact — proving that education can be both excellent and accessible.
                </p>
                <p>
                  Our vertically integrated model (ECE → School → College → Trainings) will create sustainable institutions that serve families across their entire educational journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Milestones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { year: "2026", milestone: "Silver Jubilee & Launch", description: "Celebrate 25 years. Launch franchise program." },
            { year: "2027", milestone: "First Franchise Campuses", description: "3-5 franchise partners operational in new cities." },
            { year: "2028", milestone: "Digital Expansion", description: "Launch online learning platform and digital content." },
            { year: "2030", milestone: "10+ Campuses Nationwide", description: "Established presence in major Pakistani cities." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.milestone}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
