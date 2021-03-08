import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/home';
import Contact from './Contact/contact';
import Projects from './Projects/projects';
import Navigation from './Navigation/navigation';
import Footer from './Footer/footer';
import './App.css';
import Links from './Links/links';

function App() {
  return (
    <main className='App'>
      <div className='body'>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Projects} />
      </div> 
      <Footer />
    </main>
  );
}

export default App;