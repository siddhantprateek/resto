// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React, { useEffect, useState } from 'react'

// Internals
import './events.styles.css';
import { EventCard } from '../../components/common';
import { Reservations } from '../../components';
import { createMockServer } from '../../mirage/createMockServer';


interface IEvent {
  name: string
  date: string 
  description: string
}

// Mock Server 
createMockServer()

const Events = () => {
  let [events, setEvents] = useState<IEvent[]>();

  useEffect(() => {
    fetch("https://restaurant.service/api/events")
    .then((res) => res.json())
    .then((json) => setEvents(json.events))
  }, [])

  return (
    <div className='events-page'>
      <div className="event-header">
        <h1>EVENTS</h1>
      </div>
      <div className="listed-event-container">
        {events?.map((event: IEvent) => (
          <EventCard key={event.name} name={event.name} description={event.description} date={event.date} />
        ))}
      </div>
      <Reservations />
    </div>
  )
}

export default Events