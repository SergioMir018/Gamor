import React from 'react'

import '../../styles/User-Card.css'

export default function UserCard() {

  const mockNumber = 1
  const mockName = 'Pepe el Cojo'

  return (
    <div className='user-card'>
      <div className='number'>{mockNumber}</div>
      <p className='user-name'>{mockName}</p>
      <div className='users-pics'>pics</div>
      <button className='add-button'> + </button>
    </div>
  )
}
