import React, { Component } from 'react';
import './App.css';
import Header  from './components/Header/Header'
import IdentityPage from './components/IdentityPage/IdentityPage';
import UsersPage from './components/UsersPage/UsersPage'



class App extends Component {

  state = {
    show: true
  }
 serfPageHandler = (bool) => {
   this.setState({
     show: bool
   })
 }
  render() {

    let page = this.state.show ? <UsersPage serf={this.serfPageHandler} />: <IdentityPage serf={this.serfPageHandler} />
    return (
      <div className="wrapper">
       <Header /> 
       { page }
      </div>
    );
  }
}

export default App;
