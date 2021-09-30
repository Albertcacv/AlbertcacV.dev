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

        {/* 

          <div className='home__img'>
            <img className='home__blob-img' src={HomePicture} alt='' />
          </div>

          <div className='home__data'>
            <h1 className='home__title'>Hi, I'am Alberto!</h1>
            <h2 className='home__subtitle'>Software developer</h2>
            <p className='home__description'>
              Curious about cybersecurity and currently focused on web
              development.
            </p>
            <a
              href='https://www.linkedin.com/in/alberto-ca%C3%B1o-%C3%A1lvarez/'
              target='_blank'
              className='button button--flex'
              rel='noopener'
            >
              <UilMessage className='button__icon' />
              Contact me
            </a>
          </div>
        </div>

        <div className='home__scroll'>
          <a href='#about' className='home__scroll-button button--flex'>
            <UilMouse className='home__scroll-mouse' />
            <span className='home__scroll-name'>Scroll down</span>
            <UilArrowDown className='home__scroll-arrow' />
          </a>
        </div>
      */}
      </div>
    </section>
  )
}
