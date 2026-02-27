"use client"

import { useEffect, useRef } from "react"
import { UtensilsCrossed, Music, PartyPopper, Wine } from "lucide-react"

const experiences = [
  {
    icon: UtensilsCrossed,
    title: "Signature Cuisine",
    description:
      "Savor expertly crafted dishes blending traditional Kenyan flavors with modern culinary artistry, prepared with locally sourced ingredients.",
  },
  {
    icon: Music,
    title: "Live Music & Mugithi Nights",
    description:
      "Experience electrifying live performances every weekend, from soulful Mugithi sessions to contemporary Afrobeat sets under the stars.",
  },
  {
    icon: PartyPopper,
    title: "Private Events & Weddings",
    description:
      "Transform our gardens into your dream venue. From intimate celebrations to grand weddings, we make every occasion extraordinary.",
  },
  {
    icon: Wine,
    title: "Cocktail & Lounge Bar",
    description:
      "Unwind at our garden lounge bar with handcrafted cocktails, premium spirits, and an extensive wine selection in a stunning setting.",
  },
]

export function Experience() {
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
      { threshold: 0.1 }
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-charcoal-light/50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div data-animate className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            What Awaits You
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-beige md:text-4xl lg:text-5xl text-balance">
            The Ashaki Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-beige-dark">
            Every corner of our garden tells a story. Discover the experiences
            that make Ashaki Gardens the talk of Ruiru.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              data-animate
              className="glass group rounded-xl p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-deep-green/60 text-gold transition-colors group-hover:bg-gold/20">
                <exp.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-beige">
                {exp.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-beige-dark">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
