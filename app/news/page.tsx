import { Metadata } from "next"
import Header from "@/components/header"
import NewsHeroSection from "@/components/news/news-hero-section"
import MilestonesSection from "@/components/news/milestones-section"
import AchievementsSection from "@/components/news/achievements-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "News & Milestones | Noor Educational System",
  description: "Silver Jubilee celebrations, achievements, memberships, and results from Noor Educational System.",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsHeroSection />
        <MilestonesSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  )
}
