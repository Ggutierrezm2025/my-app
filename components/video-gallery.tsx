"use client"

import { useState } from "react"
import { Play, Eye, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
  category: string
  youtubeId: string // Necesitarás reemplazar estos con los IDs reales
  description: string
  uploadDate: string
}

// Videos reales del canal Relaxed Axolotl
const videos: Video[] = [
  {
    id: "video1",
    title: "Zen Cloud: Deep Atmospheric Sounds for Meditation",
    thumbnail: "/placeholder.svg?height=200&width=350", // Se reemplazará con la miniatura real de YouTube
    duration: "1:00:22",
    views: "29K", // Actualizar con las vistas reales
    category: "meditation",
    youtubeId: "e6MNGvGTuos", // Reemplazar con el ID real del video
    description:
      "Deep atmospheric sounds designed to create a peaceful meditation environment. Perfect for relaxation and mindfulness practice.",
    uploadDate: "1 month ago",
  },
  {
    id: "video2",
    title: "Zen Path: Deep Relaxation & Meditation Music for Inner Peace",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "59:53",
    views: "15K",
    category: "meditation",
    youtubeId: "YOUR_REAL_VIDEO_ID_2", // Reemplazar con el ID real del video
    description:
      "Find your inner peace with this gentle meditation music designed to help you relax and center yourself.",
    uploadDate: "1 month ago",
  },
  {
    id: "video3",
    title: "Sunrise Meditation for Anxiety Relief | Start Your Day with Peace",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "1:00:03",
    views: "64K",
    category: "anxiety",
    youtubeId: "YOUR_REAL_VIDEO_ID_3", // Reemplazar con el ID real del video
    description:
      "Begin your day with this calming meditation designed specifically to reduce anxiety and promote a sense of peace.",
    uploadDate: "5 months ago",
  },
  {
    id: "video4",
    title: "Pine Forest Meditation Music | Deep Relaxation and Sleep",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "1:00:01",
    views: "99K",
    category: "sleep",
    youtubeId: "YOUR_REAL_VIDEO_ID_4", // Reemplazar con el ID real del video
    description:
      "Immerse yourself in the tranquil sounds of a pine forest, perfect for deep relaxation and preparing for restful sleep.",
    uploadDate: "6 months ago",
  },
  {
    id: "video5",
    title: "Enchanted Rainforest: A Soothing Escape with Nature Sounds",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "1:00:01",
    views: "56K",
    category: "nature",
    youtubeId: "YOUR_REAL_VIDEO_ID_5", // Reemplazar con el ID real del video
    description:
      "Transport yourself to an enchanted rainforest with these immersive nature sounds that create a peaceful atmosphere.",
    uploadDate: "6 months ago",
  },
  {
    id: "video6",
    title: "Bamboo Forest: Meditation and Deep Relaxation Music",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "59:38",
    views: "63K",
    category: "meditation",
    youtubeId: "YOUR_REAL_VIDEO_ID_6", // Reemplazar con el ID real del video
    description: "Let the gentle sounds of a bamboo forest guide you into a state of deep relaxation and mindfulness.",
    uploadDate: "6 months ago",
  },
]

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video)
    setIsPlaying(false) // Reset player state when changing videos
  }

  const getYouTubeUrl = (youtubeId: string) => {
    // Si el ID no está configurado, redirigir al canal
    if (youtubeId.startsWith("YOUR_REAL_VIDEO_ID")) {
      return "https://www.youtube.com/@RelaxedAxolotl"
    }
    return `https://www.youtube.com/watch?v=${youtubeId}`
  }

  const getEmbedUrl = (youtubeId: string) => {
    // Si el ID no está configurado, mostrar mensaje
    if (youtubeId.startsWith("YOUR_REAL_VIDEO_ID")) {
      return null
    }
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Featured Video - Takes up 2 columns on large screens */}
      <div className="lg:col-span-2 order-2 lg:order-1">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
          <div className="relative">
            {isPlaying && getEmbedUrl(selectedVideo.youtubeId) ? (
              <div className="w-full aspect-video">
                <iframe
                  src={getEmbedUrl(selectedVideo.youtubeId)!}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            ) : (
              <>
                <img
                  src={
                    selectedVideo.thumbnail !== "/placeholder.svg?height=200&width=350"
                      ? selectedVideo.thumbnail
                      : "/placeholder.svg?height=400&width=600"
                  }
                  alt={selectedVideo.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 text-amber-800 hover:bg-white rounded-full"
                    onClick={handlePlayVideo}
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {selectedVideo.duration}
                </div>
              </>
            )}
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-amber-900 mb-4">{selectedVideo.title}</h3>
            <p className="text-amber-700 mb-6 text-sm sm:text-base">{selectedVideo.description}</p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4 text-amber-600">
                <span className="flex items-center">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base">{selectedVideo.views} views</span>
                </span>
                <span className="text-sm sm:text-base">• {selectedVideo.uploadDate}</span>
              </div>
              <a
                href={getYouTubeUrl(selectedVideo.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch on YouTube
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Selection - Takes up 1 column */}
      <div className="space-y-6 order-1 lg:order-2">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all" className="text-xs sm:text-sm">
              All
            </TabsTrigger>
            <TabsTrigger value="meditation" className="text-xs sm:text-sm">
              Med
            </TabsTrigger>
            <TabsTrigger value="sleep" className="text-xs sm:text-sm">
              Sleep
            </TabsTrigger>
            <TabsTrigger value="nature" className="text-xs sm:text-sm">
              Nature
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4 space-y-4 max-h-96 lg:max-h-[500px] overflow-y-auto">
            {videos.map((video) => (
              <VideoThumbnail key={video.id} video={video} onSelect={() => handleSelectVideo(video)} />
            ))}
          </TabsContent>

          <TabsContent value="meditation" className="mt-4 space-y-4 max-h-96 lg:max-h-[500px] overflow-y-auto">
            {videos
              .filter((video) => video.category === "meditation")
              .map((video) => (
                <VideoThumbnail key={video.id} video={video} onSelect={() => handleSelectVideo(video)} />
              ))}
          </TabsContent>

          <TabsContent value="sleep" className="mt-4 space-y-4 max-h-96 lg:max-h-[500px] overflow-y-auto">
            {videos
              .filter((video) => video.category === "sleep")
              .map((video) => (
                <VideoThumbnail key={video.id} video={video} onSelect={() => handleSelectVideo(video)} />
              ))}
          </TabsContent>

          <TabsContent value="nature" className="mt-4 space-y-4 max-h-96 lg:max-h-[500px] overflow-y-auto">
            {videos
              .filter((video) => video.category === "nature")
              .map((video) => (
                <VideoThumbnail key={video.id} video={video} onSelect={() => handleSelectVideo(video)} />
              ))}
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <a
            href="https://www.youtube.com/@RelaxedAxolotl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block"
          >
            <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white w-full">
              View All 27 Videos on YouTube
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

interface VideoThumbnailProps {
  video: Video
  onSelect: () => void
}

function VideoThumbnail({ video, onSelect }: VideoThumbnailProps) {
  return (
    <div className="flex gap-3 p-2 rounded-lg hover:bg-amber-50 cursor-pointer transition-colors" onClick={onSelect}>
      <div className="relative w-20 sm:w-24 h-12 sm:h-16 flex-shrink-0">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">{video.duration}</div>
      </div>
      <div className="flex-grow min-w-0">
        <h4 className="text-xs sm:text-sm font-medium text-amber-900 line-clamp-2 leading-tight">{video.title}</h4>
        <div className="flex items-center mt-1 text-xs text-amber-600">
          <Eye className="w-3 h-3 mr-1 flex-shrink-0" />
          <span>
            {video.views} views • {video.uploadDate}
          </span>
        </div>
      </div>
    </div>
  )
}
