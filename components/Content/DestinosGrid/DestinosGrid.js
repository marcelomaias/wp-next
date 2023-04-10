import DestinosCard from '@/components/Content/DestinosCard/DestinosCard'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

function DestinosGrid({ destinos }) {
  const destinoCtx = useRef()

  useEffect(() => {
    const ctx = gsap.context(self => {
      gsap.from('.DestinoCard', {
        x: 150,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.DestinoCard',
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      })
    }, destinoCtx) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <section ref={destinoCtx} className='container DestinosGrid'>
      <span className='Subtitle'>Onde ir</span>
      <h2>Destinos populares</h2>
      <div className='Grid'>
        {destinos.map(destino => (
          <DestinosCard key={destino.node.id} destino={destino} />
        ))}
      </div>
    </section>
  )
}

export default DestinosGrid
