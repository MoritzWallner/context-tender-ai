import type React from "react"
import FramedCard from "./FramedCard"

const SolutionSection: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Context Over Keywords. Intelligence Over Volume.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            tender.match replaces keyword searches with context-based AI analysis that truly understands your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Visual */}
          <FramedCard>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    app.tender.match/dashboard
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">
                      Search
                    </button>
                    <div className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Live
                    </div>
                    <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">AI Active</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { match: "95%", color: "green" },
                    { match: "87%", color: "yellow" },
                    { match: "78%", color: "blue" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 border border-slate-100 flex items-center justify-between"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="h-2 bg-slate-100 rounded-full w-3/4"></div>
                        <div className="h-2 bg-slate-100 rounded-full w-1/2"></div>
                      </div>
                      <div
                        className={`px-4 py-2 rounded-xl font-bold text-sm ${
                          item.color === "green"
                            ? "bg-green-50 text-green-700"
                            : item.color === "yellow"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {item.match} Match
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FramedCard>

          {/* Feature Boxes */}
          <FramedCard>
            <div className="space-y-8">
              {/* tender.match Box */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">⚡</div>
                <h3 className="text-2xl font-bold text-slate-900">tender.match</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our AI understands your complete business context: products, services, locations, references, and
                  formal requirements. It analyzes full tender descriptions and calculates precise matching scores
                  showing whether you're suited as main contractor, subcontractor, or consortium partner.
                </p>
              </div>

              {/* company.match Box */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-2xl">👥</div>
                <h3 className="text-2xl font-bold text-slate-900">company.match</h3>
                <p className="text-slate-600 leading-relaxed">
                  Automatically identifies potential partners for consortiums or subcontracts from 10 million+ company
                  profiles. Data-driven recommendations help you find the missing pieces to win larger projects you
                  couldn't tackle alone.
                </p>
              </div>

              {/* Why Both Matter Checklist */}
              <div className="bg-slate-50 rounded-3xl p-8 space-y-4">
                <h4 className="text-lg font-bold text-slate-900">Why Both Matter</h4>
                <ul className="space-y-3">
                  {[
                    "Deep context understanding of your capabilities",
                    "Full tender description analysis (not just titles)",
                    "Precise matching scores for every opportunity",
                    "Automatic partner recommendations",
                    "Continuous monitoring across 2,000+ portals",
                    "Gap analysis shows what you're missing",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg
                        className="w-5 h-5 text-green-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FramedCard>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
