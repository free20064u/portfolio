import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className='container contact'>
      <h1>GET IN TOUCH</h1>
      <div>
        <label htmlFor='user-name'>Name:</label>
        <input type="text" name="user-name" id="" />
        
      </div>
      <div>
        <label htmlFor="email"> Email:</label>
        <input type='text' name="email" id=""/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name='message' rows='8'></textarea>
      </div>
      <div id="contact-button">
        <button>Submit</button>
      </div>
      
    </div>
  )
}

export default Contact