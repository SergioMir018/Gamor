import React from 'react';
import Arrow from '../../assets/images/Arrow.jsx'

import '../../styles/Category.css';

export default function Category({ indx, name, isLastCategory, theme }) {
  const num = indx + 1;
  const classForSlash = `slash-color-${indx % 3}`;
  const shouldDisplaySlash = !isLastCategory;

  const arrowColor = theme ? 'white' : 'black';

  return (
    <div className={`category ${!theme ? 'category-light' : ''}`}>
      <div className={`category-indx ${!theme ? 'category-indx-light' : ''}`}>
        {
          isLastCategory ? <span className={!theme ? 'theme-dark-text' : ''}>VIEW ALL</span> : 
          shouldDisplaySlash && <span className={`slash ${classForSlash}`}> 0{num}</span>
        }
      </div>
      <h2 className={`category-name ${!theme ? 'theme-dark-text' : ''}`}>{name}</h2>
      <div className='arrow'>
        <Arrow color={arrowColor} />
      </div>
    </div>
  );
}
