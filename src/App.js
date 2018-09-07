import React, { Component } from 'react';
import './App.css';
import Header  from './components/Header/Header'
import Identity from './components/Identity/Identity';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
       <Header />
       <Identity />
      </div>
    );
  }
}

export default App;
