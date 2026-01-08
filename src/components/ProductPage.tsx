import type React from "react"
import FramedCard from "./FramedCard"

interface StatProps {
  value: string
  label: string
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div>
    <div className="text-2xl md:text-3xl font-bold text-blue-600">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
)

interface CheckItemProps {
  text: string
}

const CheckItem: React.FC<CheckItemProps> = ({ text }) => (
  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span className="text-slate-600">{text}</span>
  </div>
)

const ProductPage: React.FC = () => {
  return (
    <div className="pt-32 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
          Product Features
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto">
          Everything You Need to Win European Tenders
        </h1>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          From intelligent discovery across 2,000+ portals to AI-powered partner matching. One platform, complete control, maximum results.
        </p>
      </section>

      {/* Feature 1: Portal Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    2,000+ Portal Coverage
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Search All of Europe. Instantly.</p>
                  <p className="text-slate-500 leading-relaxed">
                    European procurement is fragmented across 2,000+ platforms in 27 countries. Our AI aggregates every major portal into one unified dashboard, monitors them 24/7, and delivers opportunities in 40+ languages—automatically translated and analyzed. One profile. All markets. Zero manual browsing.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="2,000+" label="Procurement Portals" />
                  <Stat value="27+" label="EU Countries Covered" />
                  <Stat value="40+" label="Languages Supported" />
                  <Stat value="€2.5T" label="Annual Volume" />
                </div>

                <div className="space-y-3 pt-4">
                  <CheckItem text="Complete market visibility across all EU member states" />
                  <CheckItem text="Real-time updates within hours of publication" />
                  <CheckItem text="Automatic translation and semantic understanding" />
                  <CheckItem text="No need to create accounts on individual portals" />
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center border border-slate-100">
                <img
                  src="/multi-language-flags-interface.jpg"
                  alt="2,000+ Portal Coverage"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </FramedCard>
      </section>

      {/* Feature 2: Semantic AI Matching */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center border border-slate-100 order-2 lg:order-1">
                <img
                  src="/semantic-network-visualization.jpg"
                  alt="Semantic AI Matching"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Semantic AI Matching
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Context, Not Just Keywords</p>
                  <p className="text-slate-500 leading-relaxed">
                    Traditional platforms spam you with irrelevant matches. Our semantic AI understands meaning and context—matching 'intelligent LED infrastructure' with your 'smart street lighting' expertise. Trained on 30 years of procurement data, it delivers 90%+ relevance and learns your preferences over time.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="90%+" label="Relevance Rate" />
                  <Stat value="-85%" label="False Positives" />
                  <Stat value="30 Years" label="Training Data" />
                  <Stat value="20hrs/mo" label="Time Saved" />
                </div>

                <div className="space-y-3 pt-4">
                  <CheckItem text="Only see opportunities you can actually win" />
                  <CheckItem text="No more keyword noise or missed synonyms" />
                  <CheckItem text="Industry-specific intelligence across all sectors" />
                  <CheckItem text="Continuous learning adapts to your preferences" />
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
      </section>

      {/* Feature 3: Deep Gap Analysis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Deep Gap Analysis
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Know Your Chances Before You Start</p>
                  <p className="text-slate-500 leading-relaxed">
                    Our AI reads entire tender documents and compares them against your capabilities in minutes. Get a detailed match score, traffic-light requirement analysis, and consortium recommendations. See exactly what you can deliver, what's missing, and whether it's worth pursuing—before investing hours in a proposal.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="2 min" label="Analysis Time" />
                  <Stat value="95%" label="Match Accuracy" />
                  <Stat value="4.5hrs" label="Time Saved" />
                  <Stat value="+40%" label="Win Rate" />
                </div>

                <div className="space-y-3 pt-4">
                  <CheckItem text="Multi-dimensional analysis: technical, certifications, geography, capacity" />
                  <CheckItem text="Clear go/no-go recommendations with win probability" />
                  <CheckItem text="Automatic consortium partner suggestions for gaps" />
                  <CheckItem text="Stop wasting time on tenders you can't win" />
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center border border-slate-100">
                <img
                  src="/gap-analysis-interface-with-checkmarks.jpg"
                  alt="Deep Gap Analysis"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </FramedCard>
      </section>
    </div>
  )
}

export default ProductPage
