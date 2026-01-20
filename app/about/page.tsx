import { Metadata } from "next"
import Header from "@/components/header"
import AboutHeroSection from "@/components/about/about-hero-section"
import MissionVisionSection from "@/components/about/mission-vision-section"
import TimelineSection from "@/components/about/timeline-section"
import LeadershipSection from "@/components/about/leadership-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "About Noor Educational System | Our Story",
  description: "Learn about Noor Educational System's 25-year journey, mission, vision, and leadership committed to values-driven education.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHeroSection />
        <MissionVisionSection />
        <TimelineSection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </div>
  )
}
