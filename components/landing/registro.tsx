"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, Shield } from "lucide-react"

interface Registration {
  nombre: string
  email: string
  telefono: string
  linkedin: string
  pais: string
  ciudad: string
  timestamp: string
}

const HEADING_TEXT = "Regístrate para más información"

export function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    linkedin: "",
    pais: "",
    ciudad: "",
  })
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newRegistration: Registration = {
      ...formData,
      timestamp: new Date().toLocaleString("es-ES"),
    }

    setRegistrations([...registrations, newRegistration])

    toast({
      title: "Registro exitoso",
      description: "Te contactaremos en menos de 48 horas con información del Investor Briefing.",
    })

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      linkedin: "",
      pais: "",
      ciudad: "",
    })
  }

  return (
    <section id="registro" className="py-24 px-4 bg-gradient-to-b from-white to-non-photo-blue/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-oxford-blue font-serif text-center mb-12">
          {HEADING_TEXT}
        </h2>

        <Card className="border-2 border-light-cyan/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-oxford-blue">Formulario de registro</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nombre" className="text-oxford-blue">Nombre completo</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                    className="border-light-cyan focus:border-caribbean-green"
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
                    className="border-light-cyan focus:border-caribbean-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="telefono" className="text-oxford-blue">{"Teléfono"}</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    required
                    placeholder="+57 300 123 4567"
                    className="border-light-cyan focus:border-caribbean-green"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin" className="text-oxford-blue">Perfil de LinkedIn</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    required
                    placeholder="https://linkedin.com/in/tu-perfil"
                    className="border-light-cyan focus:border-caribbean-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="pais" className="text-oxford-blue">{"País"}</Label>
                  <Input
                    id="pais"
                    value={formData.pais}
                    onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                    required
                    className="border-light-cyan focus:border-caribbean-green"
                  />
                </div>
                <div>
                  <Label htmlFor="ciudad" className="text-oxford-blue">Ciudad</Label>
                  <Input
                    id="ciudad"
                    value={formData.ciudad}
                    onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                    required
                    className="border-light-cyan focus:border-caribbean-green"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-caribbean-green text-oxford-blue hover:bg-caribbean-green/90 font-semibold text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Quiero acceder al Investor Briefing
              </Button>

              <div className="flex items-center gap-2 text-sm text-pine-green justify-center">
                <Shield className="w-4 h-4" />
                {"Tu información es confidencial. Te contactaremos en menos de 48 horas."}
              </div>
            </form>
          </CardContent>
        </Card>

        {registrations.length > 0 && (
          <Card className="mt-8 border-2 border-caribbean-green/30">
            <CardHeader>
              <CardTitle className="text-xl text-oxford-blue">Registros recibidos (demo)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-light-cyan">
                      <th className="text-left p-2 text-oxford-blue font-semibold">Nombre</th>
                      <th className="text-left p-2 text-oxford-blue font-semibold">Email</th>
                      <th className="text-left p-2 text-oxford-blue font-semibold">{"Teléfono"}</th>
                      <th className="text-left p-2 text-oxford-blue font-semibold">Ciudad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg, index) => (
                      <tr key={index} className="border-b border-light-cyan/30">
                        <td className="p-2 text-pine-green">{reg.nombre}</td>
                        <td className="p-2 text-pine-green">{reg.email}</td>
                        <td className="p-2 text-pine-green">{reg.telefono}</td>
                        <td className="p-2 text-pine-green">{reg.ciudad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
