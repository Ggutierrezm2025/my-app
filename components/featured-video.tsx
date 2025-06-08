"use client"

import { useState } from "react"

interface FeaturedVideoProps {
  youtubeId: string
  title: string
  autoplay?: boolean
}

export function FeaturedVideo({ youtubeId, title, autoplay = false }: FeaturedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
      <div className="relative w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoplay ? 1 : 0}&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-900">{title}</h3>
      </div>
    </div>
  )
}
