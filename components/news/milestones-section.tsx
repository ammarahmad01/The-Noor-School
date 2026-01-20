"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Trophy, Users, Sparkles, Heart } from "lucide-react"

export default function MilestonesSection() {
  const milestones = [
    {
      icon: Award,
      year: "2026",
      title: "Silver Jubilee Celebration",
      description: "Celebrating 25 years of educational excellence with community events, alumni gatherings, and special recognition ceremonies throughout the year.",
      image: "🎉",
    },
    {
      icon: Users,
      year: "2025",
      title: "Noorians Expo Success",
      description: "Annual student exhibition showcasing projects, presentations, and achievements across all grades. Over 500 attendees including parents, community members, and education professionals.",
      image: "🎨",
    },
    {
      icon: Trophy,
      year: "2025",
      title: "Outstanding Board Results",
      description: "95% of Grade 10 students achieved A and A+ grades in FBISE examinations, continuing Noor's tradition of academic excellence.",
      image: "📚",
    },
    {
      icon: Sparkles,
      year: "2024",
      title: "PAFEC Membership",
      description: "Noor Early Childhood Program achieves membership in Pakistan Association for Early Childhood Education, validating our research-informed ECE approach.",
      image: "🌟",
    },
    {
      icon: Heart,
      title: "Community Service Initiative",
      description: "Students and staff participated in community service projects including book drives, food distribution, and environmental cleanup campaigns.",
      image: "🤝",
    },
    {
      icon: Calendar,
      title: "New Campus Expansion Plans",
      description: "Announced plans for expansion into new cities through franchise partnerships, bringing the Noor model to more communities across Pakistan.",
      image: "🏫",
    },
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
            Recent Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlights from our journey of excellence and community impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <milestone.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl">{milestone.image}</span>
                </div>

                {milestone.year && (
                  <div className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {milestone.year}
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
