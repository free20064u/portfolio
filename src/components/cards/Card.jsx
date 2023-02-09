import React from 'react';
import './card.css';
import cardImage from '../../asserts/images/logo2.png';

function Card() {
  return (
    <>
      <div className="cards-container">
        <div className="card card1">
          <img src={cardImage} className="card-image" alt="" />
          <p>card one</p>
        </div>
        <div className="card card2">
          <img src={cardImage} className="card-image" alt="" />
          <p>card two</p>
        </div>
        <div className="card card3">
          <img src={cardImage} className="card-image" alt="" />
          <p>card three</p>
        </div>
        <div className="card card4">
          <img src={cardImage} className="card-image" alt="" />
          <p>card four</p>
        </div>
      </div>
    </>
  )
}

export default Card