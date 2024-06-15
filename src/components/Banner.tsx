'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Skeleton } from './ui/skeleton'

interface BannerProps {
  imageUrl: string
  videoUrl: string
}

const Banner: React.FC<BannerProps> = ({ imageUrl, videoUrl }) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false)
  const [areButtonsVisible, setAreButtonsVisible] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleMouseEnter = () => {
    setIsVideoVisible(true)
    setAreButtonsVisible(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsVideoVisible(false)
    setAreButtonsVisible(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  useEffect(() => {
    // Ensure the image is loaded on component mount
    const img = new Image()
    img.src = imageUrl
    img.onload = () => {
      setIsImageLoaded(true)
    }
  }, [imageUrl])

  return (
    <div
      className='relative bg-zinc-100 h-[200px] md:h-[300px] lg:h-[403px] w-full lg:w-[1120px] mx-auto overflow-hidden rounded-xl'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isImageLoaded && <Skeleton className='absolute inset-0 w-full h-full object-cover' />}

      {isImageLoaded && (
        <img
          src={imageUrl}
          alt='Banner'
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {isImageLoaded && (
        <video
          ref={videoRef}
          src={videoUrl}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isVideoVisible ? 'opacity-100' : 'opacity-0'}`}
          loop
          muted
          playsInline
        />
      )}

      <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-500 ${areButtonsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex space-x-4">
          <button className='bg-white text-black rounded-full px-5 py-2'>
            Browse Trending
          </button>
          <button className='bg-white text-black rounded-full px-5 py-2'>
            Our quality promise &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
