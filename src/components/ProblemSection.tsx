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
    className={`rounded-3xl p-10 border-2 transition-all duration-300 space-y-6 flex flex-col ${
      isHighlighted ? "bg-white border-slate-200" : "bg-white border-dashed border-slate-200 hover:border-slate-300"
    }`}
  >
    <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      {visualization}
    </div>
    <div className="min-h-20">
      <div className="mb-1 text-3xl font-extrabold font-sans text-blue-600">{stat}</div>
      <div className="text-sm text-slate-500 font-semibold">{subtext}</div>
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
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
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-blue-600 tracking-[0.3em] uppercase block mb-4 border-0 text-sm font-extrabold">
              The Challenge
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Fragmented Procurement Across Europe
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              European tender procurement is fragmented across thousands of portals, in different languages and formats.
              Teams waste 40% of their time on manual searches instead of winning contracts.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <FramedCard>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ProblemCard
              visualization={<BarChartVisualization />}
              stat="8+ hours"
              subtext="per week lost"
              title="Time Drain"
              description="Hours wasted manually checking countless portals across different countries, formats, and languages."
            />
            <ProblemCard
              visualization={<PortalsVisualization />}
              stat="2,000+"
              subtext="portals to check"
              title="Fragmented Systems"
              description="Different countries, formats, languages, and systems make comprehensive searches nearly impossible."
            />
            <ProblemCard
              visualization={<ProgressVisualization />}
              stat="40-60%"
              subtext="opportunities missed"
              title="Missed Opportunities"
              description="Relevant projects remain undiscovered due to poor keyword matching and incomplete portal coverage."
            />
          </div>

          <div className="bg-white rounded-3xl p-8 space-y-6 border-2 border-slate-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">
                <svg
                  className="w-6 h-6 text-slate-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-slate-900 font-semibold leading-relaxed mb-4">
                  <span className="font-black text-lg">The Real Cost:</span> Procurement teams waste 40% of total
                  procurement time on manual searches instead of winning contracts.
                </p>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-bold">⚠ Warning:</span> Companies incur costs up to{" "}
                    <span className="font-black">€100k+ annually</span> in employee expenses searching portals, not
                    counting lost revenue from missed tender participation or overlooked opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </FramedCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ProblemSection
