import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Monitor, Github, Globe, Eye } from 'lucide-react';
import { Button } from './components/Button';
import { ShowcaseToggle } from './components/ShowcaseToggle';
import { motion } from 'motion/react';

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

const QuansPortfolio: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F6F6] min-h-screen w-full">
      <main className="w-full px-5 md:px-0 md:w-[700px] mx-auto text-text-primary pb-32 font-medium">
        {/* Top Section */}
        <div className="pt-8 md:pt-12 flex flex-col items-start">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-[#5A6272] hover:text-[#1D1D1D] transition-colors text-[20px] mb-[24px]"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </button>

          <img
            src="/showcase/quan-portfolio/quan_logo.png"
            alt="Quan's Portfolio Logo"
            className="h-[24px] w-auto mb-[12px]"
          />
          <h1 className="text-[20px] md:text-[24px] text-[#1D1D1D] mb-[8px]">My portfolio showcase</h1>
          <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[24px]">
            My portfolio isn't just a pretty website. It's a filter system optimized for three completely different types of people who will visit it.
          </p>

          <div className="flex flex-row gap-4 items-center">
            <button 
              className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-fit"
            >
              <Monitor className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
              Visit website
            </button>
            <button 
              className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-fit"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
              View Github
            </button>
          </div>

          {/* PORTFOLIO RECORD VIDEO */}
          <div className="w-full py-[48px]">
            <video 
              src="/showcase/quan-portfolio/port-record.webm"
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full max-w-[700px] mx-auto h-auto rounded-[16px] shadow-sm"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-24">
          
          {/* THE STRATEGY SECTION */}
          <section>
            <FadeIn>
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img
                  src="/showcase/quan-portfolio/ask.png"
                  alt="Avatar"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  Who is this portfolio for? Why design for three audiences?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img
                  src="/showcase/quan-portfolio/portfolio_favicon.png"
                  alt="Favicon"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <div className="flex-1">
                  <p className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    Here's the thing: my portfolio isn't just a pretty website. It's a filter system optimized for three completely different types of people who will visit it.<br /><br />
                    HR doesn't care about animations - they want name, role, contact button, done in 5 seconds. Design leaders want to see aesthetic finesse and interaction details. Tech leaders want to understand the WHY behind every decision. These three groups have opposite needs.<br /><br />
                    Most portfolios pick one. I designed for all three without compromising performance.
                  </p>
                  <div className="space-y-2">
                    <ShowcaseToggle title="The Three Audiences & What They Need">
                      <div className="font-medium text-[14px] leading-[22px] md:text-[16px] text-[#575757] space-y-4">
                        <div>
                          <p className="font-bold text-[#1D1D1D] mb-2">1. HR (Fast-track scanning):</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Cares about:</strong> Basic info (name, role, links)</li>
                            <li><strong>Time budget:</strong> {'<'} 5 seconds</li>
                            <li><strong>Strategy:</strong> Hero section with clear hierarchy
                              <ul className="list-[circle] ml-6 mt-1 space-y-1">
                                <li>Name + Role visible immediately</li>
                                <li>Contact button prominent</li>
                                <li>No distractions, no auto-play videos</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-bold text-[#1D1D1D] mb-2">2. Design Leaders (Aesthetic-first):</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Cares about:</strong> Animation quality, visual polish, design thinking</li>
                            <li><strong>Time budget:</strong> 30 seconds - 2 minutes</li>
                            <li><strong>Strategy:</strong> Logo Elevator animation as "signature"
                              <ul className="list-[circle] ml-6 mt-1 space-y-1">
                                <li>Proves eye for detail</li>
                                <li>Leads them into case studies</li>
                                <li>Shows design maturity</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-bold text-[#1D1D1D] mb-2">3. Tech Leaders & PMs (Logic-first):</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Cares about:</strong> Technical decisions, cost, scalability, product thinking</li>
                            <li><strong>Time budget:</strong> 5-10 minutes deep dive</li>
                            <li><strong>Strategy:</strong> Every design choice has a technical explanation
                              <ul className="list-[circle] ml-6 mt-1 space-y-1">
                                <li>Why React over Vue?</li>
                                <li>Why GSAP over Framer Motion?</li>
                                <li>How does it scale?</li>
                                <li>What's the cost model?</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* PERFORMANCE & CONTENT HIERARCHY SECTION */}
          <section className="mt-12">
            <FadeIn>
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img
                  src="/showcase/quan-portfolio/ask.png"
                  alt="Avatar"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  How do you balance making it look beautiful with keeping it fast?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img
                  src="/showcase/quan-portfolio/portfolio_favicon.png"
                  alt="Favicon"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <div className="flex-1">
                  <p className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    Most portfolio builders use Framer or Wix because they're easy. But they're slow, expensive, and limit what you can actually build.<br />I coded my portfolio from scratch with one principle: "Less code, more performance." The animations are smooth (60fps), the page loads in under 1 second, and it costs $0/month to run.<br /><br />Yet it still achieves Lighthouse 100/100.<br />The trick is choosing the right tools. Not the flashiest, the smartest.
                  </p>
                  <div className="space-y-2">
                    <ShowcaseToggle title="Information Hierarchy: How I Organized Content">
                      <div className="font-medium whitespace-pre-line text-[14px] leading-[22px] md:text-[16px] text-[#575757]">
                        The problem with most portfolios: They throw everything at visitors at once. Loading-bar animation, auto-play video, 10 project cards... visitor gets overwhelmed. My approach: Create a "funnel" that respects different audience needs.<br /><br />Hero Section:<br />↓ (HR sees name/role, leaves happy)<br />↓ (Design leader sees Logo animation, gets intrigued)<br />↓ (Tech leader scrolls to case studies)<br /><br />Each section is self-contained. You can scan in 5 seconds or spend 10 minutes deep-diving. No information wasted. Nothing redundant.
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* TECH STACK SECTION */}
          <section className="mt-12">
            <FadeIn>
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img
                  src="/showcase/quan-portfolio/ask.png"
                  alt="Avatar"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  What technology stack did you choose? And why those specific tools?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img
                  src="/showcase/quan-portfolio/portfolio_favicon.png"
                  alt="Favicon"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <div className="flex-1">
                  <div className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    I built with React for component architecture, GSAP for animations, and Tailwind for styling. Not because they're trendy, but because each one solves a specific problem better than alternatives.
                    <br /><br />
                    React lets me manage the portfolio as independent, reusable components. GSAP gives me deep timeline control without bloating the bundle (unlike Framer Motion). Tailwind's JIT compiler means I only ship CSS I actually use - nothing wasted. <br />
                    All hosted on Vercel for free. No servers, no monthly costs.
                  </div>
                  <div className="space-y-2">
                    <ShowcaseToggle title="Why React? (Component Architecture)">
                      <div className="font-medium text-[14px] leading-[22px] md:text-[16px] text-[#575757] whitespace-pre-line">
                        Alternative: Just write vanilla HTML/CSS/JS<br />Problem: Hard to manage 10+ sections if they share similar patterns. Code duplication everywhere.<br /><br />My choice: React components<br />Benefit: Each section (Hero, Project Card, CTA) is a reusable block. Change one component → changes everywhere. Scalability: Easy to add new projects without repeating code.<br />Trade-off: React adds ~40KB to bundle. But Vite's optimizations + lazy loading means First Contentful Paint (FCP) is still fast.<br />All hosted on Vercel for free. No servers, no monthly costs.
                      </div>
                    </ShowcaseToggle>

                    <ShowcaseToggle title="Why GSAP? (Animation Control)">
                      <div className="font-medium text-[14px] leading-[22px] md:text-[16px] text-[#575757]">
                        <ul className="list-disc pl-5 mb-4">
                          <li>Alternative 1: CSS animations Problem: Can't coordinate multiple animations together (Logo zoom + Headline fade) Hard to control timing between sections.</li>
                          <li>Alternative 2: Framer Motion Problem: Adds 80KB to bundle. Overkill for a static portfolio.</li>
                        </ul>
                        My choice: GSAP + ScrollTrigger Benefit: Deep timeline control. I can say "when user scrolls to 50%, logo should be at X position, headline should have Y opacity." Result: Smooth, coordinated animations at 60fps. Cost: 40KB lightweight library.
                        <br />
                        Trade-off: Need to understand GSAP syntax (steeper learning curve than Framer).
                      </div>
                    </ShowcaseToggle>

                    <ShowcaseToggle title="Why Tailwind? (Styling Strategy)">
                      <div className="font-medium text-[14px] leading-[22px] md:text-[16px] text-[#575757]">
                        <ul className="list-disc pl-5 mb-4">
                          <li>Alternative 1: CSS-in-JS (styled-components) Problem: Additional runtime cost. Larger bundle.</li>
                          <li>Alternative 2: Hand-written CSS Problem: Repetitive. Hard to maintain consistency (padding, colors, spacing).</li>
                        </ul>
                        My choice: Tailwind CSS with JIT compiler Benefit: Write className="px-8 py-4 bg-blue-500" instead of custom CSS. JIT generates only classes I use (no bloat). Consistency: All spacing follows a scale, all colors are predefined. Result: Smaller CSS payload + faster styling.
                        <br />
                        Trade-off: Less flexibility for "one-off" custom designs.
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* LOGO ELEVATOR ANIMATION SECTION */}
          <section className="mt-12">
            <FadeIn>
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img
                  src="/showcase/quan-portfolio/ask.png"
                  alt="Avatar"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  The logo animation was tricky. How did you solve the technical challenges?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img
                  src="/showcase/quan-portfolio/portfolio_favicon.png"
                  alt="Favicon"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <div className="flex-1">
                  <div className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    The Logo Elevator animation (logo flying from bottom to headline) sounds simple, but on mobile it breaks in two different ways.

                    <ul className="list-disc pl-5 mt-2 mb-2">
                      <li>First problem: On mobile, the address bar shows/hides constantly, changing viewport height. If I calculate logo position using viewport percentages, it jumps around.</li>
                      <li>Second problem: When logo scales down (80px → 32px), the space it takes up shrinks, pushing the headline up. Layout shift nightmare.</li>
                    </ul>

                    I solved both with one elegant system: "Basement Logic" + fixed container + GSAP coordination. Result: Zero layout shift, smooth 60fps animation on all devices.
                  </div>
                  <div className="space-y-2">
                    <ShowcaseToggle title="Problem #1: Viewport Shift (Address Bar Ghost)">
                      <div className="text-[14px] leading-[22px] md:text-[16px] text-[#575757] font-medium">
                        The Issue: On mobile, address bar appears/disappears → viewport height changes. If I use vh units (viewport height), logo position becomes unreliable. Example: Logo is at "bottom: 10vh". When address bar hides, viewport gets taller, so "10vh" now means a different pixel value. Logo jumps.
                        <br/><br/>
                        Traditional solution: Use media queries to adjust for different viewport heights. Problem: Mobile has 100+ different devices. Can't hardcode all combinations.
                        <br/><br/>
                        My solution: "Basement Logic" Instead of calculating from viewport, I create a huge Hero Section (125vh tall). This makes Hero a "stable anchor" regardless of address bar behavior. Logo sits at the bottom of this 125vh container (absolute bottom-10). Address bar jumps? Doesn't matter. Logo is locked to the Hero container, not viewport.
                        <br/><br/>
                        Result: Address bar can do whatever, logo stays in exact position relative to Headline.
                        <br/><br/>
                        Trade-off:
                        <ul className="list-disc pl-5 mt-2">
                          <li>Z-index management becomes complex (logo has to layer correctly with other sections)</li>
                          <li>Responsive tweaking needed for tablets/iPads (125vh might be too tall on iPad)</li>
                        </ul>
                      </div>
                    </ShowcaseToggle>

                    <ShowcaseToggle title="Problem #2: Logo Scaling Causes Layout Shift">
                      <div className="text-[14px] leading-[22px] md:text-[16px] text-[#575757] font-medium">
                        The Issue: <br/>
                        Logo starts at 80px. When you scroll, GSAP animates it down to 32px. By default, when something shrinks, the space it occupies shrinks too. This pushes the Headline below it upward. Layout Shift = bad for Lighthouse.
                        <br/><br/>
                        Traditional solution: Use CSS calc() to calculate space before animation runs. Problem: Complex math, easy to make mistakes, breaks on responsive screens.
                        <br/><br/>
                        My solution: Fixed Container <br/>
                        I wrap Logo in a fixed-height box (80px tall). 
                        Logo inside can scale to any size, but the 80px container never changes. Headline below stays put. No upward push.
                        <br/><br/>
                        Result: Logo scales smoothly without pushing other elements.
                        <br/><br/>
                        Trade-off:
                        <ul className="list-disc pl-5 mt-2">
                          <li>Visual inflexibility: If Logo needs to grow beyond 80px, container clips it</li>
                          <li>Whitespace issue: When Logo shrinks from 80px → 32px, the container has extra space (looks awkward if not designed carefully)</li>
                        </ul>
                      </div>
                    </ShowcaseToggle>

                    <ShowcaseToggle title="How They Connect: The Integrated Block">
                      <div className="text-[14px] leading-[22px] md:text-[16px] text-[#575757] font-medium">
                        The real magic: Instead of solving these 2 problems separately, I merged them into one "Integrated Block":
                        <br/><br/>
                        <ul className="list-disc pl-5 mb-4">
                          <li>The 125vh Hero is the anchor (solves viewport issue)</li>
                          <li>The 80px container sits inside it (solves scaling issue)</li>
                          <li>GSAP controls both as one unit during animation</li>
                        </ul><br/>
                        When user scrolls:<br/>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Entire block moves upward (coordinated)</li>
                          <li>Logo scales down within container (controlled)</li>
                          <li>Headline stays steady (no shift)</li>
                          <li>Result: CLS (Cumulative Layout Shift) = 0</li>
                        </ul>
                        <br/>
                        This is the kind of solution that seems obvious after you do it, but takes hours of debugging to discover.
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* PERFORMANCE OPTIMIZATION SECTION */}
          <section className="mt-12">
            <FadeIn>
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img
                  src="/showcase/quan-portfolio/ask.png"
                  alt="Avatar"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  You used react even though it's heavy. How did you keep lighthouse 100?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img
                  src="/showcase/quan-portfolio/portfolio_favicon.png"
                  alt="Favicon"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <div className="flex-1">
                  <div className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    React is heavier than vanilla HTML. That's a fact. But the trick isn't avoiding React, it's optimizing how you use it.
                    <br/><br/>
                    I used three techniques: Lazy loading (only load components when needed), bundle optimization with Vite (ship minimal JS), and strategic image optimization.
                    <br/><br/>
                    Result: Despite using React, First Contentful Paint is &lt;1 second, Lighthouse 100/100.
                    <br/><br/>
                    The lesson: The tool doesn't matter. How you use it does.
                  </div>
                  <div className="space-y-2">
                    <ShowcaseToggle title="Lazy Loading: Don't Load What You Don't See">
                      <div className="text-[14px] leading-[22px] md:text-[16px] text-[#575757] font-medium">
                        Problem: React bundles everything by default. Portfolio loads all components at once, even if user never scrolls to Projects section.
                        <br/><br/>
                        Solution: Code splitting + lazy loading
                        <ul className="list-disc pl-5 mt-2 mb-2">
                          <li>Hero section loads immediately (above the fold)</li>
                          <li>Projects section only loads when user scrolls near it</li>
                          <li>Case studies only load on demand</li>
                        </ul>
                        <br/>
                        Result: Initial page load is tiny (~50KB). Rest loads as needed.
                      </div>
                    </ShowcaseToggle>

                    <ShowcaseToggle title="Bundle Optimization with Vite">
                      <div className="text-[14px] leading-[22px] md:text-[16px] text-[#575757] font-medium">
                        Problem: Traditional build tools (Webpack) create bloated bundles. Even if you lazy load, remaining code is often redundant.
                        <br/><br/>
                        Solution: Vite
                        <ul className="list-disc pl-5 mt-2 mb-2">
                          <li>Faster build times (uses native ES modules)</li>
                          <li>Smarter tree-shaking (removes unused code)</li>
                          <li>Optimized output (smaller final bundle)</li>
                        </ul>
                        <br/>
                        Result: Main bundle ~100KB (React included). Compare to Framer: 200KB+ for similar result.
                      </div>
                    </ShowcaseToggle>

                    <ShowcaseToggle title="Image Optimization">
                      <div className="text-[14px] leading-[22px] md:text-[16px] text-[#575757] font-medium">
                        Problem: Portfolio has screenshots, animations, visuals. Images are heavy.
                        <br/><br/>
                        Solution:
                        <ul className="list-disc pl-5 mt-2 mb-2">
                          <li>Use WebP format (30% smaller than PNG)</li>
                          <li>Lazy load images (load when in viewport)</li>
                          <li>Responsive images (serve different sizes for mobile/desktop)</li>
                        </ul><br/>
                        Result: Images are optimized without visible quality loss.
                      </div>
                    </ShowcaseToggle>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* FINAL RESULT & ROI SECTION */}
          <section className="mt-12">
            <FadeIn>
              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img
                  src="/showcase/quan-portfolio/ask.png"
                  alt="Avatar"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#1D1D1D] font-medium">
                  What's the final result? Does it actually work?
                </p>
              </div>

              {/* Answer Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px]">
                <img
                  src="/showcase/quan-portfolio/portfolio_favicon.png"
                  alt="Favicon"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
                <div className="flex-1">
                  <div className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#575757] font-medium mb-[16px]">
                    Lighthouse 100/100 across all metrics (Performance, Accessibility, Best Practices, SEO). Page loads in under 1 second, even on slow 3G. Zero layout shifts during interactions. <br />
                    Costs $0/month to run on Vercel.
                    <br /><br />
                    More importantly: It converts. The design serves its three audiences without friction. <br />
                    HR finds contact info instantly. Design leaders get impressed by animations. Tech leaders understand the reasoning.
                  </div>
                  <div className="space-y-2">
                    <ShowcaseToggle title="Performance Metrics">
                      <div className="text-[14px] leading-[22px] md:text-[16px] text-[#575757] font-medium">
                        Google Lighthouse: <br />
                        ✓ Performance: 100/100 <br />
                        ✓ Accessibility: 100/100 <br />
                        ✓ Best Practices: 100/100 <br />
                        ✓ SEO: 100/100
                        <br /><br />
                        Core Web Vitals: <br />
                        ✓ Largest Contentful Paint (LCP): &lt;1.2s (good) <br />
                        ✓ First Input Delay (FID): 0ms (excellent) <br />
                        ✓ Cumulative Layout Shift (CLS): 0.0 (perfect) <br /><br />
                        Load time: &lt;1 second on 4G, &lt;3 seconds on 3G
                      </div>
                    </ShowcaseToggle>

                    <ShowcaseToggle title="Cost Structure: $0 Monthly">
                      <div className="text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] text-[#575757] font-[500]">
                        Hosting: Vercel (free tier)
                        <ul className="list-disc pl-5 mt-1 mb-2">
                          <li>Unlimited bandwidth</li>
                          <li>Automatic deployments</li>
                          <li>Global CDN</li>
                        </ul>
                        <br />
                        Database: None (static site)
                        <br />
                        Domain: Not included in cost calculation (assumed already owned)
                        <br />
                        Total monthly operational cost: $0
                      </div>
                    </ShowcaseToggle>

                    <ShowcaseToggle title="What Made This Possible">
                      <div className="text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] text-[#575757] font-[500]">
                        Minimalism: Portfolio doesn't need a database, admin panel, or backend. Static site optimization: Vercel is built for static sites (fast by default). Smart framework choices: React + Vite + Tailwind are all designed for minimal output.
                        <br /><br />
                        If I'd used Framer:<br />
                        <ul className="list-disc pl-5 mt-1 mb-2">
                          <li>Cost: $12-20/month</li>
                          <li>Load time: 1.5-2 seconds</li>
                          <li>Less control over animations</li>
                          <li>Locked into their ecosystem</li>
                        </ul>
                        <br />
                        My approach: Free, fast, and fully in my control.
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
            <h2 className="text-[20px] md:text-[24px] md:leading-tight text-[#1D1D1D] font-[500]">Now, discover quan&apos;s portfolio for yourself</h2>
            <p className="mt-2 text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#575757] font-[500]">
              Huge thanks to Quan for sharing the story behind your portfolio and the details on the building blocks. Now test it out yourself and see if it&apos;s a great fit for you
            </p>
            <div className="mt-6 flex flex-row gap-4 items-center">
              <button 
                onClick={() => window.open('https://quan.hoang.space/', '_blank')}
                className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-fit"
              >
                <Monitor className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                Visit website
              </button>
              <button 
                onClick={() => {}}
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
            <h2 className="text-[24px] md:text-[32px] text-[#0360FF] font-[500] pb-8">Other Project</h2>
            <div className="w-full">
              {/* Ảnh Minh họa Dự án Echoo */}
              <img 
                src="/showcase/quan-portfolio/echoo-screenshot.png" 
                alt="Echoo App Showcase" 
                className="w-full max-w-[700px] h-auto rounded-[16px] border-[2px] border-[#DAD6CF] mb-[24px] object-cover"
              />
              <h3 className="text-[20px] md:text-[24px] md:leading-[32px] text-[#1D1D1D] font-[500] pb-2">
                Echoo App - Anonymous Confession Platform
              </h3>
              <p className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#5A6272] font-[500] pb-6">
                Solo-built anonymous confessional app end-to-end: product strategy, UI/UX design, full-stack engineering, marketing. Positioned as emotional outlet platform (vs. drama forum paradigm).
              </p>
              
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <button 
                  onClick={() => navigate('/showcase/echoo')}
                  className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-full md:w-fit"
                >
                  <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                  Read showcase
                </button>
                <div className="grid grid-cols-2 md:flex md:gap-4 gap-2">
                  <button 
                    onClick={() => window.open('https://www.myechoo.xyz/', '_blank')}
                    className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-full md:w-fit"
                  >
                    <Globe className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                    Visit Website
                  </button>
                  <button 
                    onClick={() => window.open('https://github.com/nomnom58/untold', '_blank', 'noopener,noreferrer')}
                    className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-full md:w-fit"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                    View Github
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default QuansPortfolio;
