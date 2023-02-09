import React from 'react';
import './services.css';
import Swiper from '../../components/swipper/Swiper';
import Card from '../../components/cards/Card';

function Services() {
  return (
    <div className='container'>
      <div id='skills-tools'>
        <div>
          <h2>Skills</h2>
          <ul>
            <li>Css</li>
            <li>Django</li>
            <li>Html</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>React Js</li>
          </ul>
        </div>
        <div>
        <h2>Tools</h2>
          <ul>
            <li>Adobe Ai</li>
            <li>Adobe Xd</li>
            <li>Github</li>
            <li>Vscode</li>
          </ul>
        </div>
      </div>
      <div id='projects'>
        <h2 id='project-title'>Projects</h2>
        <div>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Services