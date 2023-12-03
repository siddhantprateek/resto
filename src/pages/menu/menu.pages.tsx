import React, { useState, useEffect } from 'react'

// Internals
import './menu.styles.css';
import { RIGHTARW_ICON, SEARCHICON } from '../../assets';
import RecipeItem from '../../components/common/recipeItem/recipeItem.common';
import { createMockServer } from '../../mirage/createMockServer';
import { MenuItem } from '../../mirage/types';


createMockServer()

let FOOD_TAGS = ['Summer', 'Fall', 'Year-Round', 'Global Fusion Entrees', 'Epicurean Indulgences', 'Seasonal', 'Mango Tango Ceviche']

const Menu = () => {
  const [selectedTags, setSelectedTags] = useState(new Map());
  const [items, setItems] = useState<MenuItem[]>()
  const [ search, setSearch ] = useState<string>("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  let SearchItems = items?.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.seasonal_availability[0].toLowerCase().includes(search.toLowerCase()) ||
    item.ingredients.includes(search.toLowerCase()) ||
    item.seasonal_availability[0].includes(Array.from(selectedTags.keys())[0])
    // item.seasonal_availability[0].toLowerCase().includes(selectedTags.)
  )
  

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

  useEffect(() => {
    fetch("https://restaurant.service/api/food/menu")
    .then((res) => res.json())
    .then((json) => setItems(json.items))
  }, [])

  useEffect(() => {
    fetch(`https://restaurant.service/api/menu?season=Fall`)
    .then((res) => res.json())
    .then((json) => console.log("New Items", json.items))
  }, [])

  return (
    <div className='menu-page'>
      <div className="menu-search-section">
        <div className="search-bar-container">
          <img className='search-icon icon' src={SEARCHICON} alt="" />
          <input
            type="text"
            className='search-input-field'
            placeholder='Looking for Something Delicious.'
            onChange={handleSearch}
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
          {FOOD_TAGS.map((tag) => (
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
          {
            SearchItems?.map((item: MenuItem) => (
              <RecipeItem 
                key={item.name}
                name={item.name} 
                description={item.description}
                ingredients={item.ingredients}
                nutritional_info={item.nutritional_info}
                price={item.price}
                seasonal_availability={item.seasonal_availability}  
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Menu;