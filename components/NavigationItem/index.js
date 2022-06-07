import Link from 'next/link'
import React from 'react'
import { BsFilePost } from 'react-icons/bs'
import { FaLightbulb, FaTwitter, FaUser } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'

const ICONS = {
  home: <FiHome size='1.5em' />,
  projects: <FaLightbulb size='1.5em' />,
  about: <FaUser size='1.5em' />,
  blog: <BsFilePost size='1.5em' />,
  twitter: <FaTwitter size='1.5em' />,
}

export const NavigationItem = ({ href, action, className, title }) => {
  return (
    <Link href={href}>
      <a onClick={action} className={className}>
        {ICONS[title]}
      </a>
    </Link>
  )
}
