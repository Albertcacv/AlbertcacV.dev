import * as React from 'react'
import { Link } from 'gatsby'
import UilHome from '@iconscout/react-unicons/icons/uil-home'
import UilUser from '@iconscout/react-unicons/icons/uil-user'
import UilFile from '@iconscout/react-unicons/icons/uil-file-alt'

import UilMonitor from '@iconscout/react-unicons/icons/uil-monitor'
import UilMessage from '@iconscout/react-unicons/icons/uil-message'
import UilDocument from '@iconscout/react-unicons/icons/uil-document-layout-center'

export default function BlogNavBar() {
  return (
    <div className='nav__menu'>
      <ul className='nav__list grid'>
        <li className='nav__item'>
          <Link to='/blog' className='nav__link'>
            <UilHome className='nav__icon' />
            Home
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to="/blog/posts">
            <UilMonitor className='nav__icon' />
            Posts
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to="/blog/about">
            <UilMessage className='nav__icon' />
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}
