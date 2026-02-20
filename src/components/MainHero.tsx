import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Users } from 'lucide-react';

const MainHero: React.FC = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden px-4 sm:px-6">
      <style>{`
        @keyframes orb-float-1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(30px, -20px) scale(1.1); } }
        @keyframes orb-float-2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-20px, 30px) scale(1.05); } }
        @keyframes orb-float-3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(15px, 15px) scale(1.15); } }
        @keyframes particle-drift { 0% { transform: translateY(0) translateX(0); opacity: 0; } 20% { opacity: 0.6; } 80% { opacity: 0.6; } 100% { transform: translateY(-80px) translateX(20px); opacity: 0; } }
        @keyframes card-hover-1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes card-hover-2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>

      {/* Animated Gradient Orbs */}
      <div
        className="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]"
        style={{ animation: 'orb-float-1 8s ease-in-out infinite' }}
      />
      <div
        className="absolute right-[15%] top-[30%] h-[250px] w-[250px] rounded-full bg-emerald-500/10 blur-[100px]"
        style={{ animation: 'orb-float-2 10s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[20%] left-[30%] h-[200px] w-[200px] rounded-full bg-purple-500/8 blur-[100px]"
        style={{ animation: 'orb-float-3 12s ease-in-out infinite' }}
      />
      <div
        className="absolute right-[35%] bottom-[30%] h-[180px] w-[180px] rounded-full bg-sky-500/10 blur-[80px]"
        style={{ animation: 'orb-float-1 9s ease-in-out infinite 2s' }}
      />

      {/* Subtle Particles */}
      {[
        { top: '15%', left: '20%', delay: 0, duration: 6 },
        { top: '25%', right: '25%', delay: 1.5, duration: 7 },
        { top: '60%', left: '15%', delay: 3, duration: 5 },
        { top: '70%', right: '20%', delay: 0.5, duration: 8 },
        { top: '40%', left: '45%', delay: 2, duration: 6 },
        { top: '80%', left: '60%', delay: 4, duration: 7 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-400/40"
          style={{
            top: p.top,
            left: p.left,
            right: (p as any).right,
            animation: `particle-drift ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 sm:gap-14">
        {/* Logo Area */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/20">
              <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Alp<span className="text-blue-600">X</span>
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-400 font-medium tracking-wide">
            AI-Powered Procurement Intelligence
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {/* tender.match Card */}
          <Link
            to="/tender-match"
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 sm:p-8 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200"
            style={{ animation: 'card-hover-1 6s ease-in-out infinite' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-4 sm:mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md shadow-blue-500/20">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">tender.match</h3>
                  <p className="text-xs text-blue-600 font-semibold">Tender Discovery</p>
                </div>
              </div>
              <p className="mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed text-slate-500">
                AI-powered tender discovery across 2,000+ European portals. Find relevant opportunities before your competitors.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                Explore tender.match
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* company.match Card */}
          <Link
            to="/company-match"
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 sm:p-8 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-200"
            style={{ animation: 'card-hover-2 7s ease-in-out infinite 0.5s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-4 sm:mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-md shadow-emerald-500/20">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">company.match</h3>
                  <p className="text-xs text-emerald-600 font-semibold">Partner Matching</p>
                </div>
              </div>
              <p className="mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed text-slate-500">
                Intelligent B2B partner matching from 10M+ companies. Build winning consortiums with the right partners.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                Explore company.match
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
