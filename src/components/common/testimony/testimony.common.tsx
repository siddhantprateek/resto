import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Rating } from 'react-simple-star-rating'

// Internals
import './testimony.styles.css';
import { IReviews } from '../../../mirage/types';

const Testimony = (props: IReviews) => {
  let IMG_URL = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const { ref: testimonyRef, inView: testimonyView } = useInView({ threshold: 0, })
  return (
    <div className={`testinomy ${testimonyView ? "trans-from-buttom": ""}`} ref={testimonyRef}>
      <div className="customer">
        <img className='customer-img' src={IMG_URL} alt="" />
        <h3>{props.customer_name}</h3>
      </div>
      
      <div className="testinomy-header">
        <h1>"</h1>
      </div>
      <div className="review">
        <div className="rating">
          <p><Rating readonly={true}  initialValue={props.rating}/></p>
        </div>
        <p className="testinomy-content">
          {props.comment}
        </p>
      </div>
   
 
    </div>
  )
}

export default Testimony;