"use client"

import { motion } from "framer-motion"
import { Play, Youtube, Instagram, Facebook } from "lucide-react"
import { useState } from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

interface Video {
  type: "local" | "youtube"
  src: string
  title: string
  description?: string
  thumbnail?: string
}

export default function VideoHighlightsSection() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const videos: Video[] = [
    /*{
      type: "local",
      src: "/videos/noorexpo.mp4",
      title: "Noorians Expo 2025 Highlights",
      description: "Experience the creativity and talent of our students at the annual Noorians Expo 2025.",
      thumbnail: "/expo.jpg", // Fallback thumbnail
    },*/
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/LUyn_T2bG-Y?si=iqCRFg541Nvyzfms",
      title: "Admissions Open 2026 - Join the Noor Family",
      description: "Discover why families trust Noor Educational System. Admissions are now open for Session 2026.",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/QfGHuQfZeUo?si=gVCJz7NUO-ogStO_",
      title: "Annual Sports Day Highlights",
      description: "Celebrating sportsmanship, teamwork, and athletic excellence at our Annual Sports Day.",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/Nl_PxnKLv3g?si=I2YPni4vGP-BYCLm",
      title: "Science Exhibition Highlights",
      description: "Young scientists showcase their innovative projects and experiments.",
    },
  ]

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-6 py-3 rounded-full font-semibold text-sm mb-6"
            >
              <Play className="w-4 h-4" />
              Video Gallery
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Video Highlights</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experience the vibrant moments, achievements, and memories that define life at Noor Educational System.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <StaggerItem key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
              >
                {/* Video Container */}
                <div className="relative w-full aspect-video bg-gray-900 group flex-shrink-0">
                  {video.type === "local" ? (
                    playingVideo === video.src ? (
                      <video
                        src={video.src}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setPlayingVideo(null)}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${video.thumbnail || "/2.jpg"})`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                        </div>
                        <button
                          onClick={() => setPlayingVideo(video.src)}
                          className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors">
                            <Play className="w-10 h-10 text-white ml-1" />
                          </div>
                        </button>
                      </>
                    )
                  ) : (
                    <iframe
                      src={video.src.includes("?") ? `${video.src}&rel=0&modestbranding=1` : `${video.src}?rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  )}
                  
                  {/* Video Type Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      {video.type === "youtube" ? (
                        <>
                          <Youtube className="w-4 h-4 text-red-600" />
                          <span className="text-xs font-semibold text-gray-700">YouTube</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-semibold text-gray-700">Video</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg mb-4">
            Follow us on social media for more updates and highlights
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="https://www.facebook.com/NoorEducationalSystem" // Replace with actual social links
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </motion.a>
            <motion.a
              href="https://youtube.com/@netmedia9897?si=7QlcenCKyZ0Ju6ln" // Replace with actual social links
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </motion.a>
            <motion.a
              href="https://www.instagram.com/nooreducationalsystem_?igsh=Z3RyeXc3NTNkZmtp" // Replace with actual social links
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
