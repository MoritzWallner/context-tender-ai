"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "@/components/NavbarNew"
import Footer from "@/components/Footer"
import FramedCard from "@/components/FramedCard"
import AnimatedBackground from "@/components/AnimatedBackground"

const Waitlist = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    email: "",
    position: "",
    companySize: "",
    willingnessToPay: "",
    allowMention: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.email && formData.companyName && formData.yourName) {
      const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSeIffDA00NSNCRXPM3joe1icGNV4nKX6198VXDBfF_vQ4qh9w/formResponse"

      const iframe = document.createElement("iframe")
      iframe.name = "hidden_iframe_" + Date.now()
      iframe.style.display = "none"
      document.body.appendChild(iframe)

      const form = document.createElement("form")
      form.method = "POST"
      form.action = googleFormUrl
      form.target = iframe.name

      const fields = {
        "entry.676647335": formData.companyName,
        "entry.2118133853": formData.yourName,
        "entry.1646847582": formData.email,
        "entry.366614289": formData.position,
        "entry.1949663896": formData.companySize,
        "entry.68019609": formData.allowMention ? "Yes" : "No",
        "entry.903064583": formData.willingnessToPay,
      }

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = name
        input.value = value || ""
        form.appendChild(input)
      })

      document.body.appendChild(form)
      form.submit()

      setTimeout(() => {
        try {
          document.body.removeChild(form)
          document.body.removeChild(iframe)
        } catch (e) {
          console.error("Cleanup error:", e)
        }
      }, 2000)

      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 tracking-[0.3em] uppercase mb-4 block text-sm font-extrabold">
                Early Access
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Become an Early Adopter
              </h1>
              <p className="text-xl text-slate-500">
                Join tender.match & company.match before official launch
              </p>
            </div>

            <FramedCard>
              <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you for joining!</h3>
                    <p className="text-slate-500 mb-8">We'll be in touch soon with your early access details.</p>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Back to Home
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="Your Company Ltd."
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="John Doe"
                          value={formData.yourName}
                          onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Row 3 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Position</label>
                        <select
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          value={formData.position}
                          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        >
                          <option value="">Select position</option>
                          <option value="ceo">CEO</option>
                          <option value="procurement">Procurement Manager</option>
                          <option value="sales">Sales Director</option>
                          <option value="bid">Bid Manager</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Company Size</label>
                        <select
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        >
                          <option value="">Select size</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        How much would you be willing to pay per month?
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        value={formData.willingnessToPay}
                        onChange={(e) => setFormData({ ...formData, willingnessToPay: e.target.value })}
                      >
                        <option value="">Select range</option>
                        <option value="0-100">€0-100</option>
                        <option value="100-300">€100-300</option>
                        <option value="300-500">€300-500</option>
                        <option value="500+">€500+</option>
                      </select>
                    </div>

                    {/* Info Boxes */}
                    <div className="space-y-4 pt-4">
                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          <span className="font-semibold text-slate-700">Waitlist is NOT a Binding Commitment.</span> Joining
                          our waitlist is simply an expression of interest. You're under no obligation whatsoever.
                        </p>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <input
                          type="checkbox"
                          id="allowMention"
                          className="mt-1 w-5 h-5 rounded bg-white border-2 border-slate-300 text-blue-600 focus:ring-blue-500"
                          checked={formData.allowMention}
                          onChange={(e) => setFormData({ ...formData, allowMention: e.target.checked })}
                        />
                        <label htmlFor="allowMention" className="text-sm text-slate-500 leading-relaxed cursor-pointer">
                          <span className="font-semibold text-slate-700">
                            Yes, you may mention our company as a waitlist partner
                          </span>
                          <br />
                          <span className="text-blue-600">→ Get 5 months free access instead of 2 + Help shape what we build next</span>
                        </label>
                      </div>
                    </div>

                    {/* Benefits Box */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-4">
                      <h4 className="text-lg font-bold text-slate-900">Early Access Benefits</h4>
                      <ul className="space-y-2">
                        {[
                          "2-5 months free access to both platforms",
                          "Priority support during beta phase",
                          "Influence product development with your feedback",
                          "Lock in special early adopter pricing",
                        ].map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                            <svg
                              className="w-5 h-5 text-blue-600 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      Join the Waitlist
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>

                    {/* Social Proof */}
                    <div className="flex items-center justify-center gap-4 pt-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white shadow-sm"
                          ></div>
                        ))}
                      </div>
                      <p className="text-sm text-slate-500">
                        <span className="font-semibold text-slate-900">73 companies</span> already joined the program
                      </p>
                    </div>

                    {/* Urgency Banner */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center">
                      <p className="text-sm font-semibold text-slate-600">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                        Just <span className="text-orange-600 font-black">27 seats</span> left for early access!
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </FramedCard>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default Waitlist
