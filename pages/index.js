import Head from 'next/head'
import Link from 'next/link'
import ActionButton from '../components/ActionButton'
import styles from '../styles/home.module.css'
export default function Home() {
  return (
    <div>
      <Head>
        <title>AlbertcacV | Home</title>
        <meta name='description' content='Home site of AlbertcacV' />
      </Head>
      <section className={styles.section}>
        <p className={styles.title}>
          Hello!👋🏻
          <br /> My name is Alberto <br />
          I’m a Software <span className={styles.titleColor}>Developer</span>
        </p>
        <p className={styles.paragraph}>
          Let me help you grow your business and make your product look pretty
          while at it
        </p>
        <Link href='https://www.linkedin.com/in/albertcacv/' passHref>
          <ActionButton title="Say Hello"/>
        </Link>
      </section>
    </div>
  )
}
