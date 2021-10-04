import * as React from 'react'
import 'boxicons'
import resume from '../../images/resume.pdf'
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
              rel='noopener noreferrer'
            >
              <box-icon type='logo' name='linkedin' color='#FFF'></box-icon>
            </a>
            <a
              href='https://twitter.com/AlbertcacV'
              className='home__social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <box-icon type='logo' name='twitter' color='#FFF'></box-icon>
            </a>
            <a
              href='https://github.com/Albertcacv'
              target='_blank'
              className='home__social-link'
              rel='noopener noreferrer'
            >
              <box-icon type='logo' name='github' color='#FFF'></box-icon>
            </a>
          </div>

          <a download="" href={resume} className='button home__button'>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
