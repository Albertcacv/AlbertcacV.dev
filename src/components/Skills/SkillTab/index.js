import * as React from 'react'
import { useState } from 'react'
import SkillItem from '../SkillItem'

import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down'
import UilAngleUp from '@iconscout/react-unicons/icons/uil-angle-up'

export default function SkillTab({ type, tools }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='skills__content skills__close'>
      <header className='skills__header' onClick={() => setIsActive(!isActive)}>
        <i className='uil uil-brackets-curly skills__icon'></i>

        <div>
          <h2 className='skills__title'>{type}</h2>
        </div>
        {!isActive ? (
          <UilAngleDown className='skills__arrow' />
        ) : (
          <UilAngleUp className='skills__arrow' />
        )}
      </header>
      {isActive && (
        <div className='grid skills__list'>
          {tools.map((tool) => (
            <SkillItem key={tool} title={tool} />
          ))}
        </div>
      )}
    </div>
  )
}
