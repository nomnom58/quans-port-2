import { QuestionBubble } from './components/QuestionBubble';
import { AnswerBubble } from './components/AnswerBubble';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Github, Globe, Eye, ChevronLeft, Bookmark, LayoutTemplate, Activity, Send, Bot, AlertCircle, Users } from 'lucide-react';
import { ShowcaseToggleV2 } from './components/ShowcaseToggleV2';
import { ShowcaseCard } from './components/ShowcaseCard';
import { ShowcaseMetricCard } from './components/ShowcaseMetricCard';
import { motion } from 'motion/react';
import ShowcaseNav from './components/ShowcaseNav';

import { useShowcaseAnimation } from './effects/useShowcaseAnimation';

// Danh sách các ảnh trong thư mục /public/showcase/echoo/
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

const EchooShowcaseV2: React.FC = () => {
  const navigate = useNavigate();
  const { containerRef, videoRef, addToHeroTextRefs, addToScrollTextRefs } = useShowcaseAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full" ref={containerRef} style={{ backgroundColor: '#F3F1E9' }}>
      <main className="w-full text-text-primary pb-32 font-medium">
        {/* NEW HERO SECTION */}
        <section className="w-full pt-[100px] pb-20 flex flex-col items-center">
          <div className="mb-[160px]">
            <ShowcaseNav />
          </div>

          {/* Logo & Title */}
          <div className="flex flex-col items-center max-w-[1024px] px-6 text-center">
            <div className="mb-4">
              <img src="/showcase/echoo/echoologov2.png" alt="Echoo" className="h-[24px] w-auto" />
            </div>
            <h1
              ref={addToHeroTextRefs}
              className="font-['Instrument_Serif'] text-[#1D1D1D] leading-[1.15] mb-6 font-[400] text-[32px] md:text-[40px] xl:text-[48px]"
            >
              Echoo - An anonymous confession platform: Designed around privacy and trust.
            </h1>

            {/* Buttons */}
            <div className="flex gap-3 mb-12">
              <ShowcaseButton
                text="Visit website"
                variant="primary"
                icon={Monitor}
                onClick={() => window.open('https://www.myechoo.xyz/', '_blank', 'noopener,noreferrer')}
              />
              <ShowcaseButton
                text="View Github"
                variant="secondary"
                icon={Github}
                onClick={() => window.open('https://github.com/nomnom58/untold', '_blank', 'noopener,noreferrer')}
              />
            </div>

            <div
              ref={videoRef}
              className="w-full max-w-[1024px] rounded-[20px] p-[6px] bg-[#D0C6B4] overflow-hidden"
            >
              <div className="w-full rounded-[14px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-white aspect-video">
                <video
                  src="/showcase/echoo/echoo-big.webm"
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. GRID NỘI DUNG --- */}
        <div className="w-full px-[16px] min-[780px]:w-[748px] min-[780px]:max-w-[748px] min-[780px]:px-0 mx-auto mt-6">
          {/* THE STRATEGY SECTION */}
          <section>
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">The Strategy</h2>

              {/* Question Row */}
              <QuestionBubble text="What’s Echoo and Why does it exist?" />

              {/* Answer Row */}
              <AnswerBubble>
                <p
                  className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium"
                >
                  Echoo is a confessional app for people aged 16-35 who want to share secrets anonymously but safely.<br /><br />
                  They can't tell friends (privacy), can't post on social media (family sees), and existing confession apps are toxic. Echoo isn't a "drama forum" like Reddit/Whisper. It's an "emotional outlet" - share, feel lighter, move on.
                </p>
                <img src="/showcase/echoo/emotion_outlet.png" className="w-full md:w-[500px] h-auto mt-4 mb-4 rounded-[16px]" alt="Emotion Outlet" />
                <div className="space-y-2">
                  <ShowcaseToggleV2 title="Who uses Echoo?">
                    Mostly 16-35 year-olds. They want validation from strangers, but need anonymity and safety. They're scared of judgment, not seeking debate.
                  </ShowcaseToggleV2>
                  <ShowcaseToggleV2 title="Echoo's product positioning">
                    Need: Wants validation but fears judgment from acquaintances.<br />
                    Pain: Fear of being identified as an acquaintance lurking on Facebook.
                  </ShowcaseToggleV2>
                  <ShowcaseToggleV2 title="Competitive Audit: Reddit/Whisper">
                    <div className="text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] text-[#575757] font-[500]">
                      <ul className="list-disc pl-5 mt-2">
                        <li>Reddit/FB Groups: Spread drama, manipulate the crowd, prone to toxicity.</li>
                        <li>Whisper: Algorithm easily diluted, high toxicity.</li>
                        <li>Echoo's Pivot: Disables comments to completely eliminate offensive language, only retaining reactions to acknowledge emotions.</li>
                      </ul>
                    </div>
                  </ShowcaseToggleV2>
                </div>
              </AnswerBubble>
            </FadeIn>
          </section>

          {/* SYSTEM ARCHITECTURE SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">System Architecture</h2>

              {/* Question Row */}
              <QuestionBubble text="How is Echoo built? What's under the hood?" />

              {/* Answer Row */}
              <AnswerBubble>
                <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                  <p
                    className="mb-2"
                  >
                    Echoo uses a clean architecture:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>User scrolls (swipe integration)</li>
                    <li>Client tracks what you've seen (localStorage)</li>
                    <li>Server filters out old posts (PostgreSQL RPC)</li>
                    <li>Database enforces anonymity (Supabase RLS)</li>
                    <li>Feed displays smoothly (60fps, no loading)</li>
                  </ul>
                  <p
                    className="mt-4"
                  >
                    Result: Instant, smooth, private experience.
                  </p>
                  <img src="/showcase/echoo/echoo_architecture.png" className="w-full md:w-[400px] h-auto mt-4 mb-2 rounded-[16px]" alt="Architecture" />
                </div>

                <ShowcaseToggleV2 title="System Architecture (How the pieces talk)">
                  <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                    User Interaction (Swipe/Read) <br />
                    ↓ <br />
                    Client Logic (Debounce & LocalStorage Seen-ID) <br />
                    ↓ <br />
                    Request (PageIndex + Seen-IDs) <br />
                    ↓ <br />
                    Edge/Server (Supabase RPC duplicate post filtering) <br />
                    ↓ <br />
                    Security Layer (RLS protects anonymous read/write rights) <br />
                    ↓ <br />
                    Response (Clean Data) <br />
                    ↓ <br />
                    UI (Infinite Scroll)
                  </div>
                </ShowcaseToggleV2>
              </AnswerBubble>
            </FadeIn>
          </section>

          {/* TECHNICAL DECISIONS SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">Technical Decisions</h2>

              {/* Question Row */}
              <QuestionBubble text="What technical decisions did you make? and why?" />

              {/* Answer Row */}
              <AnswerBubble>
                <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                  <p className="mb-2">Three big decisions shaped the whole thing.</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Zero‑Latency Feed: Batch‑prefetch + client‑side dedup → 60fps swipe UX, no loading skeletons</li>
                    <li>Stateless Privacy: No user database, just RLS rules → Truly anonymous, even if hacked</li>
                    <li>Cost‑Optimized: Database‑side logic consolidation → $0 fixed cost, scales thousands concurrent</li>
                  </ul>
                  <img src="/showcase/echoo/Three big decisions.png" className="w-full md:w-[500px] h-auto mt-4 mb-2 rounded-[16px]" alt="Three big decisions" />
                </div>
                <div className="space-y-2">
                  <ShowcaseToggleV2 title="3 Important Decision">
                    <div className="flex flex-col md:flex-row gap-[8px] w-full pt-2">
                      {/* CARD 1: Decision 3 */}
                      <div className="w-full md:w-[calc((100%-16px)/3)]">
                        <ShowcaseCard
                          title="Decision 3"
                          description="Efficiency - Reducing data payload by 70% using Database-level filtering (RPC)"
                          headerBgColor="#EAEAEA"
                          sections={[
                            {
                              heading: "Why it matters:",
                              content: "Bandwidth = battery life on mobile"
                            },
                            {
                              heading: "Bad approach:",
                              content: "Fetch all confessions → filter on phone Problem: Huge payload, slow, drains battery"
                            },
                            {
                              heading: "Good approach:",
                              content: (
                                <>
                                  Push filtering to database (PostgreSQL RPC)
                                  <ul className="list-disc pl-5 mt-1">
                                    <li>Server does: Filter seen-IDs, rank by Ladder Rule</li>
                                    <li>Client gets: Only relevant posts</li>
                                  </ul>
                                </>
                              )
                            },
                            {
                              heading: "Result:",
                              content: "Truly anonymous. No user data to leak."
                            }
                          ]}
                        />
                      </div>

                      {/* CARD 2: Decision 2 */}
                      <div className="w-full md:w-[calc((100%-16px)/3)]">
                        <ShowcaseCard
                          title="Decision 2:"
                          description="Security - Implementing a &quot;Database-less&quot; Identity model via Supabase RLS"
                          headerBgColor="#F9F2F6"
                          headerTextColor="#A020F0"
                          sections={[
                            {
                              heading: "Why it matters:",
                              content: "Anonymous platforms need real security"
                            },
                            {
                              heading: "Traditional approach:",
                              content: "Store user profiles → encryption → hope it works"
                            },
                            {
                              heading: "My approach:",
                              content: "Don't store user profiles at all"
                            },
                            {
                              heading: "Result:",
                              content: "Truly anonymous. No user data to leak."
                            }
                          ]}
                        />
                      </div>

                      {/* CARD 3: Decision 1 */}
                      <div className="w-full md:w-[calc((100%-16px)/3)]">
                        <ShowcaseCard
                          title="Decision 1:"
                          description="How Batch-prefetching eliminates Loading Skeletons for 60fps swipe"
                          headerBgColor="#F0F8FF"
                          headerTextColor="#0360FF"
                          sections={[
                            {
                              heading: "Why it matters",
                              content: "Users see loading = they bounce"
                            },
                            {
                              heading: "My approach:",
                              content: "Instead of \"scroll → wait → load → show\" Do this: \"Prefetch next 9 posts while reading current\""
                            },
                            {
                              heading: "Trade-off:",
                              content: "Need to manage prefetch timing (don't prefetch too early)"
                            }
                          ]}
                        />
                      </div>
                    </div>
                  </ShowcaseToggleV2>
                </div>
              </AnswerBubble>
            </FadeIn>
          </section>

          {/* PRODUCT STRATEGY SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">Product Strategy</h2>

              {/* Question Row */}
              <QuestionBubble text="How did you approach product decisions? What's your philosophy?" />

              {/* Answer Row */}
              <AnswerBubble>
                <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[24px] text-[#575757] mb-[16px] font-medium">
                  <p className="mb-2">I made 1 core choice: Positioning first, everything else follows.</p>
                  <p className="mb-2">"Echoo = \"emotional outlet\", not \"drama forum\""</p>
                  <p className="mb-2">This decision ripples through:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>No comments (prevents toxic threads)</li>
                    <li>Contribution Barrier (filters quality)</li>
                    <li>Ladder Rule (fair visibility, not viral)</li>
                  </ul>
                  <p className="mt-4">Every design choice reinforces the same positioning.</p>
                  <img src="/showcase/echoo/position_first.png" className="w-full md:w-[500px] h-auto mt-4 mb-2 rounded-[16px]" alt="Position First" />
                </div>

                <div className="space-y-2">
                  <ShowcaseToggleV2 title="The Paradox: Why disabling comments is the only way to kill Toxicity & Bots">
                    <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                      The Paradox: <br />
                      Traditional social platforms optimize for "engagement" (likes, comments, views). More engagement = more visible.<br />
                      But this creates toxicity:<br />
                      <ul className="list-disc pl-5 mt-2 mb-4">
                        <li>Controversial confessions go viral</li>
                        <li>Comments on secrets = judgment</li>
                        <li>Users regret sharing</li>
                      </ul>
                      Why can't Echoo do the same? If Echoo chases engagement metrics, it becomes Reddit/Whisper = I lose.<br /> <br />

                      The Bold Decision: <br />
                      Remove comments entirely. Keep only reactions (❤️ 🔄).<br />
                      Why this works:<br />
                      <ul className="list-disc pl-5 mt-2 mb-4">
                        <li>User feels validated by hearts (50 people liked my confession)</li>
                        <li>No fear of being attacked in comments</li>
                        <li>No moderation nightmare</li>
                      </ul>

                      Psychology shift: <br />
                      Comments are for debate ("Why did you do that?") Reactions are for support ("You're not alone")<br />
                      Echoo = support platform. <br /><br />

                      To prevent bots (since no comments = less engagement): Contribution Barrier: Must post 1 confession to unlock reactions <br />
                      Why this works for anti-spam: <br />
                      <ul className="list-disc pl-5 mt-2 mb-4">
                        <li>Bots won't craft realistic confessions (too expensive)</li>
                        <li>Real users become stakeholders (they posted)</li>
                        <li>100% bot elimination, $0 cost (no NLP filters)</li>
                      </ul>

                      Trade-off: <br />
                      <ul className="list-disc pl-5 mt-2">
                        <li>High friction kills 60% casual visitors</li>
                        <li>But remaining users are much higher quality</li>
                        <li>Proof: 1 user posted despite friction = concept works</li>
                      </ul>
                    </div>
                  </ShowcaseToggleV2>
                  <ShowcaseToggleV2 title="Content Engineering: Scaling deep confessions via an AI-Assisted Pipeline">
                    <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#575757] font-[500]">
                      The Dilemma: <br />
                      Option A: Reddit-style light topics "What's your favorite memory?" "Valentine plans?" <br />
                      <ul className="list-disc pl-5 mt-2 mb-4">
                        <li>Pros: Easy to find content on Reddit</li>
                        <li>Cons: Kills emotional outlet positioning</li>
                        <li>Result: Becomes Reddit clone (lose)</li>
                      </ul>

                      Option B: Confession-style deep topics "A secret I've never told anyone" "Guilt I carry" <br />
                      <ul className="list-disc pl-5 mt-2 mb-4">
                        <li>Pros: Reinforces emotional outlet positioning</li>
                        <li>Cons: Hard to find/create content</li>
                        <li>Result: Stays true to positioning (win)</li>
                      </ul>

                      Decision: Option B (harder but right) <br /><br />

                      How I solve "hard to find content": AI-Assisted Content Pipeline: <br />
                      <ul className="list-disc pl-5 mt-2">
                        <li>Gemini: Generate confession topics</li>
                        <li>Claude: Write confessions (match anonymity voice)</li>
                        <li>Manual review: Ensure quality</li>
                      </ul>
                      <br />
                      Result: 50-100 quality confessions/week without manual labor
                    </div>
                  </ShowcaseToggleV2>
                </div>
              </AnswerBubble>
            </FadeIn>
          </section>

          {/* TRADE-OFF SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">Trade-off</h2>

              {/* Question Row */}
              <QuestionBubble text="What are the trade-offs? What breaks if things get bigger?" />

              {/* Answer Row */}
              <AnswerBubble>
                <div className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] mb-[16px] font-medium">
                  <p className="mb-2">3 major trade-offs exist. I chose to accept them:</p>
                  <div className="w-full rounded-[16px] overflow-hidden border border-[#D3D3D3] mt-4 mb-2">
                    <table className="w-full border-collapse table-fixed">
                      <tbody>
                        <tr className="border-b border-[#D3D3D3]">
                          <td className="w-[35%] p-2 md:p-4 text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] font-[500] text-[#212121] border-r border-[#D3D3D3] align-top break-words">
                            Content Exhaustion
                          </td>
                          <td className="w-[65%] p-2 md:p-4 text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] font-[400] text-[#575757] align-top">
                            Users see "End Card" quickly (because Seen-ID blocks old posts)<br />
                            → Solved by: Constant content seeding
                          </td>
                        </tr>
                        <tr className="border-b border-[#D3D3D3]">
                          <td className="w-[35%] p-2 md:p-4 text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] font-[500] text-[#212121] border-r border-[#D3D3D3] align-top break-words">
                            Conversion Hit
                          </td>
                          <td className="w-[65%] p-2 md:p-4 text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] font-[400] text-[#575757] align-top">
                            High friction kills casual users → Accepted because: Remaining users are higher quality
                          </td>
                        </tr>
                        <tr>
                          <td className="w-[35%] p-2 md:p-4 text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] font-[500] text-[#212121] border-r border-[#D3D3D3] align-top break-words">
                            Scaling Costs
                          </td>
                          <td className="w-[65%] p-2 md:p-4 text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] font-[400] text-[#575757] align-top">
                            $0 now, but paid tier needed at 10K+ users → Plan: Bootstrap revenue before costs hit
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-2">
                  <ShowcaseToggleV2 title="Three Important Trade-off">
                    <div className="flex flex-col md:flex-row gap-[8px] w-full pt-2">
                      <div className="w-full md:w-[calc((100%-16px)/3)]">
                        <ShowcaseCard
                          title="Trade-off 1"
                          description="Content Exhaustion"
                          headerBgColor="#EAEAEA"
                          sections={[
                            {
                              heading: "The Problem:",
                              content: "Seen-ID system blocks old posts once you've read them. If new/hot posts don't flow in constantly → User hits \"End Card\" fast."
                            },
                            {
                              heading: "Why this matters:",
                              content: "User thinks: \"No new content\" → bounce"
                            },
                            {
                              heading: "My solution:",
                              content: (
                                <ul className="list-disc pl-5 mt-1">
                                  <li>Content seeding pipeline (50-100/week guaranteed)</li>
                                  <li>Keep feed always fresh</li>
                                </ul>
                              )
                            },
                            {
                              heading: "If this breaks:",
                              content: "Need to increase content production Or: Allow users to \"reset\" their feed (see older posts again)"
                            }
                          ]}
                        />
                      </div>
                      <div className="w-full md:w-[calc((100%-16px)/3)]">
                        <ShowcaseCard
                          title="Trade-off 2"
                          description="Conversion Sacrifice"
                          headerBgColor="#F9F2F6"
                          headerTextColor="#A020F0"
                          sections={[
                            {
                              heading: "The Problem:",
                              content: "Contribution Barrier = high friction \"Want to like? First, post a confession\""
                            },
                            {
                              heading: "Consequence:",
                              content: (
                                <ul className="list-disc pl-5 mt-1">
                                  <li>Day-1: 1000 visits</li>
                                  <li>Can see confessions: 1000 people</li>
                                  <li>Can post: 1000 people</li>
                                  <li>Click \"Like\": 1000 people ready to post</li>
                                  <li>Actually post: ~400 people (60% bounce)</li>
                                  <li>Now can react forever: 400 people (quality subset)</li>
                                </ul>
                              )
                            },
                            {
                              heading: "Why I accept this:",
                              content: "400 engaged users > 1000 casual users Retention curves will prove this"
                            },
                            {
                              heading: "If this breaks:",
                              content: "A/B test: Frictionless version vs current Measure Day-7 retention → see which wins."
                            }
                          ]}
                        />
                      </div>
                      <div className="w-full md:w-[calc((100%-16px)/3)]">
                        <ShowcaseCard
                          title="Trade-off 3"
                          description="Cost at Scale"
                          headerBgColor="#F0F8FF"
                          headerTextColor="#0360FF"
                          sections={[
                            {
                              heading: "Current:",
                              content: "$0/month (serverless free tiers)"
                            },
                            {
                              heading: "At 10K users:",
                              content: (
                                <ul className="list-disc pl-5 mt-1">
                                  <li>Supabase storage → paid tier (~$25-50/mo)</li>
                                  <li>Vercel bandwidth → still free (generous limits)</li>
                                  <li>Identity lives in browser (localStorage)</li>
                                </ul>
                              )
                            },
                            {
                              heading: "At 100K users:",
                              content: (
                                <ul className="list-disc pl-5 mt-1">
                                  <li>Infrastructure costs rise</li>
                                </ul>
                              )
                            },
                            {
                              heading: "My plan:",
                              content: "Don't scale beyond free tier unless revenue exists Bootstrap revenue (ads? premium? donations?) Before costs become problem."
                            },
                            {
                              heading: "Philosophy:",
                              content: "Design for $0 first. Optimize costs only when revenue exists."
                            }
                          ]}
                        />
                      </div>
                    </div>
                  </ShowcaseToggleV2>
                </div>
              </AnswerBubble>
            </FadeIn>
          </section>

          {/* THE PIVOT & LESSONS SECTION */}
          <section className="mt-12">
            <FadeIn>
              <h2 className="text-[16px] md:text-[20px] text-[#1D1D1D] mb-[16px] underline font-medium">The Pivot & Lessons</h2>

              {/* Question Row */}
              <QuestionBubble text="What’s the current status? What did you learn?" />

              {/* Answer Row */}
              <AnswerBubble>
                <div className="mb-[16px]">
                  <h3 className="text-[24px] font-[600] text-[#212121] mb-6">Metrics & Learnings</h3>
                  
                  <div className="mb-[8px] text-[16px] md:text-[20px] font-[600] text-[#212121]">After 3 months:</div>
                  <div className="flex flex-col md:flex-row gap-[8px] w-full mb-8">
                    <div className="w-full md:w-[calc((100%-8px)/2)] [&>div]:!h-[150px] md:[&>div]:!h-[200px]">
                      <ShowcaseMetricCard 
                        icon={<Activity className="w-[32px] h-[32px] text-white" strokeWidth={1.5} />}
                        content={<div className="font-[500]"><strong className="font-[600]">920 app opens</strong> = repeat<br/>engagement</div>}
                      />
                    </div>
                    <div className="w-full md:w-[calc((100%-8px)/2)] [&>div]:!h-[150px] md:[&>div]:!h-[200px]">
                      <ShowcaseMetricCard 
                        icon={<Send className="w-[32px] h-[32px] text-white" strokeWidth={1.5} />}
                        content={<div className="font-[500]"><strong className="font-[600]">8.3% submission<br/>rate (64/761)</strong> = high-friction<br/>positioning works</div>}
                      />
                    </div>
                  </div>

                  <div className="mb-[8px] text-[16px] md:text-[20px] font-[600] text-[#212121]">What broke at growth:</div>
                  <div className="text-[16px] md:text-[20px] font-[500] md:font-[400] leading-[22px] text-[#575757] mb-8">
                    The core trade-off: Anonymous confessions need real human content to feel authentic. But seeding 50+ daily confessions solo = impossible.
                  </div>

                  <div className="mb-[8px] text-[16px] md:text-[20px] font-[600] text-[#212121]">The bottleneck:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] w-full mb-8 [&>div]:!h-[150px] md:[&>div]:!h-[200px]">
                    <ShowcaseMetricCard 
                      bgColor="#E43630"
                      icon={<Bot className="w-[32px] h-[32px] text-white" strokeWidth={1.5} />}
                      content={<div className="font-[500]">Al-written posts feel different<br/>(users notice after 20+ reads)</div>}
                    />
                    <ShowcaseMetricCard 
                      bgColor="#E43630"
                      icon={<AlertCircle className="w-[32px] h-[32px] text-white" strokeWidth={1.5} />}
                      content={<div className="font-[500]">Real confessions are sparse,<br/>short, hard to moderate</div>}
                    />
                    <ShowcaseMetricCard 
                      bgColor="#E43630"
                      icon={<Users className="w-[32px] h-[32px] text-white" strokeWidth={1.5} />}
                      content={<div className="font-[500]">Community building ≠ product<br/>building (needs dedicated team)</div>}
                    />
                  </div>

                  <div className="mb-[8px] text-[16px] md:text-[20px] font-[600] text-[#212121]">What this taught me:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] w-full mb-8 [&>div]:!h-[150px] md:[&>div]:!h-[200px]">
                    <ShowcaseMetricCard 
                      bgColor="#F6F6F6"
                      textColor="#212121"
                      icon={<span className="text-[28px] font-[700] text-[#212121]">1</span>}
                      content={<div className="font-[500]"><strong className="font-[600] text-[#212121]">Positioning is hard to execute</strong><br/><span className="text-[#575757]">→ Clear vision ≠ sustainable<br/>operation</span></div>}
                    />
                    <ShowcaseMetricCard 
                      bgColor="#F6F6F6"
                      textColor="#212121"
                      icon={<span className="text-[28px] font-[700] text-[#212121]">2</span>}
                      content={<div className="font-[500]"><strong className="font-[600] text-[#212121]">Content + community are<br/>separate skills</strong> <span className="text-[#575757]">→ Building<br/>product alone, managing<br/>community alone = two full-time<br/>jobs</span></div>}
                    />
                    <ShowcaseMetricCard 
                      bgColor="#F6F6F6"
                      textColor="#212121"
                      icon={<span className="text-[28px] font-[700] text-[#212121]">3</span>}
                      content={<div className="font-[500]"><strong className="font-[600] text-[#212121]">Authenticity scales with team,<br/>not features</strong> <span className="text-[#575757]">→ This needed a<br/>content strategist + moderator,<br/>not more engineering</span></div>}
                    />
                  </div>

                  <div className="mb-[4px] text-[16px] md:text-[20px] font-[600] text-[#212121]">Current status:</div>
                  <div className="text-[16px] md:text-[20px] font-[500] md:font-[400] leading-[22px] text-[#575757]">
                    Echoo is archived, but the lessons shaped how I approach product design today.
                  </div>
                </div>
              </AnswerBubble>
            </FadeIn>
          </section>

          {/* Footer Divider */}
          <div className="mt-12 h-[1px] bg-[#D3D3D3]" />

          {/* CTA Footer Section */}
          <section className="mt-12 flex flex-col items-start pb-12">
            <h2 className="text-[20px] md:text-[24px] text-[#1D1D1D] font-medium">Now, discover Echoo for yourself</h2>
            <p className="mt-2 text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] text-[#575757] font-medium">
              Huge thanks to Quan for sharing the story behind Echoo and the details on the building product. Now test it out yourself and see if it's a great fit for you.
            </p>
            <div className="mt-6 flex flex-row gap-4 items-center">
              <button
                onClick={() => window.open('https://www.myechoo.xyz/', '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-[#E9E6E0] border border-[#CAC5BD] rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-[#1D1D1D] leading-none w-fit"
              >
                <Monitor className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#1D1D1D] shrink-0" />
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
            <h2 className="text-[24px] md:text-[32px] text-[#0360FF] font-[500] pb-8">Other Project</h2>
            <div className="w-full">
              {/* Ảnh Screenshot Project - Responsive with custom border & radius */}
              <img
                src="/showcase/echoo/port-screenshot.png"
                alt="Quan's Portfolio Screenshot"
                className="w-full h-auto rounded-2xl border-2 border-[#DAD6CF] mb-6"
              />
              <h3 className="text-[20px] md:text-[24px] md:leading-[32px] text-[#1D1D1D] font-[500] pb-2">
                Quan's Portfolio - My Portfolio Website
              </h3>
              <p className="text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#5A6272] font-[500] pb-6">
                Custom-built high-performance portfolio using React + GSAP, solving complex mobile animation challenges without bloat. Perfect Lighthouse 100/100/100/100 with sub-second load time.
              </p>

              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <button
                  onClick={() => navigate('/showcase/quans-portfolio')}
                  className="inline-flex items-center justify-center px-3 py-[7px] md:py-2.5 bg-btn-bg border border-btn-border rounded-[12px] md:rounded-[16px] transition-all hover:brightness-95 active:scale-95 text-[16px] md:text-[20px] font-[500] text-text-primary leading-none w-full md:w-fit"
                >
                  <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2 text-text-primary shrink-0" />
                  Read showcase
                </button>
                <div className="grid grid-cols-2 md:flex md:gap-4 gap-2">
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EchooShowcaseV2;


