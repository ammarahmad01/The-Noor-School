import { Metadata } from "next"
import Header from "@/components/header"
import FranchiseHeroSection from "@/components/franchise/franchise-hero-section"
import PartnerBenefitsSection from "@/components/franchise/partner-benefits-section"
import GrowthPhilosophySection from "@/components/franchise/growth-philosophy-section"
import FranchiseFormSection from "@/components/franchise/franchise-form-section"

export const metadata: Metadata = {
  title: "Franchise Partnership | Noor Educational System",
  description: "Partner with Noor Educational System. Proven model, comprehensive support, and a trusted brand.",
}

export default function FranchisePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FranchiseHeroSection />
        <PartnerBenefitsSection />
        <GrowthPhilosophySection />
        <FranchiseFormSection />
      </main>
    </div>
  )
}
