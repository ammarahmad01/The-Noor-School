"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-blue-600/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/10 rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <FadeIn direction="left">
            <div>
              <motion.h3
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Contact Information
              </motion.h3>
              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <motion.div
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                      <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                    </motion.div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-300">Anwar Street, Main Tench Bhatta Road, Rawalpindi Cantt, Pakistan</p>
                    </div>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                      <Phone className="w-5 h-5 text-blue-400" />
                    </motion.div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-300">051-5525914</p>
                    </div>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                      <Mail className="w-5 h-5 text-blue-400" />
                    </motion.div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">contact.thenoorschool@gmail.com</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>

              {/* Social Media */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <a
                      href="https://www.facebook.com/NoorEducationalSystem"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 bg-transparent transition-all duration-300"
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <a
                      href="https://www.instagram.com/nooreducationalsystem_?igsh=Z3RyeXc3NTNkZmtp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 bg-transparent transition-all duration-300"
                      >
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <a
                      href="https://youtube.com/yourchannel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 bg-transparent transition-all duration-300"
                      >
                        {/* YouTube icon is not imported from Lucide, so use a placeholder or import from another icon set if needed */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M21.8 8.001a2.752 2.752 0 0 0-1.938-1.948C18.077 6 12 6 12 6s-6.077 0-7.862.053A2.752 2.752 0 0 0 2.2 8.001 28.934 28.934 0 0 0 2 12a28.934 28.934 0 0 0 .2 3.999 2.752 2.752 0 0 0 1.938 1.948C5.923 18 12 18 12 18s6.077 0 7.862-.053A2.752 2.752 0 0 0 21.8 15.999 28.934 28.934 0 0 0 22 12a28.934 28.934 0 0 0-.2-3.999zM10 15V9l6 3-6 3z" />
                        </svg>
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <StaggerContainer className="grid md:grid-cols-2 gap-4">
                    <StaggerItem>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Input
                          placeholder="Your Name"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 transition-colors"
                        />
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 transition-colors"
                        />
                      </motion.div>
                    </StaggerItem>
                  </StaggerContainer>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Input
                      placeholder="Subject"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 transition-colors resize-none"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Google Map Placeholder */}
        <FadeIn delay={0.6}>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Find Us</h3>
            <motion.div
              className="bg-gray-800 rounded-lg p-8 text-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              </motion.div>
              <div className="w-full h-96 rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1046.9625742320645!2d73.03181797585059!3d33.581976130197965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df93844fc7d701%3A0xf83a4c1b3e422d5a!2sAnwar%20St%2C%20Rawalpindi%2C%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1752229664014!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 mt-2">Anwar Street, Main Tench Bhatta Road, Rawalpindi Cantt, Pakistan</p>
            </motion.div>
          </div>
        </FadeIn>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} The Noor School. All rights reserved. | Education with Values
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
