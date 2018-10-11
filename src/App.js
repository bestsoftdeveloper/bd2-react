import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Counter from './counter/counter';
import Counter1 from './counter/counter1';
import Home from './home/home';
import Db1 from './db1/db1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <BrowserRouter>
              <div>
                  <Route exact path="/" component={Home} />
                  <Route path="/counter" component={Counter} />
                  <Route path="/counter1" component={Counter1} />

                  <Route path="/db1" component={Db1} />
              </div>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
