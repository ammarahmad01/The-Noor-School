"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface InstitutionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  stats?: { label: string; value: string }[]
  gradient: string
}

export function InstitutionCard({ title, description, icon: Icon, href, stats, gradient }: InstitutionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href}>
        <Card className="h-full border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-4 shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl mb-2">{title}</CardTitle>
            <CardDescription className="text-base">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mb-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
