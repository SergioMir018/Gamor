import React from 'react'

import NavBar from '../NavBar/NavBar';
import MainDisplay from '../Main-Display/Main-Display';
import CategoriesSection from '../Categories-Section/Categories-Section';

import '../../styles/Main-Hub.css'

export default function MainHub() {
  return (
    <main className='main-hub'>
      <NavBar />
      <MainDisplay />
      <CategoriesSection />
    </main>
  )
}
