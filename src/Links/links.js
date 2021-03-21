import React from 'react';
import './link.css';
import Github from '../Images/github.webp';
import Linkedin from '../Images/imglinkedin.png';

export default function Links() {
  return (
    <section className='links'>
      <section className='githubLink'>
        <a href='https://github.com/grundydarcey/' target='_blank' rel='noreferrer'>
          <img src={Github} alt='Github' className='github' />
        </a>
        </section>
        <section className='linkedinLink'>
          <a href='https://www.linkedin.com/in/darcey-grundy/' target='_blank' rel='noreferrer'>
            <img src={Linkedin} alt='Linkedin' className='linkedin' />
          </a>
      </section>
    </section>
  )
}