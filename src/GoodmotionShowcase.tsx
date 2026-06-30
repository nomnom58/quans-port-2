import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Github, Globe, Eye } from 'lucide-react';
import ShowcaseNav from './components/ShowcaseNav';

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
  "1.5 Metric.png",
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
  { id: 'define-problem', label: 'Define\nProblem', imageIndex: 4 },
  { id: 'validate-assumption', label: 'Validate\nAssumption', imageIndex: 7 },
  { id: 'design-strategy', label: 'Design &\nProduct Strategy', imageIndex: 8 },
  { id: 'metric-optimization', label: 'Metric &\nOptimization', imageIndex: 11 },
  { id: 'tech-stack', label: 'Tech\nStack', imageIndex: 15 },
  { id: 'design-process', label: 'Design Process\nLearning', imageIndex: 16 }
];

export default function GoodmotionShowcase() {
  const [activeSection, setActiveSection] = useState('overview');
  const isClickingRef = useRef(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    isClickingRef.current = true;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Gỡ block sau khi scroll animation hoàn tất (~800ms)
    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (isClickingRef.current) return;

      let current = '';
      let bestTop = -Infinity;

      for (const section of tocSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Lấy section gần với giữa màn hình nhất
          if (rect.top <= window.innerHeight / 2) {
            if (rect.top > bestTop) {
              bestTop = rect.top;
              current = section.id;
            }
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
                onClick={() => window.open('https://goodmotion.vercel.app/', '_blank')}
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

        {/* Footer Area */}
        <div className="w-full px-[16px] md:w-[748px] md:max-w-[748px] md:px-0 mx-auto mt-24">
          {/* Footer Divider */}
          <div className="h-[1px] bg-[#D3D3D3] w-full" />

          {/* CTA Footer Section */}
          <section className="mt-12 flex flex-col items-start pb-12">
            <h2 className="text-[20px] md:text-[24px] text-[#1D1D1D] font-medium">Now, discover Goodmotion for yourself</h2>
            <p className="mt-2 text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] font-medium">
              Huge thanks to Quan for sharing the story behind Goodmotion and the details on the building product. Now test it out yourself and see if it's a great fit for you.
            </p>
            <div className="mt-6 flex flex-row gap-4 items-center">
              <button
                onClick={() => window.open('https://goodmotion.vercel.app/', '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-[#E9E6E0] border border-[#CAC5BD] rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-[#1D1D1D] leading-none w-fit"
              >
                <Monitor className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#1D1D1D] shrink-0" />
                Visit website
              </button>
              <button
                onClick={() => window.open('https://github.com/nomnom58/goodmotion', '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-transparent border border-[#CAC5BD] rounded-[12px] md:rounded-[16px] transition-all hover:bg-black/5 active:scale-95 text-[16px] md:text-[20px] font-[500] text-[#1D1D1D] leading-none w-fit"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#1D1D1D] shrink-0" />
                View Github
              </button>
            </div>
          </section>

          {/* OTHER PROJECTS LINE STROKE */}
          <div className="h-[1px] w-full bg-[#D3D3D3] my-12" />

          {/* OTHER PROJECT SECTION */}
          <section className="flex flex-col items-start pb-24">
            <h2 className="text-[24px] md:text-[32px] text-[#0360FF] font-[500] pb-8">Other Project</h2>
            <div className="w-full">
              {/* Video Screenshot Project */}
              <video
                src="/goodmotion/Echoo-nen.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl border-2 border-[#DAD6CF] mb-6 object-cover"
              />
              <h3 className="text-[20px] md:text-[24px] md:leading-[32px] text-[#1D1D1D] font-[500] pb-6">
                Echoo - An anonymous confession platform: Designed around privacy and trust.
              </h3>

              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <button
                  onClick={() => window.location.href = '/showcase/echoo-v2'}
                  className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-white border border-[#CAC5BD] rounded-[12px] md:rounded-[16px] transition-all hover:bg-gray-50 active:scale-95 text-[16px] md:text-[20px] font-[500] text-[#1D1D1D] leading-none w-full md:w-fit"
                >
                  <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#1D1D1D] shrink-0" />
                  Read showcase
                </button>
                <div className="grid grid-cols-2 md:flex md:gap-4 gap-2">
                  <button
                    onClick={() => window.open('https://www.myechoo.xyz/', '_blank', 'noopener,noreferrer')}
                    className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-white border border-[#CAC5BD] rounded-[12px] md:rounded-[16px] transition-all hover:bg-gray-50 active:scale-95 text-[16px] md:text-[20px] font-[500] text-[#1D1D1D] leading-none w-full md:w-fit"
                  >
                    <Globe className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#1D1D1D] shrink-0" />
                    Visit Website
                  </button>
                  <button
                    onClick={() => window.open('https://github.com/nomnom58/untold', '_blank', 'noopener,noreferrer')}
                    className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-white border border-[#CAC5BD] rounded-[12px] md:rounded-[16px] transition-all hover:bg-gray-50 active:scale-95 text-[16px] md:text-[20px] font-[500] text-[#1D1D1D] leading-none w-full md:w-fit"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#1D1D1D] shrink-0" />
                    View Github
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky TOC Navigation at Bottom (Desktop Only) */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block overflow-x-auto hide-scrollbar">
          <nav className="flex items-center gap-2 px-2 py-2 bg-black text-white border border-gray-700 rounded-full shadow-lg whitespace-nowrap min-w-max mx-auto">
            {tocSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-[10px] py-[8px] rounded-[16px] text-[14px] font-medium transition-all duration-300 text-center leading-[1.2] whitespace-pre-line ${
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
  );
}
