import { useState } from 'react'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import Education from '../Education'
import QualificationButton from '../QualificationButton'
import Work from '../Work'
import styles from './qualification.module.css'
const Qualification = () => {
  const [qualification, setQualification] = useState('Education')

  console.log(qualification)

  return (
    <div className={styles.qualification}>
      <header className={styles.header}>
        <h3 className={styles.title}>Qualification</h3>
        <span className={styles.subtitle}>My personal journey</span>
      </header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <QualificationButton
            icon={<FaGraduationCap />}
            title='Education'
            actionState={setQualification}
          />
          <QualificationButton
            icon={<FaBriefcase />}
            title='Work'
            actionState={setQualification}
          />
        </ul>
      </nav>
      <section className={styles.section}>
        {qualification === 'Education' ? <Education /> : <Work />}
      </section>
    </div>
  )
}

export default Qualification
