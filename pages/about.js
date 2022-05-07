import { AiOutlineFire, AiOutlineFolderOpen } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import AboutCard from '../components/AboutCard'
import Qualification from '../components/Qualification'
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <section className={styles.section}>
      <article>
        <h2>About</h2>
        <p className={styles.paragraph}>
          Web developer, with extensive knowledge and years of experience,
          working in web technologies and UI/UX design, delivering quality work.
        </p>

        <div className={styles.cards}>
          <AboutCard
            icon={<AiOutlineFire />}
            title='Years experience'
            number='6'
          />

          <AboutCard
            icon={<AiOutlineFolderOpen />}
            title='Completed projects'
            number='20'
          />
          <AboutCard
            icon={<BsHouseDoor />}
            title='Companies worked'
            number='4'
          />
        </div>
      </article>

      <article>
        <Qualification />
      </article>
    </section>
  )
}
