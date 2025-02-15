import gsap from 'gsap';
import React, { useLayoutEffect, useRef, useState } from 'react'
import TextEffect from './TextEffect';
import Nav from './Nav';
import Banner from './Banner';
import Experience from './Experience';
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei';

type Props = {}

const Grid = (props: Props) => {
  const heroContainerRef = useRef<HTMLDivElement >(null)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
 
        const tl = gsap.timeline({
          ease: 'power1.inOut',
          delay: 8, // Overall easing for timeline
          onComplete: () => {
            // Set the boolean to true when the timeline completes
            setIsAnimationComplete(true);
          },
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
 
        tl.fromTo('.grid-1-0', {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: 'power1.inOut',
        },{
          opacity: 1,
          scale: 1
        });   
 
        tl.fromTo('.grid-7-0', {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.inOut',
        },{
          opacity: 1
        }, '-=0.5');  
 
        tl.fromTo('.grid-9-0', {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.inOut',
        },{
          opacity: 0.8
        }, '-=0.5');  
    }, heroContainerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative w-full h-full" ref={heroContainerRef}>
      <div className="grid grid-cols-[20%,60%,20%] grid-rows-[20%,60%,20%] h-full w-full text-yellow-200">
        <div className="flex w-full h-full relative overflow-hidden items-center justify-center ">  
          <div className="absolute w-full h-full bg-black grid-1"></div>
          <svg 
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 42.877 42.877"
    xmlSpace="preserve" 
    className='fill-current w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] grid-1-0'
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path 
          d="M16.216,22.056c-0.093,0.636-0.205,1.271-0.317,1.903c-0.287,1.619-0.559,3.15-0.502,4.72 c0.097,2.722,1.85,4.899,4.465,5.548c1.958,0.488,4.017,0.368,6.38-0.373c5.487-1.719,9.924-5.118,13.564-10.391 c2.146-3.106,3.148-6.128,3.066-9.239c-0.065-2.627-1.68-4.771-4.108-5.463c-2.07-0.589-4.122-0.538-6.476,0.172 c0.34,0.144,0.657,0.327,0.953,0.552c1.734,1.318,2.295,3.258,1.666,5.766c-0.779,3.1-2.596,5.681-4.236,7.857 c-0.342,0.453-0.744,0.98-1.192,1.496C28.671,25.53,28.003,26,27.489,26c-0.286,0-0.583-0.131-0.772-0.346 c-0.189-0.216-0.283-0.527-0.248-0.812l0.041-0.308c0.572-3.674,1.037-6.986,0.953-10.372c-0.067-2.744-1.772-4.865-4.45-5.536 c-1.22-0.308-2.504-0.344-4.056-0.113c-1.74,0.258-3.419,0.782-5.134,1.602c-0.576,0.275-1.08,0.554-1.499,0.807 c2.166,0.935,3.581,2.708,4.135,5.208c0.397,1.788,0.13,3.513-0.128,5.181L16.216,22.056z M5.269,34.386 c1.735,0.237,3.469,0.093,5.303-0.449c-0.631-0.288-1.198-0.706-1.66-1.233c-0.927-1.061-1.333-2.422-1.143-3.834 c0.165-1.226,0.509-2.412,1.05-3.627c0.875-1.965,2.104-3.69,3.293-5.359l0.099-0.138c1.145-1.607,0.862-3.648-0.687-4.962 c-0.579-0.491-1.347-0.761-2.162-0.761c-0.991,0-1.969,0.396-2.686,1.086c-1.464,1.41-2.607,2.747-3.496,4.086 c-2.29,3.45-3.269,6.34-3.174,9.367C0.104,31.672,2.17,33.959,5.269,34.386z"
        ></path>
      </g>
    </g>
  </svg>
        </div>
        <div className="flex w-full h-full relative overflow-hidden justify-center items-center">  
          <div className="absolute w-full h-full bg-black grid-2"></div>
         {isAnimationComplete &&  <Nav />}
        </div>
        <div className="flex w-full h-full items-center justify-center gap-[24px] relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-3">
          </div>
            {isAnimationComplete && <>
            <TextEffect text='Sign_in' />
            <TextEffect text='Cart' /></>}
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-4"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-[51%] h-full left-0 bg-black grid-5-0"></div>
          <div className="absolute w-[51%] h-full right-0 bg-black grid-5-1"></div>    
          
          <div className="relative inset-0 z-[9999] w-full h-full">
         
      <Canvas
        style={{
          position: 'absolute',
          inset: 0,
          background: 'transparent',
        }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [4, 2, 6] }}
        gl={{ alpha: true, antialias: true, stencil: false, depth: false }}
      >
        {/* Background Color */}
        <color attach="background" args={['#121212']} />

        {/* Experience Component (Post-Processing Effects) */}
        <Experience />

        {/* Banner Component (Rendered as HTML inside the Canvas) */}
        <Html center position={[0, 0, -5]} transform wrapperClass="w-screen h-[60%] top-[20%] overflow-hidden flex items-center">
          <Banner />
        </Html>
      </Canvas>  
        </div>   
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-6"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden items-center justify-center">  
          <div className="absolute w-full h-full bg-black grid-7"></div>
          <p className="grid-7-0 text-2xl font-bold">&copy;2025</p>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-8"></div>
        </div>
        <div className="flex w-full h-full relative overflow-hidden">  
          <div className="absolute w-full h-full bg-black grid-9"></div>
          <div className='grid-9-0 absolute w-full h-full flex items-center justify-center bg-black/50 '>
            
          {isAnimationComplete && <TextEffect text='Scroll' />}
          </div>
        </div> 
      </div>

      {/* {isAnimationComplete && <Banner />} */}
    </div>
  )
}

export default Grid 