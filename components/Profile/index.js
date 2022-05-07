import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import avatar from '../../public/avatar.png'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.img}>
        <Image src={avatar} alt='profile' width={200} height={200} />
      </div>
      <div className={styles.username}>
        <h2 className={styles.title}>Alberto Caño Álvarez</h2>
        <p className={styles.subtitle}>Software developer</p>
      </div>

      <p className={styles.description}>
        High level experience in web design and development knowledge
      </p>

      <ul className={styles.social}>
        <Link href='https://twitter.com/AlbertcacV'>
          <a className={styles.socialItem}>
            <FiTwitter fontSize={20} />
          </a>
        </Link>
        <Link href='https://github.com/Albertcacv'>
          <a className={styles.socialItem}>
            <FiGithub />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/albertcacv/'>
          <a className={styles.socialItem}>
            <FiLinkedin />
          </a>
        </Link>
      </ul>

      <button className={styles.contactButton}>
        <span className={styles.contactButtonText}>Contact me</span>
      </button>
    </aside>
  )
}

export default Profile
