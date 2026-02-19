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
    <section id="tesis" className="py-16 sm:py-24 bg-oxford-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            El modelo Boostart
          </h2>
          <p className="text-light-cyan text-base sm:text-lg lg:text-xl leading-relaxed">
            Combinamos tecnologia, marketing y banca de inversion para transformar ideas y proyectos
            en activos adquiribles en tres o cuatro anos.
          </p>
        </div>

        {/* Phases timeline */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-[72px] left-[16.66%] right-[16.66%] h-0.5 bg-pine-green/40" />

          {/* Vertical connector line (mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-pine-green/40" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {phases.map((item, index) => (
              <div key={index} className="relative flex md:flex-col items-start md:items-center md:text-center px-4 sm:px-6 pb-12 md:pb-0">
                {/* Phase number circle */}
                <div className="relative z-10 flex-shrink-0 mr-6 md:mr-0 md:mb-8">
                  <div className="w-16 h-16 rounded-full bg-caribbean-green flex items-center justify-center shadow-[0_0_24px_rgba(10,220,165,0.3)]">
                    <item.icon className="h-7 w-7 text-oxford-blue" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 md:flex-initial">
                  {/* Phase label + duration */}
                  <div className="mb-3">
                    <span className="inline-block text-caribbean-green text-xs font-bold tracking-widest uppercase mb-1">
                      {"Fase " + item.phase}
                    </span>
                    <div className="text-light-cyan/60 text-xs sm:text-sm font-mono">
                      {item.duration}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-light-cyan/80 text-sm sm:text-base leading-relaxed max-w-xs md:mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="hidden md:block mt-14">
            <div className="flex gap-2">
              {phases.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={
                      "h-1.5 w-full rounded-full " +
                      (index === 0
                        ? "bg-caribbean-green"
                        : index === 1
                          ? "bg-caribbean-green/50"
                          : "bg-pine-green/30")
                    }
                  />
                  <span className="text-[11px] text-light-cyan/50 font-mono">
                    {item.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
