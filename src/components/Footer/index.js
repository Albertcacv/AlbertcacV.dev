import * as React from 'react'

import 'boxicons'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h2 className='footer__title'>Alberto Caño Alvarez</h2>

        <div className='footer__social'>
          <a href='https://twitter.com/AlbertcacV' className='footer__link'>
            <box-icon name='twitter' type='logo' color='#FFF'></box-icon>
          </a>
          <a href='https://github.com/Albertcacv' className='footer__link'>
            {' '}
            <box-icon name='github' type='logo' color='#FFF'></box-icon>
          </a>
        </div>
      </div>
    </footer>
  )
}
