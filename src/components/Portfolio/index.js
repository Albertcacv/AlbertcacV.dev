import * as React from 'react'

import Slide from '../Slide'

import Ventur from '../../images/ventur.png'
import RickImg from '../../images/rick&morty.png'
export default function Portfolio() {
  return (
    <section className='portfolio section' id='portfolio'>
      <span className='section__subtitle'>Outstanding projects</span>
      <h2 className='section__title'>My projects</h2>

      <div className='portfolio__container bd-grid'>
        {/* <!--PORTFOLIO CONTENT --> */}
        <Slide
          img={Ventur}
          title='Kiosko Ventur'
          description='Replica of a website for the sale of cards inspired by the playfulbet
          portal.'
          codeLink='https://github.com/Albertcacv/e-commerce_model'
        />

        <Slide
          img={RickImg}
          title='Rick and Morty API'
          description=' Api of the characters of the series "Rick and Morty".'
          codeLink='https://github.com/Albertcacv/RickMorty_Api'
          demoLink='https://rick-morty-api-m4uxqln8u-albertcacv.vercel.app/'
        />
      </div>
    </section>
  )
}
