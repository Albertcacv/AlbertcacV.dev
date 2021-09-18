import * as React from 'react'

import { useState } from 'react'

import UilGraduationCap from '@iconscout/react-unicons/icons/uil-graduation-hat'
import UilBriefcase from '@iconscout/react-unicons/icons/uil-briefcase-alt'
import Education from './Education'
import Work from './Work'

export default function Qualification() {
  const [showEducation, setEducation] = useState(true)

  const handleClickEducation = () => {
    setEducation(() => true)
  }
  const handleClickWork = () => {
    setEducation(() => false)
  }
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Experience</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <button
            className='qualification__button button--flex'
            onClick={handleClickEducation}
          >
            <UilGraduationCap className='qualification__icon' />
            Education
          </button>

          <button
            className='qualification__button button--flex'
            onClick={handleClickWork}
          >
            <UilBriefcase className='qualification__icon' />
            Work
          </button>
        </div>

        <div className='qualification__sections'>
          {showEducation ? <Education /> : <Work />}
        </div>
      </div>
    </section>
  )
}
