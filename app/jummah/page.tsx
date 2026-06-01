import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Jummah from '@/components/Jummah'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: "Jumu'ah | Westminster Islamic Community Centre",
  description: "Friday congregational prayer (Jumu'ah) at Lillington Gardens Community Centre. 1st jama'ah 1:30 pm, 2nd jama'ah 2:00 pm.",
}

export default function JummahPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="Jumu'ah Prayer"
          subtitle="Friday congregational prayer — every week."
        />
        <Jummah />
      </main>
      <Footer />
    </>
  )
}
