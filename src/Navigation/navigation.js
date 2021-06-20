//import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  // const [showMenu, setShowMenu] = useState(false);
  // const [icon, setIcon] = useState('faBars')

  // let menu;
  // if(showMenu) {
  //   menu =
  //   <section className='menutext'>
  //       <p>Exit</p>
  //       <Link to='/home' className='revealedNav'>HOME</Link>
  //       <Link to='/portfolio' className='revealedNav'>PROJECTS</Link>
  //       <Link to='/contact' className='revealedNav'>CONTACT</Link>
  //   </section>
  // }

// const run = () => {
//     setShowMenu(!showMenu);
//     setIcon('faTimes');
//   }


  return (
    <section className='navbar'>
      <section className='navlinks'>
        <section className='lefthalf'>
          <p>DARCEY GRUNDY</p>
        </section>
        <section className='righthalf'>
          
            <Link to='/home' className='link'>HOME</Link>
            <Link to='/portfolio'className='link'>PROJECTS</Link>
            <Link to='/contact' className='link' id='contact'>CONTACT</Link>
    
        </section>
      </section>
      {/* <section className='centeredtext'>
        <p>DARCEY GRUNDY IS A FULL-STACK DEVELOPER BASED IN TAMPA, FLORIDA</p>
      </section> */}
    </section>
  )
}