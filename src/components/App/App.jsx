import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported'
import Feedback from '../Feedback/Feedback'
import Review from '../Review/Review'
import Success from '../Success/Success';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path='/'>
          <Feeling />
        </Route>

        <Route exact path='/understanding'>
          <Understanding />
        </Route>

        <Route exact path='/supported'>
          <Supported/>
        </Route>

        <Route exact path='/feedback'>
          <Feedback/>
        </Route>

        <Route exact path='/review'>
          <Review/>
        </Route>

        <Route exact path='/success'>
          <Success/>
        </Route>



      </Router>
    </div>
  );
}

export default App;
