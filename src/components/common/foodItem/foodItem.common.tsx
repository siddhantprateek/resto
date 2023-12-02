import React from 'react';

// Internals
import './foodItem.styles.css';
import { FOOD1 } from '../../../assets';

const FoodItem = () => {
  return (
    <div className='food-item'>
      <img className="food-img" src={FOOD1} alt="" />
      <div className="food-item-content">
        <div className="item-title-content">
          <h3>Red Hot BBQ <br/> Chicken Wing</h3>
          <p>215 Calories</p>
        </div>
        <hr />
        <div className="food-details">
          <div className="left-food-details">
            <p>Time</p>
            <h3>45 min</h3>
          </div>
          <div className="right-food-details">
            <p>Serves</p>
            <h3>2 person</h3>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodItem