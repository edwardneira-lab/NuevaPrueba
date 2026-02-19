"use client"

import { Hammer, TrendingUp, DollarSign } from "lucide-react"

const phases = [
  {
    phase: 1,
    icon: Hammer,
    title: "Construccion",
    duration: "Mes 1 - Mes 10",
    description:
      "Desarrollo del MVP, validacion con usuarios reales y conformacion del equipo de la startup.",
  },
  {
    phase: 2,
    icon: TrendingUp,
    title: "Tracción",
    duration: "Mes 11 - Mes 24",
    description:
      "Aceleracion de las ventas con un producto que se ajusta rapidamente en cada nueva iteracion.",
  },
  {
    phase: 3,
    icon: DollarSign,
    title: "Exit Temprano",
    duration: "Mes 25 - Ano 3/4",
    description:
      "Modelo de performance que acompana y traza el camino hacia una venta o adquisicion.",
  },
]

export function Tesis() {
  return (
    <section id="modelo" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-oxford-blue font-serif">
            El modelo Boostart
          </h2>
          <p className="text-lg md:text-xl text-pine-green max-w-3xl mx-auto leading-relaxed">
            Combinamos tecnologia, marketing y banca de inversion para transformar ideas y proyectos
            en activos adquiribles en tres o cuatro anos.
          </p>
        </div>

        {/* Phases timeline */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-caribbean-green via-pine-green to-caribbean-green mx-auto w-[calc(100%-8rem)]" />

          {/* Vertical connector line (mobile) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-caribbean-green via-pine-green to-caribbean-green" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {phases.map((item, index) => (
              <div key={index} className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-0">
                {/* Phase number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-caribbean-green flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-oxford-blue" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 md:mt-8 md:text-center space-y-3">
                  {/* Phase label + duration */}
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-caribbean-green uppercase tracking-wider">
                      {"Fase " + item.phase}
                    </p>
                    <p className="text-xs text-pine-green font-medium">
                      {item.duration}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-oxford-blue font-serif">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-pine-green leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-16 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {phases.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-3 rounded-full bg-caribbean-green/20 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-caribbean-green to-pine-green rounded-full" style={{ width: '100%' }} />
                  </div>
                  <p className="text-xs text-center text-pine-green font-medium">
                    {item.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
