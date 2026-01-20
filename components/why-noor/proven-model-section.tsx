"use client"

import { motion } from "framer-motion"
import { Calendar, DollarSign, Users, TrendingUp, Shield, Heart } from "lucide-react"
import { StatsGrid } from "@/components/ui/stats-grid"

export default function ProvenModelSection() {
  const proofPoints = [
    {
      icon: Calendar,
      title: "25 Years of Continuity",
      description: "Uninterrupted operations since 2001. We've weathered economic cycles, policy changes, and market shifts — proving resilience and sustainability.",
      data: ["Founded: 2001", "Still growing: 2026", "Zero closure periods"],
    },
    {
      icon: DollarSign,
      title: "Affordable Fee Model",
      description: "Average PKR 3,000/month fees make quality education accessible while ensuring financial sustainability. Proven demand at this price point for 25 years.",
      data: ["Affordable pricing", "High affordability", "Sustainable margins"],
    },
    {
      icon: Users,
      title: "Strong Community Trust",
      description: "Generations of families have chosen Noor. Word-of-mouth referrals are our strongest marketing channel — evidence of satisfied customers and community goodwill.",
      data: ["1000+ families served", "Multi-generation enrollment", "High referral rates"],
    },
    {
      icon: TrendingUp,
      title: "Consistent Demand",
      description: "Every admission cycle sees applications exceed capacity. Strong junior admissions pipeline from our ECE program creates predictable enrollment.",
      data: ["Oversubscribed classes", "Waitlists common", "Growing demand"],
    },
    {
      icon: Shield,
      title: "FBISE Affiliation",
      description: "Official affiliation with Federal Board ensures recognized qualifications, standardized curriculum, and regulatory compliance — reducing institutional risk.",
      data: ["FBISE affiliated", "Compliant operations", "Recognized credentials"],
    },
    {
      icon: Heart,
      title: "Values-Driven Differentiation",
      description: "Islamic values integration is not an add-on — it's core to our identity. This differentiates Noor in a crowded market and resonates with families.",
      data: ["Clear differentiation", "Market positioning", "Cultural fit"],
    },
  ]

  const stats = [
    { icon: Calendar, label: "Years of Proven Operations", value: "25" },
    { icon: Users, label: "Families Served", value: "1000+", suffix: "" },
    { icon: TrendingUp, label: "Student Retention", value: "High" },
    { icon: Shield, label: "Regulatory Compliance", value: "100%", suffix: "" },
  ]

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
            The Proven Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not a startup. Not an experiment. Noor is a battle-tested education model with 25 years of data backing its success.
          </p>
        </motion.div>

        <div className="mb-16">
          <StatsGrid stats={stats} columns={4} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <point.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{point.description}</p>
              
              <div className="space-y-2">
                {point.data.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
