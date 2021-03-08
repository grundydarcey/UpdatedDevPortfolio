import React from 'react';
import Textbook from '../Images/textbook.jpg';
import './secondpanel.css';

export default function secondPanel() {
  return (
    <div className='secondpanel'>
      <div className='container'>
        <div className='text'>
          <h1>SKILLS</h1><br />
          <p>She was able to learn Javascript, React.js, Express, PostgreSQL, Node.js, data structures, algorithms, and worked with all of them in different combination per assigned project.</p>
        </div>
        <div className='image'>
          <img src={Textbook} className='textbook' alt='textbook' />
        </div>
      </div>
    </div> 
  )
}