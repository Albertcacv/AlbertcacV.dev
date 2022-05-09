import Head from 'next/head'
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
          Hello!👋🏻 My name is Alberto I’m a Software developer
        </p>
        <p className={styles.paragraph}>
          Let me help you grow your business and make your product look pretty
          while at it
        </p>
        <button className={styles.button}>Say Hello</button>
      </section>
    </div>
  )
}
