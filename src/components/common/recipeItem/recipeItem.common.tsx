import React, { useState } from 'react'
import { useInView  } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

// Internals
import './recipeItem.styles.css';
import { MenuItem } from '../../../mirage/types';

const URLS = [
  'https://loremflickr.com/640/480/food?lock=7855588044177408',
  'https://loremflickr.com/cache/resized/3092_2789914960_624f21f685_z_640_480_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_53045562761_ef0ba9722b_c_640_480_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_52976093903_3e1222f513_z_640_480_nofilter.jpg',
  'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Stove_Top_Grilled__Smoked_Tandoori_Chicken.jpg',
  'https://loremflickr.com/cache/resized/65535_52790943163_804ac4b806_b_640_480_nofilter.jpg'
]

const RecipeItem = (props: MenuItem) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref: recipeItemRef , inView: recipeItemView } = useInView({ threshold: 0, })
  
  const navigate = useNavigate()

  const ToRecipeDetail = () => {
    return navigate("/recipes")
  }

  return (
    <div
      className={`recipe-card ${recipeItemView ? "trans-from-top": ""} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="recipe-image-container" ref={recipeItemRef} 
        onClick={ToRecipeDetail}
      >
        <img
          className="recipe-img"
          src={URLS[Math.floor(props.price / 10)]}
          alt=""
        />
      </div>
      <div className="recipe-details">
        <h2 className="recipe-title" onClick={ToRecipeDetail}>{props.name}</h2>
        <p className="recipe-description" onClick={ToRecipeDetail}>
          {props.description}
        </p>
        {isHovered ? (
          <button className="order-now-button">Order Now</button>
        ) : (
          <div className="recipe-order-detials">
            <p className="recipe-cal">
              <span className="bold">Calories</span>
              <br /> {props.nutritional_info.calories}
            </p>
            <p className="recipe-price">
              <span className="bold">Price</span>
              <br /> ${props.price}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeItem