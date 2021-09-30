import * as React from 'react'

export default function Slide({ img, title, demoLink }) {
  return (
    <article className='portfolio__img'>
      <img className='portfolio__img' src={img} alt='' />

      <div className='portfolio__data'>
        <a href={demoLink} className='portfolio__link' alt=''>
          <box-icon name='link-alt' color='#FFF'></box-icon>
        </a>
        <span className='portfolio__title'>{title}</span>
      </div>
    </article>
  )
}
