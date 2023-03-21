import Image from 'next/image'
import style from './Cover.module.scss'

export const Cover = ({ children, url }) => {
  return (
    <div className={`cover ${style.coreCover}`}>
      <Image
        src={url}
        fill
        alt='Cover'
        sizes='
        (max-width: 500px) 400px,
        (max-width: 900px) 800px,
        1920px'
      />
      <div className={`container ${style.coreCoverInner}`}>{children}</div>
    </div>
  )
}
