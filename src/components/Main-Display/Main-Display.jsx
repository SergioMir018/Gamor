import React from 'react'
import { redirectToCreateAccount } from '../../utils/redirectPath.js'

import ForniteDarkmode from '../../assets/images/Fortnite-Darkmode.webp'
import Stroke from '../../assets/images/Stroke.jsx'
import AddUser from '../../assets/images/UserPlus.jsx'
import UserCard from '../User-Card/User-Card';

import '../../styles/Main-Display.css'


export default function MainDisplay() {
  return (
    <div className='main-display'>
      <div className='streaming-sing-in'>
        <div className='background'>
          <div id='stroke1'>
            <Stroke color={'#7e34f0'}/>
          </div>
          <div id='stroke2'>
            <Stroke color={'#7e34f0'}/>
          </div>
          <div id='stroke3'>
            <Stroke color={'#7e34f0'}/>
          </div>
        </div>
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
      <div className='game-display'>
        <h1 className='announcement'>Fortnite New Season</h1>
        <h2 className='sub-announcement'>Join life stream</h2>
        <div className='add-wait-list'>
          <AddUser color={'white'} />
        </div>
        <div className='stream-time'>11 : 45</div>
        <div className='fortnite'>
          <img src={ForniteDarkmode} width="370" height="370" alt="" />
        </div>
      </div>
      <div className='search-section'>
        <h1><span className='section-number'>01.</span> Chose Platform</h1>
        <div className='platforms'>
          <div>Party</div>
          <div>Matches</div>
          <div>Streams</div>
        </div>
        <h1><span className='section-number'>02.</span> Searching Game</h1>
        <form className='search-input-section'>
          <input type="text" id='search-input' />
          <button type="submit" id='additional-filters'></button>
        </form>
        <section className='search-results'>
          <div className='results'>
            <UserCard />
          </div>
          <button className='search-button'>Search Now</button>
        </section>
      </div>
    </div>
  )
}
