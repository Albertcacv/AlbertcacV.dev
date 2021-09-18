import * as React from 'react'

import AboutImg from '../../images/about-img.jpg'

import UilDownload from '@iconscout/react-unicons/icons/uil-download-alt'
export default function About() {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My introduction</span>

      <div className='about__container container grid'>
        <img src={AboutImg} alt='' className='about__img' />
        <div className='about__data'>
          <div className='about__description'>
            <div className='about__description-content'>
              <h2 className='about__description-item'>Alberto Caño Álvarez</h2>
              <p className='about__description-item underline'>
                Software Developer
              </p>
              <p className='about__description-item underline'>
                IT Engineer Student
              </p>
              <p>
                Currently I am dedicated to consolidate and improve my knowledge
                in the area of web my knowledge in the area of web development.
                In my my free time I like to do research in the field of
                cybersecurity, more focused cybersecurity, more focused on the
                pentesting sector.
              </p>
            </div>
            <div className='about__buttons'>
              <a
                download=''
                href='../../assets/pdf/CV.pdf'
                className='button button--flex'
              >
                <UilDownload className='button__icon' />
                <span> Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
