"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Send } from "lucide-react"

export default function FranchiseFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log("Franchise inquiry:", formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Express Your Interest
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring Noor Educational System to your community? Fill out the form below and we'll get in touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h3>
              <p className="text-gray-700 text-lg">
                We've received your franchise inquiry. Our team will review your information and contact you within 2-3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-900 font-semibold mb-2 block">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-gray-900 font-semibold mb-2 block">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 font-semibold mb-2 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="city" className="text-gray-900 font-semibold mb-2 block">Preferred City/Location *</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="City where you'd like to establish a campus"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-900 font-semibold mb-2 block">
                    Tell Us About Your Interest
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Background, experience, why you're interested in partnering with Noor..."
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-semibold shadow-xl"
                  >
                    Submit Inquiry
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by Noor Educational System regarding franchise opportunities.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
