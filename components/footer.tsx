"use client"

import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book a Table", href: "#reservation" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-deep-green/40">
                <span className="font-serif text-lg font-bold text-gold">
                  A
                </span>
              </div>
              <span className="font-serif text-xl font-semibold tracking-wide text-beige">
                Ashaki Gardens
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige-dark">
              {"Ruiru's premier garden restaurant and entertainment venue. Where fine dining meets unforgettable nightlife, off Thika Road."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-widest text-gold uppercase">
              Quick Links
            </h4>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-beige-dark transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-widest text-gold uppercase">
              Stay Updated
            </h4>
            <p className="mt-4 text-sm text-beige-dark">
              Subscribe to receive updates on events, new menu items, and
              exclusive offers.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-border bg-charcoal-light px-4 py-2.5 text-sm text-beige placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Ashaki Gardens. All rights reserved."}
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
