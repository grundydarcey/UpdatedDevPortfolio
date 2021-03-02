import React from 'react';
import Textbook from '../Images/textbook.jpg';
import './secondpanel.css';

export default function secondPanel() {
  return (
    <div className='secondpanel'>
      <div className='container'>
        <div className='text'>
          <h1>SOFTWARE DEVELOPING</h1><br />
          <p>I'm baby shoreditch you probably haven't heard of them iPhone locavore, chia fixie activated charcoal. Man bun sartorial kale chips helvetica tumeric dreamcatcher waistcoat flannel godard food truck raclette XOXO.</p>
        </div>
        <div className='image'>
          <img src={Textbook} className='textbook' alt='textbook' />
        </div>
      </div>
    </div> 
  )
}