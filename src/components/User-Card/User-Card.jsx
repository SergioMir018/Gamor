import React from 'react'

import UserPic from '../User-Pic/User-Pic'

import '../../styles/User-Card.css'

export default function UserCard({ name, avatar, number,theme }) {
  return (
    <div className='user-card'>
      <div className={`number ${!theme ? 'number-light' : ''}`}>{number}</div>
      <p className={`user-name ${!theme ? 'theme-dark-text ' : ''}`}>{name}</p>
      <div className='users-pics'>
        <UserPic avatar={avatar} />
      </div>
      <button className={`add-button ${!theme ? 'add-button-light' : ''}`}> + </button>
    </div>
  );
}
