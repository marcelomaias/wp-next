import Image from 'next/image'
import handleLinks from '@/lib/handleLinks'
import { MdPlayCircle } from 'react-icons/md'

function Destaque2({ destaque2 }) {
  const {
    title,
    texto,
    thumbmail,
    video,
    authorName,
    authorTitle,
    authorPicture,
  } = destaque2

  return (
    <div className='Destaque2Container'>
      <div className='container Destaque2'>
        <div className='col'>
          <div>
            <h2>{title}</h2>
            <div
              className='text'
              dangerouslySetInnerHTML={{ __html: handleLinks(texto) }}
            />
          </div>
          <div className='Author'>
            <Image
              src={authorPicture.mediaItemUrl}
              alt='Author'
              width={80}
              height={80}
            />
            <div>
              <h5>{authorName}</h5>
              <p>{authorTitle}</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <a className='videoThumb' href='#'>
            <Image
              src={thumbmail.mediaItemUrl}
              alt='Video Thumb'
              width={400}
              height={350}
              sizes='
                (max-width: 500px) 400px,
                (max-width: 900px) 600px,
                600px'
            />
            <MdPlayCircle className='playIcon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Destaque2
