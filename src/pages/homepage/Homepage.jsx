import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Homepage() {
  return (
    <div className="container intro">
      <h1 id='intro-remark'>WELCOME TO ALFSWEBDEV</h1>
      <h2 id='slogan'>home of modern website</h2>
      <Link to='/services'><button className='intro-btn'>Check my work</button></Link>
    </div>
  )
}

export default Homepage