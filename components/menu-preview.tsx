"use client"

import { useEffect, useRef, useState } from "react"

const categories = ["Starters", "Main Course", "Grill", "Cocktails"] as const

type Category = (typeof categories)[number]

const menuItems: Record<Category, { name: string; description: string; price: string }[]> = {
  Starters: [
    { name: "Samosa Trio", description: "Beef, chicken & vegetable samosas with tamarind dip", price: "KES 450" },
    { name: "Grilled Halloumi", description: "With garden herbs, honey glaze & rocket salad", price: "KES 650" },
    { name: "Coconut Soup", description: "Creamy coconut & lemongrass soup with prawns", price: "KES 550" },
    { name: "Garden Bruschetta", description: "Toasted ciabatta with tomato, basil & balsamic", price: "KES 400" },
  ],
  "Main Course": [
    { name: "Nyama Choma Platter", description: "Slow-roasted prime cuts with ugali & kachumbari", price: "KES 1,800" },
    { name: "Pan-Seared Tilapia", description: "Lake Victoria tilapia with coconut rice & greens", price: "KES 1,400" },
    { name: "Lamb Tagine", description: "Slow-cooked lamb with apricots, almonds & couscous", price: "KES 1,600" },
    { name: "Jollof Rice Bowl", description: "West African classic with grilled chicken & plantain", price: "KES 1,200" },
  ],
  Grill: [
    { name: "Tomahawk Steak", description: "600g bone-in ribeye with garlic butter & fries", price: "KES 2,800" },
    { name: "Mixed Grill Board", description: "Ribs, sausages, chicken wings & beef skewers", price: "KES 2,200" },
    { name: "Herb-Crusted Rack", description: "Lamb rack with rosemary jus & roasted vegetables", price: "KES 2,400" },
    { name: "BBQ Chicken", description: "Whole marinated chicken with secret Ashaki spice rub", price: "KES 1,500" },
  ],
  Cocktails: [
    { name: "Ashaki Sunset", description: "Passion fruit, vodka, elderflower & champagne fizz", price: "KES 800" },
    { name: "Garden Mojito", description: "Fresh mint from our garden, rum, lime & soda", price: "KES 650" },
    { name: "Thika Road Mule", description: "Kenyan ginger beer, premium vodka & lime", price: "KES 700" },
    { name: "Dawa Classic", description: "The Kenyan honey-lime cocktail with a twist", price: "KES 600" },
  ],
}

export function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<Category>("Starters")
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
    <section id="menu" ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div data-animate className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            Taste the Difference
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-beige md:text-4xl lg:text-5xl text-balance">
            Our Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-beige-dark">
            A curated selection of signature dishes and handcrafted cocktails
            that celebrate the best of Kenyan and international cuisine.
          </p>
        </div>

        {/* Category Tabs */}
        <div data-animate className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gold text-charcoal shadow-lg shadow-gold/20"
                  : "border border-border bg-charcoal-light text-beige-dark hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {menuItems[activeCategory].map((item, i) => (
            <div
              key={item.name}
              className="glass group flex items-start justify-between gap-4 rounded-xl p-6 transition-all duration-300 hover:border-gold/30"
              style={{
                animation: `fade-up 0.5s ease-out ${i * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-beige transition-colors group-hover:text-gold">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <span className="shrink-0 font-serif text-lg font-bold text-gold">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-animate className="mt-12 text-center">
          <button className="rounded-lg border border-gold/40 px-8 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-charcoal">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  )
}
