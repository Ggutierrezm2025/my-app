import { Play, Youtube, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoCardProps {
  title: string
  duration: string
  description: string
  thumbnail?: string
  videoId?: string
}

export function VideoCard({ title, duration, description, thumbnail, videoId }: VideoCardProps) {
  return (
    <article className="bg-white/90 backdrop-blur-sm border border-amber-200/50 hover:shadow-2xl transition-all duration-500 hover:bg-white rounded-2xl overflow-hidden group hover:scale-105">
      <div className="relative">
        <div className="aspect-video w-full bg-gradient-to-br from-orange-200 via-amber-200 to-orange-300 overflow-hidden relative">
          {thumbnail ? (
            <img
              src={thumbnail || "/placeholder.svg"}
              alt={`Miniatura del video ${title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              width={320}
              height={180}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Youtube className="w-16 h-16 text-orange-600/50" aria-hidden="true" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 text-orange-600 ml-1" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full flex items-center shadow-lg">
          <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
          <time className="font-medium">{duration}</time>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            PREMIUM
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2">{description}</p>
        <Button
          variant="ghost"
          className="w-full text-orange-700 hover:text-orange-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 font-semibold py-3 rounded-xl transition-all duration-300"
          aria-label={`Ver video ${title}`}
        >
          <Youtube className="w-5 h-5 mr-2" aria-hidden="true" />
          Ver Experiencia Premium
        </Button>
      </div>
    </article>
  )
}
