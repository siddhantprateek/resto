import React from 'react'
import { useInView } from 'react-intersection-observer'
// Internals
import './testimony.styles.css';

const Testimony = () => {
  const { ref: testimonyRef, inView: testimonyView } = useInView({ threshold: 0, })
  return (
    <div className={`testinomy ${testimonyView ? "trans-from-buttom": ""}`} ref={testimonyRef}>
      <div className="customer">
        <img className='customer-img' src={"https://static.demilked.com/wp-content/uploads/2019/04/5cb6d34f775c2-stock-models-share-weirdest-stories-photo-use-102-5cb5c725bc378__700.jpg"} alt="" />
        <h3>Charlie</h3>
      </div>
      
      <div className="testinomy-header">
        <h1>"</h1>
      </div>
      <div className="review">
        <div className="rating">
          <p>5</p>
        </div>
        <p className="testinomy-content">
          Epicurean Symphony takes gastronomy to new heights. Chef Isabella's creations are a culinary masterpiece.
        </p>
      </div>
   
 
    </div>
  )
}

export default Testimony;