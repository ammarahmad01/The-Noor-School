"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Medal, Award, Target, TrendingUp } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      category: "Academic Excellence",
      icon: Trophy,
      items: [
        "95%+ students achieve A/A+ grades in FBISE examinations",
        "100% pass rate maintained for past 10 years",
        "Multiple students in district top performers list",
        "Strong foundation leading to success in higher education",
      ],
    },
    {
      category: "Community Recognition",
      icon: Star,
      items: [
        "25 years of continuous operations and growth",
        "Trusted by 1000+ families across generations",
        "High parent satisfaction and referral rates",
        "Active alumni network contributing to society",
      ],
    },
    {
      category: "Professional Affiliations",
      icon: Medal,
      items: [
        "FBISE (Federal Board) affiliated institution",
        "PAFEC (Pakistan Association for Early Childhood Education) member",
        "Regular participation in educational forums and conferences",
        "Recognition from local education authorities",
      ],
    },
  ]

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "25" },
    { icon: Target, label: "Pass Rate", value: "100%", suffix: "" },
    { icon: TrendingUp, label: "A/A+ Grades", value: "95%", suffix: "" },
    { icon: Star, label: "Parent Satisfaction", value: "High" },
  ]

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
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and results that demonstrate our commitment to excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center border border-blue-200 shadow-md"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {stat.value}{stat.suffix || ""}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Categories */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">{achievement.category}</h3>

              <ul className="space-y-3">
                {achievement.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <div className="text-6xl mb-4">"</div>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Excellence is not an accident. It's the result of consistent effort, clear values, and unwavering commitment to every child's success.
          </p>
          <p className="text-blue-100 font-semibold">— Noor Educational System</p>
        </motion.div>
      </div>
    </section>
  )
}
