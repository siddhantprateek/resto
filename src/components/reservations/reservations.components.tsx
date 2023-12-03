import React from 'react'

// Internals
import './reservations.styles.css';

let SLOTS = [
  {
    "day": "Monday",
    "time": "11 A.M. - 11.30 P.M."
  },
  {
    "day": "Tuesday",
    "time": "11 A.M. - 11.30 P.M."
  },
  {
    "day": "Wednesday",
    "time": "11 A.M. - 11.30 P.M."
  },
  {
    "day": "Thursday",
    "time": "11 A.M. - 11.30 P.M."
  },
  {
    "day": "Friday",
    "time": "11 A.M. - 11.30 P.M."
  },
  {
    "day": "Saturday",
    "time": "11 A.M. - 11.30 P.M."
  },
  {
    "day": "Sunday",
    "time": "11 A.M. - 11.30 P.M."
  }
]

const Reservations = () => {
  return (
    <div className='reserve-table'>
      <div className="reserve-header">
        <h1>BOOK TABLE</h1>
      </div>
      <div className="booking-details-input">
        <div className="booking-left-container">
          <div className="book-container-1">
            <input type="text" className='name-inp' placeholder='Name' />
            <input type="text" className='phone-inp' placeholder='Phone Number' name="" id="" />
          </div>
          <div className="book-container-2">
            <input type="date" className='date-inp' name="" id="" />
            <input type="number" className='serves-inp' placeholder='No. of Reservations' name="" id="" />
          </div>
          <div className="book-container-3">
            <input type="text" className='special-inp' placeholder='Anything Special in your mind.' name="" id="" />
          </div>
          <button className='book-table-btn' type="submit">Book Seat</button>
        </div>
        <div className="booking-availability">
          <h1>AVAILABILITY</h1>
          <div className="booking-list">
            <ul>
              {SLOTS.map((dayItem) => (
                <li className='time-slots'>
                  <p className='slot-day'>{dayItem.day}</p>
                  <p className='slot-time'>{dayItem.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservations;