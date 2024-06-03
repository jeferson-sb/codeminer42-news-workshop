import type { AppProps } from 'next/app'

import '@/ui/styles/reset.css'
import '@/ui/styles/theme.css'
import MainLayout from '@/ui/layout/MainLayout'
import { Roboto_Slab, Grenze_Gotisch } from 'next/font/google'

const roboto = Roboto_Slab({ subsets: ['latin'], variable: '--font-body' })
const grenze = Grenze_Gotisch({ subsets: ['latin'], variable: '--font-brand' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.variable} ${grenze.variable}`}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  )
}
