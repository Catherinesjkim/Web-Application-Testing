// A baseball scoreboard app

// TODO: STEP 1 = Import the useState hook.
// TODO: STEP 2 - Establish your application's satte with some useState hooks. I will need one for the home score and another for the away score.

import React, { useState} from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';

function App() {
  const [strike, setStrike] = useState(0)
  const [ball, setBall] = useState(0)

  const handleStrike = () => {
    if (strike === 3) {
      setStrike(0)
      setBall(0)
    } else setStrike((strike + 1) % 4)
  } 

  const handleBall = () => {
    if (ball === 4) {
      setStrike(0)
      setBall(0)
    } else setBall((ball + 1) % 5)
  }

  const handleHit = () => {
    setStrike(0)
    setBall(0)
  }

  const handleFoul = () => {
    if (strike < 2) setStrike(strike + 1)
  }

  return (
    <div className="App">
      <Display
        strikes={strike}
        balls={ball}
      />
      <Dashboard 
        strikes={handleStrike}
        balls={handleBall}
        reset={handleHit}
        foul={handleFoul}
    />
    </div>
  );
}

export default App;
