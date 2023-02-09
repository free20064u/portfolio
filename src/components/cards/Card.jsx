import React from 'react';
import './card.css';
import cardImage from '../../asserts/images/backgroundpic.jpg';
import schoolsyt from '../../asserts/images/moontree.jpg';
import pattern from "../../asserts/images/bgpattern.jpg"

function Card() {

  const projects = [
    {
      id: 1,
      name: 'Lucky Shrub',
      image: cardImage,
      path: 'www.luckyshrub.com'
    },
    {
      id: 2,
      name: 'School system',
      image: schoolsyt,
      path: 'www.schoolsys.com'
    },
    {
      id: 3,
      name: 'pattern',
      image: pattern,
      path: 'www.patterns.com'
    }
  ]

  return (
    <>
      <div className="cards-container">
        {projects.map( project => 
        <div className="card card1" key={project.id}>
          <img src={project.image} className="card-image" alt="" />
          <p className="box">{project.name}</p>
        </div>
        )}
      </div>
    </>
  )
}

export default Card