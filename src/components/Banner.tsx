import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';

const Banner = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    console.log(textRef)

    const letters = new SplitType(textRef.current, { types: 'chars' });

    const ctx = gsap.context(() => {
      // Continuous scrolling animation
      gsap.fromTo(textRef.current, {
        translateX: '90%',
      },{
        translateX: '-100%',
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

      // Random character flashing
      const scramble = setInterval(() => {
        const randomChars = Array.from({ length: 4 }, () => 
          letters.chars[Math.floor(Math.random() * letters.chars.length)]
        );
        
        randomChars.forEach(char => {
          gsap.fromTo(char,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
          );
        });
      }, 100);

      return () => clearInterval(scramble);
    }, textRef);

    return () => {
      ctx.revert();
      letters.revert();
    };
  }, []);

  return (
    <div className='absolute w-screen  h-[60%]  top-[20%] overflow-hidden flex items-center'>
      <p className="uppercase text-[10vh] text-yellow-200 whitespace-nowrap font-700 text-effect flex items-center" ref={textRef}>
        limited_//_collection_//_limited_//_collection
      </p>
    </div>
  );
};

export default Banner;