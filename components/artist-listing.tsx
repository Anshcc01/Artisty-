"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { MapPin, Star, DollarSign, Filter } from "lucide-react"
import { artistsData } from "@/lib/mock-data"

export function ArtistListing() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [locationFilter, setLocationFilter] = useState<string>("")
  const [priceFilter, setPriceFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter artists based on selected filters
  const filteredArtists = useMemo(() => {
    return artistsData.filter((artist) => {
      const matchesCategory = categoryFilter === "all" || artist.category.toLowerCase() === categoryFilter.toLowerCase()
      const matchesLocation = !locationFilter || artist.location.toLowerCase().includes(locationFilter.toLowerCase())
      const matchesPrice = priceFilter === "all" || artist.priceRange === priceFilter

      return matchesCategory && matchesLocation && matchesPrice
    })
  }, [categoryFilter, locationFilter, priceFilter])

  const categories = ["all", "Singer", "Dancer", "Speaker", "DJ"]
  const priceRanges = ["all", "$500-1000", "$1000-2500", "$2500-5000", "$5000+"]

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
              <Input
                placeholder="Enter city..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Price Range</label>
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range === "all" ? "All Prices" : range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={() => {
                  setCategoryFilter("all")
                  setLocationFilter("")
                  setPriceFilter("all")
                }}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results count and view toggle */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {filteredArtists.length} of {artistsData.length} artists
        </p>
        <div className="flex gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            Grid
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            List
          </Button>
        </div>
      </div>

      {/* Artist Cards */}
      <div
        className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {filteredArtists.map((artist) => (
          <Card key={artist.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className={`${viewMode === "list" ? "flex gap-6" : ""}`}>
                <div className={`${viewMode === "list" ? "flex-shrink-0" : "mb-4"}`}>
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className={`rounded-lg object-cover ${viewMode === "list" ? "w-24 h-24" : "w-full h-48"}`}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
                    <Badge variant="secondary">{artist.category}</Badge>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{artist.rating}</span>
                    <span className="text-sm text-gray-500">({artist.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {artist.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {artist.priceRange}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{artist.bio}</p>

                  <Button className="w-full">Ask for Quote</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredArtists.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setCategoryFilter("all")
              setLocationFilter("")
              setPriceFilter("all")
            }}
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  )
}
