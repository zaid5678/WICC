import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'Find Us | Westminster Islamic Community Centre',
  description: 'WICC is located at Lillington Gardens Community Centre, Morgan House, 57 Vauxhall Bridge Rd, London SW1V 2LF.',
}

export default function FindUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="Find Us"
          subtitle="Conveniently located in the heart of Westminster, London."
        />
        <Location />
      </main>
      <Footer />
    </>
  )
}
