"use client"

import { motion } from "framer-motion"
import { InstitutionCard } from "@/components/ui/institution-card"
import { GraduationCap, Baby, Users, BookOpen, Building2 } from "lucide-react"

export default function FocusAreasSection() {
  const focusAreas = [
    {
      title: "The Noor School",
      description: "FBISE-affiliated school offering quality education from KG to Grade 10 with strong Islamic values.",
      icon: GraduationCap,
      href: "/programs#school",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      stats: [
        { label: "Students", value: "300+" },
        { label: "Years", value: "25" },
      ],
    },
    {
      title: "Early Childhood Program",
      description: "Our flagship ECE program aligned with PAFEC standards, emphasizing play-based, research-informed learning.",
      icon: Baby,
      href: "/ece",
      gradient: "bg-gradient-to-br from-pink-500 to-pink-600",
      stats: [
        { label: "Age Group", value: "3-5 yrs" },
        { label: "PAFEC", value: "Aligned" },
      ],
    },
    {
      title: "Noor College for Women",
      description: "Empowering women through higher education with a focus on character, competence, and career readiness.",
      icon: Users,
      href: "/programs#college",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      stats: [
        { label: "Programs", value: "Multiple" },
        { label: "Focus", value: "Women" },
      ],
    },
    {
      title: "Noor Trainings & Certifications",
      description: "Professional development programs for educators and community members, building capacity for excellence.",
      icon: BookOpen,
      href: "/programs#trainings",
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
      stats: [
        { label: "Type", value: "CPD" },
        { label: "Target", value: "Educators" },
      ],
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
            Our Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Noor Educational System operates across multiple educational verticals, creating a comprehensive ecosystem from early childhood to higher education and professional development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <InstitutionCard {...area} />
            </motion.div>
          ))}
        </div>

        {/* Future Expansion Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Future campuses and programs coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
