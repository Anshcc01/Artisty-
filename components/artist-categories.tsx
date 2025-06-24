import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mic, Music, Users, Headphones } from "lucide-react"

const categories = [
  {
    id: "singers",
    name: "Singers",
    description: "Vocal artists for all genres and events",
    icon: Mic,
    count: "150+ Artists",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "dancers",
    name: "Dancers",
    description: "Professional dancers and choreographers",
    icon: Users,
    count: "120+ Artists",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "speakers",
    name: "Speakers",
    description: "Motivational and keynote speakers",
    icon: Music,
    count: "80+ Artists",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "djs",
    name: "DJs",
    description: "Professional DJs for all occasions",
    icon: Headphones,
    count: "100+ Artists",
    color: "bg-blue-100 text-blue-600",
  },
]

export function ArtistCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect artist for your event from our diverse categories of talented performers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex p-3 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <p className="text-sm font-medium text-blue-600">{category.count}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/artists">View All Artists</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
