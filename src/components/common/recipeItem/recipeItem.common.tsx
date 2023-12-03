import React, { useState } from 'react'
import { useInView  } from 'react-intersection-observer';
// Internals
import './recipeItem.styles.css';

const RecipeItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref: recipeItemRef , inView: recipeItemView } = useInView({ threshold: 0, })
  
  return (
    <div
      className={`recipe-card ${recipeItemView ? "trans-from-top": ""} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="recipe-image-container" ref={recipeItemRef}>
        <img
          className="recipe-img"
          src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Stove_Top_Grilled__Smoked_Tandoori_Chicken.jpg"
          alt=""
        />
      </div>
      <div className="recipe-details">
        <h2 className="recipe-title">Chicken Parmesan</h2>
        <p className="recipe-description">
          This is a classic Italian dish that combines breaded and fried chicken with melt
        </p>
        {isHovered ? (
          <button className="order-now-button">Order Now</button>
        ) : (
          <div className="recipe-order-detials">
            <p className="recipe-cal">
              <span className="bold">Calories</span>
              <br /> 260
            </p>
            <p className="recipe-price">
              <span className="bold">Price</span>
              <br /> $14.99
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeItem