import { Hero } from "@/components/hero"
import { ArtistCategories } from "@/components/artist-categories"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ArtistCategories />
      <Features />
      <CTA />
    </div>
  )
}
