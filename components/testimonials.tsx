"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Wanjiru Mwangi",
    role: "Food Blogger",
    rating: 5,
    text: "Ashaki Gardens is hands down the best dining experience in Ruiru. The nyama choma platter is legendary, and the garden ambiance under the fairy lights is pure magic. A must-visit!",
  },
  {
    name: "David Ochieng",
    role: "Regular Guest",
    rating: 5,
    text: "We hosted our anniversary dinner here and it was absolutely perfect. The staff went above and beyond, the food was incredible, and the live music made it a night to remember forever.",
  },
  {
    name: "Amina Hassan",
    role: "Event Planner",
    rating: 5,
    text: "I have organized several corporate events at Ashaki Gardens and they never disappoint. The venue is stunning, the team is professional, and the cocktails are out of this world.",
  },
  {
    name: "James Kariuki",
    role: "Wedding Guest",
    rating: 4,
    text: "Attended a wedding reception here and was blown away by the beautiful garden setting. The food was exceptional, the service impeccable, and the whole atmosphere was enchanting.",
  },
  {
    name: "Mercy Njeri",
    role: "Cocktail Enthusiast",
    rating: 5,
    text: "The Ashaki Sunset cocktail alone is worth the trip. But combine it with their Mugithi nights and amazing food — you have yourself the perfect weekend outing. Simply unmatched!",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  const next = () => {
    stopAutoplay()
    setCurrent((prev) => (prev + 1) % testimonials.length)
    startAutoplay()
  }

  const prev = () => {
    stopAutoplay()
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    startAutoplay()
  }

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

  const t = testimonials[current]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-charcoal-light/50" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div data-animate className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            Guest Voices
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-beige md:text-4xl lg:text-5xl text-balance">
            What People Say
          </h2>
        </div>

        <div data-animate className="glass relative rounded-xl p-8 md:p-12">
          <Quote
            size={48}
            className="absolute top-6 left-6 text-gold/10 md:top-8 md:left-8"
          />

          <div className="relative text-center">
            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < t.rating
                      ? "fill-gold text-gold"
                      : "text-muted-foreground"
                  }
                />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-lg leading-relaxed text-beige md:text-xl">
              {`"${t.text}"`}
            </p>

            {/* Author */}
            <div className="mt-8">
              <p className="font-semibold text-beige">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-beige-dark transition-all hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    stopAutoplay()
                    setCurrent(i)
                    startAutoplay()
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-gold"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-beige-dark transition-all hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
