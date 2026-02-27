"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.2 }
    )

    const el = sectionRef.current
    if (el) {
      const children = el.querySelectorAll("[data-animate]")
      children.forEach((child) => {
        ;(child as HTMLElement).style.opacity = "0"
        observer.observe(child)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div data-animate className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/about.jpg"
                alt="ASHAKI SUNDAYS events and venue atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl border border-gold/20" />
          </div>

          {/* Text */}
          <div>
            <div data-animate>
              <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                Our Story
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-beige md:text-4xl lg:text-5xl text-balance">
                Where Nature Meets Nightlife
              </h2>
            </div>

            <div data-animate className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-beige-dark">
                Nestled in the heart of Ruiru, off the iconic Thika Road, Ashaki
                Gardens is more than a restaurant &mdash; it is an experience.
                Our lush garden setting transforms from an elegant daytime dining
                sanctuary into a vibrant nightlife destination as the sun sets.
              </p>
              <p className="text-base leading-relaxed text-beige-dark">
                From signature Kenyan cuisine crafted by our executive chef to
                live Mugithi nights that get the whole garden dancing, every
                visit to Ashaki Gardens is designed to be unforgettable. Whether
                you are celebrating a milestone, hosting a corporate event, or
                simply looking for the perfect night out, welcome home.
              </p>
            </div>

            <div data-animate className="mt-8 flex flex-wrap gap-8">
              <div>
                <span className="font-serif text-3xl font-bold text-gold">
                  5+
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years of Excellence
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-gold">
                  10K+
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Happy Guests
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-gold">
                  200+
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Events Hosted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
