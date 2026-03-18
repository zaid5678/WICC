import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Events from '@/components/Events'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'Events | Westminster Islamic Community Centre',
  description: 'Upcoming events at WICC — Eid Salah, Friday prayers, Quran circles and community gatherings.',
}

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="Upcoming Events"
          subtitle="Join us for prayers, celebrations, and learning together."
        />
        <Events />
      </main>
      <Footer />
    </>
  )
}
