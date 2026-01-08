import type React from "react"

const SocialProof: React.FC = () => {
  const industries = [
    "IT Services",
    "Construction",
    "Consulting",
    "Facility Management",
    "Energy",
    "Transport & Logistics",
  ]

  return (
    <section className="py-32 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Trusted by Forward-Thinking Companies</h2>

        <div className="mb-8">
          <div className="text-7xl font-black text-blue-600 mb-2">73</div>
          <p className="text-xl text-slate-600 font-semibold">companies already on the waitlist</p>
        </div>

        <p className="text-slate-500 text-lg mb-12">
          From 4-person startups to 3,000-employee enterprises across Europe
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="px-5 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700 shadow-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
