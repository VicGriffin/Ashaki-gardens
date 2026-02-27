import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { MenuPreview } from "@/components/menu-preview"
import { Events } from "@/components/events"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Reservation } from "@/components/reservation"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { SocialShare } from "@/components/social-share"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <MenuPreview />
      <Events />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
      <BackToTop />
      <SocialShare />
    </main>
  )
}
