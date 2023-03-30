import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children }) {
  const main = useRef()

  useEffect(() => {
    const ctx = gsap.context(self => {
      const headerArea = self.selector('.headerArea')
      const coreCover = self.selector('.coreCover')
      const destinos = self.selector('.destino')
      const stamp = self.selector('.stamp')
      const char = self.selector('.char')

      gsap.to(headerArea, {
        backgroundColor: '#ffffff',
        color: '#333333',
        fill: '#000000',
        duration: 1.0,
        scrollTrigger: {
          // markers: true,
          trigger: coreCover,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      gsap.from(destinos, {
        x: 150,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: destinos,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      })
      gsap.from(stamp, {
        x: 200,
        rotate: 360,
        scrollTrigger: {
          trigger: stamp,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
      gsap.from(char, {
        y: 150,
        opacity: 0,
        stagger: 0.05,
        duration: 0.25,
        scrollTrigger: {
          // markers: true,
          trigger: char,
          start: 'top bottom',
          end: 'top top',
          toggleActions: 'play reset play reset',
        },
      })
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={main}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
