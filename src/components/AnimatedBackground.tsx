"use client"

import React, { useState, useEffect, useCallback } from 'react'

/* ── Typing content pool ── */
const TYPING_SEQUENCES: string[][] = [
  // DB queries
  ["SELECT id, score", "  cert, region", "  FROM matches", "  WHERE fit > 0.9", "  LIMIT 50"],
  ["INSERT INTO", "  matches", "  (id, score)", "  VALUES", "  (847, 0.94)"],
  ["db.find({", "  cert: 14001", "  region: AT", "}) → 847"],
  ["UPDATE companies", "  SET score=0.94", "  WHERE id=847"],
  ["SELECT id,", "  score, cert", "  FROM matches", "  LIMIT 10"],
  ["db.insert({", "  id: 91823", "  score: 0.91", "  gaps: 1", "})"],
  ["DELETE FROM", "  stale_cache", "  WHERE age > 7d"],
  ["CREATE INDEX", "  ON tenders", "  (region, score)", "  → done in 2ms"],
  ["db.aggregate([", "  {$match: {fit}}", "  {$sort: {s:-1}}", "]) → 94 docs"],
  ["BEGIN TRANSACTION", "  INSERT bid…", "  UPDATE status…", "COMMIT"],
  // AI prompts
  ["query:", "  filtration", "  EU-certified", "  min 50 staff"],
  ["prompt:", "  steel beams", "  DACH region", "  ISO 9001"],
  ["search:", "  IT services", "  gov contracts", "  DE / AT"],
  ["find:", "  consortium", "  partner", "  civil eng"],
  ["classify:", "  type: IT", "  size: SME", "  fit: high"],
  ["embed(query)", "  dim: 1536", "  → cosine sim", "  top-k: 10"],
  ["llm.extract(", "  doc: pdf#47", "  → requirements", "  → 9 clauses)"],
  ["rerank(results,", "  profile: #91823", "  → top-3 ready"],
  // AI evaluations
  ["result:", "  match: 96%", "  risk: low", "  gaps: 0"],
  ["eval:", "  fit: high", "  cost: avg", "  lead: 4wk"],
  ["analysis:", "  tender #4712", "  match: 91%", "  bid: yes"],
  ["ai.eval():", "  score: 0.94", "  bid: true", "  risk: low"],
  ["gap check:", "  req: 9/9", "  match: 100%", "  → proceed"],
  ["pipeline:", "  scan → embed", "  → match → rank", "  → alert ✓"],
  ["confidence:", "  tender fit: 94%", "  partner fit: 88%", "  → high"],
  ["monitor:", "  portals: 2147", "  new today: 38", "  matched: 11"],
]

/* ── 18 slots spread across the full page height ── */
const TYPING_SLOTS: { top: string; left?: string; right?: string }[] = [
  { top: '3%',  right: '11%' },
  { top: '7%',  left: '7%'  },
  { top: '13%', right: '17%' },
  { top: '19%', left: '11%' },
  { top: '25%', right: '8%'  },
  { top: '31%', left: '6%'  },
  { top: '37%', right: '13%' },
  { top: '43%', left: '9%'  },
  { top: '49%', right: '7%'  },
  { top: '55%', left: '11%' },
  { top: '61%', right: '14%' },
  { top: '67%', left: '7%'  },
  { top: '73%', right: '9%'  },
  { top: '78%', left: '13%' },
  { top: '83%', right: '11%' },
  { top: '88%', left: '8%'  },
  { top: '93%', right: '15%' },
  { top: '97%', left: '10%' },
]

/* ── TypingFragment sub-component ── */
interface TypingFragmentProps {
  lines: string[]
  position: { top: string; left?: string; right?: string }
  onComplete: () => void
}

const TypingFragment: React.FC<TypingFragmentProps> = ({ lines, position, onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'holding' | 'fading'>('typing')

  useEffect(() => {
    if (phase !== 'typing') return

    const interval = setInterval(() => {
      setCurrentChar((prev) => {
        const lineText = lines[currentLine]
        if (prev < lineText.length) {
          return prev + 1
        }
        if (currentLine < lines.length - 1) {
          setCurrentLine((l) => l + 1)
          return 0
        }
        clearInterval(interval)
        setPhase('holding')
        return prev
      })
    }, 38)

    return () => clearInterval(interval)
  }, [phase, currentLine, lines])

  useEffect(() => {
    if (phase !== 'holding') return
    const holdTimer = setTimeout(() => setPhase('fading'), 5000)
    return () => clearTimeout(holdTimer)
  }, [phase])

  useEffect(() => {
    if (phase !== 'fading') return
    const fadeTimer = setTimeout(() => onComplete(), 900)
    return () => clearTimeout(fadeTimer)
  }, [phase, onComplete])

  const posStyle: React.CSSProperties = { top: position.top }
  if (position.left) posStyle.left = position.left
  if (position.right) posStyle.right = position.right

  return (
    <div
      className={`absolute opacity-[0.13] font-mono text-[10px] text-gray-600 leading-relaxed select-none whitespace-pre ${
        phase === 'fading' ? 'transition-opacity duration-900 !opacity-0' : ''
      }`}
      style={posStyle}
    >
      {lines.map((line, li) => {
        if (li > currentLine) return null
        const visibleText = li < currentLine ? line : line.slice(0, currentChar)
        const showCursor = phase === 'typing' && li === currentLine
        return (
          <div key={li}>
            {visibleText}
            {showCursor && (
              <span style={{ animation: 'bg-cursor-blink 1s step-end infinite' }}>|</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ── Subtle floating card ── */
interface FloatCardProps {
  top: string
  left?: string
  right?: string
  delay?: number
  children: React.ReactNode
}

const FloatCard: React.FC<FloatCardProps> = ({ top, left, right, delay = 0, children }) => {
  const posStyle: React.CSSProperties = { top, animationDelay: `${delay}s` }
  if (left) posStyle.left = left
  if (right) posStyle.right = right

  return (
    <div
      className="absolute opacity-[0.07] select-none pointer-events-none"
      style={posStyle}
    >
      <div
        className="border border-gray-400/40 rounded-xl bg-white/5 backdrop-blur-sm px-4 py-3 font-mono text-[9px] text-gray-500 leading-relaxed min-w-[140px]"
        style={{ animation: `float-subtle ${4 + delay}s ease-in-out infinite alternate` }}
      >
        {children}
      </div>
    </div>
  )
}

/* ── Main component ── */
const AnimatedBackground: React.FC = () => {
  // Run 4 concurrent typing slots at once for denser feel
  const MAX_CONCURRENT = 4
  const [activeSlots, setActiveSlots] = useState<{ slotIndex: number; sequenceIndex: number; key: number }[]>([])
  const [keyCounter, setKeyCounter] = useState(0)

  const pickRandom = useCallback((usedSlots: number[], usedSeqs: number[]) => {
    let slot: number
    let tries = 0
    do {
      slot = Math.floor(Math.random() * TYPING_SLOTS.length)
      tries++
    } while (usedSlots.includes(slot) && tries < 40)

    let seq: number
    tries = 0
    do {
      seq = Math.floor(Math.random() * TYPING_SEQUENCES.length)
      tries++
    } while (usedSeqs.includes(seq) && tries < 40)

    return { slot, seq }
  }, [])

  // Bootstrap: stagger-start 4 fragments
  useEffect(() => {
    const bootstrapDelays = [0, 2500, 5500, 9000]
    const timers: ReturnType<typeof setTimeout>[] = []

    bootstrapDelays.forEach((delay, i) => {
      const t = setTimeout(() => {
        setKeyCounter((k) => {
          const newKey = k + 1
          setActiveSlots((prev) => {
            if (prev.length >= MAX_CONCURRENT) return prev
            const used = prev.map((s) => s.slotIndex)
            const usedSeqs = prev.map((s) => s.sequenceIndex)
            const next = pickRandom(used, usedSeqs)
            return [...prev, { slotIndex: next.slot, sequenceIndex: next.seq, key: newKey }]
          })
          return newKey
        })
      }, delay)
      timers.push(t)
    })

    return () => timers.forEach(clearTimeout)
  }, [pickRandom])

  const handleComplete = useCallback((completedKey: number) => {
    const delay = 1500 + Math.random() * 2000
    setTimeout(() => {
      setKeyCounter((k) => {
        const newKey = k + 1
        setActiveSlots((prev) => {
          const remaining = prev.filter((s) => s.key !== completedKey)
          const usedSlots = remaining.map((s) => s.slotIndex)
          const usedSeqs = remaining.map((s) => s.sequenceIndex)
          const next = pickRandom(usedSlots, usedSeqs)
          return [...remaining, { slotIndex: next.slot, sequenceIndex: next.seq, key: newKey }]
        })
        return newKey
      })
    }, delay)
  }, [pickRandom])

  return (
    <div className="absolute inset-x-0 top-0 z-0 pointer-events-none overflow-hidden" style={{ height: '400vh' }}>
      {/* Keyframe animations */}
      <style>{`
        @keyframes bg-cursor-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes float-subtle { 0% { transform: translateY(0px); } 100% { transform: translateY(-6px); } }
      `}</style>

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 0.8px, transparent 0.8px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Subtle square grid overlay (like screenshot) ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6b7280 1px, transparent 1px),
            linear-gradient(to bottom, #6b7280 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* ── Blurred color orbs ── */}
      <div className="absolute -top-[200px] -left-[150px] w-[600px] h-[600px] rounded-full bg-blue-500/[0.05] blur-[120px]" />
      <div className="absolute top-[20%] -right-[100px] w-[500px] h-[500px] rounded-full bg-indigo-400/[0.04] blur-[100px]" />
      <div className="absolute top-[45%] -left-[80px] w-[450px] h-[450px] rounded-full bg-blue-400/[0.035] blur-[110px]" />
      <div className="absolute top-[70%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-300/[0.03] blur-[100px]" />
      <div className="absolute top-[90%] left-[20%] w-[350px] h-[350px] rounded-full bg-blue-300/[0.025] blur-[90px]" />

      {/* ── Static data fragments (always visible, very faint) ── */}

      {/* Hero zone — right */}
      <div className="absolute top-[7%] right-[5%] opacity-[0.11] font-mono text-[11px] text-gray-600 leading-relaxed select-none">
        <div>portals: 2,147</div>
        <div>countries: 27</div>
        <div>companies: 10,247,831</div>
      </div>

      {/* Hero zone — left */}
      <div className="absolute top-[12%] left-[4%] opacity-[0.09] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>scan(EU, all)</div>
        <div>→ matching…</div>
      </div>

      {/* Hero lower — right */}
      <div className="absolute top-[17%] right-[4%] opacity-[0.08] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>SELECT * FROM tenders</div>
        <div>WHERE region IN ('AT','DE','CH')</div>
        <div>LIMIT 500</div>
      </div>

      {/* Section 2 — right */}
      <div className="absolute top-[27%] right-[8%] opacity-[0.09] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>{'{'}</div>
        <div>&nbsp;&nbsp;match: 94%</div>
        <div>&nbsp;&nbsp;risk: low</div>
        <div>&nbsp;&nbsp;gaps: 1</div>
        <div>{'}'}</div>
      </div>

      {/* Section 2 — left */}
      <div className="absolute top-[33%] left-[4%] opacity-[0.09] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>tender.scan()</div>
        <div>&nbsp;&nbsp;.portals: 2,147</div>
        <div>&nbsp;&nbsp;.new: 1,438</div>
        <div>&nbsp;&nbsp;.matched: 94</div>
      </div>

      {/* Section 3 — right */}
      <div className="absolute top-[41%] right-[5%] opacity-[0.09] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>#1 — 96%</div>
        <div>#2 — 91%</div>
        <div>#3 — 87%</div>
        <div>#4 — 82%</div>
      </div>

      {/* Section 3 — left */}
      <div className="absolute top-[48%] left-[5%] opacity-[0.09] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>db.companies.find({'{'}</div>
        <div>&nbsp;&nbsp;cert: "ISO 14001",</div>
        <div>&nbsp;&nbsp;region: "Alpine"</div>
        <div>{'}'}) → 847</div>
      </div>

      {/* Section 4 — right */}
      <div className="absolute top-[54%] right-[5%] opacity-[0.09] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>search("ISO 14001")</div>
        <div>→ 847 results</div>
        <div>→ 3 countries</div>
      </div>

      {/* Section 4 — left */}
      <div className="absolute top-[60%] left-[6%] opacity-[0.08] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>reverse_tender()</div>
        <div>→ 47 suppliers</div>
        <div>→ 23 offers</div>
      </div>

      {/* Section 5 — right */}
      <div className="absolute top-[66%] right-[6%] opacity-[0.08] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>index: companies_eu</div>
        <div>docs: 10,247,831</div>
        <div>shards: 27</div>
        <div>status: green</div>
      </div>

      {/* Section 5 — left */}
      <div className="absolute top-[72%] left-[5%] opacity-[0.08] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>products.count()</div>
        <div>→ 48,392,104</div>
      </div>

      {/* Section 6 — right */}
      <div className="absolute top-[78%] right-[7%] opacity-[0.08] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>db.companies</div>
        <div>&nbsp;&nbsp;.count: 10M+</div>
        <div>&nbsp;&nbsp;.langs: 27</div>
      </div>

      {/* CTA zone — left */}
      <div className="absolute top-[84%] left-[8%] opacity-[0.07] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>enrichment.status</div>
        <div>→ running (24/7)</div>
        <div>→ certs: 2,891,447</div>
      </div>

      {/* CTA zone — right */}
      <div className="absolute top-[90%] right-[9%] opacity-[0.07] font-mono text-[10px] text-gray-600 leading-relaxed select-none">
        <div>pipeline:</div>
        <div>&nbsp;&nbsp;scan → match</div>
        <div>&nbsp;&nbsp;→ rank → alert</div>
        <div>&nbsp;&nbsp;✓ 2,147 portals</div>
      </div>

      {/* ── Floating mini-cards (like screenshot boxes) ── */}
      <FloatCard top="10%" right="30%" delay={0}>
        <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Match Score</div>
        <div className="text-gray-500">tender #4712 → 94%</div>
        <div className="text-gray-500">risk: low · gaps: 1</div>
      </FloatCard>

      <FloatCard top="22%" left="22%" delay={1.5}>
        <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1">AI Analysis</div>
        <div className="text-gray-500">embed → cosine</div>
        <div className="text-gray-500">top-k: 10 results</div>
      </FloatCard>

      <FloatCard top="38%" right="22%" delay={3}>
        <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1">DB Status</div>
        <div className="text-gray-500">docs: 10,247,831</div>
        <div className="text-gray-500">status: ● green</div>
      </FloatCard>

      <FloatCard top="52%" left="20%" delay={0.8}>
        <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Portal Scan</div>
        <div className="text-gray-500">new tenders: 38</div>
        <div className="text-gray-500">matched: 11 · sent ✓</div>
      </FloatCard>

      <FloatCard top="65%" right="20%" delay={2.2}>
        <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Company Match</div>
        <div className="text-gray-500">ISO 14001 · AT</div>
        <div className="text-gray-500">847 results found</div>
      </FloatCard>

      <FloatCard top="79%" left="24%" delay={1.2}>
        <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Pipeline</div>
        <div className="text-gray-500">scan → embed</div>
        <div className="text-gray-500">→ rank → alert ✓</div>
      </FloatCard>

      <FloatCard top="91%" right="25%" delay={0.4}>
        <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Monitoring</div>
        <div className="text-gray-500">24/7 · 2,147 portals</div>
        <div className="text-gray-500">uptime: 99.98%</div>
      </FloatCard>

      {/* ── SVG node clusters ── */}
      <svg className="absolute top-[15%] left-[16%] opacity-[0.09]" width="140" height="90" viewBox="0 0 140 90">
        <circle cx="10" cy="10" r="2.5" fill="#9CA3AF" />
        <circle cx="70" cy="45" r="2.5" fill="#9CA3AF" />
        <circle cx="130" cy="15" r="2.5" fill="#9CA3AF" />
        <circle cx="90" cy="80" r="2.5" fill="#9CA3AF" />
        <line x1="10" y1="10" x2="70" y2="45" stroke="#9CA3AF" strokeWidth="0.7" />
        <line x1="70" y1="45" x2="130" y2="15" stroke="#9CA3AF" strokeWidth="0.7" />
        <line x1="70" y1="45" x2="90" y2="80" stroke="#9CA3AF" strokeWidth="0.7" />
      </svg>

      <svg className="absolute top-[40%] right-[16%] opacity-[0.07]" width="120" height="70" viewBox="0 0 120 70">
        <circle cx="15" cy="35" r="2" fill="#9CA3AF" />
        <circle cx="60" cy="10" r="2" fill="#9CA3AF" />
        <circle cx="105" cy="40" r="2" fill="#9CA3AF" />
        <circle cx="60" cy="60" r="2" fill="#9CA3AF" />
        <line x1="15" y1="35" x2="60" y2="10" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="60" y1="10" x2="105" y2="40" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="105" y1="40" x2="60" y2="60" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="60" y1="60" x2="15" y2="35" stroke="#9CA3AF" strokeWidth="0.6" />
      </svg>

      <svg className="absolute top-[62%] left-[14%] opacity-[0.07]" width="100" height="60" viewBox="0 0 100 60">
        <circle cx="10" cy="30" r="2" fill="#9CA3AF" />
        <circle cx="50" cy="8" r="2" fill="#9CA3AF" />
        <circle cx="90" cy="30" r="2" fill="#9CA3AF" />
        <circle cx="50" cy="52" r="2" fill="#9CA3AF" />
        <line x1="10" y1="30" x2="50" y2="8" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="50" y1="8" x2="90" y2="30" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="90" y1="30" x2="50" y2="52" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="50" y1="52" x2="10" y2="30" stroke="#9CA3AF" strokeWidth="0.6" />
      </svg>

      <svg className="absolute top-[82%] right-[18%] opacity-[0.07]" width="110" height="65" viewBox="0 0 110 65">
        <circle cx="10" cy="32" r="2" fill="#9CA3AF" />
        <circle cx="55" cy="8" r="2" fill="#9CA3AF" />
        <circle cx="100" cy="32" r="2" fill="#9CA3AF" />
        <circle cx="35" cy="55" r="2" fill="#9CA3AF" />
        <circle cx="80" cy="55" r="2" fill="#9CA3AF" />
        <line x1="10" y1="32" x2="55" y2="8" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="55" y1="8" x2="100" y2="32" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="100" y1="32" x2="80" y2="55" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="10" y1="32" x2="35" y2="55" stroke="#9CA3AF" strokeWidth="0.6" />
        <line x1="35" y1="55" x2="80" y2="55" stroke="#9CA3AF" strokeWidth="0.6" />
      </svg>

      {/* ── Dash lines ── */}
      {[
        { top: '29%', right: '10%' },
        { top: '47%', left: '10%' },
        { top: '57%', right: '15%' },
        { top: '69%', left: '10%' },
        { top: '85%', right: '12%' },
      ].map((pos, i) => (
        <div key={i} className="absolute opacity-[0.07] select-none" style={pos}>
          <div className="flex gap-1.5">
            {[...Array(8 - i)].map((_, j) => (
              <div key={j} className="w-4 h-px bg-gray-500" />
            ))}
          </div>
        </div>
      ))}

      {/* ── Animated typing fragments (desktop only) ── */}
      <div className="hidden lg:block">
        {activeSlots.map(({ slotIndex, sequenceIndex, key }) => (
          <TypingFragment
            key={key}
            lines={TYPING_SEQUENCES[sequenceIndex]}
            position={TYPING_SLOTS[slotIndex]}
            onComplete={() => handleComplete(key)}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground
