"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-lg shadow-charcoal/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-deep-green/40 overflow-hidden">
            <Image
              src="/logo.jpg"
              alt="Ashaki Gardens Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="font-serif text-xl font-semibold tracking-wide text-beige">
            Ashaki Gardens
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-beige-dark transition-all duration-300 hover:text-gold hover-lift"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#reservation"
          className="hidden btn-modern rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 lg:block"
        >
          Book a Table
        </Link>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-beige transition-colors hover:text-gold lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{
          background: "oklch(0.12 0.01 160 / 0.97)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-2xl font-medium text-beige transition-all hover:text-gold"
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.4s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reservation"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-lg bg-gold px-8 py-3 font-semibold text-charcoal transition-all hover:bg-gold-light"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </nav>
  )
}
