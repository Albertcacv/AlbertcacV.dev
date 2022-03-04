import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { BsLinkedin, BsTwitter, BsCalendarWeek } from 'react-icons/bs'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AlbertcaV | Home</title>
        <meta name='description' content='Home site of AlbertcacV' />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <aside className={styles.heroAside}>
              <a
                className={styles.heroLink}
                href='https://www.linkedin.com/in/albertocacv/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsLinkedin color='2d67d1' size='2.5rem' />
              </a>
              <a
                className={styles.heroLink}
                href='https://twitter.com/AlbertcacV'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsTwitter color='0ea4fb' size='2.5rem' />
              </a>
            </aside>
            <div className={styles.heroImage}>
              <Image
                src='/Avatar.png'
                alt='AlbertcacV'
                width={120}
                height={120}
                quality={100}
                loading='eager'
                importance='high'
                fadeIn={false}
                placeholderColor='#fafafa'
              />
            </div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Hi! I&apos;m Alberto!</h1>

            <p className={styles.heroDescription}>
              Software Engineer, Web Developer, and Cibersecurity Student.
            </p>
          </div>
        </section>

        {/*timeline*/}
        <section className={styles.timeline}>
          <h2 className={styles.title}>My timeline</h2>
          <span className={styles.subtitle}>My personal journey</span>

          <div className={styles.data}>
            <article className={styles.item}>
              <h3 className={styles.itemTitle}>Computer Engineer</h3>
              <span className={styles.itemSubtitle}>León - University</span>
              <div className={styles.itemCalendar}>
                <BsCalendarWeek />
                <span>2018 - Present</span>
              </div>
            </article>
            <div>
              <span className={styles.line}></span>
              <span className={styles.rounder}></span>
            </div>
          </div>
        </section>
        {/*projects*/}
      </main>

      <footer className={styles.footer}>
        <span>
          Developed by <a href='https://github.com/Albertcacv'> AlbertcacV</a>
        </span>
      </footer>
    </div>
  )
}
