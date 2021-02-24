import React from 'react';
import './footer.css';
import Links from '../Links/links';

export default function Footer() {
  return (
    <div className='linksandfooter'>
      <div className='footer'>
        <div className='links2'>
          <Links />
        </div><br /><br />
        <div className='credit'>
          <p>2020 Darcey Grundy</p>
        </div>
      </div>
    </div>
  )
}