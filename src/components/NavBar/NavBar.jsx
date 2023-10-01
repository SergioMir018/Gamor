import { useState } from 'react'
import '../../styles/NavBar.css'
import { Link } from 'react-router-dom'

import Sun from '../../assets/images/Sun.jsx'
import Moon from '../../assets/images/Moon.jsx'

export default function NavBar({ theme, setTheme }) {

  const [activeLink, setActiveLink] = useState('')

  const activeLinkTheme = () => {
    return theme ? 'active-link' : 'active-link-light'
  }

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <nav className='navbar'>
      <div className='hub-sections'>
        <ul className='hub-sections-links'>
          <li>
            <Link 
            to='/Gamor/'
            onClick={() => handleLinkClick('home')}
            className={activeLink === 'home' ? activeLinkTheme() : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
            to='/Gamor/'
            onClick={() => handleLinkClick('streams')}
            className={activeLink === 'streams' ? activeLinkTheme() : ''}
            >
              Streams
            </Link>
          </li>
          <li>
            <Link 
            to='/Gamor/'
            onClick={() => handleLinkClick('party')}
            className={activeLink === 'party' ? activeLinkTheme() : ''}
            >
              Party
            </Link>
          </li>
          <li>
            <Link 
            to='/Gamor/'
            onClick={() => handleLinkClick('premium')}
            className={activeLink === 'premium' ? activeLinkTheme() : ''}
            >
              Premium
            </Link>
          </li>
        </ul>        
      </div>
      <h1 className={`hub-name ${!theme ? 'theme-dark-text' : ''}`}>Gamor</h1>
      <div className='profile-section'>
        <ul className='profile-section-links'>
          <li>
            <Link id='sing-in' className={`item-1 ${!theme ? 'theme-dark-text' : ''}`} to='/Gamor/login'>Sing In</Link>
          </li>
          <li className='item-3'>
            <Link  id='create-account' to='/Gamor/login'>Create Account</Link>
          </li>
          <div className='theme item-2'>
            {theme ? <Sun setTheme={setTheme} theme={theme}/> : <Moon setTheme={setTheme} theme={theme}/>}
          </div>
        </ul>
      </div>
    </nav>
  )
}
