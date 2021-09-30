import * as React from 'react'
import 'boxicons'

import profilePic from '../../images/aboutImg.jpg'

export default function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__container bd-grid'>
        <div className='home__data'>
          <div className='home__img'>
            <img src={profilePic} alt='' />
          </div>

          <h1 className='home__title'>Alberto Caño</h1>
          <span className='home__profession'>Software Developer</span>

          <div className='home__social'>
            <a
              href='https://www.linkedin.com/in/albertcacv/'
              className='home__social-link'
              target='_blank'
              rel='noopener'
            >
              <box-icon type='logo' name='linkedin'></box-icon>
            </a>
            <a
              href='https://twitter.com/AlbertcacV'
              className='home__social-link'
              target='_blank'
              rel='noopener'
            >
              <box-icon type='logo' name='twitter'></box-icon>
            </a>
            <a
              href='https://github.com/Albertcacv'
              target='_blank'
              className='home__social-link'
              rel='noopener'
            >
              <box-icon type='logo' name='github'></box-icon>
            </a>
          </div>

          <a download='' href='#' className='button home__button'>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
