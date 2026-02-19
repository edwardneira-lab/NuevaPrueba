"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#tesis", label: "Tesis" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#angelhub", label: "AngelHub" },
  { href: "#eventos", label: "Eventos" },
  { href: "#registro", label: "Registro" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oxford-blue/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image src="/logo.svg" alt="Boostart" width={120} height={40} className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-caribbean-green transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-caribbean-green hover:bg-caribbean-green/90 text-oxford-blue font-semibold">
              <a href="#registro">Quiero ser parte</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-caribbean-green transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-caribbean-green hover:bg-caribbean-green/90 text-oxford-blue font-semibold w-full" onClick={() => setIsOpen(false)}>
                <a href="#registro">Quiero ser parte</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
