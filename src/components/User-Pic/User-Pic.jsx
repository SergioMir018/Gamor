import React from 'react';
import '../../styles/User-Pic.css';

import Cosa from '../../assets/avatars/avatar1.webp'


export default function UserPic({avatar}) {
  return (
    
    <div className='pic-container'>
      <img src={avatar} alt="User Avatar" />
    </div>
  );
}