"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Users, BookOpen, GraduationCap } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export default function AcademicsSection() {
  const academics = [
    {
      title: "Preschool",
      description:
        "Ages 3-5: Foundation learning through play-based activities and early childhood development.",
      icon: Baby,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Primary",
      description: "Grades 1-3: Building fundamental skills in literacy, numeracy, and critical thinking.",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Middle School",
      description: "Grades 4-7: Comprehensive curriculum focusing on academic excellence and character building.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Secondary",
      description: "Grades 9-10: Advanced studies preparing students for higher education and future careers.",
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <section id="academics" className="py-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive education programs designed to nurture students at every stage of their academic journey
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academics.map((program, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white">
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
                      className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <program.icon className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{program.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
