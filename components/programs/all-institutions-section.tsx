"use client"

import { motion } from "framer-motion"
import { GraduationCap, Baby, Users, BookOpen, Building2, Trophy, Calendar, MapPin } from "lucide-react"

export default function AllInstitutionsSection() {
  const institutions = [
    {
      id: "school",
      icon: GraduationCap,
      name: "The Noor School",
      tagline: "Where It All Began",
      description: "FBISE-affiliated institution offering quality education from KG to Grade 10 since 2001. Strong Islamic values combined with modern teaching methodologies.",
      stats: [
        { label: "Students", value: "300+" },
        { label: "Grades", value: "KG - 10" },
        { label: "Established", value: "2001" },
      ],
      features: [
        "FBISE affiliation for recognized qualifications",
        "Experienced, qualified teaching staff",
        "Balanced curriculum: academics + character",
        "Affordable fee structure (avg PKR 3,000/month)",
        "Focus on Islamic values and moral development",
        "Strong academic results and alumni success",
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "college",
      icon: Users,
      name: "Noor College for Women",
      tagline: "Empowering Women Through Education",
      description: "Higher education institution focused on women's empowerment, combining academic excellence with life skills, values, and career readiness.",
      stats: [
        { label: "Focus", value: "Women" },
        { label: "Programs", value: "Multiple" },
        { label: "Status", value: "Growing" },
      ],
      features: [
        "Dedicated women-only learning environment",
        "Higher education with Islamic values",
        "Career-focused programs and skill development",
        "Leadership and personal development emphasis",
        "Community service and social responsibility",
        "Safe, supportive learning atmosphere",
      ],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: "ece",
      icon: Baby,
      name: "Early Childhood Program",
      tagline: "Our Flagship ECE Model",
      description: "Research-informed, play-based early childhood education aligned with PAFEC standards. The core intellectual property of Noor Educational System.",
      stats: [
        { label: "Age Group", value: "3-5 yrs" },
        { label: "PAFEC", value: "Aligned" },
        { label: "Approach", value: "Play-Based" },
      ],
      features: [
        "PAFEC-aligned curriculum and practices",
        "Play-based, research-informed methodology",
        "Holistic development: cognitive, social, emotional",
        "Qualified ECE-trained educators",
        "Parent partnership and involvement",
        "Strong foundation for lifelong learning",
      ],
      gradient: "from-pink-500 to-pink-600",
      highlighted: true,
    },
    {
      id: "trainings",
      icon: BookOpen,
      name: "Noor Trainings & Certifications",
      tagline: "Building Capacity, Extending Impact",
      description: "Professional development programs for educators and community members. Sharing Noor's expertise to raise education standards beyond our own classrooms.",
      stats: [
        { label: "Target", value: "Educators" },
        { label: "Type", value: "CPD" },
        { label: "Impact", value: "Community" },
      ],
      features: [
        "Teacher training and capacity building",
        "ECE methodologies and best practices",
        "Values-driven education workshops",
        "Certification programs for educators",
        "Community skill development initiatives",
        "Knowledge sharing and mentorship",
      ],
      gradient: "from-green-500 to-green-600",
    },
  ]

  return (
    <section id="institutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four distinct verticals working together to create a complete educational ecosystem.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {institutions.map((institution, index) => (
            <motion.div
              key={institution.id}
              id={institution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                institution.highlighted ? 'border-4 border-pink-300' : 'border border-gray-100'
              }`}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left: Header & Stats */}
                <div className={`bg-gradient-to-br ${institution.gradient} text-white p-8 lg:p-10`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <institution.icon className="w-8 h-8" />
                  </div>
                  
                  {institution.highlighted && (
                    <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      FLAGSHIP PROGRAM
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-bold mb-2">{institution.name}</h3>
                  <p className="text-lg mb-6 opacity-90">{institution.tagline}</p>
                  
                  <div className="space-y-3">
                    {institution.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white/10 rounded-lg px-4 py-2">
                        <span className="text-sm opacity-90">{stat.label}</span>
                        <span className="font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Description & Features */}
                <div className="lg:col-span-2 p-8 lg:p-10">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {institution.description}
                  </p>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {institution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {institution.id === "school" && (
                    <div className="mt-6">
                      <a
                        href="#noor-school-gallery"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow hover:shadow-lg transition-all duration-200 text-sm font-semibold"
                      >
                        View The Noor School Gallery
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Expansion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">More campuses and programs coming soon across Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
