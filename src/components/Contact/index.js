import * as React from 'react'

export default function Contact() {
  return (
    <section className='contact section' id='contact'>
      <span className='section__subtitle'>Contact Me</span>
      <h2 className='section__title'>Get in touch</h2>

      <div className='contact__container bd-grid'>
        <div>
          <div className='contact__information'>
            <a
              href='https://www.linkedin.com/in/alberto-ca%C3%B1o-%C3%A1lvarez/'
              className='button contact__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send me a message on Linkedin{' '}
            </a>
            <a
              href='https://twitter.com/AlbertcacV'
              className='button contact__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send me a message on Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
