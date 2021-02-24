import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/home';
import Contact from '../Contact/contact';
import Portfolio from '../Projects/projects';
import './navigation.css';

export default function Navigation() {
  return (
    <div className='navbar'>
      <div className='navlinks'>
        <div className='lefthalf'>
          <p>Darcey Grundy</p>
        </div>
        <div className='righthalf'>
          <div className='alllinks'>
          <Link to='/home' className='link'>HOME</Link>&nbsp; &nbsp; &nbsp;
          <Link to='/contact' className='link'>CONTACT</Link>&nbsp; &nbsp; &nbsp;
          <Link to='/portfolio'className='link'>PROJECTS</Link>
        </div>
        </div>
      </div>
    </div>
  )
}