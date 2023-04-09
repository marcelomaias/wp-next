import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import handleLinks from '@/lib/handleLinks'
import { Back, gsap } from 'gsap'
import { useEffect, useRef } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Carousel({ sliders }) {
  const carouselCtx = useRef()

  //   sliders.forEach(slider => {
  //     console.log('HEADING: ', slider.homeSlider.sliderHeading)
  //   })

  const tl = gsap.timeline()

  function splitChars(text) {
    const letters = text.split('').map((char, index) => (
      <span key={index} className='letter'>
        {char}
      </span>
    ))

    return letters
  }

  useEffect(() => {
    const ctx = gsap.context(self => {
      const slider = document.querySelectorAll('.sliderHeading .letter ')

      tl.from(slider, {
        y: '50%',
        opacity: 0,
        duration: 0.4,
        ease: Back.easeOut,
        delay: 0,
        stagger: 0.02,
      })
    }, carouselCtx) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <Swiper
      ref={carouselCtx}
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => tl.restart()}
      onSwiper={swiper => console.log(swiper)}
    >
      {sliders.map(slider => (
        <SwiperSlide key={slider.id}>
          <Image
            src={slider.homeSlider.sliderImage.sourceUrl}
            fill
            alt='Cover'
            style={{ objectFit: 'cover' }}
            sizes='
                (max-width: 500px) 400px,
                (max-width: 900px) 800px,
                1920px'
          />
          <div className='content'>
            <h2 className='sliderHeading'>
              {splitChars(slider.homeSlider.sliderHeading)}
            </h2>
            <div
              className='sliderText'
              dangerouslySetInnerHTML={{
                __html: handleLinks(slider.homeSlider.sliderText),
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
