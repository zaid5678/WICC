import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'Contact | Westminster Islamic Community Centre',
  description: 'Connect with the Westminster Islamic Community Centre via our WhatsApp community.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="Connect With Us"
          subtitle="Join the WICC community and stay in touch."
        />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
