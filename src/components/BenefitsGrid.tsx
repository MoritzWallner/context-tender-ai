import type React from "react"
import FramedCard from "./FramedCard"

const DashedBenefitCard: React.FC<{
  icon: React.ReactNode
  title: string
  description: string
}> = ({ icon, title, description }) => (
  <div className="bg-white rounded-3xl p-10 border-2 border-dashed border-slate-200 hover:border-blue-300 transition-all duration-300 space-y-6">
    <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-5xl">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
)

const IconBenefitCard: React.FC<{
  emoji: string
  title: string
  description: string
  color: string
}> = ({ emoji, title, description, color }) => (
  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-2xl`}>{emoji}</div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
)

const BenefitsGrid: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Advantages</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Discover the Benefits of Intelligent Tender Matching
          </h2>
        </div>

        {/* Row 1 - Dashed Border Cards */}
        <FramedCard>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <DashedBenefitCard
              icon={<div>⚡</div>}
              title="Time Efficiency"
              description="Reduce manual search from 8+ hours to 30 minutes per week"
            />
            <DashedBenefitCard
              icon={<div>📊</div>}
              title="Up to 3x More Opportunities"
              description="Discover tenders you would have missed with keyword-only search"
            />
            <DashedBenefitCard
              icon={<div>🏆</div>}
              title="Win Larger Projects"
              description="Access contracts you couldn't tackle alone through smart consortium matching"
            />
          </div>
        </FramedCard>

        {/* Row 2 & 3 - Icon Badge Cards */}
        <FramedCard>
          <div className="grid md:grid-cols-3 gap-8">
            <IconBenefitCard
              emoji="⏱️"
              color="bg-orange-50"
              title="Save Valuable Time"
              description="Stop spending hours on manual portal checking. Focus your team on strategic decision-making and winning proposals."
            />
            <IconBenefitCard
              emoji="🎯"
              color="bg-pink-50"
              title="Precision Matching"
              description="Only receive tenders that truly match your capabilities. No noise, no irrelevant opportunities clogging your inbox."
            />
            <IconBenefitCard
              emoji="👥"
              color="bg-green-50"
              title="Smart Partnerships"
              description="Automatically discover consortium and subcontracting opportunities that complement your strengths."
            />
            <IconBenefitCard
              emoji="🌍"
              color="bg-red-50"
              title="Market Expansion"
              description="Access European tenders across all 27 countries and sectors in one unified, multilingual platform."
            />
            <IconBenefitCard
              emoji="🔔"
              color="bg-blue-50"
              title="Never Miss Deadlines"
              description="AI-powered 24/7 monitoring ensures you're always aware of new opportunities before they expire."
            />
            <IconBenefitCard
              emoji="🧠"
              color="bg-purple-50"
              title="Context-Aware Intelligence"
              description="Our AI understands your business deeply, not just keywords. 'Smart lighting' matches 'intelligent LED systems' automatically."
            />
          </div>
        </FramedCard>
      </div>
    </section>
  )
}

export default BenefitsGrid
