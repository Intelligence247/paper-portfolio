"use client"

import { useState } from "react"
import { Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 pt-8 pb-4 relative">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a href="#home" className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </a>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-sm border-2 border-black"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Button asChild className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
            <a href="mailto:uthmanabdullahi2020@gmail.com" aria-label="Email Usman Abdullahi">
              <Mail className="w-10 h-10" strokeWidth={2.5} />
            </a>
          </Button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden absolute left-4 right-4 top-full mt-2 z-50 bg-white border-4 border-black rounded-xl px-5 py-4 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[18px] font-bold leading-[20px]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
