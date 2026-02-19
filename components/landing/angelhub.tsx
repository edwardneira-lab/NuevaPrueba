"use client"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "+75", label: "startups invertidas" },
  { value: "+USD $5M", label: "desplegados" },
  { value: "+220", label: "inversionistas en LatAm" }
]

export function AngelHub() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <Card className="border-2 border-light-cyan/30 shadow-xl">
          <CardContent className="p-8 md:p-12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue font-serif text-center">
              AngelHub: partner de Boostart
            </h2>
            <p className="text-lg text-pine-green leading-relaxed text-center max-w-3xl mx-auto">
              AngelHub Ventures, la plataforma de inversión en startups de etapa temprana más activa 
              de LatAm, es aliado de Boostart y lo apoya a evaluar las startups, gestionar su red de 
              inversionistas y proporciona el vehículo para ejecutar las inversiones en las startups 
              del Batch 2026 de forma profesional y legalmente segura.
            </p>

            {/* Stats */}
            <div className="pt-4 space-y-4">
              <p className="text-center text-sm font-semibold text-pine-green uppercase tracking-wider">Las cifras de AngelHub:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-non-photo-blue/30 to-transparent border border-caribbean-green/20">
                    <div className="text-3xl md:text-4xl font-bold text-caribbean-green mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-pine-green font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
