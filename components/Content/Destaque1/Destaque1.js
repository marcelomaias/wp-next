import Image from 'next/image'
import handleLinks from '@/lib/handleLinks'

function Destaque1({ destaque1 }) {
  const { titulo1, titulo2, texto1, texto2, icone1, icone2 } = destaque1
  return (
    <div className='container Destaque1'>
      <div className='col'>
        <Image src={icone1.mediaItemUrl} width={64} height={64} alt='Icon' />
        <div>
          <h4>{titulo1}</h4>
          <div
            className='text'
            dangerouslySetInnerHTML={{ __html: handleLinks(texto1) }}
          />
        </div>
      </div>
      <div className='col'>
        <Image src={icone2.mediaItemUrl} width={64} height={64} alt='Icon' />
        <div>
          <h4>{titulo2}</h4>
          <div
            className='text'
            dangerouslySetInnerHTML={{ __html: handleLinks(texto2) }}
          />
        </div>
      </div>
    </div>
  )
}

export default Destaque1
