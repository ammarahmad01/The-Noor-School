"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Award, BookOpen, Users, Target } from "lucide-react"

export default function PAFECAlignmentSection() {
  const alignmentAreas = [
    {
      title: "Developmental Domains",
      items: [
        "Physical & Motor Development",
        "Cognitive & Language Development",
        "Social & Emotional Development",
        "Creative & Aesthetic Development",
      ],
    },
    {
      title: "Learning Through Play",
      items: [
        "Free play and structured activities",
        "Indoor and outdoor exploration",
        "Hands-on learning experiences",
        "Child-initiated discovery",
      ],
    },
    {
      title: "Holistic Assessment",
      items: [
        "Observation-based progress tracking",
        "Portfolio documentation",
        "Parent-teacher collaboration",
        "Developmental milestones monitoring",
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
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">PAFEC Aligned</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aligned with PAFEC Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our ECE program follows the Pakistan Association for Early Childhood Education (PAFEC) framework, ensuring quality and research-informed practices.
          </p>
        </motion.div>

        {/* What is PAFEC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">About PAFEC</h3>
              <p className="text-gray-700 leading-relaxed">
                The Pakistan Association for Early Childhood Education (PAFEC) is the leading professional body advocating for quality early childhood education in Pakistan. PAFEC standards are based on international best practices and local context, ensuring developmentally appropriate education for young children.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Alignment Areas */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {alignmentAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <ul className="space-y-3">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Why PAFEC Alignment Matters</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Quality Assurance",
                description: "Adherence to recognized standards ensures consistent, high-quality early education.",
              },
              {
                icon: Users,
                title: "Trained Educators",
                description: "Our ECE teachers are trained in PAFEC methodologies and child development principles.",
              },
              {
                icon: Award,
                title: "Research-Backed",
                description: "Curriculum based on developmental psychology and international best practices.",
              },
              {
                icon: BookOpen,
                title: "Parent Confidence",
                description: "Recognized framework gives parents assurance in their child's early education quality.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
