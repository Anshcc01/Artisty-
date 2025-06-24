import { ArtistOnboardingForm } from "@/components/artist-onboarding-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artist Onboarding - Artistly",
  description: "Join Artistly as a performing artist. Create your profile and start receiving booking requests.",
}

export default function OnboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join as an Artist</h1>
          <p className="text-gray-600">Create your profile and start receiving booking requests</p>
        </div>
        <ArtistOnboardingForm />
      </div>
    </div>
  )
}
