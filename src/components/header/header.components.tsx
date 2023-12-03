import React from 'react'
import { useNavigate } from 'react-router-dom';
// Internals
import { LOGO } from '../../assets';
import './header.styles.css';

let NavOption = [
  {
    "title": "Menu",
    "link": "/menu",
    "id": "menu"
  },
  {
    "title": "About",
    "link": "/about",
    "id": "restaurants"
  },
  {
    "title": "Events",
    "link": "/events",
    "id": "events"
  }
]


const Header = () => {
  const navigate = useNavigate()

  const ToHome = () => {
    return navigate("/")
  }
  return (
    <header className='header trans-from-top'>
      <div className="left-header" onClick={ToHome}>
        <img className='header-logo' src={LOGO}  alt="" />
        <h2>Just Symphony</h2>
      </div>
      <div className="right-header">
        <ul className='nav-options'>
          {
            NavOption.map((Nav) => (
              <li>
                <a href={Nav.link}>{Nav.title}</a>
              </li>
            ))
          }
          <li>
            <button className='order-now-btn'>
              Order Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header