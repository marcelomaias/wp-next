import { SWRConfig } from 'swr'
import { client } from '@/lib/client'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
})

import '@/styles/globals.scss'

const fetcher = (query, variables) => client.request(query, variables)

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </SWRConfig>
  )
}
