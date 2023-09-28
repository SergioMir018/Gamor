import React from 'react'

import '../../styles/User-Card.css'
import UserPic from '../User-Pic/User-Pic';

export default function UserCard() {

  const mockNumber = 1
  const mockName = 'Pepe el Cojo'

  return (
    <div className='user-card'>
      <div className='number'>{mockNumber}</div>
      <p className='user-name'>{mockName}</p>
      <div className='users-pics'>
        <UserPic />
      </div>
      <button className='add-button'> + </button>
    </div>
  )
}
