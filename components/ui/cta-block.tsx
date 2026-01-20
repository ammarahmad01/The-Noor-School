"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, LucideIcon } from "lucide-react"

interface CTABlockProps {
  title: string
  description: string
  primaryButton: {
    label: string
    onClick: () => void
  }
  secondaryButton?: {
    label: string
    onClick: () => void
  }
  icon?: LucideIcon
  gradient?: string
}

export function CTABlock({
  title,
  description,
  primaryButton,
  secondaryButton,
  icon: Icon,
  gradient = "from-blue-600 to-blue-800"
}: CTABlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} rounded-3xl p-8 md:p-12 shadow-2xl`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-white">
            {Icon && (
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg md:text-xl text-white/90">{description}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={primaryButton.onClick}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl"
              >
                {primaryButton.label}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            {secondaryButton && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={secondaryButton.onClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold bg-transparent"
                >
                  {secondaryButton.label}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
