import { SWRConfig } from 'swr'
import { client } from '@/lib/client'
import { font_text, font_title } from '@/lib/google-fonts'
import Head from 'next/head'

import '@/styles/main.scss'

const fetcher = (query, variables) => client.request(query, variables)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SuperTravel</title>
        <meta
          name='description'
          content='This is a basic Next JS front-end for wordpress Headless.'
        />
      </Head>
      <main className={`${font_text.variable} ${font_title.variable} `}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
