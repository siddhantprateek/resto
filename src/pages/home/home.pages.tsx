import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MenuItem } from '../../mirage/types';

// internals
import './home.styles.css';
import { Hero, Reservations } from '../../components';
import { AwardBadge, FoodItem, Testimony } from '../../components/common';
import { ARROW, CONCERT, FOOD1, FRYING, UNDERLINE } from '../../assets';
import RecipeItem from '../../components/common/recipeItem/recipeItem.common';


const Home = () => {
  const [items, setItems] = useState<MenuItem[]>()

  const { ref: highLightRef , inView: highLightView } = useInView({ threshold: 0, });
  const { ref: trendRef, inView: trendView } = useInView({ threshold: 0, })
  const { ref: expMenuRef, inView: expMenuView } = useInView({ threshold: 0, })
  const { ref: awardbgRef, inView: awardbgView } = useInView({ threshold: 0, })
  const { ref: chefSpRef, inView: chefSpView } = useInView({ threshold: 0, })
  const { ref: foodTagRef, inView: foodTagView } = useInView({ threshold: 0, })
  const { ref: showEventTagRef, inView: showEventTagView } = useInView({ threshold: 0, })

  useEffect(() => {
    fetch("https://restaurant.service/api/food/menu")
    .then((res) => res.json())
    .then((json) => setItems(json.items))
  }, [])

  return (
    <div className='home-page'>
      {/* Design */}
      <div className="bg-image"><div className="circle"></div></div>

      {/* ------ Hero Section ------ */}

      <div className="hero-section">
        <Hero />
      </div>


      {/* ------ Highlighted Food Items Section  ------ */}
      <div className="highlighted-food-section" ref={highLightRef}>
        <div className={`highlighted-food-items ${ highLightView ? "trans-from-right" : ""}`}>
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
        </div>
      </div>
      <div className="highlighted-bottom-header">
        <div>
          <h1 className={trendView ? 'tracking-in-expand': ""} ref={trendRef}>Trending Today </h1>
          <div className="underline-line">
            <img className='underline' src={UNDERLINE} alt="" />
          </div>
        </div>
        <img className='arrow' src={ARROW} alt="" />
      </div>


      {/* ------ Explore the Menu section ------ */}
    
      <div className="dive-into-menu-section">
        <div className="menu-container" ref={expMenuRef}>
          <div className={`explore-menu-left-content ${ expMenuView ? "trans-from-left": ""}`}>
            <h1>Fresh & tasty Steaks</h1>
            <p>Our fiery dance of flavors features crispy chicken wings coated in a smoky chipotle glaze, served with cooling avocado ranch.</p>
            <a href="/menu">
              <button className='explore-menu-btn'>
                Explore Menu
              </button>
            </a>
          </div>
          <img className='exp-menu-food-img rotate-image' src={FOOD1} alt="" />
        </div>
      </div>

      {/* ------ Our Happy Customers ------ */}

      <div className="customer-testinomials">
        <div className="testinomial-header">
          <h1>What people are saying about us.</h1>
        </div>
        <div className="testimonial-container">
          <Testimony />
          <Testimony />
          <Testimony />
        </div>
      </div>

      {/* ------ Awards Section ------ */}

      <div className="awards-section">
        <div className="award-bg" ref={awardbgRef}>
          <h1 className={awardbgView ? "trans-from-left": ""}>AWARDS</h1>
        </div>
        <div className="award-header">
          <h1>Awards 🙌</h1>
        </div>
        <div className="listed-awards">
          <AwardBadge />
          <AwardBadge />
          <AwardBadge />
        </div>
      </div>

      {/* ------ Our Chef Special ------ */}
    
      <div className="chef-recommended">
        <div className="chef-header">
          <div className="recommended-header" ref={chefSpRef}>
            <h1 className={chefSpView ? "trans-from-left": ""}>Our Chefs Special <span className='red-dot'>.</span> </h1>
            <div className="frying-pan-div">
              <img className='frying' src={FRYING} alt="" />
            </div>
          </div>
        </div>
        {/* Tags */}
        <div className="restaurant-cusines">
          <div className={`all-cusines-container ${foodTagView ? "trans-from-right-less": ""}`} ref={foodTagRef}>
            <p className='cusines-tags'>Italian</p>
            <p className='cusines-tags'>Chinese</p>
            <p className='cusines-tags'>Korean</p>
            <p className='cusines-tags'>Indian</p>
          </div>
        </div>
        <div className="listed-recipe-container">
          <div className="listed-recipes">
          {
            items?.slice(0, 3).map((item: MenuItem) => (
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
    

      {/* ------ Events Section ------ */}
    
      <div className="events-section">
        <div className={`explore-events ${ showEventTagView ? "trans-from-left": ""}`}
          style={{
            backgroundImage: `url('${CONCERT}')`
          }}
        >
          <div className={showEventTagView ? "trans-from-right-less": ""} ref={showEventTagRef}>
            <h1>Make your nights <br /> Memorable</h1>
            <p>Book Tickets Now..., Enjoy the nights with top singers <br /> and artists around the country</p>
            <a href="/events">
              <button className="book-ticks-now">
                Book Now!
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ------- Reservation ------ */}
    
      <div className="reservation-section">
        <Reservations />
      </div>
    </div>
  )
}

export default Home