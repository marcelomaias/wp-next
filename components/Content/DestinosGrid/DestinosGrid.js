import DestinosCard from '@/components/Content/DestinosCard/DestinosCard'
import style from './DestinosGrid.module.scss'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

function DestinosGrid({ destinos }) {
  const destinoCtx = useRef()

  useEffect(() => {
    const ctx = gsap.context(self => {
      gsap.from('.destino', {
        x: 150,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.destino',
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      })
    }, destinoCtx) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <section ref={destinoCtx} className={`container ${style.DestinosGrid}`}>
      <span className={style.Subtitle}>Onde ir</span>
      <h2>Destinos populares</h2>
      <div className={style.Grid}>
        {destinos.map(destino => (
          <DestinosCard key={destino.node.id} destino={destino} />
        ))}
      </div>
    </section>
  )
}

export default DestinosGrid
