// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React from 'react'

// Internals
import './error404.styles.css';
import { IMG404 } from '../../assets';

const Error404 = () => {
  return (
    <div className='error-page'>
      <div className="error-content">
        <img src={IMG404} alt="" />
      </div>
    </div>
  )
}

export default Error404