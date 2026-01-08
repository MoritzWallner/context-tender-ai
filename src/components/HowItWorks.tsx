import type React from "react"
import FramedCard from "./FramedCard"

const StepCard: React.FC<{
  number: number
  title: string
  description: string
  icon: React.ReactNode
  showArrow?: boolean
}> = ({ number, title, description, icon, showArrow = true }) => (
  <div className="flex items-center gap-6">
    <div className="flex-1 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-6">
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-5xl">
        {icon}
      </div>
      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg">
        {number}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
    {showArrow && (
      <svg
        className="w-8 h-8 text-slate-300 flex-shrink-0 hidden xl:block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    )}
  </div>
)

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Four Simple Steps to Smarter Tender Discovery
          </h2>
        </div>

        <FramedCard>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
            <StepCard
              number={1}
              title="Create Profile"
              description="Enter your products, services, references, and locations once"
              icon={<div>📝</div>}
            />
            <StepCard
              number={2}
              title="AI Activates"
              description="tender.match continuously searches all 2,000+ connected portals 24/7"
              icon={<div>🎯</div>}
            />
            <StepCard
              number={3}
              title="Get Matches"
              description="Receive only relevant tenders with precise matching scores"
              icon={<div>📈</div>}
            />
            <StepCard
              number={4}
              title="Find Partners"
              description="company.match suggests the perfect consortium members for larger projects"
              icon={<div>🤝</div>}
              showArrow={false}
            />
          </div>
        </FramedCard>
      </div>
    </section>
  )
}

export default HowItWorks
