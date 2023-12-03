import React from 'react'

// Internals
import './events.styles.css';
import { EventCard } from '../../components/common';
import { Reservations } from '../../components';

const Events = () => {
  return (
    <div className='events-page'>
      <div className="event-header">
        <h1>EVENTS</h1>
      </div>
      <div className="listed-event-container">
        <EventCard />
        <EventCard />
      </div>
      <Reservations />
    </div>
  )
}

export default Events