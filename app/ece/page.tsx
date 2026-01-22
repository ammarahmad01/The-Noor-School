import { Metadata } from "next"
import Header from "@/components/header"
import ECEHeroSection from "@/components/ece/ece-hero-section"
import ECEPhilosophySection from "@/components/ece/ece-philosophy-section"
import PAFECAlignmentSection from "@/components/ece/pafec-alignment-section"
import ParentPartnershipSection from "@/components/ece/parent-partnership-section"
import ECEBenefitsSection from "@/components/ece/ece-benefits-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Early Childhood Education | Noor Educational System",
  description: "Research-informed, play-based early childhood education aligned with PAFEC standards. The flagship program of Noor Educational System.",
}

export default function ECEPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ECEHeroSection />
        <ECEPhilosophySection />
        <PAFECAlignmentSection />
        <ParentPartnershipSection />
        <ECEBenefitsSection />
        <ContactSection />
      </main>
    </div>
  )
}
