import { Metadata } from "next"
import Header from "@/components/header"
import InvestorHeroSection from "@/components/investors/investor-hero-section"
import VisionSection from "@/components/investors/vision-section"
import GrowthAreasSection from "@/components/investors/growth-areas-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Investor Overview | Noor Educational System",
  description: "Vision 2026-2030: Growth opportunities, governance, and sustainability in Pakistan's education sector.",
}

export default function InvestorsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <InvestorHeroSection />
        <VisionSection />
        <GrowthAreasSection />
        <ContactSection />
      </main>
    </div>
  )
}
