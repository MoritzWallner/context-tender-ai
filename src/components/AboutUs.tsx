import type React from "react"
import FramedCard from "./FramedCard"

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Ben Müller-Niklas",
      role: "Co-Founder, CEO",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
      description:
        "Experienced founder in Shared Mobility and Smart City sector. Member of the Senate of Economy (Senat der Wirtschaft).",
      linkedin: "https://www.linkedin.com/in/ben-mueller-niklas/",
    },
    {
      name: "Moritz Wallner",
      role: "Co-Founder, CTO",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      description:
        "Technical co-founder with comprehensive software development experience building scalable solutions.",
      linkedin: "https://www.linkedin.com/in/moritz-wallner/",
    },
    {
      name: "Quentin Binder",
      role: "Co-Founder, Technical Expert",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      description:
        "6 years of software development experience with enterprises and SMEs. Deep expertise in AI and backend systems.",
      linkedin: "https://www.linkedin.com/in/quentin-binder/",
    },
    {
      name: "Philipp Semmler",
      role: "Co-Founder, CFO/COO",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      description:
        "VC background with startup founding experience. Brings financial planning and fundraising expertise.",
      linkedin: "https://www.linkedin.com/in/philipp-semmler/",
    },
  ]

  return (
    <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">About Us</span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto">
          Building the future of public procurement
        </h1>
        <p className="text-lg text-slate-600 mb-12">AI-first approach to smarter, faster tender discovery.</p>

        <FramedCard variant="default">
          <div className="max-w-6xl mx-auto aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl flex items-center justify-center relative">
            <img src="/alpx-logo-3d.png" alt="AlpX 3D Logo" className="w-full h-full object-cover" />
          </div>
        </FramedCard>
      </section>

      {/* Founding Story */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                Founding Story
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                The reason behind
                <br />
                our work
              </h2>
              <p className="text-slate-600 text-lg mb-10">
                We're building AlpX to help procurement teams win more public contracts with significantly less effort,
                time, and manual searching.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold">Talk to Founders</button>
                <button className="px-8 py-3 bg-white border border-slate-200 rounded-lg font-bold">
                  Explore Features
                </button>
              </div>
            </div>
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
              <p>
                We founded AlpX because B2G procurement desperately needs a revolution. Procurement managers are blocked
                in endless manual searches across 2,000+ European tender portals. Finding relevant opportunities is a
                constant performance bottleneck. Managing and analyzing thousands of tender documents involves countless
                manual hours.
              </p>
              <p>
                Companies miss out on billions in potential contracts every year, and they even waste resources
                searching for tenders that don't match. With AlpX, we fundamentally want to transform the way companies
                approach public procurement.
              </p>
              <p>
                Our vision is a procurement engine that operates with true AI autonomy. A platform that allows you to
                search 2,000+ procurement portals in seconds, find only tenders that truly match your capabilities, and
                autonomously identify the perfect consortium partners to maximize your winning chances.
              </p>
              <p>
                We want to give every procurement team an engine that runs around the clock, constantly learns from
                feedback, and gets better with every tender analyzed. Founded by a team that has lived the painful
                inefficiencies of manual tender searches and is backed by deep expertise in AI, data analytics, and B2G
                markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Founders</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Team AlpX</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">
            We are looking for outstanding talents who want to push the boundaries of B2G procurement and build nothing
            less than the future of intelligent tendering.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FramedCard key={i} variant="compact">
                <div className="group text-left">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative">
                    <img
                      src={member.img || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
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
                  </div>
                  <p className="text-slate-500 font-medium mb-3">{member.role}</p>
                   {/* Added description display */}
                </div>
              </FramedCard>
            ))}
          </div>

          <button className="mt-16 px-8 py-3 bg-blue-600 text-white rounded-lg font-bold">Join Our Team</button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
