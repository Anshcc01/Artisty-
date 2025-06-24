import { Card, CardContent } from "@/components/ui/card"
import { Search, Shield, Clock, Star } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Easy Discovery",
    description: "Advanced filtering to find the perfect artist for your event needs",
  },
  {
    icon: Shield,
    title: "Verified Artists",
    description: "All artists are verified and background-checked for your peace of mind",
  },
  {
    icon: Clock,
    title: "Quick Booking",
    description: "Streamlined booking process with instant availability checks",
  },
  {
    icon: Star,
    title: "Quality Assured",
    description: "Read reviews and ratings from previous clients to make informed decisions",
  },
]

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Artistly?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make it simple to find and book the perfect artists for your events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
