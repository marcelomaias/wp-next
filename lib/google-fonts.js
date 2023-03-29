import { Abril_Fatface, Roboto } from 'next/font/google'

export const font_title = Abril_Fatface({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-title',
})

export const font_text = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
  variable: '--font-text',
})
