import React from 'react'

// Internals 
import './eventcard.styles.css';
import { EVENT1 } from '../../../assets';

const Eventcard = () => {
  return (
    <div className='event-card'>
      <div className="event-detail-container">
        <div className="left-event-details">
         <p className='purple'>&#91; About Event &#93; </p>
         <h1>Culinary Artistry Showcase</h1>
         <p>Join us for a night of culinary artistry as Chef Isabella presents her latest creations in an exclusive tasting event.</p>
         <button className='book-event-btn'>Book Now</button>
        </div>
        <img className="event-thumbnail"  src={EVENT1} alt="" />
      </div>
      <div className="event-footer">
        <div className="event-left-footer">
          <h2>Count <span className='purple'>Every Second</span> Until the Event</h2>
        </div>
        <div className="event-right-footer">
          <h1>25 : 12 : 23</h1>
        </div>
      </div>
    </div>
  )
}

export default Eventcard