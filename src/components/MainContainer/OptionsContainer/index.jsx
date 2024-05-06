import React, { useState } from 'react'
import "./index.css"

export default function OptionsContainer() {

  const [homeVar,homefunc]=useState({homeKey : false,trendingKey: false,gammingKey: false,savedVideosKey: false,  });
  const {homeKey,trendingKey,gammingKey,savedVideosKey} = homeVar
  const homefuncBtn= ()=>{homefunc({homeKey : true,trendingKey: false,gammingKey: false,savedVideosKey: false,});}
  const trendinguncBtn= ()=>{homefunc({homeKey : false,trendingKey:true,gammingKey: false,savedVideosKey: false,});}
  const gammingfuncBtn= ()=>{homefunc({homeKey : false,trendingKey: false,gammingKey: true,savedVideosKey: false,});}
  const savedVideosfuncBtn= ()=>{homefunc({homeKey : false,trendingKey: false,gammingKey: false,savedVideosKey: true,});}
  
  return (
    <div className='options-container'>
        <div className='options-heading-container'>

            <button className={homeKey ? 'options-button selected-button' : 'options-button'} onClick={homefuncBtn}>Home</button> 
            <button className={trendingKey ? 'options-button selected-button' : 'options-button'} onClick={trendinguncBtn}>Trending</button>
            <button className={gammingKey ? 'options-button selected-button' : 'options-button'} onClick={gammingfuncBtn}>Gamming</button>
            <button className={savedVideosKey ? 'options-button selected-button' : 'options-button'} onClick={savedVideosfuncBtn}>Saved Videos</button>
        </div>
        <div>
            <h1  className='contactUs-heading'>CONTACT US</h1>
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt="facebook logo" className='contact-logo'/>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png " alt="twitter logo" className='contact-logo' />
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png " alt="linkedin logo" className='contact-logo' />
            </div>
        </div>
    </div>
  )
}
