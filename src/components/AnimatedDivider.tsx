"use client"

import React from 'react'

const AnimatedDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '80px' }}>
      <style>{`
        @keyframes shimmer-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-dot {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
      `}</style>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/60 to-transparent" />

      {/* The main horizontal line */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-px h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Shimmer effect running along the line */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-px h-px overflow-hidden">
        <div
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
          style={{ animation: 'shimmer-line 3s ease-in-out infinite' }}
        />
      </div>

      {/* Evenly spaced subtle dots along the line */}
      {[10, 25, 40, 50, 60, 75, 90].map((pos, i) => (
        <div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-400"
          style={{
            left: `${pos}%`,
            animation: `fade-dot 3s ease-in-out infinite`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}

      {/* Central accent glow dot */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"
        style={{ animation: 'pulse-glow 2.5s ease-in-out infinite' }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500/10 blur-sm"
        style={{ animation: 'pulse-glow 2.5s ease-in-out infinite' }}
      />

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  )
}

export default AnimatedDivider
