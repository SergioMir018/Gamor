import React from 'react'

import users from '../../data/users.json'
import UserPic from '../User-Pic/User-Pic'

import '../../styles/User-Card.css'

export default function UserCard() {
  const mockNumber = 1;

  const avatar = users.length > 0 ? users[0].avatar : ''
  const mockName = users.length > 0 ? users[0].name : ''
  console.log(avatar)

  return (
    <div className='user-card'>
      <div className='number'>{mockNumber}</div>
      <p className='user-name'>{mockName}</p>
      <div className='users-pics'>
        <UserPic avatar={avatar} />
      </div>
      <button className='add-button'> + </button>
    </div>
  );
}
