"use client"

import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-deep-green/40 text-gold transition-all duration-300 hover:border-gold hover:bg-gold/20 focus-modern sm:top-8"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun size={18} className="animate-scale-in" />
      ) : (
        <Moon size={18} className="animate-scale-in" />
      )}
    </button>
  )
}
