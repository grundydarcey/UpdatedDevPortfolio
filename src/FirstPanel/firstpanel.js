import React from 'react';
import Vscode from '../Images/vscode.jpg'
import './firstpanel.css';

export default function firstPanel() {
  return (
    <div className='firstpanel'>
      <div className='container'>
        <div className='image'>
            <img src={Vscode} className='vscode' alt='vscode' />
        </div>
        <div className='text'>
          <h1>EDUCATION</h1>
          <p>Darcey graduated from Thinkful's Immersive Software Engineering Course in April 2021. This was an intensive course with many frequent tests of skill by way of projects as well as frequent staff-led interviews to check for concept mastery.</p>
        </div>
      </div>
    </div> 
  )
}