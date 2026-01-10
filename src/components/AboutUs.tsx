import type React from "react"
import { Link } from "react-router-dom"
import FramedCard from "./FramedCard"
import SectionDivider from "./SectionDivider"

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Ben Müller-Niklas",
      role: "Co-Founder, CEO",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      linkedin: "https://www.linkedin.com/in/ben-mueller-niklas/",
      blurred: false,
    },
    {
      name: "Moritz Wallner",
      role: "Co-Founder, CTO",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      linkedin: "https://www.linkedin.com/in/moritz-wallner/",
      blurred: false,
    },
    {
      name: "Coming Soon",
      role: "COO",
      img: "",
      linkedin: "#",
      blurred: true,
    },
  ]

  return (
    <div className="pt-32 bg-white">
      {/* Hero + Story Combined Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto">
            Building the future of public procurement
          </h1>
          <p className="text-lg text-slate-500">AI-first approach to smarter, faster tender discovery.</p>
        </div>

        {/* Combined Card: Logo + Story */}
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            {/* Logo Banner */}
            <div className="h-40 md:h-48 bg-gradient-to-br from-blue-50 via-blue-100 to-slate-100 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)",
                backgroundSize: "24px 24px"
              }}></div>
              <img src="/alpx-logo-symbol.png" alt="AlpX Logo" className="h-16 md:h-20 w-auto object-contain relative z-10 drop-shadow-lg" />
            </div>

            {/* Story Content */}
            <div className="p-10">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                    Our Story
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                    The reason behind our work
                  </h2>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                    We're building AlpX to help procurement teams win more public contracts with less effort and manual searching.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/waitlist" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Join Waitlist
                    </Link>
                    <a href="mailto:office@alpx.at?subject=Talk to Founders" className="px-6 py-3 bg-white border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                      Talk to Founders
                    </a>
                  </div>
                </div>
                <div className="space-y-5 text-slate-600 leading-relaxed">
                  <p>
                    B2G procurement needs a revolution. Procurement managers are stuck in endless manual searches across 2,000+ European tender portals. Finding relevant opportunities is a constant bottleneck, and companies miss billions in potential contracts every year.
                  </p>
                  <p>
                    Our vision is a procurement engine with true AI autonomy—searching 2,000+ portals in seconds, finding only tenders that match your capabilities, and identifying perfect consortium partners to maximize your winning chances.
                  </p>
                  <p>
                    Founded by a team that has lived the painful inefficiencies of manual tender searches, backed by deep expertise in AI, data analytics, and B2G markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
      </section>

      <SectionDivider variant="line" />

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Founders</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Team AlpX</h2>
          <p className="text-slate-500 mb-12 max-w-2xl mx-auto">
            Building the future of intelligent public procurement.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <FramedCard key={i} variant="compact">
                <div className="group text-left">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 mb-5 relative">
                    {member.blurred ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200">
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 blur-sm"></div>
                          <div className="h-4 w-32 mx-auto bg-slate-300 rounded blur-sm mb-2"></div>
                          <div className="h-3 w-24 mx-auto bg-slate-200 rounded blur-sm"></div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={member.img || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    {member.blurred ? (
                      <div className="h-6 w-28 bg-slate-200 rounded blur-[2px]"></div>
                    ) : (
                      <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    )}
                    {!member.blurred && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-slate-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group/linkedin"
                      >
                        <svg
                          className="w-4 h-4 text-slate-600 group-hover/linkedin:text-white transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-slate-500 font-medium">{member.role}</p>
                </div>
              </FramedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
