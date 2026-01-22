"use client"

import { motion } from "framer-motion"
import { Heart, Users, MessageCircle, Calendar, BookOpen, Home } from "lucide-react"

export default function ParentPartnershipSection() {
  const partnershipAspects = [
    {
      icon: MessageCircle,
      title: "Open Communication",
      description: "Regular updates, parent-teacher conferences, and transparent communication about your child's progress and development.",
    },
    {
      icon: Calendar,
      title: "Parent Workshops",
      description: "Monthly workshops on child development, positive discipline, early learning at home, and supporting your child's emotional needs.",
    },
    {
      icon: BookOpen,
      title: "Learning at Home",
      description: "Practical guidance and activity suggestions to extend classroom learning into your home environment naturally.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connecting families with similar-aged children, creating a supportive community of parents navigating early childhood together.",
    },
    {
      icon: Home,
      title: "Family Engagement",
      description: "Family events, observation opportunities, and chances to see firsthand how your child learns and grows at Noor.",
    },
    {
      icon: Heart,
      title: "Values Alignment",
      description: "Partnership in raising children with strong character, Islamic values, and positive life skills that begin at home.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Parents as Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Noor, we believe parents are a child's first and most important teachers. Our ECE program is built on genuine partnership between home and school.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {partnershipAspects.map((aspect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-pink-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <aspect.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{aspect.title}</h3>
              <p className="text-gray-600 leading-relaxed">{aspect.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Parent Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-center">A Message to Parents</h3>
            <div className="space-y-4 text-lg leading-relaxed text-blue-50">
              <p>
                Your child's early years are precious, and we don't take the responsibility of nurturing them lightly. At Noor ECE, you're not just enrolling your child in a program — you're joining a community that values your role as a parent.
              </p>
              <p>
                We see parents as partners, not clients. Your insights about your child matter. Your questions are welcome. Your involvement is encouraged. Together, we create the best possible environment for your child to flourish.
              </p>
              <p>
                <strong>Our Promise:</strong> We will communicate openly, respect your family's values and circumstances, support you with guidance and resources, and celebrate your child's growth alongside you — every step of the way.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-center text-blue-200 italic text-lg">
                "It takes a village to raise a child — and at Noor, we're honored to be part of your village."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
