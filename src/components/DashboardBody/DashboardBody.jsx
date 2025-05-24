import React from 'react'
import style from './DashboardBody.module.css'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import ImageSection from '../ImageSection/ImageSection'
import CalenderBox from '../CalenderBox/CalenderBox'
const DashboardBody = () => {
  return (
    <div className={style.dashboardBody}>
      <LeftSideBar/>
      <ImageSection/>
      <CalenderBox/>
    </div>
  )
}

export default DashboardBody
