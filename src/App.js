import React, { Component } from 'react';
import classes from './App.css';
import Header  from './components/Header/Header'
import Identity from './components/Pages/Identity/Identity';
import Results from './components/Pages/Results/Results'
import Filter from './components/Pages/Filter/Filter'



class App extends Component {

    state = {
      page: 'identity',
      users: [],
      found: [],
      notFound: []
    }
  serfPageHandler = (pageName) => {
    this.setState({
      page: pageName
    })
  }
  usersHandler = (users, data) => {
    this.setState({
      users: users,
      found: data.found,
      notFound: data.not_found
    })

  }
  render() {
    let page = '';
    switch(this.state.page) {
      case 'results': 
      page = <Results 
        serf={this.serfPageHandler} 
        users={this.state.users}
        found={this.state.found}
        notFound={this.state.notFound}
        />
        break;
      case 'filter': 
        page = <Filter />
        break;
      default:
        page = <Identity 
        serf={this.serfPageHandler} 
        getUsers={this.usersHandler}
        
        />
        break;
    }

    return (
      <div className={classes.Wrapper}>
        <Header /> 
       { page }
      </div>
    );
  }
}

export default App;
