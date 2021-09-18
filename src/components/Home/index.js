import * as React from 'react'

import HomePicture from '../../images/logo.jpg'
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin-alt'
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter-alt'
import UilGithub from '@iconscout/react-unicons/icons/uil-github-alt'
import UilMessage from '@iconscout/react-unicons/icons/uil-message'
import UilMouse from '@iconscout/react-unicons/icons/uil-mouse-alt'
import UilArrowDown from '@iconscout/react-unicons/icons/uil-arrow-down'

export default function Home() {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <div className='home__social'>
            <a
              href='https://www.linkedin.com/in/albertcacv/'
              className='home__social-icon'
              target='_blank'
              rel='noopener'
            >
              <UilLinkedin />
            </a>
            <a
              href='https://twitter.com/AlbertcacV'
              className='home__social-icon'
              target='_blank'
              rel='noopener'
            >
              <UilTwitter />
            </a>
            <a
              href='https://github.com/Albertcacv'
              target='_blank'
              className='home__social-icon'
              rel='noopener'
            >
              <UilGithub />
            </a>
          </div>

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
      </div>
    </section>
  )
}
