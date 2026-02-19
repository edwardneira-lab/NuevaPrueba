"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Calendar } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-oxford-blue via-pine-green to-oxford-blue">
      <div className="container mx-auto max-w-5xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
          Haz parte de la próxima generación de startups de IA en América Latina.
        </h2>
        <p className="text-xl text-non-photo-blue max-w-3xl mx-auto leading-relaxed">
          {"Boostart está construyendo 10 compañías desde cero para el Batch 2026. Participa desde el inicio en un portafolio diseñado para lograr tracción y exit temprano."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            asChild
            size="lg"
            className="bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold text-lg px-8 py-6"
          >
            <a href="https://wa.me/573057421727" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
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
              Registro
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
              Eventos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
