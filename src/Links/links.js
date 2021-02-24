import React from 'react';
import './link.css';
import Github from '../Images/github.png';
import Linkedin from '../Images/linkedin.webp';

export default function Links() {
  return (
    <div className='links'>
      <img src={Github} alt='Github' className='github' />&nbsp;&nbsp;&nbsp;
      <img src={Linkedin} alt='Linkedin' className='linkedin' />
    </div>
  )
}