import React from 'react';
import './home.css';
import FirstPanel from '../FirstPanel/firstpanel';
import SecondPanel from '../secondPanel/secondPanel';
import Links from '../Links/links';

export default function Home() {
  return (
    <div className='home'>
      <div className='textbox'>
        <h1>About Darcey</h1><br />
        <p>Darcey is an aspiring software engineer looking to find a company match that suits her recent experience in an immersive engineering course. She has past experience in the spa and wellness industry but due to a recent furlough, she began working on a home-based business of crafting with a website accompanying it to increase sales. This exposed her to the absolute necessity of a web presence for anyone trying to get anything done in the world. She began dabbling in software engineering and venturing outside of pre-written templates, and into formulating her own ideas. Soon after, she enrolled in Thinkful's immersive Software Engineering program. With the course as a guide, she was able to complete multiple full-stack projects showing mastery of all concepts learned within it.</p><br /><br />
      </div>
      <div className='panels'>
        <FirstPanel />
        <SecondPanel />
        <Links />
      </div>
    </div>
  )
}