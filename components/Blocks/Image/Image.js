import Image from 'next/image'

export const ImageBlock = ({ url, title, alt, caption }) => {
  return (
    <div
      className='container'
      style={{
        margin: '20px auto 30px auto',
      }}
    >
      <div
        className='image-container'
        style={{
          position: 'relative',
          minHeight: '400px',
          marginBottom: '8px',
        }}
      >
        <Image
          src={url}
          fill
          alt={alt}
          style={{ objectFit: 'cover' }}
          sizes='
        (max-width: 500px) 400px,
        (max-width: 900px) 800px,
        1920px'
        />
      </div>
      {caption && <div className='caption'>{caption}</div>}
    </div>
  )
}
