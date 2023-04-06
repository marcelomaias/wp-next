import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children, mainNav }) {
  const mainCtx = useRef()

  useEffect(() => {
    const ctx = gsap.context(self => {
      gsap.to('.headerArea', {
        backgroundColor: '#ffffff',
        color: '#333333',
        fill: '#000000',
        duration: 1.0,
        scrollTrigger: {
          // markers: true,
          trigger: '.coreCover',
          start: '100',
          end: '400',
          scrub: true,
        },
      })
    }, mainCtx) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div id='mainCtx' ref={mainCtx}>
      <Header mainNav={mainNav} />

      {children}
      <Footer />
    </div>
  )
}

export default Layout
