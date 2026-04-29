import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import Lenis from 'lenis';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useShowcaseAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const heroTextRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement)[]>([]);
  const scrollTextRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement)[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // 1. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    let ctx = gsap.context(() => {
      // 2. Video Transition (Zoom Out to Default Size)
      if (videoRef.current) {
        const videoWrapper = videoRef.current;
        
        gsap.fromTo(videoWrapper, 
          {
            scale: 1.2,
            borderRadius: '0px',
            transformOrigin: 'top center',
          },
          {
            scale: 1,
            borderRadius: '20px',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '+=300',
              scrub: true,
            }
          }
        );
      }

      // 3. Hero Text Reveal (Auto on load)
      heroTextRefs.current.forEach((text) => {
        if (!text) return;
        Splitting({ target: text, by: 'words' });
        const words = text.querySelectorAll('.word');
        
        gsap.fromTo(words, 
          { opacity: 0.1 },
          {
            opacity: 1,
            stagger: 0.06,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.5
          }
        );
      });

    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const addToHeroTextRefs = (el: any) => {
    if (el && !heroTextRefs.current.includes(el)) heroTextRefs.current.push(el);
  };

  const addToScrollTextRefs = (el: any) => {
    if (el && !scrollTextRefs.current.includes(el)) scrollTextRefs.current.push(el);
  };

  return { containerRef, videoRef, addToHeroTextRefs, addToScrollTextRefs };
};
