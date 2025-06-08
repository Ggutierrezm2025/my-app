"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Track {
  title: string
  artist: string
  duration: string
  audioSrc: string
}

const demoTracks: Track[] = [
  {
    title: "Ocean Waves Meditation",
    artist: "Relaxed Axolotl",
    duration: "3:30",
    audioSrc: "/placeholder.mp3",
  },
  {
    title: "Forest Rain Sounds",
    artist: "Relaxed Axolotl",
    duration: "4:15",
    audioSrc: "/placeholder.mp3",
  },
  {
    title: "Tibetan Singing Bowls",
    artist: "Relaxed Axolotl",
    duration: "5:20",
    audioSrc: "/placeholder.mp3",
  },
]

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(demoTracks[currentTrack].audioSrc)
    audioRef.current = audio

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      if (currentTrack < demoTracks.length - 1) {
        setCurrentTrack((prev) => prev + 1)
      } else {
        setCurrentTrack(0)
        setIsPlaying(false)
      }
    }

    // Events
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", handleEnded)

    // Set volume
    audio.volume = volume

    // Cleanup
    return () => {
      audio.pause()
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentTrack])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrack])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev === 0 ? demoTracks.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentTrack((prev) => (prev === demoTracks.length - 1 ? 0 : prev + 1))
  }

  const handleTimeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <img src="/logo-relaxed-axolotl.png" alt="Relaxed Axolotl Logo" className="h-16 w-auto" />
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-amber-900">{demoTracks[currentTrack].title}</h3>
        <p className="text-amber-700">{demoTracks[currentTrack].artist}</p>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-amber-600 mb-1">
          <span>{formatTime(currentTime)}</span>
          <span>{demoTracks[currentTrack].duration}</span>
        </div>
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={1}
          onValueChange={handleTimeChange}
          className="w-full"
        />
      </div>

      <div className="flex justify-center items-center space-x-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevious}
          className="text-amber-700 hover:text-amber-900 hover:bg-amber-100"
        >
          <SkipBack className="h-6 w-6" />
        </Button>

        <Button
          variant="default"
          size="icon"
          onClick={handlePlayPause}
          className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white h-12 w-12 rounded-full"
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="text-amber-700 hover:text-amber-900 hover:bg-amber-100"
        >
          <SkipForward className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="text-amber-700 hover:text-amber-900 hover:bg-amber-100"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume]}
          max={1}
          step={0.01}
          onValueChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  )
}
