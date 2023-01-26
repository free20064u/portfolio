import React from 'react';
import './footer.css';
import logo from '../../asserts/images/logo2.png';
import twitter from '../../asserts/icons/twitter.png';
import github from '../../asserts/icons/github.png';
import facebook from '../../asserts/icons/facebook.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div id='footer-content'>
          <div id='foot-logo'>
            <img src={logo} id="footer-logo" alt="footer-logo" />
          </div>
          <div id="go-to">
            <h4>Go To;</h4>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div id='other-links'>
          <h4>Other Links;</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div id='social-media'>
            <img src={twitter} className="soc-media" alt="twitter" />
            <img src={github} className="soc-media" alt="github" />
            <img src={facebook} className="soc-media" alt="facebook" />
          </div>
        </div>
        <div id='copy'>
          <p>Designed by Alphy</p>
          <p id='copyright'>@ copyright 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer