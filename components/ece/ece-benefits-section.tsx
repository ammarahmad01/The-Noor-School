"use client"

import { motion } from "framer-motion"
import { Rocket, Heart, Star, Users, Book, Smile } from "lucide-react"
import { CTABlock } from "@/components/ui/cta-block"

export default function ECEBenefitsSection() {
  const benefits = [
    {
      icon: Rocket,
      title: "School Readiness",
      description: "Strong foundation for smooth transition to formal schooling with confidence and enthusiasm.",
    },
    {
      icon: Heart,
      title: "Character Building",
      description: "Early development of empathy, kindness, honesty, and respect rooted in Islamic values.",
    },
    {
      icon: Star,
      title: "Cognitive Skills",
      description: "Enhanced problem-solving, critical thinking, and early literacy/numeracy development.",
    },
    {
      icon: Users,
      title: "Social Competence",
      description: "Learning to share, cooperate, communicate effectively, and build positive relationships.",
    },
    {
      icon: Book,
      title: "Love of Learning",
      description: "Fostering curiosity, wonder, and intrinsic motivation that lasts a lifetime.",
    },
    {
      icon: Smile,
      title: "Emotional Intelligence",
      description: "Understanding and managing emotions, building resilience and self-confidence.",
    },
  ]

  const handleEnrollClick = () => {
    const admissionsSection = document.getElementById("admissions")
    if (admissionsSection) {
      admissionsSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#admissions"
    }
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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
            Benefits of Noor ECE Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What your child gains from our research-informed, values-driven early childhood education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-pink-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Parent Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <div className="text-6xl text-pink-300 mb-4">"</div>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              My daughter joined Noor's ECE program nervous and shy. Within months, I saw her confidence bloom. She now loves learning, shares beautifully with others, and comes home excited to tell us what she discovered that day. The teachers truly understand child development.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <p className="font-semibold">Ayesha K.</p>
                <p className="text-blue-200 text-sm">Parent, ECE Program 2025</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <CTABlock
          title="Give Your Child the Best Start"
          description="Enroll in Noor's ECE program and lay a strong foundation for lifelong learning and character."
          primaryButton={{
            label: "Enroll Now",
            onClick: handleEnrollClick,
          }}
          secondaryButton={{
            label: "Schedule a Visit",
            onClick: handleContactClick,
          }}
          icon={Rocket}
          gradient="from-pink-600 to-pink-700"
        />
      </div>
    </section>
  )
}
