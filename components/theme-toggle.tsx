"use client"

import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-24 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 focus-modern sm:top-8 ${
        theme === "dark" 
          ? "border-gold/60 bg-charcoal/80 text-gold hover:border-gold hover:bg-gold/20" 
          : "border-gold/60 bg-beige/80 text-charcoal hover:border-gold hover:bg-gold"
      }`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {theme === "dark" ? (
          <Sun size={18} className="text-gold animate-scale-in" />
        ) : (
          <Moon size={18} className="text-charcoal animate-scale-in" />
        )}
      </div>
    </button>
  )
}
