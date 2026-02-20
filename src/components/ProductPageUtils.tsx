"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

// Animated Counter Component
export const AnimatedCounter: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({ end, suffix = "", prefix = "" }): JSX.Element => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}

export interface StatProps {
  value: string
  label: string
}

export const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div>
    <div className="text-2xl md:text-3xl font-bold text-blue-600">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
)

export interface CheckItemProps {
  text: string
}

export const CheckItem: React.FC<CheckItemProps> = ({ text }) => (
  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span className="text-slate-600">{text}</span>
  </div>
)
