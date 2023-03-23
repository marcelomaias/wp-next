import { SWRConfig } from 'swr'
import { client } from '@/lib/client'
import { Abril_Fatface, Roboto } from 'next/font/google'

const font_title = Abril_Fatface({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-title',
})

const font_text = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
  variable: '--font-text',
})

import '@/styles/globals.scss'

const fetcher = (query, variables) => client.request(query, variables)

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <main className={`${font_text.variable} ${font_title.variable} `}>
        <Component {...pageProps} />
      </main>
    </SWRConfig>
  )
}
