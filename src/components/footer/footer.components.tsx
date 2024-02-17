// Author: Siddhant Prateek Mahanayak: github.com/siddhantprateek

import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

// Internals
import './footer.styles.css';
import { FBICON, IGICON, LOGO, TWITTERICON, WEBSITEICON } from '../../assets';

const Footer = () => {
  const [ fbUrl, setfbUrl ] = useState<string>();
  const [ igUrl, setigUrl ] = useState<string>();
  const [ twtUrl, settwtUrl ] = useState<string>();
  const [ website, setwebUrl ] = useState<string>();



  const { ref: footerRef, inView: footerView } = useInView({ threshold: 0, })

  useEffect(() => {
    fetch("https://restaurant.service/api/socials")
    .then((res) => res.json())
    .then((json) => {
      setfbUrl(json.socials[0].facebook)
      setigUrl(json.socials[0].instagram)
      settwtUrl(json.socials[0].twitter)
    })
  }, [])


  useEffect(() => {
    fetch("https://restaurant.service/api/website")
    .then((res) => res.json())
    .then((json) => setwebUrl(json.website))
  }, [])
  return (
    <div className={`footer ${footerView ? "trans-from-top": ""}`} ref={footerRef}>
      <div className="sub-footer-1">
        <div className="left-footer-content">
          <p>123 Gourmet Avenue,<br/> Culinary Metropolis</p>
          <p>Get Updates On Fun Stuff You <br/> Probably Want To Know About<br/>  In Your Inbox</p>
          <input type="email" className='get-updated-email' placeholder='Email address' name="" id="" />
        </div>
        <div className="right-footer-content">
          <ul className='footer-nav'>
            <li>Menu</li>
            <li>Sustainable Initiative</li>
            <li>About Us</li>
            <li>About Chef</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
      <div className="hr-line" />
      <div className="sub-footer-2">
        <div className="payment-options">
          <a target='__blank' href={website}><img className='social-icon' src={WEBSITEICON} alt="" /></a>
        </div>
        <div className="socials">
          <a target='__blank' href={fbUrl}><img className='social-icon' src={FBICON} alt="" /></a>
          <a target='__blank' href={igUrl}><img className='social-icon' src={IGICON} alt="" /></a>
          <a target='__blank' href={twtUrl}><img className='social-icon' src={TWITTERICON} alt="" /></a>
        </div>
        <div className="logo">
          <p>Resto Inc. - Made by Siddhant</p>
          <img className='footer-logo' src={LOGO} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer