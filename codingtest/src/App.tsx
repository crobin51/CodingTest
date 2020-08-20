import React from 'react';
import logo from './logo.svg';
import './App.css';
import Community from './components/Community';
import Home from './components/Home';

import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
    }
  }
  render() {
    return (
      <div className="App">

        <header className="App-header">


          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Cryston Robin's Coding Test for openhouse.AI
        </h1>

          <Router >
            <ul className="vas">
              <li> <NavLink to="community">Community Info </NavLink>
              </li>
              <li><NavLink to="homes">Home Info</NavLink></li>

            </ul>
            <Route exact path="/community" component={Community} />
            <Route exact path="/homes" component={Home} />

          </Router>

        </header>
      </div>
    );
  }

}

export default App;
