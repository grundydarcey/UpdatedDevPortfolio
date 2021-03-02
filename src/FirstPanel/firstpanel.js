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
          <h1>SOFTWARE ENGINEERING</h1>
          <p>I'm baby shoreditch you probably haven't heard of them iPhone locavore, chia fixie activated charcoal. Man bun sartorial kale chips helvetica tumeric dreamcatcher waistcoat flannel godard food truck raclette XOXO.</p>
        </div>
      </div>
    </div> 
  )
}