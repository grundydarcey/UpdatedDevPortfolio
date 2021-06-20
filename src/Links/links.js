import React from 'react';
import './link.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Links() {
  return (
    <section className='links'>
      <section className='gitHubLink'>
        <a href='https://github.com/grundydarcey/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon 
            icon={faGithub}
            color='#000'
          />
        </a>
        </section>
        <section className='linkedInLink'>
          <a href='https://www.linkedin.com/in/darcey-grundy/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              icon={faLinkedin}
              color='#000'
            />
          </a>
      </section>
    </section>
  )
}