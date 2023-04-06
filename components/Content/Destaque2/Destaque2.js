import Image from 'next/image'
import handleLinks from '@/lib/handleLinks'
import style from './Destaque2.module.scss'
import { MdPlayCircle } from 'react-icons/md'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

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

  const chars = title.split('').map((char, index) => (
    <span key={index} className='char'>
      {char}
    </span>
  ))

  const destaque2Ctx = useRef()

  useEffect(() => {
    const ctx = gsap.context(self => {
      gsap.from('.char', {
        y: 150,
        opacity: 0,
        stagger: 0.05,
        duration: 0.25,
        ease: 'bounce.out',
        scrollTrigger: {
          // markers: true,
          trigger: '.char',
          start: 'top bottom',
          end: 'top top',
          toggleActions: 'play reset play reset',
        },
      })
    }, destaque2Ctx) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={destaque2Ctx} className={style.Destaque2Container}>
      <div className={`container ${style.Destaque2}`}>
        <div className='col'>
          <div>
            <h2>{chars}</h2>
            <div
              className='text'
              dangerouslySetInnerHTML={{ __html: handleLinks(texto) }}
            />
          </div>
          <div className={style.Author}>
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
      </div>
    </div>
  )
}

export default Destaque2
