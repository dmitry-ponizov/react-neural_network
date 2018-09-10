import React, { Component } from 'react';
import classes from './App.css';
import Header  from './components/Header/Header'
import Identity from './components/Pages/Identity/Identity';
import Results from './components/Pages/Results/Results'
import Filter from './components/Pages/Filter/Filter'



class App extends Component {

  state = {
    page: 'identity'
  }
 serfPageHandler = (pageName) => {
   this.setState({
    page: pageName
   })
 }
  render() {
    let page = '';
    switch(this.state.page) {
      case 'results': 
      page = <Results serf={this.serfPageHandler} />
        break;
      case 'filter': 
        page = <Filter />
        break;
      default:
        page = <Identity serf={this.serfPageHandler} />
        break;
    }

    return (
      <div className={classes.wrapper}>
        <Header /> 
       { page }
      </div>
    );
  }
}

export default App;
