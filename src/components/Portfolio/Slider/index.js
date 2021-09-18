import * as React from 'react'

import VenturImg from '../../../images/ventur.png'
import RickImg from '../../../images/rick&morty.png'

import Swiper from 'swiper'
import 'swiper/css'

import Slide from './Slide'

export default function Slider() {
  const swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  })

  return (
    <>
      <div className='swiper-wrapper'>
        {/* <!-- SLIDE 1 --> */}
        <Slide
          img={VenturImg}
          title='Ventur'
          description='Replica of a website for the sale of cards inspired by the playfulbet
          portal.'
          codeLink='https://github.com/Albertcacv/e-commerce_model'
        />
        {/* <!-- SLIDE 2 --> */}
        <Slide
          img={RickImg}
          title='Rick and Morty API'
          description=' Api of the characters of the series "Rick and Morty".'
          codeLink='https://github.com/Albertcacv/RickMorty_Api'
          demoLink='https://rick-morty-api-m4uxqln8u-albertcacv.vercel.app/'
        />
      </div>

      <button className='swiper-button-prev'>
        <i className='uil uil-angle-left-b swiper-portfolio-icon'></i>
      </button>
      <button className='swiper-button-next'>
        <i className='uil uil-angle-right-b swiper-portfolio-icon'></i>
      </button>

      <div className='swiper-pagination'></div>
    </>
  )
}
