import React from 'react';
import './home.css';
import FirstPanel from '../FirstPanel/firstpanel';
import SecondPanel from '../secondPanel/secondPanel';
import Links from '../Links/links';

export default function Home() {
  return (
    <section className='home'>
      <section className='textbox'>
        <h1>About Me</h1><br />
        <p>My name is Darcey Grundy and I'm a full-stack software developer based in Phoenix, Arizona. I'm learning everyday and always looking to become a more well-rounded developer. I'm a proud career switcher from the hospitality industry and am very excited to be in tech.</p>
        <p>Outside of my time at my workplace, I enjoy cooking and eating, reading and exploring.</p><br /><br />
      </section>
      <section className='panels'>
        <FirstPanel />
        <SecondPanel />
        <Links />
      </section>
    </section>
  )
}