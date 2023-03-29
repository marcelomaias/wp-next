import ViagensCard from '@/components/Content/ViagensCard/ViagensCard'
import Image from 'next/image'

function ViagensGrid({ destinos }) {
  // console.log(destinos)

  const list = destinos.slice(0, 3)

  return (
    <section className='container viagensGrid'>
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
