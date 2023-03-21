import { SWRConfig } from 'swr'
import { client } from '@/lib/client'

import '@/styles/globals.scss'

const fetcher = (query, variables) => client.request(query, variables)

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}
