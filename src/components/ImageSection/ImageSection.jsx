import React from 'react'
import style from './ImageSection.module.css'
import DashboardTitle from '../DashboardTitle/DashboardTitle'
import ImageBody from '../ImageBody/ImageBody'
import Activity from '../Activity/Activity'
const ImageSection = () => {
  return (
    <div className={style.imagesection}>
        <DashboardTitle/>
        <ImageBody/>
        <Activity/>
      
    </div>
  )
}

export default ImageSection
