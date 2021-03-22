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
        <p>My name is Darcey Grundy and I'm an aspiring software engineer. I'm looking to find a company match that suits my recent experience in an immersive engineering course. I'm excited to learn from senior developers and junior developers alike as I gain experience in the industry. I have past experience in the spa and wellness industry but after being furloughed I decided to pivot. I began working on a home-based business of crafting with a website accompanying it to increase sales. This exposed me to the absolute necessity of a web presence for anyone trying to get anything done. I began dabbling in software engineering and ventured outside of pre-written templates, and into formulating my ideas. Soon after, I enrolled in Thinkful's immersive Software Engineering program. This has been a very exciting time of seeing all the fun and vital projects I can help bring into the world. With the course as a guide, I was able to complete multiple full-stack projects showing mastery of all concepts learned within it.</p>
        <p>Outside of work and school, I enjoy cooking and spending time in nature. Living in Florida gives me many opportunities to explore our two beautiful seasons, summer and not-summer.</p><br /><br />
      </section>
      <section className='panels'>
        <FirstPanel />
        <SecondPanel />
        <Links />
      </section>
    </section>
  )
}