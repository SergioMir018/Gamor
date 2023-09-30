import {useState, useEffect} from 'react'
import { redirectToCreateAccount } from '../../utils/redirectPath.js'

import ForniteDarkmode from '../../assets/images/Fortnite-Darkmode.webp'
import Stroke from '../../assets/images/Stroke.jsx'
import AddUser from '../../assets/images/UserPlus.jsx'
import UserCard from '../User-Card/User-Card';


import users from '../../data/users.json'
import '../../styles/Main-Display.css'


export default function MainDisplay() {

  const [selected, setSelectedPlatform] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearched, setIsSearched] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])

  const handleSelect = (index) => {
    setSelectedPlatform(index)
  }


  const handleSearchChange = (event) => {
    setIsSearched(false)
    setSearchTerm(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setIsSearched(true)
    searchUsers(event.target.value)
    console.log(filteredUsers)
  }

  const searchUsers = () => {
        let filteredData= []
        if(users.length > 0){
          filteredData = users.filter(user => {
            if (
              user.category.toLowerCase() === searchTerm.toLowerCase() || 
              user.name.toLowerCase() === searchTerm.toLowerCase()
            ) {
              return true;
          }
        })
      }
      setFilteredUsers(filteredData);
    }

  useEffect(() => {
    if(searchTerm !== ''){ 
      searchUsers(searchTerm);
    }
    
  },[searchTerm]);
  
  const platforms = ['Party', 'Matches', 'Streams']

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
          <li id='create-link' onClick={() => redirectToCreateAccount('/Gamor/login')}><a href='/Gamor/login'>Create account</a></li>
          <li><a href='/Gamor/login'>Sing in</a></li>
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
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={selected === index ? 'selected' : ''}
              onClick={() => handleSelect(index)}
            >
              {platform}
            </div>
          ))}
        </div>
        <h1><span className='section-number'>02.</span> Searching Game</h1>
        <form className='search-input-section' onSubmit={handleSearch}>
          <input 
            type="text" 
            id='search-input' 
            value={searchTerm}
            onChange={handleSearchChange} />
          <button id='additional-filters'></button>
          <button type='submit' className='search-button'>Search Now</button>
        </form>
        <section className='search-results'>
          <div className='results'>
            {isSearched && (
              filteredUsers.map((user, index) => (
                user && <UserCard key={index} name={user.name} avatar={user.avatar} number={index + 1} />
              ))
            )
            }
          </div>
          
        </section>
      </div>
    </div>
  )
}
