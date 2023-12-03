import React from 'react'
import RestaurantData from '../../data/restaurantData.json';
// Internals
import './about.styles.css';
import { CHEF, MOCK1, MOCK2, MOCK3, MOCK4, MOCK5, RES_MOCK1 } from '../../assets';
import { Reservations } from '../../components';

const About = () => {


  return (
    <div className='about-page'>
      <div className="chef-dp">
        <div className="chef-v1-header">
          <h1>Our Chef</h1>
        </div>
        <div className="chef-detials-container">
          <div className="chef-details">
            <div className="chef-custom-img">
              <div className='yellow-bar trans-from-left'></div>
              <img className='chef-img trans-from-buttom' src={CHEF} alt="" />
              <div className="blue-bar trans-from-right-less"></div>
            </div>
            <div className="chef-bio-details">
              <h2>Chef Isabella Culinary Maestro</h2>
              <p>An internationally renowned chef with a flair for creating culinary masterpieces that transcend borders.</p>
              <div className="signature">
                <p className='signature-dish'>Mango Tango Fusion</p>
                <p className='bold'>Signature Dish</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="about-page-header">
        <h1>About Us <span className='red-dot'>.</span></h1>
        <div className="center-sub-about-header">
          <hr />
        </div>
        <div className="resto-content-container">
          <p className='about-resto-content'>Epicurean Symphony offers a sophisticated and cozy ambiance, with contemporary decor and soft lighting, creating the perfect setting for an unforgettable dining experience.</p>
        </div>
        <div className="hotel-image"
          style={{
            background: `url("${RES_MOCK1}")`,
            backgroundSize: "cover"
          }}
        >
        </div>

      </div>

      <div className="restaurant-gallery">
        <h1 className="restaurant-gallery-title">Gallery</h1>

        <div className="gallery-images">
          <div>
            <img className='mock-img' src={MOCK3} alt="" />
          </div>
          <img className='mock-img' src={MOCK1} alt="" />
          <img className='mock-img' src={MOCK2} alt="" />
          <img className='mock-img' src={MOCK5} alt="" />
          <div>
            <img className='mock-img' src={MOCK4} alt="" />
          </div>
        </div>
      </div>

      <Reservations />
    </div>
  )
}

export default About;