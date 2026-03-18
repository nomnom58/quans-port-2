import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Monitor, Github } from 'lucide-react';
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

const EchooShowcase: React.FC = () => {
  const navigate = useNavigate();

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
            src="/showcase/echoo/echoo_logo.png"
            alt="Echoo Logo"
            className="h-[24px] mb-[12px]"
          />
          <h1 className="text-[24px] text-[#1D1D1D] mb-[8px]">Anonymous Confession Platform</h1>
          <p className="text-[20px] text-[#5A6272] mb-[24px]">
            Echoo is a confessional app for people aged 16-35 who want to share secrets anonymously but safely.
          </p>

          <div className="flex flex-row gap-4 items-center">
            <Button text="Visit website" icon={Monitor} />
            <Button text="View Github" icon={Github} />
          </div>
        </div>

        <div className="mt-12 md:mt-24">



          {/* THE STRATEGY SECTION */}
          <section>
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">The Strategy</h2>

              {/* Question Row */}
              <div className="flex items-start gap-[8px] md:gap-[16px] mb-[16px]">
                <img
                  src="/showcase/echoo/portfolio_favicon.png"
                  alt="Quan's Avatar"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
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
                      Reddit/FB Groups: Spread drama, manipulate the crowd, prone to toxicity.<br />
                      Whisper: Algorithm easily diluted, high toxicity.<br />
                      Echoo's Pivot: Disables comments to completely eliminate offensive language, only retaining reactions to acknowledge emotions.
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
                <img
                  src="/showcase/echoo/portfolio_favicon.png"
                  alt="Quan's Avatar"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
                />
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
                    <div className="font-medium whitespace-pre-line">
                      User Interaction (Swipe/Read)
                      ↓
                      Client Logic (Debounce & LocalStorage Seen-ID)
                      ↓
                      Request (Page Index + Seen-IDs)
                      ↓
                      Edge/Server (Supabase RPC lọc trùng bài)
                      ↓
                      Security Layer (RLS bảo vệ quyền đọc/ghi ẩn danh)
                      ↓
                      Response (Clean Data)
                      ↓
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
        <img
          src="/showcase/echoo/portfolio_favicon.png"
          alt="Quan's Avatar"
          className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0"
        />
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
              <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                Why it matters: Users see loading = they bounce. Swiping should feel like local photos, not a web request. 60fps is the benchmark for mental comfort in "confessional" browsing.<br /><br />
                The Fix: Client prefetches the next 10 posts in the background. As the user swipes, the UI is already hydrated. We use a local ID cache to ensure zero duplicates even if the background fetch overlaps.<br /><br />
                Trade-off: Slightly higher initial RAM usage (negligible on modern phones) but infinitely smoother UX.
              </div>
            </ShowcaseToggle>
            <ShowcaseToggle title="Decision 2: Security - Implementing a 'Database-less' Identity model via Supabase RLS">
              <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                Why it matters: Anonymous platforms need real security. Traditional user tables link IDs to data – a huge risk for leaks.<br /><br />
                The Fix: Stateless Auth. Echoo generates a cryptographically secure token stored only on the device. Supabase Row Level Security (RLS) then validates requests based on this token without ever looking up a "User Record".<br /><br />
                Result: Truly anonymous. Even if the DB is hacked, there's no trail back to a specific person.
              </div>
            </ShowcaseToggle>
            <ShowcaseToggle title="Decision 3: Efficiency - Reducing data payload by 70% using Database-level filtering (RPC)">
              <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                Why it matters: Bandwidth = battery life on mobile. Sending common filter logic (like excluding seen IDs) back and forth wastes data.<br /><br />
                The Fix: Moved filtering logic from the Javascript client to a PostgreSQL View + RPC function. Instead of "Fetch all, filter local", the client says "Give me 10 I haven't seen".<br /><br />
                Result: 70% reduction in data payload per session. Blazing fast response times even on 3G.
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
                <img 
                  src="/showcase/echoo/portfolio_favicon.png" 
                  alt="Quan's Avatar" 
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0" 
                />
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
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        The Paradox: Traditional social platforms optimize for \"engagement\"... I lose.<br /><br />
                        The Bold Decision: Remove comments entirely. Keep only reactions (❤️ 🔄)... No moderation nightmare.<br /><br />
                        Psychology shift: Comments are for debate... Echoo = support platform.<br /><br />
                        Contribution Barrier: Must post 1 confession to unlock reactions... $0 cost (no NLP filters).<br /><br />
                        Trade-off: High friction kills 60% casual visitors... concept works.
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Content Engineering: Scaling deep confessions via an AI-Assisted Pipeline">
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        The Dilemma:<br /><br />
                        Option A: Reddit-style light topics... Result: Becomes Reddit clone (lose).<br /><br />
                        Option B: Confession-style deep topics... Result: Stays true to positioning (win).<br /><br />
                        Decision: Option B (harder but right)<br /><br />
                        How I solve \"hard to find content\": AI-Assisted Content Pipeline:<br />
                        1. Gemini: Generate confession topics<br />
                        2. Claude: Write confessions (match anonymity voice)<br />
                        3. Manual review: Ensure quality<br />
                        Result: 50-100 quality confessions/week without manual labor.
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
                <img 
                  src="/showcase/echoo/portfolio_favicon.png" 
                  alt="Quan's Avatar" 
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0" 
                />
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
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        The Problem: Seen-ID system blocks old posts once you've read them. If new/hot posts don't flow in constantly → User hits \"End Card\" fast.<br /><br />
                        Why this matters: User thinks: \"No new content\" → bounce.<br /><br />
                        My solution: Content seeding pipeline (50-100/week guaranteed). Keep feed always fresh.<br /><br />
                        If this breaks: Need to increase content production. Or: Allow users to \"reset\" their feed (see older posts again).
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Trade-off 2: Conversion Sacrifice">
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        The Problem: Contribution Barrier = high friction \"Want to like? First, post a confession\".<br /><br />
                        Consequence:<br />
                        - Day-1: 1000 visits<br />
                        - Can see confessions: 1000 people<br />
                        - Can post: 1000 people<br />
                        - Click \"Like\": 1000 people ready to post<br />
                        - Actually post: ~400 people (60% bounce)<br />
                        - Now can react forever: 400 people (quality subset).<br /><br />
                        Why I accept this: 400 engaged users &gt; 1000 casual users. Retention curves will prove this.<br /><br />
                        If this breaks: A/B test: Frictionless version vs current. Measure Day-7 retention → see which wins.
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="Trade-off 3: Cost at Scale">
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        Current: $0/month (serverless free tiers).<br /><br />
                        At 10K users:<br />
                        - Supabase storage → paid tier (~$25-50/mo)<br />
                        - Vercel bandwidth → still free (generous limits).<br /><br />
                        At 100K users: Infrastructure costs rise.<br /><br />
                        My plan: Don't scale beyond free tier unless revenue exists. Bootstrap revenue (ads? premium? donations?) before costs become problem.<br /><br />
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
                <img 
                  src="/showcase/echoo/portfolio_favicon.png" 
                  alt="Quan's Avatar" 
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] shrink-0" 
                />
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
                  <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                    <p className="mb-2">Phase 1 (Now): Validation<br />33 views, 6 clicked confession, 1 posted<br />Proves: Friction-driven quality works ✓<br />Bottleneck: Need more traffic to measure real metrics</p>
                    <p className="mb-2">Phase 2 (Next 4 weeks):<br />Content seeding: 50-100 confessions (AI pipeline)<br />Marketing: paid traffic (Reddit / Tiktok)<br />Once at 1000+ users: Measure retention curves</p>
                    <p className="mt-4 mb-2">4 Failed Products Taught Me:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
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
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        Reddit: Strength: Discussion, community Q&A. Weakness: Comments enable flame wars on sensitive topics. Strategy: Engagement-first, toxicity is accepted cost.<br /><br />
                        Whisper: Strength: Anonymous, viral confessions. Weakness: Algorithm makes controversial = viral = toxic. Strategy: Engagement-first (like Reddit).<br /><br />
                        Echoo: Strength: Emotional outlet (safety first). Weakness: Harder to acquire users (no engagement loop). Strategy: Quality first (accept lower growth rate).
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="4 Failed Products → Echoo Lessons">
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        Product 1: Failed → Lesson: Built without understanding user problem.<br />
                        Product 2: Failed → Lesson: Too many features, no clear positioning.<br />
                        Product 3: Failed → Lesson: Chased engagement metrics (like everyone).<br />
                        Product 4: Failed → Lesson: Technical solution first (tech tail wagging design dog).<br /><br />
                        Pattern: Each failure taught what to avoid. Echoo incorporates all 4 learnings.
                      </div>
                    </ShowcaseToggle>
                    <ShowcaseToggle title="The Cost Breakdown: How I Built $0 MVP">
                      <div className="font-medium whitespace-pre-line text-[16px] leading-[22px] md:text-[16px] md:leading-[22px] text-[#575757]">
                        Development: AI Studio (Gemini): $0, Cursor (IDE): $20, ChatGPT: $5.<br />
                        Infrastructure: Supabase: $0, Vercel: $0, Domain: $2.<br />
                        Marketing: Initial content: $20.<br /><br />
                        **Total: ~$47**<br /><br />
                        Philosophy: Don't invest money until product-market fit proven. Design system for $0 cost, scale later if profitable.
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
          <section className="mt-12 flex flex-col items-start pb-24">
            <h2 className="text-[24px] text-[#1D1D1D] font-medium">Now, discover Echoo for yourself</h2>
            <p className="mt-2 text-[20px] leading-[26px] text-[#575757] font-medium">
              Huge thanks to Quan for sharing the story behind Echoo and the details on the building product. Now test it out yourself and see if it's a great fit for you.
            </p>
            <div className="mt-6 flex flex-row gap-4 items-center">
              <Button text="Visit website" icon={Monitor} />
              <Button text="View Github" icon={Github} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EchooShowcase;
