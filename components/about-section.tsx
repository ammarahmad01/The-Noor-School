"use client"

import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                About The Noor School
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-lg mb-6"
              >
                Established with a vision to provide holistic education, The Noor School has been a beacon of learning
                excellence for over two decades. We believe in nurturing not just academic brilliance but also character
                development and moral values.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 text-lg mb-6"
              >
                Our mission is to create confident, compassionate, and capable individuals who will contribute
                positively to society. We combine traditional values with modern teaching methodologies to prepare our
                students for the challenges of tomorrow.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-4 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-white rounded-lg shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                    className="text-2xl font-bold text-blue-600"
                  >
                    300+
                  </motion.div>
                  <div className="text-gray-600">Students</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-white rounded-lg shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1, type: "spring" }}
                    className="text-2xl font-bold text-blue-600"
                  >
                    50+
                  </motion.div>
                  <div className="text-gray-600">Teachers</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-white rounded-lg shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                    className="text-2xl font-bold text-blue-600"
                  >
                    20+
                  </motion.div>
                  <div className="text-gray-600">Years</div>
                </motion.div>
              </motion.div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.3}>
            <div className="relative">
              <motion.div whileHover={{ scale: 1.02, rotate: 1 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/3.jpg?height=500&width=600"
                  alt="Students in classroom"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
              >
                Est. 2001
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
