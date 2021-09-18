import * as React from 'react'

import UilCalendar from '@iconscout/react-unicons/icons/uil-calendar-alt'

export default function Education() {
  return (
    <div
      className='qualification__content qualification__active'
      data-content
      id='education'
    >
      {/* <!--================== QUALIFICATION 1 ===========================--> */}
      <div className='qualification__data'>
        <div>
          <h3 className='qualification__title'>Computer Engineer</h3>
          <span className='qualification__subtitle'>León - University</span>
          <div className='qualification__calendar'>
            <UilCalendar />
            <span>2018 - Present</span>
          </div>
        </div>
        <div>
          <span className='qualification__line'></span>
          <span className='qualification__rounder'></span>
        </div>
      </div>
    </div>
  )
}
