import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CompanyMatchCTA: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes pulse-ring-cta { 0% { transform: translate(45px, -50%) scale(1); opacity: 0.5; } 100% { transform: translate(45px, -50%) scale(1.5); opacity: 0; } }
        @keyframes dash-cta { to { stroke-dashoffset: -100; } }
        @keyframes float-card-cta-1 { 0%, 100% { transform: translate(0, 0) rotate(-2deg); } 50% { transform: translate(4px, -6px) rotate(0deg); } }
        @keyframes float-card-cta-2 { 0%, 100% { transform: translate(0, 0) rotate(3deg); } 50% { transform: translate(-6px, -4px) rotate(1deg); } }
        @keyframes float-card-cta-3 { 0%, 100% { transform: translate(0, 0) rotate(-1deg); } 50% { transform: translate(2px, -8px) rotate(2deg); } }
      `}</style>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-5 py-10 sm:px-8 shadow-xl md:flex-row md:px-12 md:py-10">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />

        {/* Left Content */}
        <div className="relative z-10 max-w-full text-center md:max-w-[560px] md:text-left">
          <p className="mb-2 text-xs text-indigo-200 font-semibold uppercase tracking-wider">Let's get started</p>
          <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
            Ready to see the full market?
          </h2>
          <p className="mb-7 text-sm sm:text-base leading-relaxed text-indigo-100">
            Stop sourcing blindly. Let company.match show you every supplier, partner, and product across Europe — not just the ones you already know.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button size="default" className="bg-white hover:bg-indigo-50 font-semibold shadow-lg px-6 border-0 text-indigo-700" asChild>
              <Link to="/waitlist">
                Try it for free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="default" className="bg-transparent border-white/30 text-white hover:bg-white/10 font-medium px-6" asChild>
              <a href="mailto:office@alpxtechnologies.com?subject=Talk to Founders">
                Talk to Founders
              </a>
            </Button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:block relative h-[300px] w-[400px] flex-shrink-0">
          {/* Orbs */}
          <div className="absolute right-[100px] top-[15%] h-[180px] w-[180px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[15%] right-[260px] h-[130px] w-[130px] rounded-full bg-indigo-400/20 blur-3xl" />

          {/* SVG Lines */}
          <svg className="absolute right-0 top-0 h-full w-full opacity-40" viewBox="0 0 500 380">
            <defs>
              <linearGradient id="lineGradCM" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            <path className="animate-[dash-cta_20s_linear_infinite]" d="M 190 70 Q 260 135 320 195" stroke="url(#lineGradCM)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" />
            <path className="animate-[dash-cta_20s_linear_infinite]" d="M 420 90 Q 370 140 320 195" stroke="url(#lineGradCM)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" />
            <path className="animate-[dash-cta_20s_linear_infinite]" d="M 450 270 Q 385 235 320 195" stroke="url(#lineGradCM)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" />
            <path className="animate-[dash-cta_20s_linear_infinite]" d="M 150 310 Q 235 255 320 195" stroke="url(#lineGradCM)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" />
          </svg>

          {/* Central Hub */}
          <div className="absolute right-[175px] top-1/2 z-10 flex h-[76px] w-[76px] -translate-y-1/2 items-center justify-center rounded-lg bg-white shadow-lg shadow-indigo-900/20">
            <div className="text-center">
              <svg className="w-7 h-7 text-indigo-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-indigo-600 text-[8px] font-bold mt-0.5 block">MATCH</span>
            </div>
          </div>

          {/* Pulsing rings */}
          {[0, 0.5, 1].map((delay, i) => (
            <div
              key={i}
              className="absolute right-[175px] top-1/2 z-0 h-[76px] w-[76px] rounded-lg border border-white/30"
              style={{ animation: 'pulse-ring-cta 2s ease-out infinite', animationDelay: `${delay}s` }}
            />
          ))}

          {/* Company cards */}
          <div className="absolute right-[30px] top-[50px] bg-white/15 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-2.5 w-[120px]" style={{ animation: 'float-card-cta-1 6s ease-in-out infinite' }}>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-indigo-600 text-[9px] font-bold">EP</div>
              <div>
                <div className="text-[10px] font-semibold text-white">EcoPartner</div>
                <div className="text-[9px] text-indigo-100 font-medium">96% Match</div>
              </div>
            </div>
          </div>

          <div className="absolute right-[280px] top-[45px] bg-white/15 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-2.5 w-[110px]" style={{ animation: 'float-card-cta-2 5s ease-in-out infinite 0.5s' }}>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-indigo-600 text-[9px] font-bold">LB</div>
              <div>
                <div className="text-[10px] font-semibold text-white">LocalBuild</div>
                <div className="text-[9px] text-indigo-100 font-medium">92% Match</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[50px] right-[50px] bg-white/15 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-2.5 w-[125px]" style={{ animation: 'float-card-cta-3 7s ease-in-out infinite 1s' }}>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-indigo-600 text-[9px] font-bold">GT</div>
              <div>
                <div className="text-[10px] font-semibold text-white">GreenTech</div>
                <div className="text-[9px] text-indigo-100 font-medium">88% Match</div>
              </div>
            </div>
          </div>

          {/* Stats badge */}
          <div className="absolute bottom-[90px] right-[270px] z-[6] flex flex-col rounded-lg border border-white/20 bg-white/15 px-3 py-2 shadow-md backdrop-blur-md" style={{ animation: 'float 5s ease-in-out infinite 0.8s' }}>
            <span className="text-lg font-bold text-white">10M+</span>
            <span className="text-[9px] font-medium uppercase tracking-wider text-indigo-100">Companies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMatchCTA;
