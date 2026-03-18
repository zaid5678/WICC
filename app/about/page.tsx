import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'About Us | Westminster Islamic Community Centre',
  description: 'Learn about the Westminster Islamic Community Centre — our history, mission, and the community we serve.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="About WICC"
          subtitle="Rooted in faith, serving Westminster and beyond."
        />
        <About />
      </main>
      <Footer />
    </>
  )
}
