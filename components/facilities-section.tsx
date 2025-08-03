"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Microscope, Monitor, Trophy, Coffee } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Library",
      description: "Well-stocked library with over 10,000 books, digital resources, and quiet study areas.",
      icon: BookOpen,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Science Lab",
      description: "Modern laboratories equipped with latest instruments for physics, chemistry, and biology.",
      icon: Microscope,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "IT Lab",
      description: "Computer lab with high-speed internet and latest software for digital literacy.",
      icon: Monitor,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sports Ground",
      description: "Multi-purpose sports facilities including basketball, football, and athletics track.",
      icon: Trophy,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cafeteria",
      description: "Hygienic cafeteria serving nutritious meals and snacks throughout the day.",
      icon: Coffee,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              State-of-the-art facilities designed to enhance learning and provide a comfortable environment for
              students
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white border-0 shadow-md">
                  <motion.div
                    className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                      }}
                    >
                      <facility.icon className="w-16 h-16 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {facility.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{facility.description}</CardDescription>
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
