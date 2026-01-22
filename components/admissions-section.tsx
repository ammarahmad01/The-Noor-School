"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calendar, Users, CheckCircle, Download } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export default function AdmissionsSection() {
  const handleDownloadForm = () => {
    const link = document.createElement("a")
    link.href = "/The_Noor_School_Admission_Form.pdf"
    link.download = "The_Noor_School_Admission_Form.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
    <section id="admissions" className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-bold text-lg mb-4 shadow-lg"
            >
              🎓 Admissions Open – Session 2026
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Begin Your Child's Journey with Noor</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join a trusted education community with 25 years of excellence. Balanced curriculum, values-driven approach, and ECE-focused foundation for lifelong success.
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
            className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-10 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Begin?
            </motion.h3>
            <motion.p
              className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Take the first step toward quality, values-driven education. Book a campus visit, speak with our admissions team, or apply online today.
            </motion.p>
            <motion.div 
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={handleDownloadForm}
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Application Form
              </motion.button>
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/30 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📅 Book a Campus Visit
              </motion.button>
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 Speak to Admissions
              </motion.button>
            </motion.div>
            <motion.p
              className="text-blue-200 text-sm mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Limited seats available for Session 2026 – apply early to secure your child's place.
            </motion.p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
