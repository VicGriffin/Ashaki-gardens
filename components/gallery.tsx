"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Sunday Family Day at Ashaki Gardens with swimming pool and kids playground",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/food-1.jpg",
    alt: "From our kitchen to your heart - gourmet cuisine at Ashaki Gardens",
    span: "",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Staff party celebration at Ashaki Gardens",
    span: "",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Celebration mode - Ashaki crew enjoying tequila shots",
    span: "",
  },
  {
    src: "/images/food-2.jpg",
    alt: "From our kitchen to your heart - delicious food presentation",
    span: "",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Ashaki Gardens celebration and party atmosphere",
    span: "md:col-span-2",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Team celebration and entertainment at Ashaki Gardens",
    span: "",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Ashaki Gardens crew celebration and nightlife",
    span: "",
  },
];

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    const el = sectionRef.current;
    if (el) {
      const children = el.querySelectorAll("[data-animate]");
      children.forEach((child) => {
        (child as HTMLElement).style.opacity = "0";
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div data-animate className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            Visual Journey
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-beige md:text-4xl lg:text-5xl text-balance">
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-beige-dark">
            A glimpse into the magic that unfolds at Ashaki Gardens every day
            and night.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              data-animate
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-lg ${img.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
              aria-label={`View ${img.alt}`}
            >
              <div
                className={`relative ${img.span.includes("row-span-2") ? "aspect-square" : "aspect-[4/3]"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-all duration-500 group-hover:bg-charcoal/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="rounded-full bg-gold/90 px-4 py-1.5 text-xs font-semibold text-charcoal">
                    View
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-light text-beige transition-colors hover:text-gold"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
