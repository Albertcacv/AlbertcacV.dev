import * as React from 'react'

export default function NavItem({ title, action }) {
  const handleClick = () => {
    action(false)
  }
  return (
    <li className='nav__item' onClick={handleClick}>
      <a className='nav__link' href='#home'>
        {title}
      </a>
    </li>
  )
}
