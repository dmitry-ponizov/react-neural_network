import React, { Component } from 'react';
import './App.css';
import Header  from './components/Header/Header'
import Identity from './components/Pages/Identity/Identity';
import Results from './components/Pages/Results/Results'
import Filter from './components/Pages/Filter/Filter'
import { Route, Link } from 'react-router-dom';


class App extends Component {

  state = {
    page: 'indentity'
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
      <div className="wrapper">
        <Header /> 
       { page }
       

        {/* <Route path="/" exact component={Identity}/>
        <Route path="/results" component={Results}/> */}
      </div>
    );
  }
}

export default App;
