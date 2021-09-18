import * as React from 'react'

import VenturImg from '../../../images/ventur.png'
import RickImg from '../../../images/rick&morty.png'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Slide from './Slide'

export default function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true, hide: true }}
      >
        <SwiperSlide>
          <Slide
            img={VenturImg}
            title='Ventur'
            description='Replica of a website for the sale of cards inspired by the playfulbet
          portal.'
            codeLink='https://github.com/Albertcacv/e-commerce_model'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={RickImg}
            title='Rick and Morty API'
            description=' Api of the characters of the series "Rick and Morty".'
            codeLink='https://github.com/Albertcacv/RickMorty_Api'
            demoLink='https://rick-morty-api-m4uxqln8u-albertcacv.vercel.app/'
          />
        </SwiperSlide>
      </Swiper>
      {/* <div className='swiper-wrapper'>
        {/* <!-- SLIDE 1 --> 

        {/* <!-- SLIDE 2 --> 
        
      </div>

      <button className='swiper-button-prev'>
        <i className='uil uil-angle-left-b swiper-portfolio-icon'></i>
      </button>
      <button className='swiper-button-next'>
        <i className='uil uil-angle-right-b swiper-portfolio-icon'></i>
      </button>

      <div className='swiper-pagination'></div> 
      */}
    </>
  )
}
