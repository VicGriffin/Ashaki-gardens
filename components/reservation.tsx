"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MessageCircle } from "lucide-react"

export function Reservation() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "2",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hi! I'd like to make a reservation at Ashaki Gardens.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nGuests: ${formData.guests}`
    window.open(
      `https://wa.me/254700000000?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <section id="reservation" ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div data-animate className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            Reserve Your Spot
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-beige md:text-4xl lg:text-5xl text-balance">
            Make a Reservation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-beige-dark">
            Secure your table at Ashaki Gardens. For same-day reservations,
            please call us directly.
          </p>
        </div>

        <div data-animate className="glass overflow-hidden rounded-xl">
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-beige"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-charcoal-light px-4 py-3 text-sm text-beige placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="John Kamau"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-beige"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-charcoal-light px-4 py-3 text-sm text-beige placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium text-beige"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-charcoal-light px-4 py-3 text-sm text-beige focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="mb-2 block text-sm font-medium text-beige"
                >
                  Number of Guests
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-charcoal-light px-4 py-3 text-sm text-beige focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="10+">{"10+ Guests"}</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                <Phone size={16} />
                Reserve Now
              </button>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/20"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
