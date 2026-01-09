import type React from "react"
import FramedCard from "./FramedCard"

const FeatureCard: React.FC<{
  title: string
  description: string
  image: string
  href: string
}> = ({ title, description, image, href }) => (
  <FramedCard variant="default">
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 overflow-hidden">
      <div className="aspect-[16/10] bg-slate-50 overflow-hidden relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-500 leading-relaxed mb-8">{description}</p>
        <a
          href={href}
          className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 group/btn transition-colors"
        >
          Discover details
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </FramedCard>
)

const CompanyMatchFeatures: React.FC = () => {
  return (
    <section id="company-match-features" className="bg-white relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-blue-600 tracking-[0.3em] uppercase mb-4 block text-sm font-extrabold">Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Complete company.match ecosystem
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Find the perfect consortium partner in minutes, not weeks. Turn complex tenders into collaborative
            opportunities and win projects you couldn't tackle alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <FeatureCard
            title="10M+ European Companies"
            image="/european-company-database-network.jpg"
            description="Built from 30 years of tender outcomes, trade register data, website analysis, and real-time updates. The most comprehensive B2B database for European public procurement. Find partners you never knew existed."
            href="/product#company-database"
          />
          <FeatureCard
            title="AI-Powered Partner Matching"
            image="/ai-matching-algorithm-visualization.jpg"
            description="Our AI identifies perfect consortium partners based on complementary capabilities, proven track record, and geographic coverage. Find partners in minutes, not weeks of networking. Win tenders worth millions."
            href="/product#partner-matching"
          />
          <FeatureCard
            title="Automatic Gap Coverage"
            image="/gap-analysis-interface-with-solutions.jpg"
            description="See exactly which capabilities you're missing to win a tender. Our AI automatically suggests partners who can close those gaps. Turn 'we can't do this' into 'we found the perfect partner' in seconds."
            href="/product#gap-coverage"
          />
          <FeatureCard
            title="Proven Track Records"
            image="/track-record-performance-dashboard.jpg"
            description="See past tender success rates, reliability scores, and expertise areas. Partner with companies that have proven track records in your specific sector. Based on 30 years of actual tender outcomes, not just claims."
            href="/product#track-record"
          />
        </div>
      </div>
    </section>
  )
}

export default CompanyMatchFeatures
