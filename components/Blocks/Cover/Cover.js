import Image from 'next/image'

export const Cover = ({ children, url }) => {
  return (
    <div className='coreCover'>
      {!!url && (
        <Image
          src={url}
          fill
          alt='Cover'
          sizes='
        (max-width: 500px) 400px,
        (max-width: 900px) 800px,
        1920px'
        />
      )}
      <div className='container coreCoverInner'>{children}</div>
    </div>
  )
}
