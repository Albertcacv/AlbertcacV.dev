import * as React from 'react'

import UilHome from '@iconscout/react-unicons/icons/uil-home'
import UilUser from '@iconscout/react-unicons/icons/uil-user'
import UilFile from '@iconscout/react-unicons/icons/uil-file-alt'

import UilMonitor from '@iconscout/react-unicons/icons/uil-monitor'
import UilMessage from '@iconscout/react-unicons/icons/uil-message'
import UilDocument from '@iconscout/react-unicons/icons/uil-document-layout-center'

export default function Nav() {
  return (
    <div className='nav__menu'>
      <ul className='nav__list grid'>
        <li className='nav__item'>
          <a className='nav__link' href='#home'>
            <UilHome className='nav__icon' />
            Home
          </a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#about'>
            <UilUser className='nav__icon' />
            About
          </a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#skills'>
            <UilFile className='nav__icon' />
            Skills
          </a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#portfolio'>
            <UilMonitor className='nav__icon' />
            Projects
          </a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#contact'>
            <UilMessage className='nav__icon' />
            Contact
          </a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='/blog'>
            <UilDocument className='nav__icon' />
            Blog
          </a>
        </li>
      </ul>
    </div>
  )
}
