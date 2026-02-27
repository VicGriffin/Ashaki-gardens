"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    el.classList.add("animate-fade-in")
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Ashaki Gardens - hospitality and entertainment venue experience"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal/40 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-xs font-medium tracking-widest text-gold uppercase">
            Ruiru, Off Thika Road
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-beige sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {"Ruiru's Ultimate Garden Experience"}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-beige-dark md:text-xl">
          Fine Dining. Live Music. Unforgettable Nights.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#reservation"
            className="btn-modern animate-slide-in-left rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-charcoal transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            style={{ animationDelay: '200ms' }}
          >
            Book a Table
          </Link>
          <Link
            href="#contact"
            className="animate-slide-in-right rounded-lg border border-beige/30 bg-charcoal/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-beige backdrop-blur-sm transition-all hover:border-gold/50 hover:text-gold hover-lift"
            style={{ animationDelay: '400ms' }}
          >
            Host an Event
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-beige-dark transition-colors hover:text-gold"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <ChevronDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
