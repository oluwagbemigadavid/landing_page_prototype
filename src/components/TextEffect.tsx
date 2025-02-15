import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';

type Props = {
  text: string;
  className?: string;
};

const TextEffect = ({ ...props }: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  // Function to trigger scramble effect
  const scrambleEffect = (hover = false) => {
    if (!textRef.current) return;

    const letters = new SplitType(textRef.current, { types: 'chars' });

    const scramble = setInterval(() => {
      const rand = Math.floor(Math.random() * letters.chars.length);
      gsap.fromTo(
        letters.chars[rand],
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    }, 300);

    
      setTimeout(() => {
        clearInterval(scramble);
        letters.revert(); // Cleanup SplitType modifications
      },  2000);
  };

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const letters = new SplitType(textRef.current, { types: 'chars' });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ ease: 'power2.inOut', delay: 0.5 });

      tl.fromTo(
        letters.chars,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          onComplete: scrambleEffect, // Trigger scramble effect after fade-in
        }
      );
    }, textRef);

    return () => {
      ctx.revert();
      letters.revert();
    };
  }, []);

  return (
    <div className={props.className || ''} >
      <p className="uppercase text-[24px] font-700 text-effect" ref={textRef}>
        {props.text}
      </p>
    </div>
  );
};

export default TextEffect;
