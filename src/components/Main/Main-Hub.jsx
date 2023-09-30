import React from 'react'

import NavBar from '../NavBar/NavBar';
import MainDisplay from '../Main-Display/Main-Display';
import CategoriesSection from '../Categories-Section/Categories-Section';

import '../../styles/Main-Hub.css'

export default function MainHub({ theme, setTheme }) {
  return (
    <main className='main-hub'>
      <NavBar theme={theme} setTheme={setTheme}/>
      <MainDisplay theme={theme}/>
      <CategoriesSection theme={theme}/>
    </main>
  )
}
