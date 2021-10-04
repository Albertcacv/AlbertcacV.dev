import * as React from 'react'
import Qualification from '../Qualification'
export default function About() {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My introduction</span>

      <div className='about__container bd-grid'>
        <div className='about__data'>
          <p className='about__description'>
            Currently I am dedicated to consolidate and improve my knowledge in
            the area of web development. In my my free time I like to do
            research in the field of cybersecurity, more focused cybersecurity,
            more focused on the pentesting sector.
          </p>
        </div>
        <Qualification />
      </div>
    </section>
  )
}
