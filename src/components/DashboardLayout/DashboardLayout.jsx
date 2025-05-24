import React from 'react'
import style from './DashboardLayout.module.css'
import Header from '../Header/Header'
import DashboardBody from '../DashboardBody/DashboardBody'

const DashboardLayout = () => {
  return (
    <div className={style.dashboardLayout}>
        <Header></Header>
        <DashboardBody/>
     
    </div>
  )
}

export default DashboardLayout
