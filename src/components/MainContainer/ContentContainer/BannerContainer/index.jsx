import React from 'react'
import './index.css'         

function BannerComponent () {
    return(
        <div className='banner-background'>
            <div>
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' className='banner-logo' alt='logo'/>
            <h1 className='banner-heading'>Buy Nxt Watch Premium prepaid plans with UPI</h1>
            <button className='banner-button'>GET IT NOW</button>
            </div>
            
        </div>
    );

}

export default BannerComponent