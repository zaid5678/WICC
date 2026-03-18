import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Events from '@/components/Events'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import GoldDivider from '@/components/GoldDivider'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GoldDivider />
        <About />
        <GoldDivider />
        <Services />
        <GoldDivider inverted />
        <Events />
        <GoldDivider />
        <Location />
        <GoldDivider inverted />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
