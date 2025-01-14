import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'

type Props = {}

const Grid = (props: Props) => {
  const heroContainerRef = useRef<HTMLDivElement >(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
 
        const tl = gsap.timeline({
          ease: 'power1.inOut',
          delay: 8 // Overall easing for timeline
        });

        // Animate vertical lines from 0% height to full height
        tl.to('.grid-1', {
          top: '-100%', 
          duration: 1,
          ease: 'power1.out', 
        }); 
 
        tl.to('.grid-2', {
          right: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        }, '-=1');  
 
        tl.to('.grid-3', {
          bottom: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        }, '-=1');  
 
        tl.to('.grid-4', {
          left: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        }, '-=1');  
 
        tl.to('.grid-5-0', {
          left: '-100%',
          duration: 1,
          ease: 'power2.inOut',
        }, '-=1');  
 
        tl.to('.grid-5-1', {
          right: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        }, '-=1');  
 
        tl.to('.grid-6', {
          right: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        }, '-=1');  
 
        tl.to('.grid-7', {
          bottom: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        }, '-=1');  
 
        tl.to('.grid-8', {
          left: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        }, '-=1');  
 
        tl.to('.grid-9', {
          top: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        }, '-=1');  
    }, heroContainerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative w-full h-full" ref={heroContainerRef}>
      <div className="grid grid-cols-[20%,60%,20%] grid-rows-[20%,60%,20%] h-full w-full">
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-1"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-2"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-3"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-4"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-[51%] h-full left-0 bg-black grid-5-0"></div>
          <div className="absolute w-[51%] h-full right-0 bg-black grid-5-1"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-6"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-7"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-8"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-9"></div>
        </div> 
      </div>
    </div>
  )
}

export default Grid 