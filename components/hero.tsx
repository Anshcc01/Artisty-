import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star, Users, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with
            <span className="text-blue-600"> Talented Artists</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Artistly is the premier platform connecting event planners with performing artists. Discover, shortlist, and
            book the perfect talent for your next event.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="/artists">
                Explore Artists <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/onboard">Join as Artist</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-2">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Talented Artists</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-2">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Events Booked</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-2">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
