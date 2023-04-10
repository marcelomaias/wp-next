import Link from 'next/link'
import Image from 'next/image'
import { MdArrowCircleRight } from 'react-icons/md'

function ViagensCard({ destino }) {
  const { destinoFieldGroup, title, uri, excerpt, featuredImage } = destino.node
  return (
    <Link href={uri} className='ViagensCard viagemCard'>
      <Image
        className='ViagensCardImage'
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
      <h2>{title}</h2>
      <div className='Text' dangerouslySetInnerHTML={{ __html: excerpt }} />
      <span className='ReadMore'>
        Leia Mais <MdArrowCircleRight className='ReadMoreIcon' />
      </span>
    </Link>
  )
}

export default ViagensCard
