import React from 'react'
import './index.css'
import BannerComponent from './BannerContainer'
import VideoBoxContainer from './VideoBoxContainer'


export default function ContentContainer() {
  return (
    <div className='content-container'> 
      <BannerComponent/>
      <VideoBoxContainer />
    </div>
  )
}
