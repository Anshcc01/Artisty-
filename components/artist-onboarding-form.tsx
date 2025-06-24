"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Upload, User, MapPin, DollarSign, Languages, Tag } from "lucide-react"

// Form validation schema
const artistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().min(50, "Bio must be at least 50 characters"),
  categories: z.array(z.string()).min(1, "Select at least one category"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  feeRange: z.string().min(1, "Please select a fee range"),
  location: z.string().min(2, "Location is required"),
  profileImage: z.any().optional(),
})

type ArtistFormData = z.infer<typeof artistSchema>

const categories = ["Singer", "Dancer", "Speaker", "DJ", "Musician", "Comedian", "Magician"]
const languages = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Hindi", "Mandarin"]
const feeRanges = ["$500-1000", "$1000-2500", "$2500-5000", "$5000+"]

export function ArtistOnboardingForm() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ArtistFormData>({
    resolver: zodResolver(artistSchema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  })

  // Handle category selection
  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories: string[]
    if (checked) {
      newCategories = [...selectedCategories, category]
    } else {
      newCategories = selectedCategories.filter((c) => c !== category)
    }
    setSelectedCategories(newCategories)
    setValue("categories", newCategories)
  }

  // Handle language selection
  const handleLanguageChange = (language: string, checked: boolean) => {
    let newLanguages: string[]
    if (checked) {
      newLanguages = [...selectedLanguages, language]
    } else {
      newLanguages = selectedLanguages.filter((l) => l !== language)
    }
    setSelectedLanguages(newLanguages)
    setValue("languages", newLanguages)
  }

  const onSubmit = async (data: ArtistFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Artist Registration Data:", data)

      toast({
        title: "Registration Successful!",
        description: "Your artist profile has been created. We'll review it and get back to you soon.",
      })

      // Reset form
      setSelectedCategories([])
      setSelectedLanguages([])
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error creating your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Artist Registration Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>

            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" {...register("name")} placeholder="Enter your full name" className="mt-1" />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="bio">Bio *</Label>
              <Textarea
                id="bio"
                {...register("bio")}
                placeholder="Tell us about yourself, your experience, and what makes you unique..."
                rows={4}
                className="mt-1"
              />
              {errors.bio && <p className="text-sm text-red-600 mt-1">{errors.bio.message}</p>}
            </div>

            <div>
              <Label htmlFor="location">Location *</Label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="location" {...register("location")} placeholder="City, State/Country" className="pl-10" />
              </div>
              {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <h3 className="text-lg font-semibold text-gray-900">Categories *</h3>
            </div>
            <p className="text-sm text-gray-600">Select all categories that apply to your performance style</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={category} className="text-sm font-medium">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
            {errors.categories && <p className="text-sm text-red-600">{errors.categories.message}</p>}
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <h3 className="text-lg font-semibold text-gray-900">Languages Spoken *</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {languages.map((language) => (
                <div key={language} className="flex items-center space-x-2">
                  <Checkbox
                    id={language}
                    checked={selectedLanguages.includes(language)}
                    onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
                  />
                  <Label htmlFor={language} className="text-sm font-medium">
                    {language}
                  </Label>
                </div>
              ))}
            </div>
            {errors.languages && <p className="text-sm text-red-600">{errors.languages.message}</p>}
          </div>

          {/* Fee Range */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <h3 className="text-lg font-semibold text-gray-900">Fee Range *</h3>
            </div>

            <Select onValueChange={(value) => setValue("feeRange", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your typical fee range" />
              </SelectTrigger>
              <SelectContent>
                {feeRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.feeRange && <p className="text-sm text-red-600">{errors.feeRange.message}</p>}
          </div>

          {/* Profile Image Upload */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <h3 className="text-lg font-semibold text-gray-900">Profile Image (Optional)</h3>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <Label htmlFor="profileImage" className="cursor-pointer">
                  <span className="text-blue-600 hover:text-blue-500">Upload a photo</span>
                  <Input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("profileImage")}
                  />
                </Label>
                <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Creating Profile..." : "Create Artist Profile"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
