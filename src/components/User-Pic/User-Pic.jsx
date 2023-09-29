import React from 'react';
import '../../styles/User-Pic.css';

import Cosa from '../../assets/avatars/Multiavatar-11th Monster.webp'

export default function UserPic({avatar}) {
  return (
    <div className='pic-container'>
      <img src={avatar} alt="User Avatar" />
    </div>
  );
}