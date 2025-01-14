
import gsap from 'gsap'
import { Apple, Fan, Cookie, BotMessageSquare } from 'lucide-react'
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react' 

const icons = [Fan, Cookie, BotMessageSquare, Apple]

export default function AnimatedLoadingIcon() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const loaderRef = useRef<HTMLDivElement >(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const icons = document.querySelector('.loading-icons');
 
        const tl = gsap.timeline({
          ease: 'power1.inOut',
          delay: 2 // Overall easing for timeline
        });

        // Animate vertical lines from 0% height to full height
        tl.from(icons, {
          opacity: 0, 
          duration: 3,
          ease: 'power3.out',
          
          stagger: {
            amount: 0.8,
            from: 'center',
          },
        }); 
 
        tl.to(icons, {
          scale: 1.5, // Start with 0% width
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: {
            amount: 0.2, 
          },
        }); 
 
        tl.to(loaderRef.current, {
          opacity: 0, // Start with 0% width
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: {
            amount: 0.2, 
          },
        }); 
    }, loaderRef);

    return () => ctx.revert();
  }, []);

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
    <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 pointer-events-none" ref={loaderRef}> 
    <div className="loading-icons">

      <CurrentIcon
        className={`w-[30px] h-[30px]  text-yellow-600 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          /> 
          </div>
    </div>
  )
} 