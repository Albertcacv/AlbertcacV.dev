import Project from '../components/Project'
import { PROJECTS } from '../data/projects'
import styles from '../styles/portfolio.module.css'

export default function Portfolio() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Projects 💡</h3>
      <p className={styles.paragraph}>
        Some things i’ve been working on in the past few years:
      </p>
      <section className={styles.projects}>
        {PROJECTS.map((project) => {
          return <Project key={project.id} {...project} />
        })}
      </section>
    </section>
  )
}
