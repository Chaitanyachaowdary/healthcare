import React from 'react'
import style from './CalenderBox.module.css'
import Calender from '../Calender/Calender'
import Appointment from '../Appointment/Appointment'
const CalenderBox = () => {
  return (
    <div className={style.calenderbox}>
      <Calender/>
      <Appointment/>
    </div>
  )
}

export default CalenderBox
