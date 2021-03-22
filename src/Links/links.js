import React from 'react';
import './link.css';
import GitHub from '../Images/github.webp';
import LinkedIn from '../Images/imglinkedin.png';

export default function Links() {
  return (
    <section className='links'>
      <section className='gitHubLink'>
        <a href='https://github.com/grundydarcey/' target='_blank' rel='noreferrer'>
          <img src={GitHub} alt='GitHub' className='gitHub' />
        </a>
        </section>
        <section className='linkedInLink'>
          <a href='https://www.linkedin.com/in/darcey-grundy/' target='_blank' rel='noreferrer'>
            <img src={LinkedIn} alt='LinkedIn' className='linkedIn' />
          </a>
      </section>
    </section>
  )
}