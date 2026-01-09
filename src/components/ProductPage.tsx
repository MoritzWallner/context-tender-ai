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
    <div className="pt-32 bg-white bg-dotted-pattern">
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

      {/* Feature 4: 24/7 AI Monitoring */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center border border-slate-100 order-2 lg:order-1">
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-slate-600 text-lg font-medium">Always On. Always Watching.</p>
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    24/7 AI Monitoring
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Never Miss an Opportunity</p>
                  <p className="text-slate-500 leading-relaxed">
                    Our autonomous AI agents continuously scan all 2,000+ portals around the clock. New tenders are detected, analyzed, and matched to your profile within hours of publication—not days. Get instant alerts for high-priority opportunities and stay ahead of your competition.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="24/7" label="Continuous Monitoring" />
                  <Stat value="&lt;4hrs" label="Detection Time" />
                  <Stat value="100%" label="Portal Coverage" />
                  <Stat value="Real-time" label="Instant Alerts" />
                </div>

                <div className="space-y-3 pt-4">
                  <CheckItem text="Autonomous AI agents work while you sleep" />
                  <CheckItem text="Priority alerts for high-match opportunities" />
                  <CheckItem text="Never miss a deadline or early-bird advantage" />
                  <CheckItem text="Weekly digest reports with market insights" />
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
      </section>

      {/* company.match Section Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
          company.match
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight max-w-3xl mx-auto">
          Find Perfect Partners in Minutes
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Access Europe's largest B2G company database and build winning consortiums with AI-powered partner matching.
        </p>
      </section>

      {/* Feature 5: AI-Powered Partner Matching */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    AI-Powered Partner Matching
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Build Winning Consortiums</p>
                  <p className="text-slate-500 leading-relaxed">
                    When you can't meet all requirements alone, our AI finds the perfect consortium partners. We analyze complementary capabilities, past collaboration success, geographic coverage, and certifications to recommend partners who fill your gaps and maximize your win probability.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="10M+" label="Companies Indexed" />
                  <Stat value="95%" label="Match Accuracy" />
                  <Stat value="30 sec" label="Partner Search" />
                  <Stat value="+60%" label="Consortium Win Rate" />
                </div>

                <div className="space-y-3 pt-4">
                  <CheckItem text="AI identifies capability gaps and suggests partners" />
                  <CheckItem text="Verified company profiles with track records" />
                  <CheckItem text="Direct contact and collaboration tools" />
                  <CheckItem text="Success-based partner recommendations" />
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center border border-slate-100">
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <p className="text-slate-600 text-lg font-medium">Smart Consortium Building</p>
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
      </section>

      {/* Feature 6: 10M+ European Companies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center border border-slate-100 order-2 lg:order-1">
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <p className="text-slate-600 text-lg font-medium">Europe's Largest B2G Database</p>
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    10M+ European Companies
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">The Complete B2G Ecosystem</p>
                  <p className="text-slate-500 leading-relaxed">
                    Access Europe's most comprehensive B2G company database. Every company is profiled with capabilities, certifications, past tender wins, geographic coverage, and contact information. Find partners, research competitors, or discover subcontractors—all in one place.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="10M+" label="Companies Indexed" />
                  <Stat value="27" label="EU Countries" />
                  <Stat value="500+" label="Industry Sectors" />
                  <Stat value="Daily" label="Data Updates" />
                </div>

                <div className="space-y-3 pt-4">
                  <CheckItem text="Comprehensive company profiles with capabilities" />
                  <CheckItem text="Historical tender participation and win rates" />
                  <CheckItem text="Certification and compliance verification" />
                  <CheckItem text="Direct contact information and outreach tools" />
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
      </section>

      {/* Feature 7: Smart Gap Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Smart Gap Coverage
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Turn Weaknesses into Strengths</p>
                  <p className="text-slate-500 leading-relaxed">
                    Don't disqualify yourself from opportunities due to missing certifications or capabilities. Our AI identifies your gaps, suggests the fastest paths to compliance, and recommends partners who can cover requirements you can't meet alone.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="100%" label="Requirement Analysis" />
                  <Stat value="AI" label="Gap Detection" />
                  <Stat value="Instant" label="Partner Suggestions" />
                  <Stat value="+35%" label="Qualification Rate" />
                </div>

                <div className="space-y-3 pt-4">
                  <CheckItem text="Automatic capability gap identification" />
                  <CheckItem text="Certification pathway recommendations" />
                  <CheckItem text="Partner matching for gap coverage" />
                  <CheckItem text="Bid/no-bid decision support" />
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center border border-slate-100">
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <p className="text-slate-600 text-lg font-medium">Close Every Gap</p>
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <FramedCard>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join leading European companies winning more public contracts with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/waitlist"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Join Waitlist
              </a>
              <a
                href="mailto:office@alpx.at?subject=Talk to Founders"
                className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors border border-blue-400"
              >
                Talk to Founders
              </a>
            </div>
          </div>
        </FramedCard>
      </section>
    </div>
  )
}

export default ProductPage
