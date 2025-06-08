"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Science Behind Binaural Beats: How Sound Affects Your Brain",
    excerpt:
      "Explore the fascinating science of how binaural beats work and their potential benefits for meditation and relaxation.",
    category: "meditation",
    date: "June 2, 2024",
    author: "Alex Chen",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "5 Simple Breathing Techniques to Reduce Anxiety",
    excerpt:
      "Learn these effective breathing exercises that can help calm your mind and reduce anxiety in just minutes a day.",
    category: "wellness",
    date: "May 28, 2024",
    author: "Sarah Johnson",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "How Nature Sounds Improve Sleep Quality",
    excerpt:
      "Discover why nature sounds like rainfall and ocean waves can dramatically improve your sleep patterns and quality.",
    category: "music",
    date: "May 15, 2024",
    author: "Michael Rivera",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "The Connection Between Meditation and Creativity",
    excerpt: "Research shows regular meditation practice can enhance creative thinking and problem-solving abilities.",
    category: "meditation",
    date: "May 10, 2024",
    author: "Emma Wilson",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Creating Your Perfect Meditation Space at Home",
    excerpt: "Tips and ideas for designing a dedicated meditation area that promotes tranquility and mindfulness.",
    category: "wellness",
    date: "May 5, 2024",
    author: "David Thompson",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "The History and Evolution of Meditation Music",
    excerpt: "From ancient chants to modern compositions, explore how meditation music has evolved throughout history.",
    category: "music",
    date: "April 28, 2024",
    author: "Sophia Lee",
    image: "/placeholder.svg?height=300&width=500",
  },
]

interface BlogSliderProps {
  category?: string
}

export function BlogSlider({ category }: BlogSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const filteredPosts = category ? blogPosts.filter((post) => post.category === category) : blogPosts

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const postsPerSlide = isMobile ? 1 : 3
  const maxIndex = Math.max(0, filteredPosts.length - postsPerSlide)
  const visiblePosts = filteredPosts.slice(currentIndex, currentIndex + postsPerSlide)

  const nextSlide = () => {
    setDirection(1)
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    setDirection(-1)
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(maxIndex)
    }
  }

  useEffect(() => {
    // Auto-advance slides
    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex, maxIndex])

  return (
    <div className="relative px-4 sm:px-8">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}
          >
            {visiblePosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 bg-white/90 backdrop-blur-sm w-full"
              >
                <div className="relative h-48">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-amber-700 mb-4 line-clamp-3 text-sm sm:text-base">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-amber-600 text-xs sm:text-sm">
                    <span className="flex items-center">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {filteredPosts.length > postsPerSlide && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-white/80 border-amber-200 text-amber-700 hover:bg-amber-50 hover:text-amber-900 rounded-full shadow-md z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white/80 border-amber-200 text-amber-700 hover:bg-amber-50 hover:text-amber-900 rounded-full shadow-md z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(filteredPosts.length / postsPerSlide) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / postsPerSlide) === index ? "bg-amber-600" : "bg-amber-200"
                }`}
                onClick={() => {
                  setDirection(index > Math.floor(currentIndex / postsPerSlide) ? 1 : -1)
                  setCurrentIndex(index * postsPerSlide)
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
