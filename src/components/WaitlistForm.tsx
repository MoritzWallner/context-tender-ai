"use client"

import type React from "react"
import { useState } from "react"

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    email: "",
    position: "",
    companySize: "",
    willingnessToPay: "",
    allowMention: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Waitlist form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-32 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Become an Early Adopter</h2>
          <p className="text-xl text-slate-400">Join tender.match & company.match before official launch</p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Company Ltd."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                  value={formData.yourName}
                  onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Position</label>
                <select
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                <label className="block text-sm font-semibold text-slate-300 mb-2">Company Size</label>
                <select
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
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
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                How much would you be willing to pay per month?
              </label>
              <select
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
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

            {/* Checkboxes */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center h-6">
                  <div className="w-5 h-5 rounded bg-slate-900 border-2 border-slate-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300">Waitlist is NOT a Binding Commitment.</span> Joining
                  our waitlist is simply an expression of interest. You're under no obligation whatsoever.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="allowMention"
                  className="mt-1 w-5 h-5 rounded bg-slate-900 border-2 border-slate-600 text-blue-600 focus:ring-0 focus:ring-offset-0"
                  checked={formData.allowMention}
                  onChange={(e) => setFormData({ ...formData, allowMention: e.target.checked })}
                />
                <label htmlFor="allowMention" className="text-sm text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300">
                    Yes, you may mention our company as a waitlist partner
                  </span>
                  <br />→ Get 5 months free access instead of 2 + Help shape what we build next
                </label>
              </div>
            </div>

            {/* Benefits Box */}
            <div className="bg-blue-900/30 border border-blue-700/50 rounded-2xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-white">Early Access Benefits</h4>
              <ul className="space-y-2">
                {[
                  "2-5 months free access to both platforms",
                  "Priority support during beta phase",
                  "Influence product development with your feedback",
                  "Lock in special early adopter pricing",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
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
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-slate-800"
                  ></div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="font-semibold text-white">73 companies</span> already joined the program
              </p>
            </div>

            {/* Urgency Banner */}
            <div className="bg-orange-900/30 border border-orange-700/50 rounded-2xl p-4 text-center">
              <p className="text-sm font-semibold text-slate-300">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Just <span className="text-orange-400 font-black">27 seats</span> left for early access!
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default WaitlistForm
