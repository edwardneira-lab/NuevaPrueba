"use client"

import { MessageCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WhatsAppButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/573057421727"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-caribbean-green rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          >
            <MessageCircle className="w-7 h-7 text-oxford-blue" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-oxford-blue text-white border-caribbean-green">
          <p className="font-semibold">{"¿Hablamos?"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
