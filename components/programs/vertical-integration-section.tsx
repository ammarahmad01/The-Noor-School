"use client"

import { motion } from "framer-motion"
import { ArrowRight, Baby, GraduationCap, Users, BookOpen, TrendingUp } from "lucide-react"

export default function VerticalIntegrationSection() {
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
            Vertical Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each institution strengthens the others — creating a comprehensive educational pathway that serves families at every stage.
          </p>
        </motion.div>

        {/* Integration Flow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { icon: Baby, label: "ECE Program", age: "3-5 yrs" },
              { icon: GraduationCap, label: "The Noor School", age: "KG-10" },
              { icon: Users, label: "Noor College", age: "Higher Ed" },
              { icon: BookOpen, label: "Trainings", age: "Lifelong" },
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-xl hover:scale-105 transition-transform duration-300">
                  <stage.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold">{stage.label}</div>
                  <div className="text-sm text-blue-100">{stage.age}</div>
                </div>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-blue-600 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits of Integration */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Family Continuity",
              description: "Families stay with Noor from toddler years through higher education — building trust and long-term relationships.",
            },
            {
              title: "Pipeline Efficiency",
              description: "ECE graduates naturally progress to Noor School, creating a strong admissions pipeline and reducing marketing costs.",
            },
            {
              title: "Quality Consistency",
              description: "Shared values, methodologies, and standards across all levels ensure consistent quality and smooth transitions.",
            },
            {
              title: "Community Building",
              description: "Multi-generational families become part of the Noor community, strengthening reputation and word-of-mouth.",
            },
            {
              title: "Teacher Development",
              description: "Trainings vertical upskills our own staff and generates revenue by serving external educators.",
            },
            {
              title: "Scalability",
              description: "Vertically integrated model is easier to replicate, franchise, and scale across new locations.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
