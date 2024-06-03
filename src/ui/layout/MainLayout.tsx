import { Header } from '@/ui/header/Header'
import { Footer } from '@/ui/footer/Footer'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
