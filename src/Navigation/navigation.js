import React from 'react';
import { Link } from 'react-router-dom';
//import Home from '../Home/home';
//import Contact from '../Contact/contact';
//import Portfolio from '../Projects/projects';
import './navigation.css';

export default function Navigation() {
  return (
    <div className='navbar'>
      <div className='navlinks'>
        <div className='lefthalf'>
          <p>DARCEY GRUNDY</p>
        </div>
        <div className='righthalf'>
          <div className='alllinks'>
          <Link to='/home' className='link'>HOME</Link>
          <Link to='/portfolio'className='link'>PROJECTS</Link>
          <Link to='/contact' className='link' id='contact'>CONTACT</Link>
        </div>
        </div>
      </div>
      <div className='centeredtext'>
        <p>DARCEY GRUNDY IS A FULL-STACK DEVELOPER BASED IN TAMPA, FLORIDA</p>
      </div>
    </div>
  )
}