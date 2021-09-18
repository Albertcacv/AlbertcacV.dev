import * as React from 'react'

import UilArrowRigth from '@iconscout/react-unicons/icons/uil-arrow-right'

export default function Slide({ img, title, description, codeLink, demoLink }) {
  return (
    <article className='portfolio__content grid swiper-slide'>
      <img className='portfolio__img' src={img} alt='' />
      <div className='portfolio__data'>
        <h3 className='portfolio__title'>{title}</h3>
        <p className='portfolio__description'>{description}</p>
        <footer className='portfolio__buttons'>
          <a
            href={codeLink}
            target='_blank'
            className='button button--flex button--small portfolio__button'
          >
            Code
            <UilArrowRigth className='button__icon' />
          </a>
          <a
            href={demoLink}
            target='_blank'
            className='button button--flex button--small portfolio__button'
          >
            Demo
            <UilArrowRigth className='button__icon' />
          </a>
        </footer>
      </div>
    </article>
  )
}
