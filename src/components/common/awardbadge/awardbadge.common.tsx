import React from 'react'

// Internals
import './awardbadge.styles.css';

const AwardBadge = () => {
  return (
    <div className='award-badge'>
      <div className="blue-container">
        <h3>World's 50 Best Restaurants</h3>
      </div>
      <div className="red-container">
       <p>Top 5 Restaurants Worldwide</p>
      </div>
      <div className="award-year">
        <h3>2021</h3>
      </div>
    </div>
  )
}

export default AwardBadge;