import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Monitor, Github, Globe, Eye } from 'lucide-react';
import { Button } from './components/Button';
import { ShowcaseToggle } from './components/ShowcaseToggle';
import { motion } from 'motion/react';

// Danh sách các ảnh trong thư mục /public/showcase/echoo/
// Bạn có thể sửa tên file trong mảng này cho phù hợp với thực tế.
const SHOWCASE_IMAGES = [
  '01_Hero.jpg',
  '02_Intro.jpg'
];

// Sub-component cho các khối cần animation khi cuộn
const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Sub-component hiển thị ảnh
const SectionImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full mt-12 rounded-[24px] overflow-hidden bg-bg-secondary/20 shadow-xl border border-btn-border/20"
  >
    <img
      src={`/showcase/echoo/${src}`}
      alt={alt}
      className="w-full h-auto object-cover block"
      loading="lazy"
    />
  </motion.div>
);

const BackToHomeButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="group flex items-center gap-2 text-[#5A6272] hover:text-[#1D1D1D] transition-colors text-[20px]"
    >
      <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
      Back to home
    </button>
  );
};

const EchooShowcase: React.FC = () => {
  const navigate = useNavigate();

  const [index, setIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const showcaseImages = ["/showcase/echoo/Echoo1.5.png", "/showcase/echoo/Echoo2.5.png"];

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkWidth = () => {
      // Nếu màn hình < 1450px thì bật chế độ Slide 1 ảnh
      setIsMobile(window.innerWidth < 1450);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);

    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  return (
    <div className="bg-[#F6F6F6] min-h-screen w-full">
      <main className="w-full text-text-primary pb-32 font-medium bg-[#F6F6F6]">
        {/* SMART HYBRID HERO: DUAL-SHOW (>1450PX) VS AUTO-FADE (<1450PX) */}
        <section className="w-full pt-8 pb-10 flex justify-center overflow-hidden">
          {!isMobile ? (
            /* Màn hình LỚN: Hiện cả 2 ảnh song song */
            <div className="flex gap-3 justify-center w-full max-w-[1412px]">
              {showcaseImages.map((src) => (
                <img
                  key={src}
                  src={src}
                  className="w-[700px] h-[442px] rounded-2xl shadow-sm object-cover bg-white"
                  alt="Echoo Dual Display"
                />
              ))}
            </div>
          ) : (
            /* Màn hình NHỎ: Chạy Auto-Fade 1 ảnh */
            <div className="w-full max-w-[700px] px-6 md:px-0">
              <div className="relative w-full aspect-[700/442] md:h-[442px] overflow-hidden rounded-2xl shadow-sm bg-white">
                {showcaseImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Echoo Slide ${i}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === i ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* --- 2. GRID NỘI DUNG 700PX --- */}
        <div className="max-w-[700px] mx-auto px-6 w-full mt-6">
          {/* 1. Nút Back to home */}
          <div className="mb-6">
            <BackToHomeButton />
          </div>

          {/* 2. Logo: Height 24px, Width Auto, mb-4 = 16px gap xuống title */}
          <div className="mb-4">
            <img 
              src="/showcase/echoo/echoo_logo.png" 
              alt="Echoo Logo" 
              className="h-[24px] w-auto object-contain" 
            />
          </div>

          {/* 3. Title: Laptop 24px, Mobile 20px, Medium 500, mb-2 */}
          <h1 className="text-[20px] md:text-[24px] font-medium leading-tight text-text-primary mb-2">
            Echoo App — Anonymous Confession Platform
          </h1>

          {/* 4. Subtitle: Laptop 20px, Mobile 16px, LH 22px */}
          <p className="text-[16px] md:text-[20px] leading-[22px] text-text-secondary">
            Echoo is a confessional app for people aged 16-35 who want to share secrets anonymously but safely. 
            Echoo isn't a "drama forum" like Reddit/Whisper. It's an "emotional outlet" - share, feel lighter, move on.
          </p>
          
          <div className="flex gap-3 mt-8">
            <button 
              onClick={() => window.open('https://www.myechoo.xyz/', '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-fit"
            >
              <Monitor className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
              Visit website
            </button>
            <button 
              onClick={() => window.open('https://github.com/nomnom58/untold', '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-fit"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
              View Github
            </button>
          </div>


          <video 
            src="/showcase/echoo/echoo-record.mp4" 
            autoPlay loop muted playsInline 
            className="w-full h-auto mt-12 mb-12 block shadow-[0_0_0_8px_#DAD6CF]" 
            style={{ borderRadius: '0px' }} 
          />


        {/* THE STRATEGY SECTION */}
          <section>
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">The Strategy</h2>

              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img src="/showcase/echoo/header.png" alt="Question Icon" className="w-8 h-8 shrink-0" />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  What’s Echoo and Why does it exist?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img
                  src="/showcase/echoo/echoo_favicon.png"
                  alt="Echoo Favicon"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <div className="flex-1">
                  <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    Echoo is a confessional app for people aged 16-35 who want to share secrets anonymously but safely.<br /><br />
                    They can't tell friends (privacy), can't post on social media (family sees), and existing confession apps are toxic. Echoo isn't a "drama forum" like Reddit/Whisper. It's an "emotional outlet" - share, feel lighter, move on.
                  </p>
                  <div className="space-y-2">
                    <ShowcaseToggle title="Who's behind Echoo?">
                      I’m Quan. I’m solo founder of Echoo. I identified the problem, designed the product, coded it, and marketed it. Solo-built from A-Z: product strategy, UI/UX, full-stack engineering, marketing.
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Who uses Echoo?">
                      Mostly 16-35 year-olds. They want validation from strangers, but need anonymity and safety. They're scared of judgment, not seeking debate.
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Echoo's product positioning">
                      Need: Wants validation but fears judgment from acquaintances.<br />
                      Pain: Fear of being identified as an acquaintance lurking on Facebook.
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Competitive Audit: Reddit/Whisper">
                      <div className="text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] text-[#575757] font-[500]">
                        <ul className="list-disc pl-5 mt-2">
                          <li>Reddit/FB Groups: Spread drama, manipulate the crowd, prone to toxicity.</li>
                          <li>Whisper: Algorithm easily diluted, high toxicity.</li>
                          <li>Echoo's Pivot: Disables comments to completely eliminate offensive language, only retaining reactions to acknowledge emotions.</li>
                        </ul>
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
          {/* SYSTEM ARCHITECTURE SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">System Architecture</h2>

              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img src="/showcase/echoo/header.png" alt="Question Icon" className="w-8 h-8 shrink-0" />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  How is Echoo built? What's under the hood?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img
                  src="/showcase/echoo/echoo_favicon.png"
                  alt="Echoo Favicon"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <div className="flex-1">
                  <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    <p className="mb-2">Echoo uses a clean architecture:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>User scrolls (swipe integration)</li>
                      <li>Client tracks what you've seen (localStorage)</li>
                      <li>Server filters out old posts (PostgreSQL RPC)</li>
                      <li>Database enforces anonymity (Supabase RLS)</li>
                      <li>Feed displays smoothly (60fps, no loading)</li>
                    </ul>
                    <p className="mt-4">Result: Instant, smooth, private experience.</p>
                  </div>

                  <ShowcaseToggle title="System Architecture (How the pieces talk)">
                    <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                      User Interaction (Swipe/Read) <br/>
                      ↓ <br/>
                      Client Logic (Debounce & LocalStorage Seen-ID) <br/>
                      ↓ <br/>
                      Request (PageIndex + Seen-IDs) <br/>
                      ↓ <br/>
                      Edge/Server (Supabase RPC duplicate post filtering) <br/>
                      ↓ <br/>
                      Security Layer (RLS protects anonymous read/write rights) <br/>
                      ↓ <br/>
                      Response (Clean Data) <br/>
                      ↓ <br/>
                      UI (Infinite Scroll)
                    </div>
                  </ShowcaseToggle>
                </div>
              </div>
            </FadeIn>
          </section>
  {/* TECHNICAL DECISIONS SECTION */}
  <section className="mt-12">
    <FadeIn>
      <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">Technical Decisions</h2>

      {/* Question Row */}
      <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
        <img src="/showcase/echoo/header.png" alt="Question Icon" className="w-8 h-8 shrink-0" />
        <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
          What technical decisions did you make? and why?
        </p>
      </div>

      {/* Answer Row */}
      <div className="flex items-start gap-[8px] md:gap-[16px]">
        <img
          src="/showcase/echoo/echoo_favicon.png"
          alt="Echoo Favicon"
          className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
        />
        <div className="flex-1">
          <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
            <p className="mb-2">Three big decisions shaped the whole thing.</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Zero‑Latency Feed: Batch‑prefetch + client‑side dedup → 60fps swipe UX, no loading skeletons</li>
              <li>Stateless Privacy: No user database, just RLS rules → Truly anonymous, even if hacked</li>
              <li>Cost‑Optimized: Database‑side logic consolidation → $0 fixed cost, scales thousands concurrent</li>
            </ul>
          </div>
          <div className="space-y-2">
            <ShowcaseToggle title="Decision 1: UX Logic - How Batch-prefetching eliminates Loading Skeletons for 60fps swipe">
              <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                Why it matters: Users see loading = they bounce <br/>
                My approach: Instead of "scroll → wait → load → show" <br/>
                Do this: "Prefetch next 9 posts while reading current"<br/>
                How:<br/>
                <ul className="list-disc pl-5 mt-2 mb-2">
                  <li>Client sends: "I've already seen these posts [uuid1, uuid2...]"</li>
                  <li>Server sends back: Only new ones</li>
                  <li>Result: Instant content, 60fps swipe (tested on entry-level phones)</li>
                </ul>
                Trade-off: Need to manage prefetch timing (don't prefetch too early)
              </div>
            </ShowcaseToggle>
            <ShowcaseToggle title="Decision 2: Security - Implementing a 'Database-less' Identity model via Supabase RLS">
              <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                Why it matters: Anonymous platforms need real security <br/>
                Traditional approach: Store user profiles → encryption → hope it works <br/>
                My approach: Don't store user profiles at all <br/>
                How:<br/>
                <ul className="list-disc pl-5 mt-2 mb-2">
                  <li>Identity lives in browser (localStorage)</li>
                  <li>Server never sees it</li>
                  <li>Supabase RLS enforces: "Anyone can read, but only post if they have local identity"</li>
                </ul>
                Even if hacker breaches frontend → database says "no" <br/>
                Result: Truly anonymous. No user data to leak.
              </div>
            </ShowcaseToggle>
            <ShowcaseToggle title="Decision 3: Efficiency - Reducing data payload by 70% using Database-level filtering (RPC)">
              <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                Why it matters: Bandwidth = battery life on mobile <br/>
                Bad approach: Fetch all confessions → filter on phone Problem: Huge payload, slow, drains battery <br/>
                Good approach: Push filtering to database (PostgreSQL RPC) <br/>
                <ul className="list-disc pl-5 mt-2 mb-2">
                  <li>Server does: Filter seen-IDs, rank by Ladder Rule</li>
                  <li>Client gets: Only relevant posts</li>
                </ul>
                Result: 70% smaller payload. Scales infinite. Saves battery.
              </div>
            </ShowcaseToggle>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>

          {/* PRODUCT STRATEGY SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">Product Strategy</h2>
              
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img src="/showcase/echoo/header.png" alt="Question Icon" className="w-8 h-8 shrink-0" />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  How did you approach product decisions? What's your philosophy?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img 
                  src="/showcase/echoo/echoo_favicon.png" 
                  alt="Echoo Favicon" 
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0" 
                />
                <div className="flex-1">
                  <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    <p className="mb-2">I made 1 core choice: Positioning first, everything else follows.</p>
                    <p className="mb-2">"Echoo = \"emotional outlet\", not \"drama forum\""</p>
                    <p className="mb-2">This decision ripples through:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>No comments (prevents toxic threads)</li>
                      <li>Contribution Barrier (filters quality)</li>
                      <li>Ladder Rule (fair visibility, not viral)</li>
                    </ul>
                    <p className="mt-4">Every design choice reinforces the same positioning.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <ShowcaseToggle title="The Paradox: Why disabling comments is the only way to kill Toxicity & Bots">
                      <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                        The Paradox: <br/>
                        Traditional social platforms optimize for "engagement" (likes, comments, views). More engagement = more visible.<br/>
                        But this creates toxicity:<br/>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>Controversial confessions go viral</li>
                          <li>Comments on secrets = judgment</li>
                          <li>Users regret sharing</li>
                        </ul>
                        Why can't Echoo do the same? If Echoo chases engagement metrics, it becomes Reddit/Whisper = I lose.<br/> <br/>
                        
                        The Bold Decision: <br/>
                        Remove comments entirely. Keep only reactions (❤️ 🔄).<br/>
                        Why this works:<br/>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>User feels validated by hearts (50 people liked my confession)</li>
                          <li>No fear of being attacked in comments</li>
                          <li>No moderation nightmare</li>
                        </ul>
                        
                        Psychology shift: <br/>
                        Comments are for debate ("Why did you do that?") Reactions are for support ("You're not alone")<br/>
                        Echoo = support platform. <br/><br/>
                        
                        To prevent bots (since no comments = less engagement): Contribution Barrier: Must post 1 confession to unlock reactions <br/>
                        Why this works for anti-spam: <br/>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>Bots won't craft realistic confessions (too expensive)</li>
                          <li>Real users become stakeholders (they posted)</li>
                          <li>100% bot elimination, $0 cost (no NLP filters)</li>
                        </ul>
                        
                        Trade-off: <br/>
                        <ul className="list-disc pl-5 mt-2">
                          <li>High friction kills 60% casual visitors</li>
                          <li>But remaining users are much higher quality</li>
                          <li>Proof: 1 user posted despite friction = concept works</li>
                        </ul>
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Content Engineering: Scaling deep confessions via an AI-Assisted Pipeline">
                      <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                        The Dilemma: <br/>
                        Option A: Reddit-style light topics "What's your favorite memory?" "Valentine plans?" <br/>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>Pros: Easy to find content on Reddit</li>
                          <li>Cons: Kills emotional outlet positioning</li>
                          <li>Result: Becomes Reddit clone (lose)</li>
                        </ul>
                        
                        Option B: Confession-style deep topics "A secret I've never told anyone" "Guilt I carry" <br/>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>Pros: Reinforces emotional outlet positioning</li>
                          <li>Cons: Hard to find/create content</li>
                          <li>Result: Stays true to positioning (win)</li>
                        </ul> 
                        
                        Decision: Option B (harder but right) <br/><br/>
                        
                        How I solve "hard to find content": AI-Assisted Content Pipeline: <br/>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Gemini: Generate confession topics</li>
                          <li>Claude: Write confessions (match anonymity voice)</li>
                          <li>Manual review: Ensure quality</li>
                        </ul>
                        <br />
                        Result: 50-100 quality confessions/week without manual labor
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* TRADE-OFF SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">Trade-off</h2>
              
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img src="/showcase/echoo/header.png" alt="Question Icon" className="w-8 h-8 shrink-0" />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  What are the trade-offs? What breaks if things get bigger?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img 
                  src="/showcase/echoo/echoo_favicon.png" 
                  alt="Echoo Favicon" 
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0" 
                />
                <div className="flex-1">
                  <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    <p className="mb-2">3 major trade-offs exist. I chose to accept them:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Content Exhaustion: Users see \"End Card\" quickly (because Seen-ID blocks old posts) → Solved by: Constant content seeding</li>
                      <li>Conversion Hit: High friction kills casual users → Accepted because: Remaining users are higher quality</li>
                      <li>Scaling Costs: $0 now, but paid tier needed at 10K+ users → Plan: Bootstrap revenue before costs hit</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <ShowcaseToggle title="Trade-off 1: Content Exhaustion">
                      <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                        The Problem: <br/>
                        Seen-ID system blocks old posts once you've read them. <br/>
                        If new/hot posts don't flow in constantly → User hits "End Card" fast. <br/>
                        <br/>
                        Why this matters: <br/>
                        User thinks: "No new content" → bounce <br/>
                        <br/>
                        My solution: <br/>
                        <ul className="list-disc pl-5 mt-2 mb-2">
                          <li>Content seeding pipeline (50-100/week guaranteed)</li>
                          <li>Keep feed always fresh</li>
                        </ul>
                        <br />
                        If this breaks: Need to increase content production <br/>
                        Or: Allow users to "reset" their feed (see older posts again)
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Trade-off 2: Conversion Sacrifice">
                      <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                        The Problem: Contribution Barrier = high friction "Want to like? First, post a confession" <br/>
                        Consequence: <br/>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>Day-1: 1000 visits</li>
                          <li>Can see confessions: 1000 people</li>
                          <li>Can post: 1000 people</li>
                          <li>Click "Like": 1000 people ready to post</li>
                          <li>Actually post: ~400 people (60% bounce)</li>
                          <li>Now can react forever: 400 people (quality subset)</li>
                        </ul>
                        Why I accept this: 400 engaged users &gt; 1000 casual users Retention curves will prove this <br/>
                        If this breaks: A/B test: Frictionless version vs current Measure Day-7 retention → see which wins.
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Trade-off 3: Cost at Scale">
                      <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                        Current: $0/month (serverless free tiers) <br/>
                        At 10K users: <br/>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>Supabase storage → paid tier (~$25-50/mo)</li>
                          <li>Vercel bandwidth → still free (generous limits)</li>
                        </ul>
                        At 100K users:<br/>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>Infrastructure costs rise</li>
                        </ul>
                        My plan: Don't scale beyond free tier unless revenue exists Bootstrap revenue (ads? premium? donations?) Before costs become problem. <br/>
                        Philosophy: Design for $0 first. Optimize costs only when revenue exists.
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* THE PIVOT & LESSONS SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">The Pivot & Lessons</h2>
              
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img src="/showcase/echoo/header.png" alt="Question Icon" className="w-8 h-8 shrink-0" />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  What’s the current status? What did you learn?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img 
                  src="/showcase/echoo/echoo_favicon.png" 
                  alt="Echoo Favicon" 
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0" 
                />
                <div className="flex-1">
                  <div className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#575757] font-[500] mb-[16px]">
                    Phase 1 (Now): Validation <br/>
                    <ul className="list-disc pl-5 mt-2 mb-4">
                      <li>33 views, 6 clicked confession, 1 posted</li>
                      <li>Proves: Friction-driven quality works ✓</li>
                      <li>Bottleneck: Need more traffic to measure real metrics</li>
                    </ul>
                    <br />
                    Phase 2 (Next 4 weeks): <br/>
                    <ul className="list-disc pl-5 mt-2 mb-4">
                      <li>Content seeding: 50-100 confessions (AI pipeline)</li>
                      <li>Marketing: paid traffic (Reddit / Tiktok)</li>
                      <li>Once at 1000+ users: Measure retention curves</li>
                    </ul>
                    <br />
                    4 Failed Products Taught Me: <br/>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Problem framing matters (don't build without validation)</li>
                      <li>Clear positioning &gt; feature list</li>
                      <li>Values-driven &gt; metric-driven</li>
                      <li>UX-first &gt; tech-first</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <ShowcaseToggle title="Phase 1: What 33 Users Told Me">
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        Metrics: 33 views → 6 clicked → 1 posted<br /><br />
                        What it proves:<br />
                        ✓ At least 1 person believed in concept<br />
                        ✓ That person invested effort (wrote confession)<br />
                        ✓ Despite high friction (must post to unlock)<br /><br />
                        Hypothesis: \"Contribution Barrier works\" = VALIDATED<br />
                        What I can't measure yet:<br />
                        ✗ Retention (need 100+ users with activity)<br />
                        ✗ Repeat posting (need cohort data)<br />
                        ✗ Algorithm effectiveness (need engagement signal)<br /><br />
                        So next: Scale to 1000+ users, then optimize
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Competitive Context: Reddit vs Whisper">
                      <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                        Reddit: <br/>
                        <ul className="list-disc pl-5 mt-1 mb-4">
                          <li>Strength: Discussion, community Q&A</li>
                          <li>Weakness: Comments enable flame wars on sensitive topics</li>
                          <li>Strategy: Engagement-first, toxicity is accepted cost</li>
                        </ul>
                        Whisper:<br/>
                        <ul className="list-disc pl-5 mt-1 mb-4">
                          <li>Strength: Anonymous, viral confessions</li>
                          <li>Weakness: Algorithm makes controversial = viral = toxic</li>
                          <li>Strategy: Engagement-first (like Reddit)</li>
                        </ul>
                        Echoo:<br/>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Strength: Emotional outlet (safety first)</li>
                          <li>Weakness: Harder to acquire users (no engagement loop)</li>
                          <li>Strategy: Quality first (accept lower growth rate)</li>
                        </ul>
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="4 Failed Products → Echoo Lessons">
                      <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                        Product 1: Failed <br/>
                        Lesson: Built without understanding user problem <br/>
                        → Echoo: Started with "Why do people need anonymous platforms?" <br/>
                        <br/>
                        Product 2: Failed <br/>
                        Lesson: Too many features, no clear positioning <br/>
                        → Echoo: One positioning ("emotional outlet"), everything else serves it <br/>
                        <br/>
                        Product 3: Failed <br/>
                        Lesson: Chased engagement metrics (like everyone) <br/>
                        → Echoo: Chase retention metrics + user safety instead <br/>
                        <br/>
                        Product 4: Failed <br/>
                        Lesson: Technical solution first (tech tail wagging design dog) <br/>
                        → Echoo: UX first (60fps matters), tech supports it <br/>
                        <br/>
                        Pattern: Each failure taught what to avoid <br/>
                        Echoo incorporates all 4 learnings
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="The Cost Breakdown: How I Built $0 MVP">
                      <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                        Development: <br/>
                        <ul className="list-disc pl-5 mt-1 mb-4">
                          <li>AI Studio (Gemini): $0</li>
                          <li>Cursor (IDE): $20</li>
                          <li>ChatGPT (assistance): $5</li>
                        </ul>
                        Infrastructure: <br/>
                        <ul className="list-disc pl-5 mt-1 mb-4">
                          <li>Supabase (database): $0 (free tier)</li>
                          <li>Vercel (hosting): $0 (free tier)</li>
                          <li>Domain (Godaddy): $2</li>
                        </ul>
                        Marketing: <br/>
                        <ul className="list-disc pl-5 mt-1 mb-4">
                          <li>Initial content creation: $20</li>
                        </ul>
                        Total: ~$47 <br/>
                        Philosophy: Don't invest money until product-market fit proven Design system for $0 cost, scale later if profitable
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Footer Divider */}
          <div className="mt-12 h-[1px] bg-[#D3D3D3]" />

          {/* CTA Footer Section */}
          <section className="mt-12 flex flex-col items-start pb-12">
            <h2 className="text-[24px] text-[#1D1D1D] font-medium">Now, discover Echoo for yourself</h2>
            <p className="mt-2 text-[20px] leading-[26px] text-[#575757] font-medium">
              Huge thanks to Quan for sharing the story behind Echoo and the details on the building product. Now test it out yourself and see if it's a great fit for you.
            </p>
            <div className="mt-6 flex flex-row gap-4 items-center">
              <button 
                onClick={() => window.open('https://www.myechoo.xyz/', '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-fit"
              >
                <Monitor className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                Visit website
              </button>
              <button 
                onClick={() => window.open('https://github.com/nomnom58/untold', '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-fit"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                View Github
              </button>
            </div>
          </section>

          {/* OTHER PROJECTS LINE STROKE */}
          <div className="h-[1px] w-full bg-[#D3D3D3] my-12" />

          {/* OTHER PROJECT SECTION */}
          <section className="flex flex-col items-start pb-24">
            <h2 className="text-[32px] text-[#0360FF] font-[500] pb-8">Other Project</h2>
            <div className="w-full">
              <h3 className="text-[16px] leading-[22px] md:text-[24px] md:leading-[32px] text-[#1D1D1D] font-[500] pb-2">
                Quan's Portfolio - My Portfolio Website
              </h3>
              <p className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#5A6272] font-[500] pb-6">
                Custom-built high-performance portfolio using React + GSAP, solving complex mobile animation challenges without bloat. Perfect Lighthouse 100/100/100/100 with sub-second load time.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <button 
                  onClick={() => navigate('/showcase/quans-portfolio')}
                  className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-full md:w-fit"
                >
                  <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                  Read showcase
                </button>
                <button 
                  onClick={() => window.open('https://quans-port-2.vercel.app/', '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-full md:w-fit"
                >
                  <Globe className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                  Visit Website
                </button>
                <button 
                  onClick={() => window.open('https://github.com/nomnom58/quans-port-2', '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-full md:w-fit"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                  View Github
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EchooShowcase;
