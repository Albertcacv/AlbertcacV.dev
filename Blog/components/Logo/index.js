import Link from 'next/link'

import styles from '@/styles/Logo.module.css'

export default function Logo() {
  return (
    <Link href='/'>
      <button className={styles.logo}>
        <a className={styles.logo__text}>Albertcacv</a>
      </button>
    </Link>
  )
}
