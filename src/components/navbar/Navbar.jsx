import React from 'react';
import logo from '../../asserts/images/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div><h1>Alfswebdev</h1></div>
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar