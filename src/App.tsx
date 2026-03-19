import { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Framer, MousePointer2, Monitor, Smartphone, ArrowLeft, Eye, Github, Check, Zap, Copy, ArrowRightToLine, LockKeyhole, DollarSign, Maximize, ChevronsRight, Users } from 'lucide-react';
import { Button } from './components/Button';
import EchooShowcase from './EchooShowcase';
import QuansPortfolio from './QuansPortfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import TransitionWrapper from './components/pagetransition/TransitionWrapper';

export default function App() {
  return (
    <TransitionWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase/echoo" element={<EchooShowcase />} />
          <Route path="/showcase/quans-portfolio" element={<QuansPortfolio />} />
        </Routes>
      </Router>
    </TransitionWrapper>
  );
}

function Home() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Cinematic Scroll Logic
      gsap.set('.logo-container', { clearProps: "all" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: '+=250',
          scrub: 1
        }
      });

      tl.fromTo('.desktop-hero-content',
        { y: '80vh' },
        { y: 0, ease: 'none' },
        0
      );

      tl.fromTo('.logo-img',
        { height: '80px' },
        { height: '32px', ease: 'power2.out' },
        0
      );
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: Pure Static Editorial Logic
      gsap.set('.mobile-hero-content', { clearProps: "all", y: 0 });
    });

    return () => mm.revert();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('tranmanhquan.ptit@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <main className="min-h-screen bg-bg-main text-text-primary">
      {/* Hero Section */}
      <section 
        className='hero-section min-h-[100svh] md:min-h-[115vh] flex flex-col justify-end md:justify-start overflow-hidden relative'
        style={{ paddingLeft: 'var(--page-padding)', paddingRight: 'var(--page-padding)' }}
      >
        {/* MOBILE HERO: Editorial & Static */}
        <div className='mobile-hero-content block md:hidden relative z-0 pb-[3px]'>
          <img
            src='/logo.png'
            className='h-[40px] w-auto mb-8'
            alt="Quan's Portfolio"
          />
          <h1 className='text-[40px] font-[500] leading-[1.1] text-[#0066FF] mb-10'>
            I help startups create unique, empathic product experiences.
          </h1>
          <div className='space-y-2 text-[20px]'>
            <p>Product Designer - 1997 - Saigon</p>
            <p>tranmanhquan.ptit@gmail.com</p>
            <p>+84 947396361</p>
          </div>
        </div>

        {/* DESKTOP HERO: Cinematic & Animated */}
        <div className='desktop-hero-content hidden md:flex flex-col relative z-0 md:p-0' style={{ paddingTop: '80px' }}>
          <div className='logo-container relative mb-10 h-[80px] flex items-end'>
            <img
              src='/logo.png'
              className='logo-img h-[32px] w-auto'
              alt="Quan's Portfolio"
              style={{ objectPosition: 'left center', transformOrigin: 'left center' }}
            />
          </div>
          <div className='headline-wrapper'>
            <h1 className='text-[64px] font-[500] leading-[1.1] text-[#0066FF] max-w-[740px]'>
              I help startups create unique, empathic product experiences.
            </h1>
            <div className='mt-10 space-y-2 text-[32px]'>
              <p>Product Designer - 1997 - Saigon</p>
              <p>tranmanhquan.ptit@gmail.com</p>
              <p>+84 947396361</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[120px] space-y-[120px]" style={{ paddingLeft: 'var(--page-padding)', paddingRight: 'var(--page-padding)' }}>
        {/* Successful Projects */}
        <section>
          <div className="border-b-2 border-[#0360FF] mb-8">
            <h2 className="text-[24px] md:text-[48px] font-medium text-brand mb-2">Successful Project</h2>
          </div>
          <div className="space-y-[120px]">
            <div>
              <h3 className="text-[20px] md:text-[32px] leading-tight font-medium mb-[16px]">
                <span className="text-[#1D1D1D] block font-medium">Echoo App - Anonymous Confession Platform. </span>
                <span className="text-[#5A6272] block mt-[6px] font-medium">Solo-built anonymous confessional app end-to-end: product strategy, UI/UX design, full-stack engineering, marketing. Positioned as emotional outlet platform (vs. drama forum paradigm).</span>
              </h3>

              <div className="space-y-[8px] mb-8">
                {[
                  { text: "Zero-Latency Feed via PostgreSQL RPC", icon: ArrowRightToLine },
                  { text: "Friction-Driven Quality: Bot elimination via 1-post unlock barrier", icon: LockKeyhole },
                  { text: "$0 Infrastructure: Serverless stack via Vercel & Supabase", icon: DollarSign },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-2">
                      <Icon size={24} className="text-[24px] text-[#A27E76] mt-1 shrink-0" />
                      <p className="text-[16px] md:text-[24px] text-[#A27E76] leading-tight font-medium">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2 mt-[20px] md:mt-[32px] md:flex-row md:items-center md:gap-4">
                <Button 
                  text="Read showcase" 
                  icon={Eye} 
                  className="w-full md:w-auto" 
                  onClick={() => navigate('/showcase/echoo')}
                />
                <div className="flex gap-2 w-full md:w-auto md:flex-none">
                  <Button text="Visit website" icon={Monitor} className="flex-1 md:flex-none md:w-auto" onClick={() => window.open('https://www.myechoo.xyz/', '_blank', 'noopener,noreferrer')} />
                  <Button text="View Github" icon={Github} className="flex-1 md:flex-none md:w-auto" onClick={() => window.open('https://github.com/nomnom58/untold', '_blank', 'noopener,noreferrer')} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[32px] leading-tight font-medium mb-[16px]">
                <span className="text-[#1D1D1D] block font-medium">Quan’s Portfolio - My Portfolio Website. </span>
                <span className="text-[#5A6272] block mt-[6px] font-medium"> Custom-built high-performance portfolio using React + GSAP, solving complex mobile animation challenges without bloat. Perfect Lighthouse 100/100/100/100 with sub-second load time. </span>
              </h3>

              <div className="space-y-[8px] mb-8">
                {[
                  { text: "Stable Logo Zoom via Basement Logic: Zero layout shift.", icon: Maximize },
                  { text: "Performance Engineering: Lighthouse 100 via GSAP & Tailwind JIT.", icon: ChevronsRight },
                  { text: "Persona-Driven Architecture: Optimized for HR, UI & Tech Leaders.", icon: Users },
                  { text: "Infrastructure Efficiency: $0 fixed cost on Serverless deployment (Vercel)", icon: DollarSign }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-2">
                      <Icon size={24} className="text-[24px] text-[#B17A8E] mt-1 shrink-0" strokeWidth={2} />
                      <p className="text-[16px] md:text-[24px] text-[#B17A8E] leading-tight font-medium">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2 mt-[20px] md:mt-[32px] md:flex-row md:items-center md:gap-4">
                <Button 
                  text="Read showcase" 
                  icon={Eye} 
                  className="w-full md:w-auto" 
                  onClick={() => navigate('/showcase/quans-portfolio')}
                />
                <div className="flex gap-2 w-full md:w-auto md:flex-none">
                  <Button text="Visit website" icon={Monitor} className="flex-1 md:flex-none md:w-auto" onClick={() => window.open('https://quans-port-2.vercel.app/', '_blank', 'noopener,noreferrer')} />
                  <Button text="View Github" icon={Github} className="flex-1 md:flex-none md:w-auto" onClick={() => window.open('https://github.com/nomnom58/quans-port-2', '_blank', 'noopener,noreferrer')} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <div className="border-b-2 border-[#0360FF] mb-8">
            <h2 className="text-[32px] md:text-[48px] font-medium text-brand mb-2">Work Experience</h2>
          </div>
          <div>
            <div className="block w-full clear-both mb-2">
              <span className="float-left mr-[8px] text-[10px] md:text-[14px] leading-[1.1] pt-[8px] select-none text-[#1D1D1D] font-semibold underline">2024 — NOW</span>
              <span className="inline text-[24px] md:text-[32px] leading-[1.1] tracking-tight text-[#5A6272]">Solo Product Founder & Freelance UX Designer</span>
            </div>
            <div className="block w-full clear-both mb-2">
              <span className="float-left mr-[8px] text-[10px] md:text-[14px] leading-[1.1] pt-[8px] select-none text-[#1D1D1D] font-semibold underline">2023</span>
              <span className="inline text-[24px] md:text-[32px] leading-[1.1] tracking-tight text-[#5A6272]">Warpipe | Senior UI/UX Designer</span>
            </div>
            <div className="block w-full clear-both mb-2">
              <span className="float-left mr-[8px] text-[10px] md:text-[14px] leading-[1.1] pt-[8px] select-none text-[#1D1D1D] font-semibold underline">2022</span>
              <span className="inline text-[24px] md:text-[32px] leading-[1.1] tracking-tight text-[#5A6272]">Freelance UI/UX Designer</span>
            </div>
            <div className="block w-full clear-both mb-2">
              <span className="float-left mr-[8px] text-[10px] md:text-[14px] leading-[1.1] pt-[8px] select-none text-[#1D1D1D] font-semibold underline">2021</span>
              <span className="inline text-[24px] md:text-[32px] leading-[1.1] tracking-tight text-[#5A6272]">Interspace (Accesstrade) | UI/UX Designer</span>
            </div>
            <div className="block w-full clear-both mb-0">
              <span className="float-left mr-[8px] text-[10px] md:text-[14px] leading-[1.1] pt-[8px] select-none text-[#1D1D1D] font-semibold underline">2020</span>
              <span className="inline text-[24px] md:text-[32px] leading-[1.1] tracking-tight text-[#5A6272]">MCG Company, Hanoi | UI/UX Designer</span>
            </div>
          </div>
        </section>

        {/* Skills
      <section>
        <div className="border-b-2 border-btn-border mb-8">
          <h2 className="text-[40px] font-medium text-brand mb-2">Skills</h2>
        </div>
        <div className="flex flex-col gap-y-[32px] leading-relaxed">
          <div>
            <span className="text-[24px] text-text-primary block mb-[8px]">Core Design:</span> 
            <div className="flex flex-wrap gap-[8px]">
              {["UI/UX", "Design Systems", "Interactive Prototyping"].map(skill => (
                <span key={skill} className="text-[32px] text-[#5A6272] px-[12px] py-[7px] bg-[#EEEAE4] border border-[#CCC8C1] rounded-[16px] leading-none">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[24px] text-text-primary block mb-[8px]">Product & Growth:</span> 
            <div className="flex flex-wrap gap-[8px]">
              {["User Research", "Conversion Rate Optimization (CRO)"].map(skill => (
                <span key={skill} className="text-[32px] text-[#5A6272] px-[12px] py-[7px] bg-[#EEEAE4] border border-[#CCC8C1] rounded-[16px] leading-none">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[24px] text-text-primary block mb-[8px]">Modern Stack:</span> 
            <div className="flex flex-wrap gap-[8px]">
              {["HTML/CSS (React)", "Supabase", "Vibe Coding"].map(skill => (
                <span key={skill} className="text-[32px] text-[#5A6272] px-[12px] py-[7px] bg-[#EEEAE4] border border-[#CCC8C1] rounded-[16px] leading-none">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[24px] text-text-primary block mb-[8px]">Motion & 3D:</span> 
            <div className="flex flex-wrap gap-[8px]">
              {["Spline", "Framer", "Interaction Design"].map(skill => (
                <span key={skill} className="text-[32px] text-[#5A6272] px-[12px] py-[7px] bg-[#EEEAE4] border border-[#CCC8C1] rounded-[16px] leading-none">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

        {/* More Projects */}
        <section>
          <div className="border-b-2 border-[#0360FF] mb-8">
            <h2 className="text-[32px] md:text-[48px] font-medium text-brand mb-2">More Projects</h2>
          </div>
          <div className="space-y-4">
            <div className="text-[24px] md:text-[32px] leading-tight">
              <span className="text-[#1D1D1D] underline">KOC App - Affiliate Platform: </span>
              <span className="text-[#5A6272]">The platform connects influencers with over 1000 major brands.</span>
            </div>
            <div className="text-[24px] md:text-[32px] leading-tight">
              <span className="text-[#1D1D1D] underline">beFitter App - Web3 Fitness Lifestyle App: </span>
              <span className="text-[#5A6272]">The Move-to-Earn platform combines elements of SocialFi and GameFi.</span>
            </div>
            <div className="text-[24px] md:text-[32px] leading-tight">
              <span className="text-[#1D1D1D] underline">deFarm - Web3 Social Asset Management: </span>
              <span className="text-[#5A6272]">Decentralized fund management platform.</span>
            </div>
            <div className="text-[24px] md:text-[32px] leading-tight">
              <span className="text-[#1D1D1D] underline">Titan Trading Platform: </span>
              <span className="text-[#5A6272]">A multi-chain algorithmic trading platform, providing in-depth market analysis solutions.</span>
            </div>
            <div className="text-[24px] md:text-[32px] leading-tight">
              <span className="text-[#1D1D1D] underline">Chozoi App - Ecommerce App: </span>
              <span className="text-[#5A6272]">Modern e-commerce platform in Vietnam, offering top-notch auction features.</span>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="border-b-2 border-[#0360FF] mb-8">
            <h2 className="text-[32px] md:text-[48px] font-medium text-brand mb-2">Education</h2>
          </div>
          <p className="text-[24px] md:text-[32px] text-[#5A6272] leading-tight">Posts and Telecommunications Institute of Technology Bachelor of Marketing Graduation 2019</p>
        </section>

        {/* Thank You */}
        <section>
          <div
            className="cursor-pointer inline-flex flex-col items-start"
            onClick={() => window.location.href = 'mailto:tranmanhquan.ptit@gmail.com'}
          >
            <Zap size={24} className="text-[#1D1D1D] mb-4" fill="currentColor" />
            <span className="text-[24px] md:text-[32px] font-medium text-[#1D1D1D] leading-none">Happy to chat, reach out!</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-[24px] md:text-[32px] text-[#1D1D1D] space-y-2 font-medium pb-[400px]">
          <div className="flex items-center gap-4">
            <a href="mailto:tranmanhquan.ptit@gmail.com" className="transition-colors">tranmanhquan.ptit@gmail.com</a>
            <button
              onClick={handleCopy}
              className={`
              px-[12px] py-[7px] text-[24px] leading-none rounded-[16px] border transition-all duration-300 cursor-pointer font-normal
              ${copied
                  ? 'bg-[#7CF200] border-[#65C400]'
                  : 'bg-[#EEEAE4] border-[#CCC8C1]'}
              text-[#5A6272]
            `}
              title="Copy email"
            >
              {copied ? 'copied' : 'copy'}
            </button>
          </div>
          <p>
            <a href="tel:+84947396361" className="transition-colors">+84 947396361</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
