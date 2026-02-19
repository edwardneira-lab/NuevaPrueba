"use client"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "+75", label: "startups invertidas" },
  { value: "+USD $5M", label: "desplegados" },
  { value: "+220", label: "inversionistas en LatAm" }
]

export function AngelHub() {
  return (
    <section id="angelhub" className="py-24 bg-oxford-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            <span className="text-caribbean-green">AngelHub</span>: partner de Boostart
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            AngelHub Ventures, la plataforma de inversión en startups de etapa temprana más activa 
            de LatAm, es aliado de Boostart y lo apoya a evaluar las startups, gestionar su red de 
            inversionistas y proporciona el vehículo para ejecutar las inversiones en las startups 
            del Batch 2026 de forma profesional y legalmente segura.
          </p>
        </div>

        {/* Stats */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">Las cifras de AngelHub:</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-pine-green/20 border-pine-green/40 hover:bg-pine-green/30 transition-colors"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-caribbean-green mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
