"use client"

import { useEffect, useRef, useState } from "react"
import {
  TrendingUp,
  Target,
  Users,
  Lightbulb,
  Rocket,
  Brain,
  KeyRound,
} from "lucide-react"

const benefits = [
  { icon: TrendingUp, title: "Valoraciones altamente atractivas", accent: "from-caribbean-green to-pine-green" },
  { icon: Target, title: "Startups diseñadas para exit", accent: "from-caribbean-green to-pine-green" },
  { icon: Users, title: "Acompañamiento de un experto en VC", accent: "from-caribbean-green to-pine-green" },
  { icon: Lightbulb, title: "Innovación como ventaja estratégica", accent: "from-caribbean-green to-pine-green" },
  { icon: Rocket, title: "Startups que redefinen las industrias", accent: "from-caribbean-green to-pine-green" },
  { icon: Brain, title: "Exposición a la economía IA", accent: "from-caribbean-green to-pine-green" },
  { icon: KeyRound, title: "Dealflow preferencial Boostart", accent: "from-caribbean-green to-pine-green" },
]

function BenefitCard({ item, index }: { item: typeof benefits[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group relative transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl bg-oxford-blue p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_0_40px_rgba(10,220,165,0.12)] hover:-translate-y-1 h-full">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-caribbean-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Content row */}
        <div className="flex items-center gap-5">
          {/* Number + Icon */}
          <div className="relative flex-shrink-0">
            <span className="absolute -top-3 -left-1 text-caribbean-green/[0.08] text-6xl font-black leading-none select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="relative w-14 h-14 rounded-2xl bg-caribbean-green/10 border border-caribbean-green/20 flex items-center justify-center group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300">
              <item.icon className="h-6 w-6 text-caribbean-green group-hover:text-oxford-blue transition-colors duration-300" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28 bg-oxford-blue overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-caribbean-green/[0.03]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pine-green/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-caribbean-green/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-caribbean-green text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Red de Inversionistas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-0 text-balance leading-tight">
            {"¿Por qué invertir e incubar el Batch 2026 de Boostart?"}
          </h2>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* First 3: top row on large screens */}
          {benefits.slice(0, 3).map((item, i) => (
            <BenefitCard key={i} item={item} index={i} />
          ))}

          {/* Middle 2: span to fill nicely */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {benefits.slice(3, 5).map((item, i) => (
                <BenefitCard key={i + 3} item={item} index={i + 3} />
              ))}
            </div>
          </div>

          {/* 6th item */}
          <BenefitCard item={benefits[5]} index={5} />

          {/* 7th item: featured / full width */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div
              className="group relative overflow-hidden rounded-2xl bg-caribbean-green/[0.08] border border-caribbean-green/20 p-6 sm:p-8 transition-all duration-300 hover:bg-caribbean-green/[0.12] hover:border-caribbean-green/40"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-caribbean-green" />
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 justify-center text-center sm:text-left">
                <div className="w-16 h-16 rounded-2xl bg-caribbean-green flex items-center justify-center flex-shrink-0">
                  <KeyRound className="h-7 w-7 text-oxford-blue" />
                </div>
                <div>
                  <span className="text-caribbean-green text-xs font-bold tracking-[0.15em] uppercase">Exclusivo</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mt-1">
                    Dealflow preferencial Boostart
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
