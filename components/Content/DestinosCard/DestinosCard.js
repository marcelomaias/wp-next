import Link from 'next/link'
import Image from 'next/image'
import style from './DestinoCard.module.scss'
import { MdLocationPin } from 'react-icons/md'

function DestinosCard({ destino }) {
  //   console.log(destino)
  const { destinoFieldGroup, title, uri, places } = destino.node
  return (
    <Link href={uri} className={`destino ${style.DestinoCard}`}>
      <Image
        className={style.DestinoCardImage}
        src={destinoFieldGroup.image.mediaItemUrl}
        fill
        alt='Destino'
        sizes='
        (max-width: 500px) 400px,
        (max-width: 900px) 400px,
        400px'
      />
      <h3>{title}</h3>
      {places.edges.map(place => (
        <div key={place.node.id} className={style.Location}>
          <MdLocationPin />
          <span>{place.node.name}</span>
        </div>
      ))}
    </Link>
  )
}

export default DestinosCard
