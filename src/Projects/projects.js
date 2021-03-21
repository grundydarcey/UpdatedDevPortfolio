import React from 'react';
import RDHome from '../Images/rdhome.png';
import RDToday from '../Images/rdtoday.png';
import RDPlanetGuide from '../Images/rdplanetguide.png';
import SSMembers from '../Images/ssmembers.png';
import SSPick from '../Images/sspick.png';
import SSPlay from '../Images/ssplay.png';
import PFHome from '../Images/pfhome.png';
import PFAdoption from '../Images/pfadoption.png';
import './projects.css';

export default function Projects() {
  return (
    <div className='projects'>
      <h1>Past Projects</h1>
      <p>Throughout my time at Thinkful, I was able to work on multiple projects I'm very fond of. Some created solutions for me and my family, some for others on my behalf, and some still were ascribed to me by assignment. Each of them helped to teach me new things and techniques, and solidify my mastery of the older ones.</p><br /><br />
      <a href='https://retroclient-4qvq37xnl-grundydarcey.vercel.app/' target='_blank' rel='noreferrer'><h2>RetroDate</h2></a>
      <p className='projectdetail'>RetroDate is a tool to connect people quickly with information relating to the planets and their retrograde status. Many people take stock in the positions and perceived direction of our planets and this project helps them learn about them quickly and in the ways that are relevant to them. Users can check retrograde for all of the other planets on any given date in the future as well as a current daily report. This project employs React.js, CSS3, Node.js, Express servers, PostgreSQL, JSX and Jest. The repository for this project can be found<a href='https://github.com/grundydarcey/RetroClient' target='_blank' rel='noreferrer'>here.</a></p>
      <img src={RDHome} alt='retrohome' className='retrohome' id='projectimg'></img>
      <img src={RDToday} alt='retrotoday' className='retrotoday' id='projectimg'></img>
      <img src={RDPlanetGuide} alt='retroguide' className='retroguide' id='projectimg'></img><br /><br />
      <a href='https://santaserver-8khqgpbvp.vercel.app/' target='_blank' rel='noreferrer'><h2>Secret Santa's Little Helper</h2></a>
      <p className='projectdetail'>Secret Santa's Little Helper details....<a href='https://github.com/grundydarcey/SecretSantasLittleHelperClient' target='_blank' rel='noreferrer'>here.</a></p>
      <img src={SSPlay} alt='ssplay' className='ssplay' id='projectimg'></img>
      <img src={SSMembers} alt='ssmembers' className='ssmembers' id='projectimg'></img>
      <img src={SSPick} alt='sspick' className='sspick' id='projectimg'></img>
      <a href='https://petful-client-template-979vllh0s-grundydarcey.vercel.app/' target='_blank' rel='noreferrer'><h2>Petful</h2></a>
      <p className='projectdetail'>Petful details...<a href='https://github.com/grundydarcey/PetfulClient' target='_blank' rel='noreferrer'>here.</a></p>
      <img src={PFHome} alt='pfhome' className='pfhome' id='projectimg'></img>
      <img src={PFAdoption} alt='pfadoption' className='pfadoption' id='projectimg'></img>
    </div>
  )
}