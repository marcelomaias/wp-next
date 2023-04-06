import ViagensCard from '@/components/Content/ViagensCard/ViagensCard'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

function ViagensGrid({ destinos }) {
  const list = destinos.slice(0, 3)

  const viagemCtx = useRef()

  useEffect(() => {
    const ctx = gsap.context(self => {
      gsap.from('.stamp', {
        x: 200,
        rotate: 360,
        scrollTrigger: {
          trigger: '.stamp',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
      gsap.from('.viagemCard', {
        y: 100,
        // stagger: 0.2,
        scrollTrigger: {
          // markers: true,
          trigger: '.viagemCard',
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      })
    }, viagemCtx) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <section ref={viagemCtx} className='container viagensGrid'>
      <Image
        className='stamp'
        src={'/stamp.svg'}
        width={230}
        height={230}
        alt='Selo'
      />
      <span className='subtitle'>galeria de viagens</span>
      <h2>Viagens preferidas</h2>
      <div className='grid'>
        {list.map(destino => (
          <ViagensCard key={destino.node.id} destino={destino} />
        ))}
      </div>
    </section>
  )
}

export default ViagensGrid
