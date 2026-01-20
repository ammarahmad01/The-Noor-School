import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FocusAreasSection from "@/components/focus-areas-section"
import SilverJubileeSection from "@/components/silver-jubilee-section"
import AboutSection from "@/components/about-section"
import AdmissionsSection from "@/components/admissions-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FocusAreasSection />
        <SilverJubileeSection />
        <AboutSection />
        <AdmissionsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  )
}
