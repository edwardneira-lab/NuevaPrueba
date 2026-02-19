"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Calendar, MapPin, Monitor, Users, ArrowRight } from "lucide-react"

const eventos = [
  {
    fecha: "Feb 26",
    dia: "Jueves",
    hora: "6:00 pm COL",
    ciudad: "Bogotá",
    pais: "Colombia",
    titulo: "Investor MeetUp - Bogotá",
    tipo: "presencial",
    imagen: "/images/events/bogota.jpg",
    link: "https://luma.com/kz3aay3a",
  },
  {
    fecha: "Mar 5",
    dia: "Jueves",
    hora: "6:00 pm COL",
    ciudad: "Pereira",
    pais: "Colombia",
    titulo: "Investor MeetUp - Pereira",
    tipo: "presencial",
    imagen: "/images/events/pereira.jpg",
    link: "https://luma.com/v7eow2vf",
  },
  {
    fecha: "Mar 3",
    dia: "Martes",
    hora: "6:00 pm COL / 5:00 pm CDMX",
    ciudad: "Online",
    pais: "Virtual",
    titulo: "Investor MeetUp - Online",
    tipo: "online",
    imagen: "/images/events/online.jpg",
    link: "https://luma.com/c2067kjp",
  },
  {
    fecha: "Mar 25",
    dia: "Miércoles",
    hora: "6:00 pm CDMX",
    ciudad: "Monterrey",
    pais: "México",
    titulo: "Investor MeetUp - Monterrey",
    tipo: "presencial",
    imagen: "/images/events/monterrey.jpg",
    link: "https://luma.com/qrlzhyrd",
  },
  {
    fecha: "Abr 1",
    dia: "Miércoles",
    hora: "6:00 pm CDMX",
    ciudad: "CDMX",
    pais: "México",
    titulo: "Investor MeetUp - CDMX",
    tipo: "presencial",
    imagen: "/images/events/cdmx.jpg",
    link: "https://luma.com/rhzr9p6r",
  },
  {
    fecha: "Abr 15",
    dia: "Miércoles",
    hora: "6:00 pm COL",
    ciudad: "Medellín",
    pais: "Colombia",
    titulo: "Investor MeetUp - Medellín",
    tipo: "presencial",
    imagen: "/images/events/medellin.jpg",
    link: "",
  },
  {
    fecha: "Por confirmar",
    dia: "",
    hora: "",
    ciudad: "Lima",
    pais: "Perú",
    titulo: "Investor MeetUp - Lima",
    tipo: "presencial",
    imagen: "/images/events/lima.jpg",
    link: "",
  },
  {
    fecha: "Por confirmar",
    dia: "",
    hora: "",
    ciudad: "Miami",
    pais: "USA",
    titulo: "Investor MeetUp - Miami",
    tipo: "presencial",
    imagen: "/images/events/miami.jpg",
    link: "",
  },
]

interface EventFormData {
  nombre: string
  email: string
  ciudad: string
  ticket: string
}

export function Eventos() {
  const [selectedEvent, setSelectedEvent] = useState<typeof eventos[number] | null>(null)
  const [formData, setFormData] = useState<EventFormData>({
    nombre: "",
    email: "",
    ciudad: "",
    ticket: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Registro enviado",
      description: `Te has registrado para "${selectedEvent?.titulo}". Te contactaremos pronto.`,
    })
    setSelectedEvent(null)
    setFormData({ nombre: "", email: "", ciudad: "", ticket: "" })
  }

  return (
    <section id="eventos" className="py-20 sm:py-28 bg-oxford-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="inline-block text-caribbean-green text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Eventos Exclusivos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
            {"Participa en nuestros próximos eventos"}
          </h2>
          <p className="text-light-cyan/70 text-base sm:text-lg leading-relaxed">
            {"Estamos realizando una serie de encuentros exclusivos para empresarios e inversionistas que deseen conocer nuestro Batch 2026."}
          </p>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-pine-green/20 bg-[#0D1333] transition-all duration-300 hover:border-caribbean-green/40 hover:shadow-[0_0_32px_rgba(10,220,165,0.1)]"
            >
              {/* City image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={evento.imagen}
                  alt={`Skyline de ${evento.ciudad}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1333] via-[#0D1333]/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0D1333]/80 backdrop-blur-sm border border-caribbean-green/40 rounded-full px-3 py-1">
                  <Users className="h-3 w-3 text-caribbean-green" />
                  <span className="text-caribbean-green text-[10px] font-bold tracking-wider uppercase">
                    Cupos Limitados
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                {/* City + Country */}
                <div className="flex items-center gap-2 mb-1">
                  {evento.tipo === "online" ? (
                    <Monitor className="h-4 w-4 text-caribbean-green flex-shrink-0" />
                  ) : (
                    <MapPin className="h-4 w-4 text-caribbean-green flex-shrink-0" />
                  )}
                  <h3 className="text-xl font-bold text-white leading-tight">{evento.ciudad}</h3>
                </div>
                <span className="text-light-cyan/50 text-sm ml-6 mb-4">{evento.pais}</span>

                {/* Date */}
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-3.5 w-3.5 text-light-cyan/40 flex-shrink-0" />
                  <span className="text-light-cyan/60 text-sm">
                    {[evento.fecha, evento.dia].filter(Boolean).join(" - ")}
                  </span>
                </div>

                {/* Hour */}
                <span className={"text-light-cyan/50 text-xs ml-6 mb-5" + (evento.hora ? "" : " invisible")}>
                  {evento.hora || "\u00A0"}
                </span>

                {/* CTA Button */}
                <div className="mt-auto">
                  {evento.link ? (
                    <a
                      href={evento.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between gap-2 rounded-xl border border-caribbean-green text-caribbean-green px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-caribbean-green hover:text-oxford-blue group/btn"
                    >
                      <span>Registro</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedEvent(evento)}
                      className="w-full flex items-center justify-between gap-2 rounded-xl border border-caribbean-green text-caribbean-green px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-caribbean-green hover:text-oxford-blue group/btn"
                    >
                      <span>Registro</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Registration Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-md bg-[#0D1333] border-pine-green/30">
          <DialogHeader>
            <DialogTitle className="text-white">Registro para evento</DialogTitle>
            <DialogDescription className="text-light-cyan/60">
              {selectedEvent?.titulo}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="event-nombre" className="text-light-cyan/80">Nombre completo</Label>
              <Input
                id="event-nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
                className="bg-oxford-blue border-pine-green/30 text-white placeholder:text-light-cyan/30 focus:border-caribbean-green"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-email" className="text-light-cyan/80">Email</Label>
              <Input
                id="event-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-oxford-blue border-pine-green/30 text-white placeholder:text-light-cyan/30 focus:border-caribbean-green"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-ciudad" className="text-light-cyan/80">Ciudad</Label>
              <Input
                id="event-ciudad"
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                required
                className="bg-oxford-blue border-pine-green/30 text-white placeholder:text-light-cyan/30 focus:border-caribbean-green"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-ticket" className="text-light-cyan/80">{"Ticket estimado de inversión"}</Label>
              <Select
                value={formData.ticket}
                onValueChange={(value) => setFormData({ ...formData, ticket: value })}
              >
                <SelectTrigger className="bg-oxford-blue border-pine-green/30 text-white focus:border-caribbean-green">
                  <SelectValue placeholder="Selecciona un rango" />
                </SelectTrigger>
                <SelectContent className="bg-oxford-blue border-pine-green/30">
                  <SelectItem value="5k-10k">{"USD 5k\u201310k"}</SelectItem>
                  <SelectItem value="10k-25k">{"USD 10k\u201325k"}</SelectItem>
                  <SelectItem value="25k-50k">{"USD 25k\u201350k"}</SelectItem>
                  <SelectItem value="50k+">{"USD 50k+"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold"
            >
              Confirmar registro
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
