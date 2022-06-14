import Link from 'next/link'
import { BsFilePost } from 'react-icons/bs'
import {
  FaGithub,
  FaLightbulb,
  FaLinkedin,
  FaTwitter,
  FaUser,
} from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'

const ICONS = {
  home: <FiHome size='1.5em' />,
  projects: <FaLightbulb size='1.5em' />,
  about: <FaUser size='1.5em' />,
  blog: <BsFilePost size='1.5em' />,
  twitter: <FaTwitter size='1.5em' />,
  github: <FaGithub size='1.5em' />,
  linkedin: <FaLinkedin size='1.5em' />,
}

export const NavigationItem = ({ href, action, className, title }) => {
  return (
    <Link href={href}>
      {['twitter', 'github', 'linkedin'].includes(title) ? (
        <a onClick={action} className={className} target='_blank'>
          {' '}
          {ICONS[title]}
        </a>
      ) : (
        <a onClick={action} className={className}>
          {ICONS[title]}
        </a>
      )}
    </Link>
  )
}
