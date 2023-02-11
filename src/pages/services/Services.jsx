import React from 'react';
import './services.css';
import Swiper from '../../components/swipper/Swiper';
import Card from '../../components/cards/Card';
import django from '../../asserts/svg/django.svg';
import mysql from '../../asserts/svg/mysql.svg';
import github from '../../asserts/svg/github.svg';
import adobe_xd from '../../asserts/svg/adobexd.svg';
import react from '../../asserts/svg/react.svg';
import vscode from '../../asserts/svg/vscode.svg';
import adobe_ai from '../../asserts/svg/adobeai.svg';

function Services() {
  const skills = [
    {
      id: 1,
      name: 'Django',
      image: django,
      content: 'We use django for handling of fullstack website that is for both the frontend and the backend. We also use it for developing API for our cliend.'
    },
    {
      id: 2,
      name: 'MySql',
      image: mysql,
      content: 'Mysql is the data handler for the backend. Mysql is very effective in handling huge database and also very secured'
    },
    {
      id: 3,
      name: 'Sqlite',
      image: django,
      content: 'Sqlite is used for handling of small database used by a single client of the project being worked on'
    },
    {
      id: 4,
      name: 'React js',
      image: react,
      content: 'This is used for the creation of the frontend of the website more specifically single page applications'
    }
  ]

  const tools = [
    {
      id: 1,
      name: "Adobe Ai",
      image: adobe_ai,
      description: "Adobe Ai has some excellent features that enable us to design beautiful mordern icons for our clients."
    },
    {
      id: 2,
      name: "Adobe Xd",
      image: adobe_xd,
      description: "Adobe Xd have some excellent features that helps to design the User Interface and User experience of the for our client even before we begin to develop it."
    },
    {
      id: 3,
      name: "Github",
      image: github,
      description: "Its an excellent tool that enable us to safely store our project online. It also gives the flexibility of collaboration among project developers"
    },
    {
      id: 4,
      name: "VScode",
      image: vscode,
      description: "A very simple but yet majestic tool that is used for wrighting of the code for the website."
    }
  ]
  return (
    <div className='container'>
      <div className="skills">
        <h2>Skills</h2>
        <div className='service-cards'>
        {skills.map(tool => 
        <div className='service-card'>
          <h4 className='service-card-title'>{tool.name}</h4>
          <img className='service-image' src={tool.image} alt={tool.name}/>
          <p className='service-para'>{tool.content}</p>
        </div>
        )}
        </div>
      </div>
      <hr />

      <div className="tools">
        <h2>Tools</h2>
        <div className='service-cards'>
        {tools.map(skill => 
        <div className='service-card'>
          <h4 className='service-card-title'>{skill.name}</h4>
          <img className='service-image' src={skill.image} alt={skill.name} />
          <p className='service-para'>{skill.description}</p>
        </div>
        )}
        </div>
      </div>
      <hr />
      
      <div>
        <h2>Languages</h2>
        <ul>
          <li>Css</li>
          <li>Html</li>
          <li>Javascript</li>
          <li>Python</li>
        </ul>
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