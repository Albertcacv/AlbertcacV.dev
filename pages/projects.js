import Project from '../components/Project'
import styles from '../styles/portfolio.module.css'
const PROJECTS = [
  {
    id: 1,
    title: 'Ventur',
    description:
      'Ventur es un kiosko online donde poder comprar tus colecciones de cartas favoritas, responder preguntas diarias para obtener puntos y ganar premios.',
    image: '/public/NyaITD5.png',
    viewLink: '#',
    codeLink: 'https://github.com/Albertcacv/e-commerce_model',
  },
]

export default function Portfolio() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Projects 💡</h3>
      <p className={styles.paragraph}>
        Some things i’ve been working on in the past few years:
      </p>
      {PROJECTS.map((project) => {
        return <Project key={project.id} {...project} />
      })}
    </section>
  )
}
