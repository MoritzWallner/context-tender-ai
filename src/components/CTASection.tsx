import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const TenderMatchCTA: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6 font-sans">
      
      {/* Inject Custom Keyframes for specific animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-ring {
          0% { transform: translate(45px, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(45px, -50%) scale(1.5); opacity: 0; }
        }
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        @keyframes particleFlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>

      {/* Main Banner Container */}
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-50 via-[#e8f4fc] via-[#d4edfc] to-[#bae6fd] px-8 py-12 shadow-sm md:flex-row md:px-20 md:py-16">
        
        {/* --- Left Content --- */}
        <div className="relative z-10 max-w-full text-center md:max-w-[600px] md:text-left">
          <p className="mb-4 text-sm text-blue-600 font-extrabold">Let's get started</p>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-[42px]">
            Ready to find more relevant tenders?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-500">
            Let tender.match handle the searching, so you can focus on winning contracts.
          </p>
          
          <a href="/waitlist" className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]">
            Join Waitlist
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* --- Right Visual Area (Hidden on mobile for layout sanity, or adjusted) --- */}
        <div className="hidden md:block relative h-[450px] w-[550px] flex-shrink-0">
            
          {/* Glowing Orbs */}
          <div className="absolute right-[120px] top-[15%] h-[200px] w-[200px] rounded-full bg-blue-500/20 blur-3xl filter" />
          <div className="absolute bottom-[15%] right-[280px] h-[150px] w-[150px] rounded-full bg-sky-500/20 blur-3xl filter" />
          <div className="absolute right-[40px] top-[55%] h-[120px] w-[120px] rounded-full bg-indigo-500/20 blur-3xl filter" />

          {/* Connection Lines SVG */}
          <svg className="absolute right-0 top-0 h-full w-full opacity-50" viewBox="0 0 550 450">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            {/* Paths connecting to center hub approx (350, 225) - coordinates mapped from original CSS */}
            <path className="animate-[dash_20s_linear_infinite]" d="M 210 25 Q 280 125 350 225" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" />
            <path className="animate-[dash_20s_linear_infinite]" d="M 470 50 Q 410 140 350 225" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" />
            <path className="animate-[dash_20s_linear_infinite]" d="M 520 170 Q 435 200 350 225" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" />
            <path className="animate-[dash_20s_linear_infinite]" d="M 500 360 Q 425 290 350 225" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" />
            <path className="animate-[dash_20s_linear_infinite]" d="M 250 415 Q 300 320 350 225" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" />
            <path className="animate-[dash_20s_linear_infinite]" d="M 170 150 Q 260 190 350 225" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" />
          </svg>

          {/* Central Hub */}
          <div className="absolute right-[200px] top-1/2 z-10 flex h-[90px] w-[90px] -translate-y-1/2 items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_8px_32px_rgba(37,99,235,0.3)]">
            {/* Target Icon */}
            <div className="relative h-10 w-10">
              <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-sm bg-white" />
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-sm bg-white" />
              <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white" />
            </div>
          </div>

          {/* Pulsing Rings */}
          {[0, 0.5, 1].map((delay, i) => (
            <div
              key={i}
              className="absolute right-[200px] top-1/2 z-0 h-[90px] w-[90px] rounded-[22px] border-2 border-blue-500/30"
              style={{ 
                animation: 'pulse-ring 2s ease-out infinite',
                animationDelay: `${delay}s` 
              }}
            />
          ))}

          {/* Glass Documents */}
          <GlassDoc 
            className="right-[15px] top-[100px] z-[2] h-[130px] w-[100px] rotate-12" 
            match={97} 
            lines="long-medium-short-long-medium"
          />
          <GlassDoc 
            className="right-[55px] top-[130px] z-[3] h-[110px] w-[85px] -rotate-6" 
            match={88} 
            lines="medium-long-short-medium"
          />
          <GlassDoc 
            className="bottom-[70px] right-[90px] z-[2] h-[100px] w-[75px] rotate-[5deg]" 
            match={78} 
            lines="short-long-medium"
          />

          {/* Floating Portal Nodes */}
          <PortalNode 
            className="right-[340px] top-[25px]" 
            delay={0} 
            size="large"
            flag={<FlagEU />}
            label="TED.europa" 
          />
           <PortalNode 
            className="right-[80px] top-[50px]" 
            delay={1} 
            size="medium"
            flag={<FlagDE />}
            label="Bund.de" 
          />
          <PortalNode 
            className="right-[30px] top-[170px]" 
            delay={2} 
            size="small"
            flag={<FlagAT />}
            label="AT" 
          />
           <PortalNode 
            className="bottom-[90px] right-[50px]" 
            delay={0.5} 
            size="medium"
            flag={<FlagFR />}
            label="BOAMP" 
          />
          <PortalNode 
            className="bottom-[35px] right-[300px]" 
            delay={1.5} 
            size="small"
            flag={<FlagNL />}
            label="NL" 
          />
          <PortalNode 
            className="right-[380px] top-[150px]" 
            delay={2.5} 
            size="small"
            flag={<FlagCH />}
            label="simap" 
          />

          {/* Stats Badge */}
          <div 
            className="absolute bottom-[100px] right-[320px] z-[6] flex flex-col rounded-xl border border-white/90 bg-white/90 px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
            style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.8s' }}
          >
            <span className="text-xl font-bold text-blue-600">2,000+</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Portals Connected</span>
          </div>

          {/* Particles */}
          <Particle top="80px" right="320px" delay={0} />
          <Particle top="120px" right="280px" delay={0.5} />
          <Particle bottom="100px" right="240px" delay={1} />
          <Particle top="100px" right="150px" delay={1.5} />
          <Particle bottom="130px" right="130px" delay={2} />

        </div>
      </div>
    </div>
  );
};

export default TenderMatchCTA;

// --- Sub Components for cleanliness ---

// 1. Portal Node (Floating Label with Flag)
interface PortalNodeProps {
  className?: string;
  delay: number;
  size: 'small' | 'medium' | 'large';
  label: string;
  flag: React.ReactNode;
}

const PortalNode: React.FC<PortalNodeProps> = ({ className, delay, size, label, flag }) => {
  const sizeClasses = {
    small: 'w-[65px] h-[42px] text-[10px]',
    medium: 'w-[90px] h-[48px] text-[11px]',
    large: 'w-[110px] h-[55px] text-[12px]',
  };

  return (
    <div 
      className={`absolute flex items-center justify-center gap-1.5 rounded-xl border border-white/90 bg-white/85 font-semibold text-slate-600 shadow-sm backdrop-blur-md ${sizeClasses[size]} ${className}`}
      style={{ animation: 'float 6s ease-in-out infinite', animationDelay: `${delay}s` }}
    >
      {flag}
      {label}
    </div>
  );
};

// 2. Glass Document
interface GlassDocProps {
  className?: string;
  match: number;
  lines: string; 
}

const GlassDoc: React.FC<GlassDocProps> = ({ className, match, lines }) => {
  return (
    <div className={`absolute overflow-hidden rounded-xl border border-white/60 bg-gradient-to-br from-white/70 to-white/30 shadow-sm backdrop-blur-md ${className}`}>
      {/* Checkmark Badge */}
      <div className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-sm">
        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
      </div>
      
      {/* Doc Header */}
      <div className="flex h-6 items-center gap-1 bg-gradient-to-br from-blue-500 to-blue-600 px-2">
        <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
      </div>

      {/* Doc Lines */}
      <div className="p-2.5">
        {lines.split('-').map((type, i) => (
          <div 
            key={i} 
            className={`mb-1.5 h-[5px] rounded-sm bg-slate-400/25 ${type === 'long' ? 'w-full' : type === 'medium' ? 'w-3/4' : 'w-1/2'}`} 
          />
        ))}
      </div>

      {/* Match Badge */}
      <div className="absolute bottom-2 right-2 rounded bg-gradient-to-br from-green-500 to-green-600 px-1.5 py-[3px] text-[9px] font-bold text-white shadow-sm">
        {match}%
      </div>
    </div>
  );
};

// 3. Particle
const Particle: React.FC<{ top?: string; bottom?: string; right: string; delay: number }> = ({ top, bottom, right, delay }) => (
  <div 
    className="absolute h-1.5 w-1.5 rounded-full bg-blue-500 opacity-60"
    style={{ 
      top, bottom, right, 
      animation: 'particleFlow 3s ease-in-out infinite', 
      animationDelay: `${delay}s` 
    }} 
  />
);

// 4. Flags (CSS Gradients ported directly for accuracy)
const FlagEU = () => (
  <div className="relative h-3.5 w-5 shrink-0 rounded-[2px]" style={{ background: 'linear-gradient(180deg, #003399 0%, #003399 100%)' }}>
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] leading-none text-[#ffcc00]">★</span>
  </div>
);
const FlagDE = () => <div className="h-3.5 w-5 shrink-0 rounded-[2px]" style={{ background: 'linear-gradient(180deg, #000 33%, #dd0000 33%, #dd0000 66%, #ffcc00 66%)' }} />;
const FlagAT = () => <div className="h-3.5 w-5 shrink-0 rounded-[2px]" style={{ background: 'linear-gradient(180deg, #ed2939 33%, #fff 33%, #fff 66%, #ed2939 66%)' }} />;
const FlagFR = () => <div className="h-3.5 w-5 shrink-0 rounded-[2px]" style={{ background: 'linear-gradient(90deg, #002395 33%, #fff 33%, #fff 66%, #ed2939 66%)' }} />;
const FlagNL = () => <div className="h-3.5 w-5 shrink-0 rounded-[2px]" style={{ background: 'linear-gradient(180deg, #ae1c28 33%, #fff 33%, #fff 66%, #21468b 66%)' }} />;
const FlagCH = () => (
  <div className="relative h-3.5 w-5 shrink-0 rounded-[2px] bg-[#ff0000]">
     <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold leading-none text-white">+</span>
  </div>
);
