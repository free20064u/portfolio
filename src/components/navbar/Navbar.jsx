import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../asserts/images/logo.png';
import menu from '../../asserts/icons/menu.png';
import close from '../../asserts/icons/close.png';

function Navbar() {

  const links = [
    {
      id: 1,
      to: '/home',
      path: 'Home'
    },
    {
      id: 2,
      to: '/services',
      path: 'Services'
    },
    {
      id: 3,
      to: '/contact',
      path: 'Contact'
    }
  ]

  const [hidden, setHidden] = useState(true);
  const showHide = () => {
    setHidden(!hidden);
  }

  return (
    <>
    <div className='navbar container'>
      <div id='nameLogo'>
        <img src={logo} id="logo" alt="logo" />
        <div><h1>Alfswebdev</h1></div>
      </div>
      <div>
        <div id="menuClose">
          <img 
            src={menu} 
            id="menu" 
            alt="menu" 
            style={{display: hidden ? 'flex': 'none'}} 
            onClick={showHide}
          />
          <img 
            src={close} 
            id="close" 
            alt="close" 
            style={{display: hidden ? 'none': 'flex'}}
            onClick={showHide}
          />
        </div>
        <nav className='nav'>
          <ul className='nav-links'>
            {links.map(link => <li className='nav-link'><Link to={link.to} className='link'>{link.path}</Link></li>)}
          </ul>
        </nav>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Navbar