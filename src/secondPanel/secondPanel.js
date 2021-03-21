import React from 'react';
import Textbook from '../Images/textbook.jpg';
import './secondpanel.css';

export default function secondPanel() {
  return (
    <section className='secondpanel'>
      <section className='container'>
        <section className='text'>
          <h1>SKILLS</h1><br />
          <p>She was able to learn Javascript, React.js, Express, PostgreSQL, Node.js, data structures, algorithms, jQuery, AJAX, HTML5, and CSS3 and worked with all of them in different combination per assigned project. These new skills built upon a foundation already fostered by Myspace and an urge to create.</p>
        </section>
        <section className='image'>
          <img src={Textbook} className='textbook' alt='textbook' />
        </section>
      </section>
    </section> 
  )
}