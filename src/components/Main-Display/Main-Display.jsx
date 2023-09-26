import React from 'react'
import '../../styles/Main-Display.css'
import { redirectToCreateAccount } from '../../utils/redirectPath.js'

export default function MainDisplay() {
  return (
    <div className='main-display'>
      <div className='streaming-sing-in'>
        <h1 id='slogan-top'>start</h1>
        <h1 id='slogan-purple'>streaming</h1>
        <h1 id='slogan'>games</h1>
        <h1 id='slogan'>differently</h1>
        <p>gamor now has <strong id='feature-highlight'>stream party</strong> platform</p>
        <div className='links-sing-in'></div>
        <ul className='account-links'>
          <li id='create-link' onClick={() => redirectToCreateAccount('#')}><a href="#">Create account</a></li>
          <li><a href="#">Sing in</a></li>
        </ul>
      </div>
      <div className='game-display'>Game thing</div>
      <div className='search-section'>Search thing</div>
    </div>
  )
}
