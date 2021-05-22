import React from 'react';
import Grid from '../Grid/Grid';
import Nav from '../Nav/Nav';
import Timer from '../Timer/Timer';
// import TimerFromReducer from '../TimerFromReducer/TimerFromReducer';
import './App.css';
import {
  HashRouter as Router,
  Route,
  /*Redirect,
  Switch,*/
} from 'react-router-dom';
import Timer3 from '../Timer3/Timer3';
import Timer2 from '../Timer2/Timer2';
import Timer1 from '../Timer1/Timer1';

function App() {
  return (

    <Router>
      <Nav />
      {/* <Timer /> */}
      <Route exact path="/timer">
        <Timer />
      </Route>
      <Route exact path="/timer1">
        <Timer1 />
      </Route>
      <Route exact path="/timer2">
        <Timer2 />
      </Route>
      <Route exact path="/timer3">
        <Timer3 />
      </Route>
      <Route exact path="/grid">
        <Grid />
      </Route>
    </Router>
  );
}

export default App;
