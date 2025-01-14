import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'

const GridLines = () => {

  const gridLinesRef = useRef<HTMLDivElement >()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const verticalLines = document.querySelectorAll('.grid-line-vertical');
      const horizontalLines = document.querySelectorAll('.grid-line-horizontal');
      const distance = '20%'
 
        const tl = gsap.timeline({
          ease: 'power2.inOut',
          delay: 0.5 // Overall easing for timeline
        });
 
        tl.from(verticalLines, {
          height: '0%', 
          duration: 1.5,
          ease: 'power2.inOut',
          
          stagger: {
            amount: 0.2, 
          },
        });
 
        tl.from(horizontalLines, {
          width: '0%', // Start with 0% width
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: {
            amount: 0.2, 
          },
        }, "-=1.5"); 
 
        tl.to('.grid-line-1', {
          top: distance,
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: {
            amount: 0.2, 
          },
        }, "+=3.5"); 
 
        tl.to('.grid-line-2', {
          bottom: distance,
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: {
            amount: 0.2, 
          },
        }, "-=1.5"); 
 
        tl.to('.grid-line-3', {
          left: distance,
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: {
            amount: 0.2, 
          },
        }, "-=1.5");

        tl.to('.grid-line-4', {
          right: distance,
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: {
            amount: 0.2, 
          },
        }, "-=1.5"); 
    }, gridLinesRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none" ref={gridLinesRef} >
      <div className="absolute grid-line-1 grid-line-horizontal bg-yellow-600 w-full h-[2px] top-[calc(50%-25px)]"></div>
      <div className="absolute grid-line-2 grid-line-horizontal bg-yellow-600 w-full h-[2px] bottom-[calc(50%-25px)]"></div>
      <div className="absolute grid-line-3 grid-line-vertical bg-yellow-600 w-[2px] h-full left-[calc(50%-25px)]"></div>
      <div className="absolute grid-line-4 grid-line-vertical bg-yellow-600 w-[2px] h-full right-[calc(50%-25px)]"></div>
    </div>
  )
}

export default GridLines