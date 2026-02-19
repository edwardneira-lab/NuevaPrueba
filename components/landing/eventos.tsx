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
    <section id="eventos" className="py-24 px-4 bg-gradient-to-b from-non-photo-blue/30 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-oxford-blue font-serif">
            Eventos Exclusivos
          </h2>
          <p className="text-xl text-pine-green font-semibold">
            {"Participa en nuestros próximos eventos"}
          </p>
          <p className="text-lg text-pine-green/80 max-w-3xl mx-auto leading-relaxed">
            {"Estamos realizando una serie de encuentros exclusivos para empresarios e inversionistas que deseen conocer nuestro Batch 2026."}
          </p>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventos.map((evento, index) => (
            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden border border-light-cyan/30 hover:border-caribbean-green hover:shadow-xl hover:shadow-caribbean-green/10 transition-all duration-300">
              {/* City image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-oxford-blue to-pine-green">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-caribbean-green/30" />
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-caribbean-green/90 backdrop-blur-sm rounded-full">
                    <p className="text-xs font-bold text-oxford-blue">Cupos Limitados</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* City + Country */}
                <div className="flex items-center gap-2 text-pine-green">
                  {evento.tipo === "online" ? (
                    <Monitor className="w-4 h-4 text-caribbean-green" />
                  ) : (
                    <MapPin className="w-4 h-4 text-caribbean-green" />
                  )}
                  <span className="font-semibold">{evento.ciudad}</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">{evento.pais}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-caribbean-green" />
                  <p className="text-sm font-semibold text-oxford-blue">
                    {[evento.fecha, evento.dia].filter(Boolean).join(" - ")}
                  </p>
                </div>

                {/* Hour */}
                <p className="text-sm text-pine-green">
                  {evento.hora || "\u00A0"}
                </p>

                {/* CTA Button */}
                <div className="pt-2">
                  {evento.link ? (
                    <Button
                      asChild
                      className="w-full flex items-center justify-between gap-2 rounded-xl border border-caribbean-green bg-caribbean-green text-oxford-blue px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-caribbean-green/90 group/btn"
                    >
                      <a href={evento.link} target="_blank" rel="noopener noreferrer">
                        Registro
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setSelectedEvent(evento)}
                      className="w-full flex items-center justify-between gap-2 rounded-xl border border-caribbean-green text-caribbean-green px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-caribbean-green hover:text-oxford-blue group/btn"
                    >
                      Registro
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Registration Modal */}
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="bg-white border-caribbean-green/30">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-oxford-blue">Registro para evento</DialogTitle>
              <DialogDescription className="text-pine-green">
                {selectedEvent?.titulo}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nombre" className="text-oxford-blue">Nombre completo</Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  className="bg-oxford-blue border-pine-green/30 text-white placeholder:text-light-cyan/30 focus:border-caribbean-green"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-oxford-blue">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-oxford-blue border-pine-green/30 text-white placeholder:text-light-cyan/30 focus:border-caribbean-green"
                />
              </div>
              <div>
                <Label htmlFor="ciudad" className="text-oxford-blue">Ciudad</Label>
                <Input
                  id="ciudad"
                  value={formData.ciudad}
                  onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                  required
                  className="bg-oxford-blue border-pine-green/30 text-white placeholder:text-light-cyan/30 focus:border-caribbean-green"
                />
              </div>
              <div>
                <Label htmlFor="ticket" className="text-oxford-blue">{"Ticket estimado de inversión"}</Label>
                <Select
                  value={formData.ticket}
                  onValueChange={(value) => setFormData({ ...formData, ticket: value })}
                >
                  <SelectTrigger className="bg-oxford-blue border-pine-green/30 text-white focus:border-caribbean-green">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10k">{"USD 5k–10k"}</SelectItem>
                    <SelectItem value="10-25k">{"USD 10k–25k"}</SelectItem>
                    <SelectItem value="25-50k">{"USD 25k–50k"}</SelectItem>
                    <SelectItem value="50k+">{"USD 50k+"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold">
                Confirmar registro
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
