import React from 'react'
import '../../styles/NavBar.css'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='hub-sections'>
        <ul className='hub-sections-links'>
          <li><a>Home</a></li>
          <li><a>Streams</a></li>
          <li><a>Party</a></li>
          <li><a>Premium</a></li>
        </ul>        
      </div>
      <h1 className='hub-name'>Gamor</h1>
      <div className='profile-section'>
        <ul className='profile-section-links'>
          <li id='sing-in'><a>Sing In</a></li>
          <li id='create-account'><a>Create Account</a></li>
        </ul>
      </div>
    </nav>
  )
}
