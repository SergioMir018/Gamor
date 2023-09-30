import React, { useState } from 'react'
import '../../styles/NavBar.css'
import { Link } from 'react-router-dom'
import Sun from '../../assets/images/Sun'
import Moon from '../../assets/images/Moon'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='hub-sections'>
        <ul className='hub-sections-links'>
          <li>
            <Link to='/Gamor/'>Home</Link>
          </li>
          <li>
            <Link to='/Gamor/'>Streams</Link>
          </li>
          <li>
            <Link to='/Gamor/'>Party</Link>
          </li>
          <li>
            <Link to='/Gamor/'>Premium</Link>
          </li>
        </ul>        
      </div>
      <h1 className='hub-name'>Gamor</h1>
      <div className='profile-section'>
        <ul className='profile-section-links'>
          <li>
            <Link id='sing-in' to='/Gamor/login'>Sing In</Link>
          </li>
          <li>
            <Link id='create-account' to='/Gamor/login'>Create Account</Link>
          </li>
          <div className='theme'>
            <Sun />
            {/*theme === 'light' ? <Moon /> : <Sun />*/}
          </div>
        </ul>
      </div>
    </nav>
  )
}
