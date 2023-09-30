import React from 'react'

import UserPic from '../User-Pic/User-Pic'

import '../../styles/User-Card.css'

export default function UserCard({ name, avatar, number }) {
  return (
    <div className='user-card'>
      <div className='number'>{number}</div>
      <p className='user-name'>{name}</p>
      <div className='users-pics'>
        <UserPic avatar={avatar} />
      </div>
      <button className='add-button'> + </button>
    </div>
  );
}
