import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test  from './components/Test'

class App extends Component {
  render() {
    return (
      <div className="welcome">
        Hello coders!
        <h3>Second</h3>
       <Test />
      </div>
    );
  }
}

export default App;
