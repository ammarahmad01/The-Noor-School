"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export default function NewsEventsSection() {
  const news = [
    {
      title: "Kids Summer Camp 2025",
      description: "Our youngest learners (ages 3–5) will discover, create, and shine as they explore fun activities and playful experiments in our exciting science-themed showcase!",
      date: "July 11-26, 2025",
      time: "9:00 AM - 11:00 AM",
      type: "Camp",
    },
    {
      title: "Parent-Teacher Meeting",
      description: "Join us for a warm and joyful Parent-Teacher Meeting where we celebrate the growth, creativity, and little milestones of our curious learners.",
      date: "February 22, 2024",
      time: "9:00 AM - 1:00 PM",
      type: "Event",
    },
      {
      title: "Parenting Workshop",
      description: "A special session for parents, focused on nurturing young minds with love, patience, and playful learning at home and beyond!",
      date: "Fevruary 08, 2025",
      time: "12:00 PM- 01:00 PM",
      type: "Event",
    },
    {
      title: "Noorians Open House",
      description: "Step into the world of our students as they showcase their creativity, confidence, and curiosity through engaging activities, playful learning, and joyful discoveries!",
      date: "December 24, 2024",
      time: "8:00 AM - 2:00 PM",
      type: "Event",
    },
  ]

  return (
    <section id="news" className="py-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News & Events</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with the latest happenings and upcoming events at The Noor School
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <motion.span
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                          item.type === "Event"
                            ? "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                            : "bg-green-100 text-green-600 group-hover:bg-green-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.type}
                      </motion.span>
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{item.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Clock className="w-4 h-4" />
                        {item.time}
                      </motion.div>
                    </div>
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
