import React, { useState } from 'react'

// Internals
import './menu.styles.css';
import { RIGHTARW_ICON, SEARCHICON } from '../../assets';
import RecipeItem from '../../components/common/recipeItem/recipeItem.common';

const Menu = () => {
  const [selectedTags, setSelectedTags] = useState(new Map());

  const handleTagClick = (tag: string) => {
    const newSelectedTags = new Map(selectedTags);
    if (newSelectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.set(tag, true);
    }
    setSelectedTags(newSelectedTags);
  };

  const handleSelectedTagClick = (tag: string) => {
    const newSelectedTags = new Map(selectedTags);
    newSelectedTags.delete(tag);
    setSelectedTags(newSelectedTags);
  };

  return (
    <div className='menu-page'>
      <div className="menu-search-section">
        <div className="search-bar-container">
          <img className='search-icon icon' src={SEARCHICON} alt="" />
          <input
            type="text"
            className='search-input-field'
            placeholder='Looking for Something Delicious.'
            name="" id="" />
          <img className='search-it-icon icon' src={RIGHTARW_ICON} alt="" />
        </div>
      </div>

      <div className="selected-recipe-container">
        <div className="selected-recipe-tags">
          {Array.from(selectedTags.keys()).map((tag) => (
            <p 
              key={tag} 
              className='selected-recipe-tag'
              onClick={() => handleSelectedTagClick(tag)}
              >{tag}</p>
          ))}
        </div>
      </div>

      <div className="recipe-tags">
        <div className="recipe-tag-container">
          {['Italian', 'Chinese', 'Korean', 'Indian', 'Americana', 'Indiana'].map((tag) => (
            <p
              key={tag}
              className={`recipe-tag ${selectedTags.has(tag) ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>


      <div className="listed-food-items">
        <div className="listed-menu-grid-view">
          <RecipeItem />
          <RecipeItem />
          <RecipeItem />

          <RecipeItem />
          <RecipeItem />
          <RecipeItem />

          <RecipeItem />
          <RecipeItem />
          <RecipeItem />
        </div>
      </div>

    </div>
  )
}

export default Menu;