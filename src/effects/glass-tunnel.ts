import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initGlassTunnel = () => {
  /* 
  const sections = document.querySelectorAll('.scroll-section');

  sections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      ease: 'none',
      onUpdate: function() {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        
        const distanceFromCenter = (sectionCenter - viewportCenter) / (viewportHeight / 2);
        
        let skewAmount = 0;
        let scaleAmount = 1;

        const threshold = 0.6;
        
        if (Math.abs(distanceFromCenter) > threshold) {
          const factor = (Math.abs(distanceFromCenter) - threshold) / (1 - threshold);
          skewAmount = factor * 3 * (distanceFromCenter > 0 ? -1 : 1);
          scaleAmount = 1 + (factor * 0.02);
        }

        gsap.set(section, {
          skewY: skewAmount,
          scaleY: scaleAmount,
          transformOrigin: 'center center',
          force3D: true,
          backfaceVisibility: 'hidden'
        });
      }
    });
  });
  */
};
