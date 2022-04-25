import { useState } from 'react'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import Education from '../Education'
import QualificationButton from '../QualificationButton'

const Qualification = () => {
  const [qualification, setQualification] = useState('Education')
  return (
    <>
      <h3>Qualification</h3>
      <span>My personal journey</span>
      <QualificationButton icon={FaGraduationCap} title='Education' />
      <QualificationButton icon={FaBriefcase} title='Work' />

      {qualification === 'Education' ? <Education /> : null}
    </>
  )
}

export default Qualification
