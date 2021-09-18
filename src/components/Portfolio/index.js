import * as React from 'react'
import Slider from './Slider'

export default function Portfolio() {
  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'>My projects</h2>
      <span className='section__subtitle'>Outstanding projects</span>
      <div className='portfolio__container container swiper'>
        {/* <!--PORTFOLIO CONTENT --> */}
        <Slider />
      </div>
    </section>
  )
}
