import React from 'react'

import Category from '../Category/Category';

import { CATEGORIES } from '../../data/constants'
import '../../styles/CategoriesSection.css'

export default function CategoriesSection({ theme }) {
  return (
    <section className='categories-section'>
      <h1 className={`categories-headline  ${!theme ? 'theme-dark-text' : ''}`}>Trending Categories</h1>
      <div className='categories-container'>
        {
          CATEGORIES.map((category, indx) => {
            const isLastCategory = indx === CATEGORIES.length - 1
            return <Category key={indx} indx={indx} name={category} isLastCategory={isLastCategory} theme={theme}/>
          })
        }
      </div>
    </section>
  )
}

