"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const events = [
  {
    date: "2026-03-07",
    title: "Mugithi Nights Live",
    description:
      "Join us for an electrifying evening of live Mugithi music featuring top Kenyan artists. Dinner service starts at 6 PM.",
    time: "7:00 PM",
    tag: "Live Music",
  },
  {
    date: "2026-03-14",
    title: "Wine & Dine Under the Stars",
    description:
      "An exclusive 5-course dinner paired with premium wines from South Africa and Kenya's own vineyards.",
    time: "6:30 PM",
    tag: "Fine Dining",
  },
  {
    date: "2026-03-21",
    title: "Garden Jazz Evening",
    description:
      "Smooth jazz, craft cocktails, and a curated tasting menu in our intimate garden lounge setting.",
    time: "7:00 PM",
    tag: "Jazz Night",
  },
]

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-3">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-serif text-xl font-bold text-gold md:text-2xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Events() {
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
      id="events"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-charcoal-light/50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div data-animate className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            {"What's Coming"}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-beige md:text-4xl lg:text-5xl text-balance">
            Upcoming Events
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-beige-dark">
            Mark your calendar for unforgettable nights at Ashaki Gardens.
          </p>
        </div>

        {/* Next Event Countdown */}
        <div data-animate className="glass mb-12 rounded-xl p-6 text-center md:p-8">
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">
            Next Event Starts In
          </p>
          <h3 className="mt-2 font-serif text-2xl font-bold text-beige">
            {events[0].title}
          </h3>
          <div className="mt-4 flex justify-center">
            <Countdown targetDate={events[0].date} />
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, i) => {
            const eventDate = new Date(event.date)
            const day = eventDate.getDate()
            const month = eventDate.toLocaleString("default", { month: "short" })

            return (
              <div
                key={event.title}
                data-animate
                className="glass group overflow-hidden rounded-xl transition-all duration-500 hover:border-gold/40"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Date Header */}
                <div className="flex items-center gap-4 border-b border-border p-5">
                  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-deep-green/60">
                    <span className="font-serif text-xl font-bold leading-none text-gold">
                      {day}
                    </span>
                    <span className="text-[10px] font-semibold tracking-widest text-beige-dark uppercase">
                      {month}
                    </span>
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold text-gold">
                      {event.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-beige transition-colors group-hover:text-gold">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-sm text-beige-dark">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-gold" />
                      {eventDate.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gold" />
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div data-animate className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gold/40 px-8 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-charcoal">
            See All Events
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
