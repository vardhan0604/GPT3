import React from 'react';

import { Navbar,Hero,Whatgpt3 } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
        <Navbar />
        <Hero />
        <Whatgpt3/>
        </div>
     
     
    </div>
  )
}

export default App;
