"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calendar, Users, CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export default function AdmissionsSection() {
  const steps = [
    {
      icon: FileText,
      title: "Application Form",
      description: "Download and complete the admission form with required documents.",
    },
    {
      icon: Calendar,
      title: "Visit our Campus",
      description: "Have a campus tour and meet with our admissions counselor.",
    },
    {
      icon: Users,
      title: "Assessment",
      description: "Student assessment and parent interview process.",
    },
    {
      icon: CheckCircle,
      title: "Enrollment",
      description: "Complete enrollment process and join our school family.",
    },
  ]

  return (
    <section id="admissions" className="py-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admissions Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our school community through a simple and transparent admission process
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 group bg-white border-0 shadow-md">
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors"
                    >
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                    >
                      {index + 1}
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <motion.div
            className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Begin Your Journey?
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Download our admission form and take the first step towards quality education
            </motion.p>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Admission Form
              </Button>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
