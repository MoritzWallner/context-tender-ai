import type React from "react"
import FramedCard from "./FramedCard"

const FeatureCard: React.FC<{
  title: string
  description: string
  image: string
  badge?: string
}> = ({ title, description, image, badge }) => (
  <FramedCard variant="default">
    <div className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500">
      <div className="aspect-[16/10] mb-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {badge && (
          <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-slate-900 shadow-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            {badge}
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-8">{description}</p>
      <button className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 group/btn transition-colors">
        Discover details
        <svg
          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>
    </div>
  </FramedCard>
)

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">All-in-one AlpX engine</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From deep market research to automated reporting, AlpX scales your entire marketing workflow with surgical
            precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <FeatureCard
            title="Market Research"
            badge="Analyzing competitors..."
            image="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800"
            description="Automatically analyze your own and competitors' top ads, spot real-time trends, and use market insights to fuel smarter ideation."
          />
          <FeatureCard
            title="Ad Creation"
            image="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800"
            description="Automatically generate high-performing ad creatives based on AlpX's market research, top-performing creatives, or your specific brand DNA."
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
