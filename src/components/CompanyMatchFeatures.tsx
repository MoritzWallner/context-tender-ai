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
    <section id="company-match-features" className="bg-slate-50/50 relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-blue-600 tracking-[0.3em] uppercase mb-4 block text-sm font-extrabold">Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            All-in-one tender.match engine
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From intelligent discovery across 2,000+ European portals to AI-powered gap analysis, tender.match automates
            your entire procurement workflow with surgical precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          <FeatureCard
            title="European Market Coverage"
            image="/europe-portal-nodes-coverage.jpg"
            description="Monitor 2,000+ procurement portals across 27 EU countries in real-time. Our AI scans every portal 24/7, aggregates opportunities in one dashboard, and alerts you instantly when relevant tenders appear."
            href="/products#portal-coverage"
          />
          <FeatureCard
            title="AI-Powered Matching"
            image="/ai-neural-network-matching.jpg"
            description="Automatic capability matching with 70%+ accuracy. Our AI identifies opportunities you can win based on your expertise, experience, and qualifications—no manual screening required."
            href="/products#semantic-matching"
          />
          <FeatureCard
            title="Deep Gap Analysis"
            image="/gap-analysis-interface-checkmarks.jpg"
            description="See exactly what you can deliver and what's missing. AI-powered analysis with 95% accuracy shows which subcontractors or partners you need for each opportunity."
            href="/products#gap-analysis"
          />
          <FeatureCard
            title="Enterprise-Grade Tools"
            image="/dashboard-multiple-tools.jpg"
            description="Deadline management, compliance checks, team collaboration, and role-based access. Everything you need to manage tenders efficiently in one platform."
            href="/products#ai-monitoring"
          />
        </div>
      </div>
    </section>
  )
}

export default CompanyMatchFeatures
