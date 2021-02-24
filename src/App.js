import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/home';
import Contact from './Contact/contact';
import Projects from './Projects/projects';
import Navigation from './Navigation/navigation';

function App() {
  return (
    <main className='App'>
      
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/portfolio' component={Projects} />
    </main>
  );
}

export default App;