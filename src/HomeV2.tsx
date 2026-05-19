import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Instagram, ArrowLeft, ArrowRight, Copy } from 'lucide-react';
import MoneyTrail from './components/MoneyTrail';

export default function HomeV2() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'project' | 'cv'>('project');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'cv') {
      setActiveTab('cv');
    } else if (tab === 'project') {
      setActiveTab('project');
    }
  }, [location]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showMailTooltip, setShowMailTooltip] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const email = "tranmanhquan.ptit@gmail.com";

  // --- Carousel Logic ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -348 : 348;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCopyMail = () => {
    navigator.clipboard.writeText(email);
    setShowMailTooltip(true);
    setTimeout(() => setShowMailTooltip(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFA] text-[#000000] font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <MoneyTrail />
      {/* Container chính: Bỏ overflow-hidden để không cắt cánh tay */}
      <div className="mx-auto px-4 lg:px-[40px] max-w-full">

        {/* Mobile Header */}
        <header className="lg:hidden flex flex-row flex-wrap justify-between items-center gap-6 pt-[140px] mb-[64px]">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} isMobile />
          <SocialLinks
            email={email}
            showMailTooltip={showMailTooltip}
            handleCopyMail={handleCopyMail}
            cvUrl="https://drive.google.com/drive/u/0/folders/0ByKnjKg49xuZQVFEOFZiYmhyN2c?resourcekey=0-GL2DY6N06GwWT3AHFq9Lpg"
          />
        </header>

        <div className="flex flex-col lg:flex-row min-h-screen">

          {/* CỘT TRÁI: Logo & Intro (FIXED on Desktop) */}
          <aside className="w-full lg:fixed lg:w-[400px] xl:w-[500px] lg:h-screen lg:pt-[100px] flex flex-col overflow-hidden bg-[#FFFFFA] z-10 mb-[64px] lg:mb-0">
            <h1 className="text-[48px] font-normal leading-none tracking-tight mb-[24px]">
              QuanTran
            </h1>

            <div className="space-y-[24px] flex flex-col">
              <p className="text-[20px] font-normal leading-[1.3] text-[#2A2A2A]">
                I am QuanTran, a Product Designer, specializing in <span className="text-[#005EFF]">✹ Product thinking</span>, <span className="text-[#EA5B0E]">❂ Interactive experience</span> và <span className="text-[#D016CD]">✺ Building products using AI</span>.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[20px] font-normal text-[#7B7B7B] mb-4">Design</h3>
                  <ul className="text-[20px] font-normal leading-[1.3] text-[#2A2A2A] space-y-1">
                    <li>Product mindset</li>
                    <li>Figma</li>
                    <li>GSAP</li>
                    <li>Framer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[20px] font-normal text-[#7B7B7B] mb-4">Development</h3>
                  <ul className="text-[20px] font-normal leading-[1.3] text-[#2A2A2A] space-y-1">
                    <li>Developer mindset</li>
                    <li>Vibecoding skill</li>
                    <li>Understand CSS, HTML</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          {/* CỘT PHẢI: Navigation & Content (Bỏ overflow-hidden để hiện cánh tay) */}
          <main className="flex-1 lg:ml-[464px] xl:ml-[564px] lg:pt-[100px] flex flex-col min-w-0">

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-between items-start mb-12">
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
              <SocialLinks
                email={email}
                showMailTooltip={showMailTooltip}
                handleCopyMail={handleCopyMail}
                cvUrl="https://drive.google.com/drive/u/0/folders/0ByKnjKg49xuZQVFEOFZiYmhyN2c?resourcekey=0-GL2DY6N06GwWT3AHFq9Lpg"
              />
            </nav>

            {/* TAB CONTENT: PROJECTS */}
            {activeTab === 'project' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <section className="space-y-[32px]">
                  <ProjectItem
                    title="Goodmotion: GSAP Library cho Framer"
                    videoSrc="/video/Goodmotion-Video3.webm"
                    thumbnail="/video/GSAP-thumnail.png"
                    url="/showcase/goodmotion"
                  />
                  <ProjectItem
                    title="Echoo - An anonymous confession platform: Product thinking in practice – Design centered around privacy and trust."
                    videoSrc="/video/Echoo-nen.webm"
                    thumbnail="/video/Echoo-thumnail.png"
                    url="/showcase/echoo-v2"
                  />
                  {/* <ProjectItem
                    title="Quan's Portfolio: Custom-built high-performance portfolio using React + GSAP."
                    videoSrc="/showcase/quan-portfolio/Port Video.webm"
                    thumbnail="/showcase/quan-portfolio/port_thumnail.png"
                    url="/showcase/quans-portfolio"
                  /> */}
                </section>

                {/* OTHER PROJECTS section */}
                <section className="overflow-hidden" style={{ marginTop: '48px' }}>
                  <div className="mb-[20px]">
                    <h2 className="text-[20px] font-medium uppercase tracking-tight">Other Project</h2>
                  </div>

                  {/* Carousel Container */}
                  <div
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`flex gap-[8px] overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none`}
                    style={{ scrollSnapType: isDragging ? 'none' : 'x mandatory' }}
                  >
                    <OtherProjectCard
                      title="KOC APP"
                      year="2023"
                      description="The platform connects influential consumers (Key Opinion Consumers) with brands to review products and earn money."
                      logo="/other project/koc.png"
                      link={{ label: "Appstore", text: "Link", url: "https://apps.apple.com/vn/app/koc-review-l%C3%A0-c%C3%B3-ti%E1%BB%81n/id1551749090" }}
                    />
                    <OtherProjectCard
                      title="Titan Trading Platform"
                      year="2025"
                      description="Launched in 2022, this AI-powered automated trading platform specializes in building trading strategies for digital assets."
                      logo="/other project/titan trading.png"
                      link={{ label: "Platform", text: "Link", url: "https://titantrading.io/" }}
                    />
                    <OtherProjectCard
                      title="Dimuadi"
                      year="2023"
                      description="An online sales application/platform that requires no capital, providing exclusive, low-cost products directly from factories and manufacturers to distributors and collaborators."
                      logo="/other project/dimuadi.png"
                      link={{ label: "Platform", text: "Link", url: "https://dimuadi.com/" }}
                    />
                    <OtherProjectCard
                      title="Befitter platform"
                      year="2023"
                      description="This mobile application, based on the Exercise-to-Earn model, combines FitnessFi and SocialFi, allowing users to receive cryptocurrency rewards."
                      logo="/other project/BEFITTER.png"
                      link={{ label: "Platform", text: "Project Archived" }}
                    />
                    <OtherProjectCard
                      title="DeFarm"
                      year="2024"
                      description="A decentralized social trading platform built on the Arbitrum network. This platform connects investors and experienced fund managers/traders through smart contracts."
                      logo="/other project/defarm.png"
                      link={{ label: "Platform", text: "Project Archived" }}
                    />
                    <OtherProjectCard
                      title="Chozoi"
                      year="2023"
                      description="E-commerce platforms in Vietnam are notable for their online auction model."
                      logo="/other project/chozoi.png"
                      link={{ label: "Platform", text: "Project Archived" }}
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex gap-4 mt-8 mb-[200px]">
                    <button onClick={() => scroll('left')} className="p-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all">
                      <ArrowLeft size={18} />
                    </button>
                    <button onClick={() => scroll('right')} className="p-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </section>
              </div>
            )}

            {/* TAB CONTENT: MY CV */}
            {activeTab === 'cv' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <section className="max-w-[800px] space-y-12 pb-32">
                  <h2 className="text-[20px] font-medium leading-[1.3] text-[#000000]">
                    Senior Product Designer with an execution mindset. I use AI to break down the boundaries between blueprints and actual products.
                  </h2>
                  <div className="space-y-6 text-[20px] font-normal leading-[1.3] text-[#2A2A2A]">
                    <p>
                      Hi, I'm Quân, a Senior Product Designer specializing in transforming complex ideas into tangible products. Instead of blueprints on paper, I demonstrate my product thinking through the operation of Echoo (from logic to implementation) and I'm releasing GoodMotion — a GSAP library for Framer users.
                    </p>
                    <p>
                      For me, a beautiful design is only a necessary condition; the sufficient condition is the ability to technically execute it.
                      You can see the details of how I solved the problem here:
                    </p>
                    <ul className="list-none space-y-4">
                      <li>
                        • <span className="font-semibold underline cursor-pointer hover:opacity-70 transition-opacity">[Case Study Echoo]</span> – Product thinking & Operations.
                      </li>
                      <li>
                        • <span className="font-semibold underline cursor-pointer hover:opacity-70 transition-opacity">[GoodMotion]</span> – Interactive techniques & Animation.
                      </li>
                    </ul>
                    <p>
                      Always be prepared for the next product challenge.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* View my CV button */}
                    <a
                      href="https://drive.google.com/drive/u/0/folders/0ByKnjKg49xuZQVFEOFZiYmhyN2c?resourcekey=0-GL2DY6N06GwWT3AHFq9Lpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-[12px] py-[7px] bg-[#005EFF] text-white rounded-[14px] text-[16px] font-medium hover:opacity-80 transition-all h-[38px] flex items-center"
                    >
                      View my CV
                    </a>

                    {/* Dynamic Copy Email button */}
                    <button
                      onClick={handleCopyMail}
                      className="group flex items-center px-[12px] py-[7px] bg-white border-[1.5px] border-[#005EFF] rounded-[14px] transition-all hover:bg-[#005EFF]/10 h-[38px]"
                    >
                      <span className={`text-[16px] transition-colors whitespace-nowrap ${showMailTooltip ? 'text-[#005EFF]' : 'text-[#414141] group-hover:text-[#005EFF]'}`}>
                        {showMailTooltip ? 'COPIED EMAIL!!!' : 'tranmanhquan.ptit@gmail.com'}
                      </span>

                      {!showMailTooltip && (
                        <span className="ml-[8px] text-[16px] text-[#005EFF] font-medium whitespace-nowrap">
                          COPY
                        </span>
                      )}

                      <div className={`${showMailTooltip ? 'ml-[8px]' : 'ml-[4px]'} text-[#005EFF] flex items-center`}>
                        <Copy size={18} strokeWidth={1.5} />
                      </div>
                    </button>
                  </div>
                </section>
              </div>
            )}

          </main>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

function SocialLinks({ email, showMailTooltip, handleCopyMail, cvUrl }: {
  email: string,
  showMailTooltip: boolean,
  handleCopyMail: () => void,
  cvUrl: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-[12px] py-[7px] bg-[#005EFF] text-white rounded-[14px] text-[16px] font-medium hover:opacity-80 transition-all"
      >
        View my CV
      </a>
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={handleCopyMail}
            className="hover:scale-110 transition-transform focus:outline-none flex items-center"
          >
            <Mail size={22} strokeWidth={1.5} />
          </button>
          {showMailTooltip && (
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-[12px] px-3 py-1 rounded-md animate-in fade-in zoom-in duration-200 z-50">
              copied mail {email}
            </div>
          )}
        </div>
        <a
          href="https://www.instagram.com/quan.pixel/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform flex items-center"
        >
          <Instagram size={22} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}

// Sub-component for Navigation with the Finger Pointer logic
function Navigation({ activeTab, setActiveTab, isMobile }: { activeTab: string, setActiveTab: (t: 'project' | 'cv') => void, isMobile?: boolean }) {
  return (
    <div className={`relative flex items-center gap-12 font-bold text-[16px]`}>

      {/* Bàn tay chỉ (Dịch trái thêm chút nữa cho cả 2 tab) */}
      <div
        className="absolute -top-[110px] h-[160px] w-[350px] pointer-events-none transition-all duration-500 ease-in-out"
        style={{
          transform: activeTab === 'project'
            ? (isMobile ? 'translateX(-225px)' : 'translateX(-240px)')
            : 'translateX(-120px)',
        }}
      >
        <div
          className="w-full h-full"
          style={{
            // Chỉnh lại cao cho MY CV (33px) khác với PROJECT (23px)
            transform: `rotate(60deg) translate(${activeTab === 'project' ? '23px' : '33px'}, -20px)`,
            transformOrigin: 'center center'
          }}
        >
          <img
            src="/hand.png"
            alt="pointing hand"
            className="w-[210px] h-auto object-contain"
          />
        </div>
      </div>

      <button
        onClick={() => setActiveTab('project')}
        className={`transition-all tracking-tight ${activeTab === 'project' ? 'text-[#0360FF] opacity-100' : 'text-black opacity-40 hover:opacity-100'}`}
      >
        PROJECT
      </button>

      <button
        onClick={() => setActiveTab('cv')}
        className={`transition-all tracking-tight ${activeTab === 'cv' ? 'text-[#0360FF] opacity-100' : 'text-black opacity-40 hover:opacity-100'}`}
      >
        MY CV
      </button>
    </div>
  );
}

function ProjectItem({ title, description = "", videoSrc, thumbnail, url }: {
  title: string,
  description?: string,
  videoSrc?: string,
  thumbnail?: string,
  url?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Handle potential autoplay restrictions
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [videoSrc]);

  return (
    <div
      className={`group space-y-[12px] ${url ? 'cursor-pointer' : ''}`}
      onClick={() => url && navigate(url)}
    >
      <h3 className="text-[20px] font-normal leading-[1.3] text-[#000000]">
        {title}{description && ": "}<span className="text-[#7B7B7B]">{description}</span>
      </h3>
      <div className="aspect-video w-full bg-[#E9E6E0] rounded-[32px] overflow-hidden relative border border-black/5">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={thumbnail}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#7B7B7B] opacity-20">
            Video 16:9 Placeholder
          </div>
        )}
      </div>
    </div>
  );
}

function OtherProjectCard({ title, year, description, logo, caseStudy = "In progress", link }: {
  title: string,
  year: string,
  description: string,
  logo: string,
  caseStudy?: string,
  link?: { label: string, text: string, url?: string }
}) {
  const isKOC = title === "KOC APP";
  const isTitan = title === "Titan Trading Platform";
  const isDimuadi = title === "Dimuadi";
  const isBefitter = title === "Befitter platform";
  const isDeFarm = title === "DeFarm";
  const isChozoi = title === "Chozoi";

  return (
    <div
      className="shrink-0 w-[310px] lg:w-[340px] h-[420px] rounded-[24px] p-[16px] flex flex-col justify-between scroll-snap-align-start transition-none select-none overflow-hidden"
      style={{
        background: isKOC
          ? 'linear-gradient(180deg, #C2E6F2 0%, #EFEFEF 100%)'
          : isTitan ? '#ECE6DC' : isDimuadi ? 'url("/other project/background1.png") center/cover' : isBefitter ? 'url("/other project/background2.png") center/cover' : isDeFarm ? 'url("/other project/background3.png") center/cover' : isChozoi ? '#005EFF' : '#E9E6E0'
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-[54px] h-[54px] flex items-center justify-center overflow-hidden shrink-0">
          <img src={logo} alt={title} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col">
          <h4 className={`text-[18px] font-medium leading-none mb-1 ${isKOC ? 'text-[#0D65F2]' : isTitan ? 'text-[#3E2F0C]' : (isDimuadi || isDeFarm || isChozoi) ? 'text-[#FFFFFF]' : isBefitter ? 'text-[#A62900]' : 'text-[#000000]'
            }`}>{title}</h4>
          <span className={`text-[16px] font-normal ${isKOC ? 'text-[#0D65F2]/75' : isTitan ? 'text-[#3E2F0C]/75' : (isDimuadi || isDeFarm || isChozoi) ? 'text-[#FFFFFF]/75' : isBefitter ? 'text-[#A62900]/75' : 'text-[#7B7B7B]'
            }`}>{year}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="space-y-2">
          <p className={`text-[16px] leading-[1.3] mb-2 ${isKOC ? 'text-[#0D65F2]' : isTitan ? 'text-[#3E2F0C]' : (isDimuadi || isDeFarm || isChozoi) ? 'text-[#FFFFFF]' : isBefitter ? 'text-[#A62900]' : 'text-[#2A2A2A]'
            }`}>
            {description}
          </p>
          <div className="space-y-2">
            <div className={`inline-block px-[10px] py-[4px] ${isKOC
              ? 'bg-[#C7DAEF] rounded-[100px] text-[14px] text-[#005DF2] font-medium'
              : isTitan
                ? 'bg-[#ECE5DB] border border-[#C5B593] rounded-[100px] text-[14px] text-[#3E2F2D] font-medium'
                : isDimuadi
                  ? 'bg-[#003482] rounded-[100px] text-[14px] text-[#FFFFFF] font-medium'
                  : isBefitter
                    ? 'bg-[#FF6B35]/10 border border-dashed border-[#FFAB8C] rounded-[100px] text-[14px] text-[#A62900] font-medium'
                    : isDeFarm
                      ? 'bg-[#B0B2B2]/30 border border-dashed border-[#B0B2B2] rounded-[100px] text-[14px] text-[#FFFFFF] font-medium'
                      : isChozoi
                        ? 'bg-[#3177EE] border border-dashed border-[#7BABFF] rounded-[100px] text-[14px] text-[#FFFFFF] font-medium'
                        : 'px-[6px] text-[18px] text-[#2A2A2A]'
              }`}>
              Case study: {caseStudy}
            </div>
            <div className="block">
              <div className={`inline-block px-[10px] py-[4px] ${isKOC
                ? 'bg-[#C7DAEF] rounded-[100px] text-[14px] text-[#005DF2] font-medium'
                : isTitan
                  ? 'bg-[#ECE5DB] border border-[#C5B593] rounded-[100px] text-[14px] text-[#3E2F2D] font-medium'
                  : isDimuadi
                    ? 'bg-[#003482] rounded-[100px] text-[14px] text-[#FFFFFF] font-medium'
                    : isBefitter
                      ? 'bg-[#FF6B35]/10 border border-dashed border-[#FFAB8C] rounded-[100px] text-[14px] text-[#A62900] font-medium'
                      : isDeFarm
                        ? 'bg-[#B0B2B2]/30 border border-dashed border-[#B0B2B2] rounded-[100px] text-[14px] text-[#FFFFFF] font-medium'
                        : isChozoi
                          ? 'bg-[#3177EE] border border-dashed border-[#7BABFF] rounded-[100px] text-[14px] text-[#FFFFFF] font-medium'
                          : 'px-[6px] text-[18px] text-[#2A2A2A]'
                }`}>
                {link?.label}: {link?.url ? (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">
                    {link.text}
                  </a>
                ) : (
                  link?.text
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
