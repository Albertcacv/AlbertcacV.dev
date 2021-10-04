import * as React from 'react'

import Slide from '../Slide'

import Ventur from '../../images/ventur.png'
import RickImg from '../../images/rick&morty.png'

export default function Portfolio() {
  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'>My projects</h2>
      <span className='section__subtitle'>Outstanding projects</span>

      <div className='portfolio__container bd-grid'>
        {/* <!--PORTFOLIO CONTENT --> */}
        <Slide
          img={Ventur}
          title='Kiosko Ventur'
        />

        <Slide
          img={RickImg}
          title='Rick and Morty API'
          demoLink='https://rick-morty-api-m4uxqln8u-albertcacv.vercel.app/'
        />
      </div>
    </section>
  )
}
