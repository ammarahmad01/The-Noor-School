"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    const handleAdmissions = () => {
      const admissionsSection = document.getElementById("admissions")
      if (admissionsSection) {
        admissionsSection.scrollIntoView({ behavior: "smooth" })
      }
    }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <Image
            src="/2.jpg?height=800&width=1200"
            alt="Noor Educational System Campus"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-20">
        {/* Silver Jubilee Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <Award className="w-5 h-5 text-yellow-300" />
          <span className="text-sm font-semibold">25 Years of Excellence | 2001 - 2026</span>
        </motion.div>

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Noor Educational System
        </motion.h1>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-3xl mb-4 font-semibold text-blue-100"
        >
          Education with Values
        </motion.div>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-100"
        >
          A proven, scalable education model trusted by families for 25 years. From early childhood to college, trainings to teacher certifications — Noor is building Pakistan's education future.
        </motion.p>

        {/* Three CTA Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 shadow-2xl text-lg font-semibold"
              onClick={handleAdmissions}
            >
              Admissions 2026
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Link href="/franchise">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 bg-transparent shadow-2xl text-lg font-semibold"
              >
                Partner / Franchise with Us
              </Button>
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Link href="/investors">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 bg-transparent shadow-2xl text-lg font-semibold"
              >
                Investor Overview
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Credibility Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Award, label: "Est. 2001", value: "25 Years" },
            { icon: Users, label: "FBISE Affiliated", value: "Trusted" },
            { icon: TrendingUp, label: "Avg Fee", value: "PKR 3K" },
            { icon: Award, label: "Model", value: "Proven" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
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
