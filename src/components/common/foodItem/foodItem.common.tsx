import React from 'react';

// Internals
import './foodItem.styles.css';
import { FOOD2, FOOD3 } from '../../../assets';

const IMG_URL = [
  FOOD2,
  FOOD3,
]

const FoodItem = (props: { value: number}) => {
  return (
    <div className='food-item'>
      <img className="food-img rotate-image" src={IMG_URL[props.value]} alt="" />
      <div className="food-item-content">
        <div className="item-title-content">
          <h3>Red Hot BBQ <br/> Fish Permason</h3>
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