"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react"

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-charcoal-light/50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div data-animate className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            Find Us
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-beige md:text-4xl lg:text-5xl text-balance">
            Visit Ashaki Gardens
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div data-animate className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.42858!2d36.93!3d-1.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3e13d2a1f4b5%3A0x6f7e7b7a8c7d6e5f!2sRuiru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashaki Gardens Location - Ruiru, Off Thika Road"
              className="rounded-xl"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div data-animate className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-deep-green/60 text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-beige">
                    Location
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-beige-dark">
                    Ashaki Gardens, Off Thika Road
                    <br />
                    Ruiru, Kiambu County, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div data-animate className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-deep-green/60 text-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-beige">
                    Opening Hours
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-beige-dark">
                    <div className="flex justify-between gap-8">
                      <span>Monday - Thursday</span>
                      <span className="text-beige">11:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Friday - Saturday</span>
                      <span className="text-beige">11:00 AM - 2:00 AM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span className="text-beige">10:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-animate className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-deep-green/60 text-gold">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-beige">
                    Get in Touch
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-beige-dark">
                    <p>
                      Phone:{" "}
                      <a
                        href="tel:+254700000000"
                        className="text-gold hover:underline"
                      >
                        +254 700 000 000
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:hello@ashakigardens.co.ke"
                        className="text-gold hover:underline"
                      >
                        hello@ashakigardens.co.ke
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div data-animate className="flex gap-3">
              {[
                { label: "Instagram", path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5.25-2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" },
                { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" },
                { label: "Twitter", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2Z" },
                { label: "TikTok", path: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-beige-dark transition-all hover:border-gold hover:text-gold"
                  aria-label={social.label}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
