import * as React from 'react'

export default function SkillItem({ title }) {
  return (
    <div className='skills__data'>
      <div className='skills__titles'>
        <h3 className='skills__name'>{title}</h3>
      </div>
    </div>
  )
}
