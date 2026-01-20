"use client"

import { motion } from "framer-motion"
import { Baby, Sparkles, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ECEHeroSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-pink-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 bg-pink-100 border border-pink-300 rounded-full px-6 py-3 mb-6"
              >
                <Sparkles className="w-5 h-5 text-pink-600" />
                <span className="text-pink-700 font-semibold">Noor's Flagship Program</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Early Childhood Education
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Our research-informed ECE program is the core intellectual property of Noor Educational System. Built on play-based learning and aligned with PAFEC standards.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                We believe the foundation years (ages 3-5) are critical. Our ECE program nurtures curiosity, creativity, and character — preparing young minds for lifelong learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/#admissions">
                    <Button size="lg" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-6 text-lg shadow-lg">
                      Enroll Your Child
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg">
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Visual Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Baby, label: "Age Group", value: "3-5 years" },
                    { icon: Award, label: "PAFEC", value: "Aligned" },
                    { icon: Heart, label: "Approach", value: "Play-Based" },
                    { icon: Sparkles, label: "Focus", value: "Holistic" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-2xl text-center border border-pink-100"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl border-l-4 border-pink-500"
                >
                  <p className="text-gray-700 italic">
                    "The first five years have so much to do with how the next 80 turn out."
                  </p>
                  <p className="text-sm text-gray-600 mt-2 font-semibold">— Bill Gates</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
