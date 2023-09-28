import React from 'react'
import '../../styles/Main-Hub.css'
import NavBar from '../NavBar/NavBar';
import MainDisplay from '../Main-Display/Main-Display';

export default function MainHub() {
  return (
    <main className='main-hub'>
      <NavBar />
      <MainDisplay />
    </main>
  )
}
