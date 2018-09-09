import React, { Component } from 'react';
import './App.css';
import Header  from './components/Header/Header'
import Identity from './components/Pages/Identity/Identity';
import Results from './components/Pages/Results/Results'



class App extends Component {

  state = {
    show: false
  }
 serfPageHandler = (bool) => {
   this.setState({
     show: bool
   })
 }
  render() {

    let page = this.state.show ? <Results serf={this.serfPageHandler} />: <Identity serf={this.serfPageHandler} />
    return (
      <div className="wrapper">
       <Header /> 
       { page }
      </div>
    );
  }
}

export default App;
