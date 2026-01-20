"use client"

import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"

export default function TimelineSection() {
  const milestones = [
    {
      year: "2001",
      title: "Foundation of Noor College for Women",
      description: "Founded Noor College for Women to deliver values-driven higher education, welcoming the inaugural cohort in Rawalpindi.",
    },
    {
      year: "2005",
      title: "FBISE Affiliation Achieved",
      description: "Secured Federal Board affiliation, giving students recognized credentials and a standardized academic framework.",
    },
    {
      year: "2010",
      title: "The Noor School Established",
      description: "Opened The Noor School (KG–Grade 10), unifying ECE, primary, and secondary under one campus and preparing the first matric cohorts.",
    },
    {
      year: "2015",
      title: "Early Childhood Program Launched",
      description: "Launched our PAFEC-aligned, play-based Early Childhood program — now the flagship entry pathway for Noor families.",
    },
    {
      year: "2018",
      title: "Community Trainings Initiated",
      description: "Started Noor Trainings & Certifications to upskill teachers, administrators, and community educators beyond our campuses.",
    },
    {
      year: "2021",
      title: "1st FBISE Batch Graduated",
      description: "First FBISE matric batch graduated with outstanding results; Sanawar Sultan scored 1071/1100, reinforcing academic credibility.",
    },
    {
      year: "2026",
      title: "Silver Jubilee - 25 Years Strong",
      description: "Silver Jubilee year celebrating 25 years, 1000+ families served, and a blueprint for nationwide expansion via franchises and new campuses.",
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our 25-Year Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to a comprehensive educational system — every milestone represents our commitment to excellence and values.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Timeline items={milestones} />
        </div>
      </div>
    </section>
  )
}
