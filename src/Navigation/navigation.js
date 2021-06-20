import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <section className='navbar'>
      <section className='navlinks'>
        <section className='lefthalf'>
          <p>DARCEY GRUNDY</p>
        </section>
        <section className='righthalf'>
          <Link to='/home' className='link'>HOME</Link>
          <Link to='/portfolio'className='link'>PROJECTS</Link>
          <Link to='/contact' className='link' id='contact'>CONTACT</Link>
        </section>
      </section>
    </section>
  )
}