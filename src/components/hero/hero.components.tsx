// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React from 'react'
import { useInView  } from 'react-intersection-observer';
// Internals 
import './hero.styles.css';
import { FRIES } from '../../assets';

const Hero = () => {
  const { ref: heroRef, inView: heroView } = useInView({ threshold: 0, })
  return (
    <div className='hero'>
      <div className="hero-content" ref={heroRef}>
        <h1 className={heroView ? "trans-from-left": ""}>It's not just <span className='red liner'>food</span>,<br/>
         <img className='fries' src={FRIES} alt="" />
         It's an <span className='blue'>experience</span>. 😇</h1>
        <div className="secondary-content">
          <p className={`hero-content-2 ${heroView ? "trans-from-right-less": ""}`}>Relax Please, we've got you covered every day of the week.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero