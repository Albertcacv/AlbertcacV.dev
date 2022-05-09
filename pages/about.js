import Image from 'next/image'
import InfoCard from '../components/QualificationCard'
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>About Me 👨‍</h2>
      <p className={styles.subtitle}>A brief intro of me:</p>
      <span className={styles.intro}>
        I am <b>ALBERTO!</b>
      </span>

      <article className={styles.article}>
        <InfoCard title='Software Developer' />
        <InfoCard title='Web Developer' />
        <InfoCard title='Cybersecurity Student' />
      </article>

      <article>
        <h3 className={styles.title}>Tech Stack</h3>
        <div className={styles.stack}>
          <div className={styles.stackItem}>
            <Image
              src='/images/js.svg'
              alt='Javascript'
              width={60}
              height={60}
              className={styles.image}
            />
          </div>
          <div className={styles.stackItem}>
            <Image
              src='/images/mongo.svg'
              alt='Mongo'
              width={60}
              height={60}
              className={styles.image}
            />
          </div>
          <div className={styles.stackItem}>
            {' '}
            <Image
              src='/images/next.svg'
              alt='Next'
              width={60}
              height={60}
              className={styles.image}
            />
          </div>
          <div className={styles.stackItem}>
            {' '}
            <Image
              src='/images/node.svg'
              alt='Node'
              width={60}
              height={60}
              className={styles.image}
            />
          </div>
          <div className={styles.stackItem}>
            {' '}
            <Image
              src='/images/react.svg'
              alt='React'
              width={60}
              height={60}
              className={styles.image}
            />
          </div>
          <div className={styles.stackItem}>
            <Image
              src='/images/ts.svg'
              alt='TypeScript'
              width={60}
              height={60}
              className={styles.image}
            />
          </div>
        </div>
      </article>
    </section>
  )
}
