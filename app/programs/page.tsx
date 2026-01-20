import { Metadata } from "next"
import Header from "@/components/header"
import ProgramsHeroSection from "@/components/programs/programs-hero-section"
import AllInstitutionsSection from "@/components/programs/all-institutions-section"
import NoorSchoolGallerySection from "@/components/programs/noor-school-gallery-section"
import VerticalIntegrationSection from "@/components/programs/vertical-integration-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Programs & Institutions | Noor Educational System",
  description: "Explore all Noor institutions: The Noor School, Noor College for Women, ECE Program, and Trainings & Certifications.",
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProgramsHeroSection />
        <AllInstitutionsSection />
        <NoorSchoolGallerySection />
        <VerticalIntegrationSection />
        <ContactSection />
      </main>
    </div>
  )
}
