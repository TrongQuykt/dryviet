import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { FloatingContact } from '@/components/common/FloatingContact'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
