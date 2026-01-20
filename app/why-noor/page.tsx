import { Metadata } from "next"
import Header from "@/components/header"
import WhyNoorHeroSection from "@/components/why-noor/why-noor-hero-section"
import ProvenModelSection from "@/components/why-noor/proven-model-section"
import ScalabilitySection from "@/components/why-noor/scalability-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Why Noor Works | Investor Logic",
  description: "Data-driven evidence of Noor's proven model: 25 years, affordable fees, strong demand, and scalable framework.",
}

export default function WhyNoorPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <WhyNoorHeroSection />
        <ProvenModelSection />
        <ScalabilitySection />
        <ContactSection />
      </main>
    </div>
  )
}
