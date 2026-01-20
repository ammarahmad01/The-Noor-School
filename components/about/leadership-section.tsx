"use client"

import { motion } from "framer-motion"
import { Quote, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leadership Message
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vision and guidance from those steering Noor Educational System
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl" />

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Message */}
              <div className="mb-8 space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  "When we started Noor in 2001, we had one simple belief: every child deserves quality education grounded in values, regardless of their family's financial situation. Twenty-five years later, that belief has transformed into a comprehensive educational system serving thousands of families."
                </p>
                <p>
                  "What makes Noor unique is not just our longevity, but our consistency — in quality, affordability, and character-building. We've proven that values-driven education at accessible fees is not just possible, it's scalable."
                </p>
                <p>
                  "As we enter our Silver Jubilee year, our vision extends beyond Islamabad. We're building a model that can be replicated, franchised, and sustained — bringing the Noor standard of education to communities across Pakistan."
                </p>
                <p className="text-blue-900 font-semibold">
                  "This is not just our story. This is a movement. And we invite you to be part of it."
                </p>
              </div>

              {/* Leadership Profile */}
              <div className="flex items-center gap-6 pt-8 border-t border-gray-200">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden">
                  <Image
                    src="/rizwan2.jpg"
                    alt="Rizwan Ahmad, Founder & Director"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Rizwan Ahmad</h3>
                  <p className="text-gray-600">Founder & Director: Noor Educational System</p>
                  <div className="flex items-center gap-3 mt-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">rizwan.ahmad.rwp@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stability Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Proven Stability", description: "25 years of uninterrupted operations" },
              { title: "Community Trust", description: "Generation-spanning family relationships" },
              { title: "Sustainable Model", description: "Financially viable and replicable" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
