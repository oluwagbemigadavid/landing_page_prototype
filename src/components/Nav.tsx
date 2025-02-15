import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import TextEffect from './TextEffect';

const Nav = () => {

  const navRef = useRef<HTMLDivElement >(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {  
        const tl = gsap.timeline({
          ease: 'power2.inOut',
          delay: 0.5 // Overall easing for timeline
        });
 
        tl.from(navRef.current, {
          height: '0%', 
          duration:0.5,
          ease: 'power2.inOut',
          
          stagger: {
            amount: 0.2, 
          },
        }); 
        tl.fromTo('.animate-nav', {
          opacity: 0
        }, {
          opacity: 1,
          duration:0.5,
        })
    }, navRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="relative h-fit bg-black/70 rounded-xl w-fit grid items-center " ref={navRef} >
      <div className="flex items-center gap-4 animate-nav py-4 px-8">
        <TextEffect text='Men' className='cursor-pointer' />
        <TextEffect text='Women' className='cursor-pointer' />
        <TextEffect text='News' className='cursor-pointer' />
        <TextEffect text='About' className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Nav