import React from 'react';
import RDHome from '../Images/rdhome.png';
import RDToday from '../Images/rdtoday.png';
import Links from '../Links/links';
import SSPick from '../Images/sspick.png';
import SSPlay from '../Images/ssplay.png';
import PFHome from '../Images/pfhome.png';
import PFAdoption from '../Images/pfadoption.png';
import dbwn1 from '../Images/dbwn1.png';
import dbwn3 from '../Images/dbwn3.png';
import './projects.css';

export default function Projects() {
  return (
    <section className='projects'>
      <h1>Past Projects</h1>
      <p>Throughout my time in my software engineering education, I was able to work on multiple projects I'm very fond of. Some created solutions for me and my family, some for others on my behalf, and some still were ascribed to me by assignment. Each of them helped to teach me new things and techniques, and solidify my mastery of the older ones. Each underlined project name can be clicked to visit the live site!</p><br /><br /><hr />
      <a href='https://daytonabeachwhatnow.com' rel='noreferrer' target='_blank'><h2>Daytona Beach, What Now?</h2></a>
      <p className='projectdetail'>Daytona Beach, What Now is a helpful tool created in tandem with a local ride-share driver to help build confidence with his clientele in regards to local hot-spots and experiences in the Daytona Beach area. Users can view local dining by cuisine and even check out the specific nightlife based on certain districts for an easy to plan trip. The repository for this project can be found <a href='https://github.com/grundydarcey/DBWNClient' rel='noreferrer' target='_blank'>here.</a></p>
      <p>This project employs React.js, CSS3, Node.js, Express servers, PostgreSQL, JSX, and HTML5.</p>
      <img src={dbwn1} alt='dbwnreviews' id='projectimg'></img>
      <img src={dbwn3} alt='dbwnfood' id='projectimg'></img>
      <a href='https://retroclient-4qvq37xnl-grundydarcey.vercel.app/' target='_blank' rel='noreferrer'><h2>RetroDate</h2></a>
      <p className='projectdetail'>RetroDate is a tool for people interested in astrology and reading about what planets are in retrograde. Many people take stock in the positions and perceived direction of planets in our solar system. This project helps them plan their events around retrograde dates. Users can check if a planet is in retrograde on any given date in the future. They can also access a current daily report. I built this project for my third full-stack capstone. The repository for this project can be found<a href='https://github.com/grundydarcey/RetroClient' target='_blank' rel='noreferrer'>here.</a></p>
      <p>This project employs React.js, CSS3, Node.js, Express servers, PostgreSQL, JSX, and Jest.</p> 
      <img src={RDHome} alt='retrohome' className='retrohome' id='projectimg'></img>
      <img src={RDToday} alt='retrotoday' className='retrotoday' id='projectimg'></img><br /><br /><br />
      <a href='https://santaserver-8khqgpbvp.vercel.app/' target='_blank' rel='noreferrer'><h2>Secret Santa's Little Helper</h2></a>
      <p className='projectdetail'>Secret Santa's Little Helper is an app that helps people who are planning an anonymous gift-exchange to organize it. This project avoids having to draw names out of a hat and things like accidentally drawing your own name. Users can customize their group down to the dollar amounts of the gifts in question. They can confidentially draw names and pass it along to other group members to complete the game. I built this project to make Christmas Secret Santa with my family easier. The repository for this project can be found <a href='https://github.com/grundydarcey/SecretSantasLittleHelperClient' target='_blank' rel='noreferrer'>here.</a></p> 
      <p>This project uses React.js, CSS3, Node.js, Express servers, PostgreSQL, JSX, and Jest.</p>
      <img src={SSPlay} alt='ssplay' className='ssplay' id='projectimg'></img>
      <img src={SSPick} alt='sspick' className='sspick' id='projectimg'></img><br /><br /><br />
      <a href='https://petful-client-template-979vllh0s-grundydarcey.vercel.app/' target='_blank' rel='noreferrer'><h2>Petful</h2></a>
      <p className='projectdetail'>Petful is a school-assigned project for people interested in pet adoption. This project allows users to add their names into a queue for adopting a pet. Users can also view others currently interested in adoption. Other people in the line are paired up with their pets. When the user is next in line, they can choose between adopting a cat or a dog. This project employs a queue data structure to store the humans doing the adoption and the pets. I built this project for an assignment to show mastery of the queue data structure. This project employs a queue data structure to store the humans doing the adoption as well as the pets. The repository for this project can be found <a href='https://github.com/grundydarcey/PetfulClient' target='_blank' rel='noreferrer'>here.</a></p>
      <p>Petful uses a queue data structure, React.js, Node.js, JSX, Jest, and CSS3.</p>
      <img src={PFHome} alt='pfhome' className='pfhome' id='projectimg'></img>
      <img src={PFAdoption} alt='pfadoption' className='pfadoption' id='projectimg'></img>
      <section className='linksholder'>
        <Links />
      </section>
    </section>
  )
}