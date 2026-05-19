import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Github } from 'lucide-react';
import ShowcaseNav from './components/ShowcaseNav';
import TransitionWrapper from './components/pagetransition/TransitionWrapper';

const ShowcaseButton: React.FC<{
  text: string;
  variant?: 'primary' | 'secondary';
  icon?: any;
  onClick?: () => void;
}> = ({ text, variant = 'primary', icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-[12px] py-[7px] rounded-[12px] text-[16px] font-medium transition-all active:scale-95 cursor-pointer
      ${variant === 'primary'
        ? 'bg-[#0360FF] text-white hover:bg-[#0051E0]'
        : 'bg-white text-[#0360FF] border border-[#0360FF] hover:bg-[#F0F5FF]'}
    `}
  >
    {Icon && <Icon size={18} />}
    {text}
  </button>
);

const images = [
  "1 banner.png",
  "2 content.png",
  "3 overview.png",
  "4 phase1 define problem.png",
  "5 xác định painpoint.png",
  "6 user persona.png",
  "7 validate assumtion.png",
  "8 design & product strategy.png",
  "9 product scope.png",
  "10 feature prioritization.png",
  "11 metric.png",
  "12 xác định vấn đề.png",
  "13 setup tracking.png",
  "14 next step.png",
  "15 tech stack.png",
  "16 process learning.png",
  "17 ending.png"
];

// Mapping TOC items to an approximate index in the images array
const tocSections = [
  { id: 'overview', label: 'Overview', imageIndex: 0 },
  { id: 'define-problem', label: 'Define\nProblem', imageIndex: 3 },
  { id: 'validate-assumption', label: 'Validate\nAssumption', imageIndex: 6 },
  { id: 'design-strategy', label: 'Design &\nProduct Strategy', imageIndex: 7 },
  { id: 'metric-optimization', label: 'Metric &\nOptimization', imageIndex: 10 },
  { id: 'tech-stack', label: 'Tech\nStack', imageIndex: 14 },
  { id: 'design-process', label: 'Design Process\nLearning', imageIndex: 15 }
];

export default function GoodmotionShowcase() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const section of tocSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element's top is past the middle of the viewport
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TransitionWrapper>
      <main className="min-h-screen text-[#1D1D1D] relative pb-32 font-medium" style={{ backgroundColor: '#F3F1E9' }}>
        {/* NEW HERO SECTION */}
        <section className="w-full pt-[100px] pb-20 flex flex-col items-center">
          <div className="mb-[160px]">
            <ShowcaseNav />
          </div>

          {/* Logo & Title */}
          <div className="flex flex-col items-center max-w-[1024px] px-6 text-center">
            <div className="mb-4 flex items-center justify-center">
              <img src="/goodmotion/logo goodmotion.png" alt="Goodmotion" className="h-[48px] w-auto object-contain" />
            </div>
            
            <h1 className="font-['Instrument_Serif'] text-[#1D1D1D] leading-[1.15] mb-6 font-[400] text-[32px] md:text-[40px] xl:text-[48px]">
              Goodmotion:<br />
              GSAP Library cho Framer
            </h1>
            
            {/* Buttons */}
            <div className="flex gap-3 mb-12">
              <ShowcaseButton 
                text="Visit website" 
                variant="primary"
                icon={Monitor} 
                onClick={() => window.open('https://goodmotion.example.com', '_blank')}
              />
              <ShowcaseButton 
                text="View Github" 
                variant="secondary"
                icon={Github} 
                onClick={() => window.open('https://github.com/nomnom58/goodmotion', '_blank')} 
              />
            </div>
          </div>

          {/* Hero Visuals */}
          <div className="w-full relative flex justify-center">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img 
                src="/goodmotion/background.png" 
                alt="Background Window" 
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center p-[4%] md:p-[8%]">
                <div className="w-[85%] md:w-[75%] border-[8px] border-[#000000] rounded-lg overflow-hidden drop-shadow-2xl flex">
                  <video 
                    src="/goodmotion/goodmotion-trailer.webm" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((imgName, index) => {
              // Find if this index corresponds to a TOC section
              const section = tocSections.find(s => s.imageIndex === index);
              
              return (
                <div 
                  key={index} 
                  id={section ? section.id : `img-${index}`}
                  className="w-full"
                >
                  <img 
                    src={`/goodmotion/${imgName}`} 
                    alt={`Goodmotion section ${index}`} 
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Sticky TOC Navigation at Bottom (Desktop Only) */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block overflow-x-auto hide-scrollbar">
          <nav className="flex items-center gap-2 px-2 py-2 bg-black text-white border border-gray-700 rounded-full shadow-lg whitespace-nowrap min-w-max mx-auto">
            {tocSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-[10px] py-[8px] rounded-[16px] text-[13px] font-medium transition-all duration-300 text-center leading-[1.2] whitespace-pre-line ${
                  activeSection === section.id 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
        
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </main>
    </TransitionWrapper>
  );
}
