import React from 'react'
import OptionsContainer from './OptionsContainer'
import ContentContainer from './ContentContainer'
import "./index.css"

export default function MainContainer() {
  return (
    <div className='main-container'> 
        <OptionsContainer className="left-component "/>
        <ContentContainer className="right-component" />
    </div>
  )
}
