import * as React from 'react'

import 'boxicons'

import NavItem from './NavItem'

export default function Nav({ active, action }) {
  const handleCloseClick = () => {
    action(false)
  }

  const handleItemClick = (param) => {
    action(param)
  }
  return (
    <div className={active ? 'nav__menu show' : 'nav__menu'} id='nav-menu'>
      <div className='nav__close' id='nav-close' onClick={handleCloseClick}>
        <box-icon name='x'></box-icon>
      </div>

      <ul className='nav__list'>
        <NavItem title='Home' action={handleItemClick} href='#home' />
        <NavItem title='About' action={handleItemClick} href='#about' />
        <NavItem title='Skills' action={handleItemClick} href='#skills' />
        <NavItem title='Works' action={handleItemClick} href='#portfolio' />
        <NavItem title='Contact' action={handleItemClick} href='#contact' />
      </ul>
    </div>
  )
}
