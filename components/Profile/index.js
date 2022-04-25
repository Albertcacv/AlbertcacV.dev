import Image from 'next/image'
import avatar from '../../public/avatar.png'
import { SButton } from '../../UI/SButton'
import { SProfile } from '../../UI/SProfile'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <SProfile>
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
        <li className={styles.socialItem}>Twitter</li>
        <li className={styles.socialItem}>Github</li>
        <li className={styles.socialItem}>Linkedin</li>
      </ul>

      <SButton>Contact me</SButton>
    </SProfile>
  )
}

export default Profile
