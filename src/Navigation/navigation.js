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
          <Link to='/home'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/portfolio'>Projects</Link>
        </div>
      </div>
    </div>
  )
}