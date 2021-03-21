import React from 'react';
import Vscode from '../Images/vscode.jpg'
import './firstpanel.css';

export default function firstPanel() {
  return (
    <section className='firstpanel'>
      <section className='container'>
        <section className='image'>
            <img src={Vscode} className='vscode' alt='vscode' />
        </section>
        <section className='text'>
          <h1>EDUCATION</h1>
          <p>Darcey graduated from Thinkful's Immersive Software Engineering Course in April 2021. This was an intensive course with many frequent tests of skill by way of projects as well as frequent staff-led interviews to check for concept mastery.</p>
        </section>
      </section>
    </section> 
  )
}