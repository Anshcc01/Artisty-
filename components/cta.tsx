import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Artist?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of event planners who trust Artistly to connect them with talented performers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/artists">Browse Artists</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            asChild
          >
            <Link href="/onboard">Join as Artist</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
