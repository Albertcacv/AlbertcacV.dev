import * as React from 'react'

export default function NavItem({ title, action, href }) {
  const handleClick = () => {
    action(false)
  }
  return (
    <li className='nav__item' onClick={handleClick}>
      <a className='nav__link' href={href}>
        {title}
      </a>
    </li>
  )
}
