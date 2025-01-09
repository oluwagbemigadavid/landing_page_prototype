
import { Loader, Loader2, RefreshCw, RotateCw } from 'lucide-react'
import React, { useState, useEffect } from 'react' 

const icons = [Loader2, RefreshCw, RotateCw, Loader]

export default function AnimatedLoadingIcon() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
        setIsTransitioning(false)
      }, 300)
    }, 500)

    return () => clearInterval(intervalId)
  }, [])

  const CurrentIcon = icons[currentIconIndex]

  return (
    <div className="flex items-center justify-center w-full h-full  bg-red-50/50 absolute top-0 left-0 pointer-events-none"> 
      <CurrentIcon
        className={`w-8 h-8 text-primary transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      /> 
    </div>
  )
}
