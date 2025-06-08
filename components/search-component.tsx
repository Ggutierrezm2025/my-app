"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X, Play, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

interface SearchResult {
  id: string
  title: string
  type: "video" | "blog" | "page"
  excerpt: string
  url: string
  thumbnail?: string
  date?: string
  author?: string
}

// Datos de búsqueda actualizados con los videos reales del canal
const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Zen Cloud: Deep Atmospheric Sounds for Meditation",
    type: "video",
    excerpt: "Deep atmospheric sounds designed to create a peaceful meditation environment",
    url: "#videos",
    thumbnail: "/placeholder.svg?height=90&width=120",
  },
  {
    id: "2",
    title: "Zen Path: Deep Relaxation & Meditation Music for Inner Peace",
    type: "video",
    excerpt: "Find your inner peace with this gentle meditation music designed to help you relax",
    url: "#videos",
    thumbnail: "/placeholder.svg?height=90&width=120",
  },
  {
    id: "3",
    title: "Sunrise Meditation for Anxiety Relief | Start Your Day with Peace",
    type: "video",
    excerpt: "Begin your day with this calming meditation designed specifically to reduce anxiety",
    url: "#videos",
    thumbnail: "/placeholder.svg?height=90&width=120",
  },
  {
    id: "4",
    title: "Pine Forest Meditation Music | Deep Relaxation and Sleep",
    type: "video",
    excerpt: "Immerse yourself in the tranquil sounds of a pine forest, perfect for deep relaxation",
    url: "#videos",
    thumbnail: "/placeholder.svg?height=90&width=120",
  },
  {
    id: "5",
    title: "Enchanted Rainforest: A Soothing Escape with Nature Sounds",
    type: "video",
    excerpt: "Transport yourself to an enchanted rainforest with these immersive nature sounds",
    url: "#videos",
    thumbnail: "/placeholder.svg?height=90&width=120",
  },
  {
    id: "6",
    title: "Bamboo Forest: Meditation and Deep Relaxation Music",
    type: "video",
    excerpt: "Let the gentle sounds of a bamboo forest guide you into a state of deep relaxation",
    url: "#videos",
    thumbnail: "/placeholder.svg?height=90&width=120",
  },
  {
    id: "7",
    title: "The Science Behind Binaural Beats",
    type: "blog",
    excerpt: "Explore the fascinating science of how binaural beats work and their potential benefits",
    url: "#blog",
    date: "June 2, 2024",
    author: "Alex Chen",
  },
  {
    id: "8",
    title: "5 Simple Breathing Techniques to Reduce Anxiety",
    type: "blog",
    excerpt: "Learn these effective breathing exercises that can help calm your mind",
    url: "#blog",
    date: "May 28, 2024",
    author: "Sarah Johnson",
  },
  {
    id: "9",
    title: "About Relaxed Axolotl",
    type: "page",
    excerpt: "Learn about our story, mission, and the team behind the music",
    url: "#about",
  },
  {
    id: "10",
    title: "Custom Meditation Tracks",
    type: "page",
    excerpt: "We create personalized meditation tracks designed specifically for your needs",
    url: "#contact",
  },
]

interface SearchComponentProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchComponent({ isOpen, onClose }: SearchComponentProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const timer = setTimeout(() => {
      const filteredResults = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filteredResults)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const handleResultClick = (url: string) => {
    if (url.startsWith("#")) {
      const element = document.getElementById(url.substring(1))
      if (element) {
        const offset = 80
        const elementPosition = element.offsetTop - offset
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }
    onClose()
    setQuery("")
    setResults([])
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="w-4 h-4" />
      case "blog":
        return <Calendar className="w-4 h-4" />
      default:
        return <Search className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-600"
      case "blog":
        return "bg-blue-100 text-blue-600"
      default:
        return "bg-amber-100 text-amber-600"
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-amber-100">
              <div className="flex items-center gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Search videos, articles, and more..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
                <Button variant="ghost" size="icon" onClick={onClose} className="text-amber-600 hover:bg-amber-50">
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {isSearching ? (
                <div className="p-8 text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-amber-600">Searching...</p>
                </div>
              ) : query.trim() === "" ? (
                <div className="p-8 text-center text-amber-600">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Start typing to search our content...</p>
                  <p className="text-sm mt-2 opacity-75">Search through our 27 videos, articles, and more</p>
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center text-amber-600">
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-2 opacity-75">Try different keywords or browse our content sections</p>
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  {results.map((result) => (
                    <Card
                      key={result.id}
                      className="cursor-pointer hover:shadow-md transition-shadow border-0 bg-amber-50/50 hover:bg-amber-50"
                      onClick={() => handleResultClick(result.url)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          {result.thumbnail && (
                            <img
                              src={result.thumbnail || "/placeholder.svg"}
                              alt={result.title}
                              className="w-16 h-12 object-cover rounded flex-shrink-0"
                            />
                          )}
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getTypeColor(result.type)}`}
                              >
                                {getTypeIcon(result.type)}
                                {result.type}
                              </span>
                            </div>
                            <h3 className="font-semibold text-amber-900 mb-1 line-clamp-1">{result.title}</h3>
                            <p className="text-amber-700 text-sm line-clamp-2 mb-2">{result.excerpt}</p>
                            {(result.date || result.author) && (
                              <div className="flex items-center gap-4 text-xs text-amber-600">
                                {result.author && (
                                  <span className="flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    {result.author}
                                  </span>
                                )}
                                {result.date && (
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {result.date}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
