import type React from "react"
import FramedCard from "./FramedCard"

const IndustryFeatures: React.FC = () => {
  const industries = [
    { name: "Smart City & Mobility", description: "Urban planning & transport" },
    { name: "Construction", description: "Building & infrastructure" },
    { name: "IT & Software", description: "Digital solutions & tech" },
    { name: "Energy & Sustainability", description: "Green & renewable" },
    { name: "Healthcare", description: "Medical & pharma" },
    { name: "Professional Services", description: "Consulting & advisory" },
    { name: "Transportation", description: "Logistics & freight" },
    { name: "Education", description: "Schools & universities" },
    { name: "Manufacturing", description: "Production & assembly" },
    { name: "Telecommunications", description: "Networks & connectivity" },
    { name: "Environmental Services", description: "Waste & recycling" },
    { name: "Security & Defense", description: "Protection & safety" },
  ]

  const gradients = [
    "from-blue-400 to-blue-600",
    "from-orange-400 to-orange-600",
    "from-indigo-400 to-indigo-600",
    "from-green-400 to-green-600",
    "from-red-400 to-red-600",
    "from-purple-400 to-purple-600",
    "from-amber-400 to-amber-600",
    "from-cyan-400 to-cyan-600",
    "from-rose-400 to-rose-600",
    "from-teal-400 to-teal-600",
    "from-lime-400 to-lime-600",
    "from-violet-400 to-violet-600",
  ]

  return (
    <section id="industries" className="bg-slate-50/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FramedCard variant="default">
          <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100/30 border border-slate-100 p-16 relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            {/* Header content - centered */}
            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
              <span className="text-blue-600 tracking-[0.3em] uppercase mb-4 inline-block text-sm font-extrabold">
                Industries
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                No Industry Limitations
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-4">
                tender.match covers all industries where public procurement exists across Europe. From construction to
                IT, healthcare to energy – wherever governments and public institutions issue tenders, we help you find
                them.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our AI adapts to your specific market, terminology, and requirements.
              </p>
            </div>

            

            {/* Bottom CTA text */}
            
          </div>
        </FramedCard>
      </div>
    </section>
  )
}

export default IndustryFeatures
