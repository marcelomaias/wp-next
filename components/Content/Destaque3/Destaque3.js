import Image from 'next/image'
import handleLinks from '@/lib/handleLinks'
import style from './Destaque3.module.scss'
import { MdPlayCircle } from 'react-icons/md'
import Link from 'next/link'

function Destaque3({ destaque3 }) {
  const {
    title,
    texto,
    thumbmail,
    video,
    authorName,
    authorTitle,
    authorPicture,
  } = destaque3
  return (
    <div className={style.Destaque3Container}>
      <div className={`container ${style.Destaque3}`}>
        <div className='col'>
          <a className={style.videoThumb} href='#'>
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
            <MdPlayCircle className={style.playIcon} />
          </a>
        </div>
        <div className='col'>
          <div>
            <h2>{title}</h2>
            <div
              className='text'
              dangerouslySetInnerHTML={{ __html: handleLinks(texto) }}
            />
          </div>
          <div className={style.Author}>
            <Link className='btn' href={'/'}>
              Explore Agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destaque3
