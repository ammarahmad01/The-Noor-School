"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Users, Palette, BookOpen, Smile } from "lucide-react"

export default function ECEPhilosophySection() {
  const principles = [
    {
      icon: Brain,
      title: "Cognitive Development",
      description: "Age-appropriate activities that stimulate thinking, problem-solving, and early literacy/numeracy skills.",
    },
    {
      icon: Heart,
      title: "Social-Emotional Learning",
      description: "Building empathy, self-regulation, and positive relationships through guided interactions and Islamic values.",
    },
    {
      icon: Smile,
      title: "Play-Based Learning",
      description: "Learning through play — the natural way children explore, discover, and make sense of their world.",
    },
    {
      icon: Palette,
      title: "Creative Expression",
      description: "Art, music, storytelling, and imaginative play that nurture creativity and self-expression.",
    },
    {
      icon: Users,
      title: "Social Skills",
      description: "Collaboration, communication, and respect for others developed through group activities and peer interaction.",
    },
    {
      icon: BookOpen,
      title: "Values Integration",
      description: "Islamic teachings woven naturally into daily activities, stories, and moral lessons.",
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
            Our ECE Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research-backed, values-driven early childhood education that respects how young children learn best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <principle.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why ECE Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-pink-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Early Childhood Education Matters</h3>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              <strong>Brain Development:</strong> 90% of a child's brain development happens before age 5. Quality ECE lays neural pathways for all future learning.
            </p>
            <p>
              <strong>School Readiness:</strong> Children with quality ECE experience are better prepared for formal schooling — academically, socially, and emotionally.
            </p>
            <p>
              <strong>Long-Term Success:</strong> Research shows ECE has lasting impacts on academic achievement, career success, and even adult health outcomes.
            </p>
            <p>
              <strong>Values Formation:</strong> Early years are when character, empathy, and moral foundations are most receptive to positive influence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
