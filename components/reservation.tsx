"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MessageCircle, Check, Loader2 } from "lucide-react"

export function Reservation() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "2",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[^\d]/g, ''))) {
      newErrors.phone = "Please enter a valid phone number"
    }
    
    if (!formData.date) {
      newErrors.date = "Date is required"
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = "Please select a future date"
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const message = `Hi! I'd like to make a reservation at Ashaki Gardens.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nGuests: ${formData.guests}`
    window.open(
      `https://wa.me/254700000000?text=${encodeURIComponent(message)}`,
      "_blank"
    )
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", date: "", guests: "2" })
      setErrors({})
    }, 3000)
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
          {isSubmitted ? (
            <div className="p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                <Check size={32} className="text-gold" />
              </div>
              <h3 className="mb-2 font-serif text-2xl font-semibold text-beige">
                Reservation Confirmed!
              </h3>
              <p className="text-beige-dark">
                We've sent your reservation details via WhatsApp. We'll contact you shortly to confirm your booking.
              </p>
            </div>
          ) : (
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
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: '' })
                    }}
                    className={`w-full rounded-lg border bg-charcoal-light px-4 py-3 text-sm text-beige placeholder:text-muted-foreground focus-modern transition-colors ${
                      errors.name ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="John Kamau"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
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
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value })
                      if (errors.phone) setErrors({ ...errors, phone: '' })
                    }}
                    className={`w-full rounded-lg border bg-charcoal-light px-4 py-3 text-sm text-beige placeholder:text-muted-foreground focus-modern transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="+254 700 000 000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                  )}
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
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value })
                      if (errors.date) setErrors({ ...errors, date: '' })
                    }}
                    className={`w-full rounded-lg border bg-charcoal-light px-4 py-3 text-sm text-beige focus-modern transition-colors ${
                      errors.date ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.date && (
                    <p className="mt-1 text-xs text-red-400">{errors.date}</p>
                  )}
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
                    className="w-full rounded-lg border border-border bg-charcoal-light px-4 py-3 text-sm text-beige focus-modern transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-modern w-full rounded-lg bg-gold px-6 py-3.5 font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 disabled:cursor-not-allowed disabled:opacity-50 focus-modern"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <MessageCircle size={16} />
                      <span>Reserve via WhatsApp</span>
                    </div>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
