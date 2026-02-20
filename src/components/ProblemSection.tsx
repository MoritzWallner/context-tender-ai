import type React from "react"
import FramedCard from "./FramedCard"
import ScrollReveal from "./ScrollReveal"

const ProblemCard: React.FC<{
  visualization: React.ReactNode
  stat: string
  subtext: string
  title: string
  description: string
  isHighlighted?: boolean
}> = ({ visualization, stat, subtext, title, description, isHighlighted }) => (
  <div
    className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 transition-all duration-300 space-y-4 sm:space-y-6 flex flex-col ${
      isHighlighted ? "bg-white border-slate-200" : "bg-white border-dashed border-slate-200 hover:border-slate-300"
    }`}
  >
    <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center max-w-[180px] mx-auto sm:max-w-none">
      {visualization}
    </div>
    <div className="min-h-16 sm:min-h-20 text-center sm:text-left">
      <div className="mb-1 text-2xl sm:text-3xl font-extrabold font-sans text-blue-600">{stat}</div>
      <div className="text-xs sm:text-sm text-slate-500 font-semibold">{subtext}</div>
    </div>
    <div className="flex-grow text-center sm:text-left">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
)

/* Enhanced bar chart with staggered animations */
const BarChartVisualization = () => (
  <svg className="w-36 h-36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="12"
      y="36"
      width="6"
      height="16"
      rx="1"
      fill="currentColor"
      className="text-blue-400 animate-slide-in-bar-1"
    />
    <rect
      x="22"
      y="28"
      width="6"
      height="24"
      rx="1"
      fill="currentColor"
      className="text-blue-500 animate-slide-in-bar-2"
    />
    <rect
      x="32"
      y="20"
      width="6"
      height="32"
      rx="1"
      fill="currentColor"
      className="text-blue-600 animate-slide-in-bar-3"
    />
    <rect
      x="42"
      y="12"
      width="6"
      height="40"
      rx="1"
      fill="currentColor"
      className="text-blue-700 animate-slide-in-bar-4"
    />
  </svg>
)

/* Enhanced portals visualization with pulse animation */
const PortalsVisualization = () => (
  <svg className="h-36 my-0 w-36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="4" fill="currentColor" className="text-orange-400 animate-pulse-circle" />
    <circle
      cx="32"
      cy="16"
      r="4"
      fill="currentColor"
      className="text-orange-500 animate-pulse-circle"
      style={{ animationDelay: "0.2s" }}
    />
    <circle
      cx="48"
      cy="16"
      r="4"
      fill="currentColor"
      className="text-orange-500 animate-pulse-circle opacity-60"
      style={{ animationDelay: "0.4s" }}
    />
    <circle
      cx="16"
      cy="32"
      r="4"
      fill="currentColor"
      className="text-orange-600 animate-pulse-circle"
      style={{ animationDelay: "0.3s" }}
    />
    <circle
      cx="32"
      cy="32"
      r="4"
      fill="currentColor"
      className="text-orange-600 animate-pulse-circle"
      style={{ animationDelay: "0.5s" }}
    />
    <circle
      cx="48"
      cy="32"
      r="4"
      fill="currentColor"
      className="text-orange-600 animate-pulse-circle opacity-30"
      style={{ animationDelay: "0.7s" }}
    />
  </svg>
)

/* Enhanced progress bar with slide animation */
const ProgressVisualization = () => (
  <svg className="w-36 h-36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="24" width="40" height="8" rx="4" fill="currentColor" className="text-slate-200" />
    <rect
      x="12"
      y="24"
      width="12"
      height="8"
      rx="4"
      fill="currentColor"
      className="text-green-500 animate-slide-progress"
    />
    <rect x="24" y="24" width="28" height="8" rx="4" fill="currentColor" className="text-red-500 opacity-60" />
  </svg>
)

const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-10">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e2e8f0 0.5px, transparent 0.5px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
            <span className="text-blue-600 tracking-[0.3em] uppercase block mb-3 sm:mb-4 border-0 text-[10px] sm:text-xs font-extrabold">
              The Problem
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Your Team Searches.<br className="hidden sm:block" /> Your Competitors Win.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed px-2">
              European procurement is scattered across 2,000+ portals in 24 languages. While your team manually sifts through them, the best opportunities pass by.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <FramedCard>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            <ProblemCard
              visualization={<PortalsVisualization />}
              stat="Up to 60%"
              subtext="missed opportunities"
              title="Invisible Opportunities"
              description="Fragmented portals across Europe mean most relevant opportunities are never discovered. Your competitors find them first — or nobody does."
            />
            <ProblemCard
              visualization={<BarChartVisualization />}
              stat="8+ hrs/week"
              subtext="wasted on manual searches"
              title="Time Kills Revenue"
              description="Your team spends more time looking for tenders than actually winning them. Manual portal checks across 27 countries — in different languages and formats."
            />
            <ProblemCard
              visualization={<ProgressVisualization />}
              stat="47 days"
              subtext="avg. publication to deadline"
              title="The Clock Is Ticking"
              description="By the time you find a tender manually, your competitors have already submitted. Speed is the difference between winning and watching."
            />
          </div>


        </FramedCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ProblemSection
