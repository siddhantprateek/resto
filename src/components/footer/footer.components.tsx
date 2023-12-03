import React from 'react'
import { useInView } from 'react-intersection-observer';

// Internals
import './footer.styles.css';
import { LOGO } from '../../assets';

const Footer = () => {
  const { ref: footerRef, inView: footerView } = useInView({ threshold: 0, })

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
      <div className="hr-line"></div>
      <div className="sub-footer-2">
        <div className="payment-options"></div>
        <div className="socials"></div>
        <div className="logo">
          <img className='footer-logo' src={LOGO} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer