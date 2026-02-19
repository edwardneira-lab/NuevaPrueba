"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Calendar } from "lucide-react"

export function Hero() {
  return (
    <>
      {/* Logo Bar */}
      <header className="border-b border-light-cyan bg-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-xl font-bold text-oxford-blue">Boostart</div>
        </div>
      </header>

      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-oxford-blue via-pine-green to-oxford-blue px-4 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-caribbean-green rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-light-cyan rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif leading-tight">
            Boostart Batch 2026
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-non-photo-blue max-w-4xl mx-auto leading-relaxed">
            Estamos conformando una red exclusiva de inversionistas y empresarios para incubar el Batch 2026 
            de Boostart Venture Studio: 10 startups creadas desde cero para resolver problemas 
            reales en diferentes industrias de América Latina con Inteligencia Artificial.
          </p>

          {/* Strong statement */}
          <p className="text-lg md:text-xl text-caribbean-green font-semibold max-w-3xl mx-auto">
            No invertimos en ideas. Construimos compañías sólidas, con producto funcional, 
            que gracias a las ventajas injustas de sus founders nazcan con clientes reales 
            y ventas escalables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold text-lg px-8 py-6"
            >
              <a href="https://wa.me/573057421727" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-caribbean-green text-caribbean-green hover:bg-caribbean-green/10 font-semibold text-lg px-8 py-6"
            >
              <a href="#registro" className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Registrarme
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-light-cyan text-light-cyan hover:bg-light-cyan/10 font-semibold text-lg px-8 py-6"
            >
              <a href="#eventos" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Ver próximos eventos
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
