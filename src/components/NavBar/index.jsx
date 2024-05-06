import React from 'react'
import "./index.css"

export default function NavBar() {
  return (
    <div>
        <nav className='nav-container'>
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' className='nav-logo' alt='logo'/>
            <div>
            <input type="search" className="searchInput"  placeholder='Search'/>
            <button className='searchButton'>Search</button>
            </div>
            <div className='nav-sub-container'>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png " alt="Profile" className='nav-profile' />
                <button className='logout-button'>Logout</button>
            </div>
        </nav>
    </div>
  )
}
