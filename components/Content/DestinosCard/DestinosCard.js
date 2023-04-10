import Link from 'next/link'
import Image from 'next/image'
import { MdLocationPin } from 'react-icons/md'

function DestinosCard({ destino }) {
  const { destinoFieldGroup, title, uri, places, featuredImage } = destino.node

  return (
    <Link href={uri} className='DestinoCard'>
      <Image
        className='DestinoCardImage'
        src={
          destinoFieldGroup?.image?.mediaItemUrl ||
          featuredImage?.node.sourceUrl
        }
        fill
        alt='Destino'
        sizes='
        (max-width: 500px) 300px,
        (max-width: 900px) 300px,
        300px'
      />
      <h3>{title}</h3>
      {places.edges.map(place => (
        <div key={place.node.id} className='Location'>
          <MdLocationPin />
          <span>{place.node.name}</span>
        </div>
      ))}
    </Link>
  )
}

export default DestinosCard
