import Image from 'next/image'
import handleLinks from '@/lib/handleLinks'
import style from './Destaque4.module.scss'

function Destaque4({ destaque4 }) {
  const { dest4Tit1, dest4Tit2, dest4Tex1, dest4Tex2 } = destaque4
  return (
    <div className={style.Destaque4Container}>
      <div className={`container ${style.Destaque4}`}>
        <div className='col'>
          <div>
            <h3>{dest4Tit1}</h3>
            <div
              className='text'
              dangerouslySetInnerHTML={{ __html: handleLinks(dest4Tex1) }}
            />
          </div>
        </div>
        <div className='col'>
          <div>
            <h3>{dest4Tit2}</h3>
            <div
              className='text'
              dangerouslySetInnerHTML={{ __html: handleLinks(dest4Tex2) }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destaque4
