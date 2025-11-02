'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Play, Pause } from 'lucide-react'

const OverlayScene = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPoster, setShowPoster] = useState(true)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
        setShowPoster(false)
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    setShowPoster(true)
  }

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-[600px] -mb-32 sm:mb-48 lg:-mb-72 z-20 px-4 sm:px-6">
      {/* Main overlay container */}
      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-6xl">
        {/* Poster image - shown when video is not playing */}
        {showPoster && (
          <div className="absolute inset-0 z-10">
            <Image 
              src="/training-1.jpeg"
              alt="Training scene"
              fill
              className="object-cover"
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}
        
        {/* Video element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={handleVideoEnded}
          muted
          playsInline
        >
          <source src="/training-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white space-y-4 sm:space-y-6">
            {/* Play/Pause button */}
            <div className="flex justify-center">
              <button 
                onClick={handlePlayPause}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-4 sm:p-5 lg:p-6 border border-white/30 hover:scale-105"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="white" />
                ) : (
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white ml-1" fill="white" />
                )}
              </button>
            </div>
            
            {/* Text content */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg lg:text-xl font-light tracking-wide">
                {isPlaying ? "Now Playing" : "Watch how it works"}
              </h2>
            </div>
          </div>
        </div>
        
        {/* Subtle border */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/20 pointer-events-none" />
      </div>
    </div>
  )
}

export default OverlayScene