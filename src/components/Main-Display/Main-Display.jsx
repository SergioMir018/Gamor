import {useState, useEffect} from 'react'
import { redirectToCreateAccount } from '../../utils/redirectPath.js'

import ForniteDarkmode from '../../assets/images/Fortnite-Darkmode.webp'
import ForniteLightMode from '../../assets/images/FortniteLightMode.webp'
import Stroke from '../../assets/images/Stroke.jsx'
import AddUser from '../../assets/images/UserPlus.jsx'
import UserCard from '../User-Card/User-Card';


import users from '../../data/users.json'
import '../../styles/Main-Display.css'
import { Link } from 'react-router-dom'


export default function MainDisplay({ theme }) {

  const colorStroke = theme ? '#7e34f0' : '#fe8944'
  const opacityStroke = theme ? '0.35' : '0.6'
  const fornitePath = theme ? ForniteDarkmode : ForniteLightMode

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
  }

  const searchUsers = () => {
        let filteredData= []
        if(users.length > 0){
          filteredData = users.filter(user => {
            if (
              user.category.toLowerCase() === searchTerm.toLowerCase() || 
              user.name.toLowerCase() === searchTerm.toLowerCase()
            ) {
              return true
          }
        })
      }
      setFilteredUsers(filteredData)
    }

  useEffect(() => {
    if(searchTerm !== ''){ 
      searchUsers(searchTerm)
    }
    
  },[searchTerm])

  const getPlatformClassName = (index) => {
    if (selected === index) {
      return `selected ${theme ? 'dark' : 'light'}`;
    }
    return '';
  };
  
  const platforms = ['Party', 'Matches', 'Streams']

  return (
    <div className='main-display' id={!theme ? 'display-light' : ''}>
      <div className='streaming-sing-in'>
        <div className='background'>
          <div id='stroke1'>
            <Stroke color={colorStroke} opacity={opacityStroke}/>
          </div>
          <div id='stroke2'>
            <Stroke color={colorStroke} opacity={opacityStroke}/>
          </div>
          <div id='stroke3'>
            <Stroke color={colorStroke} opacity={opacityStroke}/>
          </div>
        </div>
        <h1 className={!theme ? 'theme-dark-text ' : ''} id='slogan-top'>start</h1>
        <h1 className={`slogan-purple ${!theme ? 'slogan-light' : ''}`}>streaming</h1>
        <h1 className={`slogan ${!theme ? 'theme-dark-text ' : ''}`}>games</h1>
        <h1 className={`slogan ${!theme ? 'theme-dark-text ' : ''}`}>differently</h1>
        <p>gamor now has <strong className={`feature-highlight ${!theme ? 'theme-dark-text ' : ''}`}>stream party</strong> platform</p>
        <div className='links-sing-in'></div>
        <ul className='account-links'>
          <li>
            <Link className={`create-link ${!theme ? 'create-link-light' : ''}`} to="/Gamor/login">Create account</Link>
          </li> 
          <li>
            <Link className={!theme ? 'theme-dark-text ' : ''} to='/Gamor/login'>Sing in</Link>
          </li>
        </ul>
      </div>
      <div className={`game-display  ${!theme ? 'game-display-light' : ''}`}>
        <h1 className='announcement'>Fortnite New Season</h1>
        <h2 className={`sub-announcement  ${!theme ? 'sub-announcement-light' : ''}`}>Join life stream</h2>
        <div className='add-wait-list'>
          <AddUser color={'white'} />
        </div>
        <div className={`stream-time ${!theme ? 'stream-time-light' : ''}`}>11 : 45</div>
        <div className='fortnite'>
          <img src={fornitePath} width="370" height="370" alt="" />
        </div>
      </div>
      <div className='search-section'>
        <h1 className={!theme ? 'title-light' : ''}><span className='section-number'>01.</span> Chose Platform</h1>
        <div className={`platforms ${!theme ? 'platforms-light' : ''}`}>
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={getPlatformClassName(index)}
              id={!theme ? 'name-light' : ''}
              onClick={() => handleSelect(index)}
            >
              {platform}
            </div>
          ))}
        </div>
        <h1 className={!theme ? 'title-light' : ''}><span className='section-number'>02.</span> Searching Game</h1>
        <form className={`search-input-section  ${!theme ? 'search-input-section-light' : ''}`} onSubmit={handleSearch}>
          <input 
            type="text" 
            className={`search-input  ${!theme ? 'search-input-light' : ''}`} 
            value={searchTerm}
            placeholder='search term...'
            onChange={handleSearchChange} />
          <button className={`additional-filters ${theme ? 'additional-filters-dark' : ''}`}></button>
          <button type='submit' className={`search-button  ${!theme ? 'search-button-light' : ''}`}>
            Search Now
          </button>
        </form>
        <section className={`search-results  ${!theme ? 'search-results-light' : ''}`}>
          <div className='results'>
            {isSearched && (
              filteredUsers.map((user, index) => (
                user && <UserCard key={index} name={user.name} avatar={user.avatar} number={index + 1} theme={theme} />
              ))
            )
            }
          </div>
          
        </section>
      </div>
    </div>
  )
}
