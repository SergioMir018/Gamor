import React from 'react'
import '../../styles/NavBar.css'
import { redirectToCreateAccount } from '../../utils/redirectPath.js'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='hub-sections'>
        <ul className='hub-sections-links'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Streams</a></li>
          <li><a href='/'>Party</a></li>
          <li><a href='/'>Premium</a></li>
        </ul>        
      </div>
      <h1 className='hub-name'>Gamor</h1>
      <div className='profile-section'>
        <ul className='profile-section-links'>
          <li id='sing-in'><a href='/#/login'>Sing In</a></li>
          <li id='create-account' onClick={() => redirectToCreateAccount('/#/login')}><a href='/#/login'>Create Account</a></li>
        </ul>
      </div>
    </nav>
  )
}
