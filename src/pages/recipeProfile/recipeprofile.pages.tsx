// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React from 'react'

// Internals 
import './recipeprofile.styles.css';

const Recipeprofile = () => {
  let IMG_URL = 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Stove_Top_Grilled__Smoked_Tandoori_Chicken.jpg'
  return (

    <div className='recipeprofile-page'>
      <div className="recipe-box-container">
        <div className="recipe-container">
          <div className="recipe-left-content">
            <img className='recipe-profile-img' src={IMG_URL} alt="" />
          </div>
          <div className="recipe-right-content">
            <h1>Saffron-Spiced Chicken Tikka Masala</h1>
            <div className="recipe-detailed-contents">
              <p>Tender chicken tikka in a rich saffron-infused tomato curry, served with basmati rice.</p>
              <div className="nutritions">
                <h2 className='nutri-header'>Nutritions</h2>
                <div className="nutri-section-1">
                  <div className="nutri-info">
                    <h1>350</h1>
                    <p>Calories</p>
                  </div>
                  <div className="nutri-info right">
                    <h1>35</h1>
                    <p>Protein</p>
                  </div>
                </div>
                <div className="nutri-section-2">
                <div className="nutri-info">
                    <h1>350</h1>
                    <p>Carbohydrates</p>
                  </div>
                  <div className="nutri-info right">
                    <h1>35</h1>
                    <p>Fat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ingredients">
        <h1>Ingredients</h1>
        <div className="ingredients-items">
          <p className='ing-tag'>Escargot</p>
          <p className='ing-tag'>Escargot</p>
          <p className='ing-tag'>Escargot</p>
        </div>
      </div>

      <div className="rectange-shaper">

      </div>
    </div>
  )
}

export default Recipeprofile