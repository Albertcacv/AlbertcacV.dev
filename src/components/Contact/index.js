import * as React from 'react'

import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter'
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin'

export default function Contact() {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <span className='section__subtitle'>Get in touch</span>

      <div className='contact__container container grid'>
        <div>
          <div className='contact__information'>
            <a
              href='https://www.linkedin.com/in/alberto-ca%C3%B1o-%C3%A1lvarez/'
              className='home__social-icon'
              target='_blank'
              rel='noopener'
            >
              <UilLinkedin className='contact__icon' size='80' />
            </a>
            <a
              href='https://twitter.com/AlbertcacV'
              className='home__social-icon'
              target='_blank'
              rel='noopener'
            >
              <UilTwitter className='contact__icon' size='80' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
