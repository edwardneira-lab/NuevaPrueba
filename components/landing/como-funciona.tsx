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
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Card */}
      <div className="h-full bg-white border border-light-cyan/30 rounded-2xl p-6 hover:border-caribbean-green/50 hover:shadow-lg hover:shadow-caribbean-green/10 transition-all duration-300 group">
        {/* Top accent line */}
        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${item.accent} mb-6`} />

        {/* Content row */}
        <div className="flex items-start gap-4">
          {/* Number + Icon */}
          <div className="flex-shrink-0 space-y-2">
            <div className="text-sm font-bold text-caribbean-green/40 group-hover:text-caribbean-green transition-colors">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="w-12 h-12 rounded-xl bg-non-photo-blue/30 flex items-center justify-center group-hover:bg-caribbean-green/20 transition-colors">
              <item.icon className="w-6 h-6 text-pine-green group-hover:text-caribbean-green transition-colors" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-oxford-blue leading-tight pt-2">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export function ComoFunciona() {
  return (
    <section id="beneficios" className="relative py-24 px-4 bg-gradient-to-b from-white to-non-photo-blue/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-caribbean-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-pine-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-oxford-blue font-serif">
            Red de Inversionistas
          </h2>
          <p className="text-lg md:text-xl text-pine-green max-w-3xl mx-auto leading-relaxed">
            {"¿Por qué invertir e incubar el Batch 2026 de Boostart?"}
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First 3: top row on large screens */}
          {benefits.slice(0, 3).map((item, i) => (
            <BenefitCard key={i} item={item} index={i} />
          ))}

          {/* Middle 2: span to fill nicely */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.slice(3, 5).map((item, i) => (
              <BenefitCard key={i + 3} item={item} index={i + 3} />
            ))}
          </div>

          {/* 6th item */}
          <BenefitCard item={benefits[5]} index={5} />

          {/* 7th item: featured / full width */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="h-full bg-gradient-to-br from-oxford-blue to-pine-green border border-caribbean-green/30 rounded-2xl p-8 hover:border-caribbean-green hover:shadow-2xl hover:shadow-caribbean-green/20 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-caribbean-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-caribbean-green/20 flex items-center justify-center group-hover:bg-caribbean-green/30 transition-colors backdrop-blur-sm">
                    <KeyRound className="w-8 h-8 text-caribbean-green" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <span className="inline-block px-3 py-1 bg-caribbean-green/20 text-caribbean-green text-xs font-bold rounded-full">
                    Exclusivo
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
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
