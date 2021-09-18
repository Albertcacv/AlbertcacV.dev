import * as React from 'react'
import SkillTab from './SkillTab'

export default function Skills() {
  const frontend = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'VueJS',
    'GatsbyJS',
    'SASS',
    'Tailwind',
  ]
  const backend = ['NodeJS', 'NestJS', 'MongoDB', 'MySQL', 'FireBase']
  const others = ['Python', 'TypeScript', 'Java', 'Go']
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>Technological stack</span>

      <div className='skills__container container grid'>
        <SkillTab type='Frontend Development' tools={frontend} />
        <SkillTab type='Backend Development' tools={backend} />
        <SkillTab type='Other technologies' tools={others} />
      </div>
    </section>
  )
}
