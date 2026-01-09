"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"

// ============================================
// PRODUCT DEMO TYPES & DATA
// ============================================

interface Tender {
  id: number
  flag: "ch" | "de" | "at" | "nl" | "pl"
  title: string
  meta: string
  match: number
  matchLevel: "high" | "medium"
}

interface Requirement {
  text: string
  status: "pass" | "partial" | "fail"
  statusText: string
}

interface Partner {
  initials: string
  name: string
  detail: string
  fills: string
  match: number
  avatarClass: string
}

const tenders: Tender[] = [
  {
    id: 0,
    flag: "ch",
    title: "E-Bike Sharing Kanton Zürich",
    meta: "simap.ch • CHF 2.2M • Frist: 30 Tage",
    match: 94,
    matchLevel: "high",
  },
  {
    id: 1,
    flag: "de",
    title: "Aufbau kommunales Fahrradverleihsystem Stuttgart",
    meta: "Bund.de • €1.9M • Frist: 35 Tage",
    match: 92,
    matchLevel: "high",
  },
  {
    id: 2,
    flag: "at",
    title: "Österreichweites Bikesharing-System mit E-Scootern",
    meta: "Auftrag.at • €2.8M • Frist: 28 Tage",
    match: 85,
    matchLevel: "medium",
  },
  {
    id: 3,
    flag: "nl",
    title: "Deelfiets systeem Provincie Utrecht",
    meta: "TenderNed • €1.6M • Frist: 21 Tage",
    match: 81,
    matchLevel: "medium",
  },
  {
    id: 4,
    flag: "pl",
    title: "System roweru miejskiego Kraków 2026",
    meta: "TED.europa.eu • €3.4M • Frist: 42 Tage",
    match: 78,
    matchLevel: "medium",
  },
]

const requirements: Requirement[] = [
  { text: "Fahrräder: Lieferung & Wartung von 500+ Bikes", status: "pass", statusText: "Erfüllt" },
  { text: "Stationen: Hardware & Montage von Verleihstationen", status: "pass", statusText: "Erfüllt" },
  { text: "Betrieb: 24/7 Service & Wartungskonzept", status: "pass", statusText: "Erfüllt" },
  { text: "Support: Deutschsprachiger Kundensupport", status: "pass", statusText: "Erfüllt" },
  { text: "Geografie: Österreichweite Abdeckung möglich", status: "pass", statusText: "Erfüllt" },
  { text: "Zertifizierung: ISO 9001, Qualitätsmanagement", status: "pass", statusText: "Erfüllt" },
  { text: "Referenz Fahrräder: Mind. 200 Bikes im Betrieb", status: "pass", statusText: "Erfüllt" },
  { text: "App-Steuerung: White-Label Buchungs-App", status: "fail", statusText: "→ Partner erforderlich" },
  { text: "Referenz E-Scooter: Mind. 100 Scooter im Betrieb", status: "fail", statusText: "→ Partner erforderlich" },
]

const partners: Partner[] = [
  {
    initials: "JU",
    name: "JUHUU BikeBox GmbH",
    detail: "White-Label Booking Software • Wien • SaaS für Mobility & Parking",
    fills: "App-Steuerung",
    match: 96,
    avatarClass: "avatar-juhuu",
  },
  {
    initials: "ZS",
    name: "Zeus Scooters",
    detail: "E-Scooter Betreiber • Dublin • 15.000+ Scooter in 40 Städten",
    fills: "Scooter-Referenz",
    match: 94,
    avatarClass: "avatar-zeus",
  },
]

const badgeTexts = ["Semantic Discovery", "AI Detail Analysis", "company.match"]
const footerTexts = [
  "2.000+ Portale durchsucht • Semantic Matching",
  "Reasoning Agent • Gap-Analyse läuft",
  "10M+ Unternehmensprofile durchsucht",
]

// ============================================
// FLAG COMPONENT
// ============================================

const Flag: React.FC<{ country: string }> = ({ country }) => {
  const baseStyle: React.CSSProperties = {
    width: "28px",
    height: "19px",
    borderRadius: "3px",
    flexShrink: 0,
  }

  const flagStyles: Record<string, React.CSSProperties> = {
    de: { ...baseStyle, background: "linear-gradient(180deg, #000 33%, #dd0000 33%, #dd0000 66%, #ffcc00 66%)" },
    at: { ...baseStyle, background: "linear-gradient(180deg, #ed2939 33%, #fff 33%, #fff 66%, #ed2939 66%)" },
    pl: { ...baseStyle, background: "linear-gradient(180deg, #fff 50%, #dc143c 50%)" },
    nl: { ...baseStyle, background: "linear-gradient(180deg, #ae1c28 33%, #fff 33%, #fff 66%, #21468b 66%)" },
    ch: { ...baseStyle, background: "#ff0000", display: "flex", alignItems: "center", justifyContent: "center" },
  }

  if (country === "ch") {
    return (
      <div style={flagStyles.ch}>
        <span style={{ color: "white", fontWeight: "bold", fontSize: "12px", lineHeight: 1 }}>+</span>
      </div>
    )
  }

  return <div style={flagStyles[country]} />
}

// ============================================
// GHOST CURSOR COMPONENT
// ============================================

const GhostCursor: React.FC<{ position: { x: number; y: number }; clicking: boolean; hidden: boolean }> = ({
  position,
  clicking,
  hidden,
}) => (
  <div
    style={{
      position: "absolute",
      width: "16px",
      height: "16px",
      pointerEvents: "none",
      zIndex: 100,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      opacity: hidden ? 0 : 0.9,
      transform: clicking ? "scale(0.85)" : "scale(1)",
      left: position.x,
      top: position.y,
    }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: "100%", height: "100%", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))" }}
    >
      <path
        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z"
        fill="#111827"
        stroke="#fff"
        strokeWidth="1.5"
      />
    </svg>
  </div>
)

// ============================================
// PRODUCT DEMO COMPONENT
// ============================================

const ProductDemo: React.FC = () => {
  const [activePanel, setActivePanel] = useState(0)
  const [selectedTender, setSelectedTender] = useState<number | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 75 })
  const [cursorClicking, setCursorClicking] = useState(false)
  const [cursorHidden, setCursorHidden] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [tabHighlightStyle, setTabHighlightStyle] = useState({ width: 70, left: 16 })

  const tabRefs = useRef<(HTMLDivElement | null)[]>([])
  const tenderRefs = useRef<(HTMLDivElement | null)[]>([])
  const findPartnersRef = useRef<HTMLButtonElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)

  const getElementCenter = useCallback((element: HTMLElement | null) => {
    if (!element || !cardRef.current) return { x: 100, y: 100 }
    const cardRect = cardRef.current.getBoundingClientRect()
    const rect = element.getBoundingClientRect()
    return {
      x: rect.left - cardRect.left + rect.width / 2,
      y: rect.top - cardRect.top + rect.height / 2,
    }
  }, [])

  const updateTabHighlight = useCallback((index: number) => {
    const tab = tabRefs.current[index]
    const nav = navRef.current
    if (tab && nav) {
      const navRect = nav.getBoundingClientRect()
      const tabRect = tab.getBoundingClientRect()
      setTabHighlightStyle({
        width: tabRect.width,
        left: tabRect.left - navRect.left,
      })
    }
  }, [])

  const simulateClick = useCallback(() => {
    setCursorClicking(true)
    setTimeout(() => setCursorClicking(false), 150)
  }, [])

  const goToPanel = useCallback(
    (index: number) => {
      setActivePanel(index)
      updateTabHighlight(index)
      if (index === 0) {
        setSelectedTender(null)
      }
    },
    [updateTabHighlight],
  )

  const handleTenderClick = useCallback(
    (tenderId: number) => {
      if (isAutoPlaying) {
        setIsAutoPlaying(false)
        setCursorHidden(true)
      }
      setSelectedTender(tenderId)
      setTimeout(() => goToPanel(1), 300)
    },
    [isAutoPlaying, goToPanel],
  )

  const handleTabClick = useCallback(
    (index: number) => {
      const canClick = index === 0 || (index === 1 && selectedTender !== null) || (index === 2 && activePanel >= 1)
      if (canClick) {
        if (isAutoPlaying) {
          setIsAutoPlaying(false)
          setCursorHidden(true)
        }
        goToPanel(index)
      }
    },
    [isAutoPlaying, selectedTender, activePanel, goToPanel],
  )

  const handleFindPartnersClick = useCallback(() => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false)
      setCursorHidden(true)
    }
    goToPanel(2)
  }, [isAutoPlaying, goToPanel])

  useEffect(() => {
    const timer = setTimeout(() => {
      updateTabHighlight(0)
    }, 100)
    return () => clearTimeout(timer)
  }, [updateTabHighlight])

  useEffect(() => {
    if (!isAutoPlaying) return

    let timeoutId: NodeJS.Timeout
    let step = 0

    const runStep = () => {
      switch (step) {
        case 0:
          setCursorPosition(getElementCenter(tenderRefs.current[2]))
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 1200)
          break
        case 1:
          simulateClick()
          setSelectedTender(2)
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 1200)
          break
        case 2:
          goToPanel(1)
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 600)
          break
        case 3:
          setCursorPosition(getElementCenter(tabRefs.current[1]))
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 600)
          break
        case 4:
          setTimeout(() => {
            setCursorPosition(getElementCenter(findPartnersRef.current))
          }, 500)
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 3500)
          break
        case 5:
          simulateClick()
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 1200)
          break
        case 6:
          goToPanel(2)
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 600)
          break
        case 7:
          setCursorPosition(getElementCenter(tabRefs.current[2]))
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 600)
          break
        case 8:
          timeoutId = setTimeout(() => {
            step++
            runStep()
          }, 4500)
          break
        case 9:
          goToPanel(0)
          setCursorPosition(getElementCenter(tabRefs.current[0]))
          timeoutId = setTimeout(() => {
            step = 0
            runStep()
          }, 800)
          break
      }
    }

    timeoutId = setTimeout(runStep, 3000)

    return () => clearTimeout(timeoutId)
  }, [isAutoPlaying, getElementCenter, simulateClick, goToPanel])

  const isTabDisabled = (index: number) => {
    if (index === 0) return false
    if (index === 1) return selectedTender === null
    if (index === 2) return activePanel < 1
    return true
  }

  return (
    <div
      ref={cardRef}
      style={{
        width: "100%",
        maxWidth: "580px",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <GhostCursor position={cursorPosition} clicking={cursorClicking} hidden={cursorHidden} />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: "9px",
            }}
          >
            t.m
          </div>
          <span style={{ fontWeight: 600, fontSize: "13px", color: "#111827" }}>tender.match</span>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 8px",
            background: "#f3f4f6",
            borderRadius: "5px",
            fontSize: "10px",
            fontWeight: 500,
            color: "#6b7280",
          }}
        >
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#3b82f6" }} />
          <span>{badgeTexts[activePanel]}</span>
        </div>
      </div>

      {/* Navigation */}
      <div
        ref={navRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          padding: "10px 16px",
          borderBottom: "1px solid #e5e7eb",
          position: "relative",
          background: "#fafafa",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "28px",
            background: "white",
            borderRadius: "5px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 0,
            top: "6px",
            width: tabHighlightStyle.width,
            left: tabHighlightStyle.left,
          }}
        />
        {["Discover", "Analyze", "Find Partners"].map((tab, index) => (
          <div
            key={tab}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            onClick={() => handleTabClick(index)}
            style={{
              padding: "5px 12px",
              fontSize: "11px",
              fontWeight: 500,
              cursor: isTabDisabled(index) ? "not-allowed" : "pointer",
              position: "relative",
              zIndex: 1,
              borderRadius: "5px",
              transition: "color 0.2s ease",
              userSelect: "none",
              color: activePanel === index ? "#111827" : isTabDisabled(index) ? "#d1d5db" : "#6b7280",
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        style={{ height: "340px", padding: "16px", position: "relative", overflow: "hidden", background: "#fafafa" }}
      >
        {/* Panel 0: Discover */}
        {activePanel === 0 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              overflowY: "auto",
            }}
          >
            {tenders.map((tender, index) => (
              <div
                key={tender.id}
                ref={(el) => {
                  tenderRefs.current[index] = el
                }}
                onClick={() => handleTenderClick(tender.id)}
                style={{
                  background: selectedTender === tender.id ? "#eff6ff" : "white",
                  borderRadius: "8px",
                  padding: "10px 12px",
                  border: selectedTender === tender.id ? "1px solid #3b82f6" : "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Flag country={tender.flag} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#111827",
                      marginBottom: "1px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {tender.title}
                  </div>
                  <div style={{ fontSize: "10px", color: "#9ca3af" }}>{tender.meta}</div>
                </div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: tender.matchLevel === "high" ? "#dcfce7" : "#fef3c7",
                    color: tender.matchLevel === "high" ? "#16a34a" : "#d97706",
                  }}
                >
                  {tender.match}%
                </span>
                <span style={{ fontSize: "10px", color: "#3b82f6", fontWeight: 500 }}>→</span>
              </div>
            ))}
          </div>
        )}

        {/* Panel 1: Analyze */}
        {activePanel === 1 && (
          <div
            style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "150px 1fr", gap: "12px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ background: "white", borderRadius: "8px", padding: "10px", border: "1px solid #e5e7eb" }}>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.3px",
                    marginBottom: "2px",
                  }}
                >
                  Match Score
                </div>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#d97706" }}>85%</div>
                <div style={{ fontSize: "9px", color: "#6b7280" }}>2 Gaps identifiziert</div>
              </div>
              <div style={{ background: "white", borderRadius: "8px", padding: "10px", border: "1px solid #e5e7eb" }}>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.3px",
                    marginBottom: "2px",
                  }}
                >
                  Anforderungen
                </div>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#2563eb" }}>7/9</div>
                <div style={{ fontSize: "9px", color: "#6b7280" }}>7 erfüllt, 2 offen</div>
              </div>
              <div style={{ background: "white", borderRadius: "8px", padding: "10px", border: "1px solid #e5e7eb" }}>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.3px",
                    marginBottom: "2px",
                  }}
                >
                  Empfehlung
                </div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#111827" }}>Konsortium</div>
                <div style={{ fontSize: "9px", color: "#6b7280" }}>Mit 2 Partnern</div>
              </div>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "8px",
                padding: "12px",
                border: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  gap: "8px",
                }}
              >
                <div>
                  <button
                    onClick={() => goToPanel(0)}
                    style={{
                      fontSize: "9px",
                      color: "#6b7280",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2px 4px",
                      marginBottom: "2px",
                    }}
                  >
                    ← Zurück
                  </button>
                  <div style={{ fontSize: "10px", fontWeight: 600, color: "#111827" }}>Gap-Analyse: AT Bikesharing</div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    color: "#6b7280",
                    background: "#f3f4f6",
                    padding: "2px 6px",
                    borderRadius: "3px",
                  }}
                >
                  €2.8M
                </span>
              </div>
              <div style={{ flex: 1, overflowY: "auto" }}>
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 0",
                      borderBottom: index < requirements.length - 1 ? "1px solid #f3f4f6" : "none",
                      fontSize: "9px",
                    }}
                  >
                    <div
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "8px",
                        flexShrink: 0,
                        background:
                          req.status === "pass" ? "#dcfce7" : req.status === "partial" ? "#fef3c7" : "#fee2e2",
                        color: req.status === "pass" ? "#16a34a" : req.status === "partial" ? "#d97706" : "#dc2626",
                      }}
                    >
                      {req.status === "pass" ? "✓" : req.status === "partial" ? "!" : "✕"}
                    </div>
                    <span
                      style={{
                        flex: 1,
                        color: "#374151",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {req.text}
                    </span>
                    <span
                      style={{
                        fontSize: "8px",
                        fontWeight: 500,
                        color: req.status === "pass" ? "#16a34a" : req.status === "fail" ? "#dc2626" : "#6b7280",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {req.status === "fail" ? "→ Partner" : req.statusText}
                    </span>
                  </div>
                ))}
              </div>
              <button
                ref={findPartnersRef}
                onClick={handleFindPartnersClick}
                style={{
                  marginTop: "8px",
                  padding: "8px 12px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "10px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Partner finden für 2 Gaps →
              </button>
            </div>
          </div>
        )}

        {/* Panel 2: Find Partners */}
        {activePanel === 2 && (
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#111827" }}>Empfohlene Konsortialpartner</span>
              <span
                style={{
                  fontSize: "9px",
                  padding: "3px 6px",
                  background: "#eff6ff",
                  color: "#2563eb",
                  borderRadius: "4px",
                  fontWeight: 500,
                }}
              >
                10M+ Profile
              </span>
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#6b7280",
                background: "#f9fafb",
                padding: "8px 10px",
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
              }}
            >
              <strong style={{ color: "#111827" }}>Ausschreibung:</strong> AT Bikesharing mit E-Scootern (€2.8M)
              <div style={{ display: "flex", gap: "4px", marginTop: "4px", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    background: "#fee2e2",
                    color: "#dc2626",
                    borderRadius: "3px",
                  }}
                >
                  Gap: Buchungs-App
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    background: "#fee2e2",
                    color: "#dc2626",
                    borderRadius: "3px",
                  }}
                >
                  Gap: Scooter-Referenz
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1, overflowY: "auto" }}>
              {partners.map((partner, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    border: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: "10px",
                      color: "white",
                      flexShrink: 0,
                      background:
                        partner.avatarClass === "avatar-juhuu"
                          ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                          : "linear-gradient(135deg, #f59e0b, #d97706)",
                    }}
                  >
                    {partner.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, color: "#111827" }}>{partner.name}</div>
                    <div style={{ fontSize: "9px", color: "#9ca3af" }}>{partner.detail}</div>
                  </div>
                  <span
                    style={{
                      fontSize: "9px",
                      color: "#16a34a",
                      padding: "2px 6px",
                      background: "#dcfce7",
                      borderRadius: "3px",
                      fontWeight: 500,
                    }}
                  >
                    ✓ {partner.fills}
                  </span>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "#16a34a" }}>{partner.match}%</span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", paddingTop: "6px", borderTop: "1px solid #f3f4f6" }}>
              <button
                onClick={() => goToPanel(1)}
                style={{
                  fontSize: "10px",
                  color: "#6b7280",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 8px",
                }}
              >
                ← Zurück zur Analyse
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderTop: "1px solid #e5e7eb",
          background: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px", color: "#6b7280" }}>
          <span>📊</span>
          <span>{footerTexts[activePanel]}</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "10px",
            fontWeight: 500,
            color: "#16a34a",
          }}
        >
          <span style={{ width: "4px", height: "4px", background: "#16a34a", borderRadius: "50%" }} />
          24/7 Monitoring
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

// ============================================
// HERO SECTION WITH PRODUCT DEMO
// ============================================

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "calc(100vh - 80px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "center",
        padding: "80px 64px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Left Side: Hero Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#2563eb",
            width: "fit-content",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6" }} />
          Now in Development – Early Access Available
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#111827",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Find Every Relevant Tender in Europe. <span style={{ color: "#3b82f6" }}>Automatically.</span>
        </h1>

        {/* Subheadline */}
        <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#6b7280", margin: 0 }}>
          Stop wasting 8+ hours weekly on manual searches. Our AI understands your business context – not just keywords
          – and finds opportunities that actually match.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
          <a
            href="/waitlist"
            style={{
              padding: "14px 32px",
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
              transition: "all 0.2s",
            }}
          >
            Join Waitlist
            <span>→</span>
          </a>
          <a
            href="mailto:office@alpx.at?subject=Talk to Founders"
            style={{
              padding: "14px 28px",
              background: "white",
              color: "#111827",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 500,
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Talk to Founders
          </a>
        </div>

        {/* Trust Indicators */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
            marginTop: "32px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 500 }}>Trusted by:</span>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#9ca3af", opacity: 0.7 }}>BuildIT</span>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#9ca3af", opacity: 0.7 }}>GreenEnergy</span>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#9ca3af", opacity: 0.7 }}>+50 more</span>
        </div>
      </div>

      {/* Right Side: Product Demo */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ProductDemo />
      </div>
    </section>
  )
}

export default HeroSection
