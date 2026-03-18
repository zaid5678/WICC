import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'Services | Westminster Islamic Community Centre',
  description: 'Friday Jumu\'ah prayers, Eid Salah, Islamic education, and community events at WICC.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="Our Services"
          subtitle="Spiritual, educational and community programmes for all."
        />
        <Services />
      </main>
      <Footer />
    </>
  )
}
