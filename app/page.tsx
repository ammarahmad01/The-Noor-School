import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AcademicsSection from "@/components/academics-section"
import FacilitiesSection from "@/components/facilities-section"
import AdmissionsSection from "@/components/admissions-section"
import GallerySection from "@/components/gallery-section"
import NewsEventsSection from "@/components/news-events-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <FacilitiesSection />
        <AdmissionsSection />
        <GallerySection />
        <NewsEventsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  )
}
