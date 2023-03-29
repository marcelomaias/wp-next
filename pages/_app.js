import { SWRConfig } from 'swr'
import { client } from '@/lib/client'
import { font_text, font_title } from '@/lib/google-fonts'

import '@/styles/main.scss'

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
