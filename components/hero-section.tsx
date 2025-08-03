"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <Image
            src="/2.jpg?height=800&width=1200"
            alt="School campus"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-blue-900/50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Welcome to The Noor School
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Nurturing young minds with quality education and strong values for a brighter tomorrow
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg">
              Apply Now
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent shadow-lg"
            >
              Explore Academics
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-20 w-3 h-3 bg-white/25 rounded-full"
      />
    </section>
  )
}
