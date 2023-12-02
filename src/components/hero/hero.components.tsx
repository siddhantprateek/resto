import React from 'react'

// Internals 
import './hero.styles.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <h1>It's not just <span className='red'>food</span> ,<br/> It's an <span className='blue'>experience</span>. 😇</h1>
        <div className="secondary-content">
          <p className='hero-content-2'>Relax Please, we've got you covered every day of the week.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero