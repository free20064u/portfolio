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
      path: 'http://luckyshrubs.netlify.app/'
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
            <a href={project.path} target="_blank">
            <img src={project.image} className="card-image" alt="" />
            <p className="box">{project.name}</p>
            </a>
          </div>
       
        )}
      </div>
    </>
  )
}

export default Card