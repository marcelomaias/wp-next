import Link from 'next/link'
import Image from 'next/image'
import style from './ViagensCard.module.scss'
import { MdArrowCircleRight } from 'react-icons/md'

function ViagensCard({ destino }) {
  const { destinoFieldGroup, title, uri, excerpt, featuredImage } = destino.node
  return (
    <Link href={uri} className={style.ViagensCard}>
      <Image
        className={style.ViagensCardImage}
        src={
          destinoFieldGroup?.image?.mediaItemUrl ||
          featuredImage?.node.sourceUrl
        }
        fill
        alt='Destino'
        sizes='
        (max-width: 500px) 400px,
        (max-width: 900px) 400px,
        400px'
      />
      <h2>{title}</h2>
      <div
        className={style.Text}
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <span className={style.ReadMore}>
        Leia Mais <MdArrowCircleRight className={style.ReadMoreIcon} />
      </span>
    </Link>
  )
}

export default ViagensCard
