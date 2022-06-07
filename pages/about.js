import InfoCard from '../components/QualificationCard'
import { StackItem } from '../components/StackItem'
import { STACK } from '../data/stack'
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
          {STACK.map(({ id, src, alt, width, height, className }) => (
            <StackItem
              key={id}
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={className}
            />
          ))}
     
        </div>
      </article>
    </section>
  )
}
