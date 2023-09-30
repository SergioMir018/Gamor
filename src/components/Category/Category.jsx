import React from 'react';
import Arrow from '../../assets/images/Arrow.jsx'

import '../../styles/Category.css';

export default function Category({ indx, name, isLastCategory }) {
  const num = indx + 1;
  const classForSlash = `slash-color-${indx % 3}`;
  const shouldDisplaySlash = !isLastCategory;

  return (
    <div className='category'>
      <div className={`category-indx`}>
        {
          isLastCategory ? <span>VIEW ALL</span> : 
          shouldDisplaySlash && <span className={`slash ${classForSlash}`}> 0{num}</span>
        }
      </div>
      <h2 className='category-name'>{name}</h2>
      <div className='arrow'>
        <Arrow color={'white'} />
      </div>
    </div>
  );
}
