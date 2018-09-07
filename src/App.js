import React, { Component } from 'react';
import './App.css';
import Header  from './components/Header/Header'
import IdentityPage from './components/IdentityPage/IdentityPage';
import UsersPage from './components/UsersPage/UsersPage'



class App extends Component {

  state = {
    show: true
  }

  render() {

    let page = this.state.show ? <UsersPage />: <IdentityPage />
    return (
      <div className="wrapper">
       <Header /> 
       { page }
      </div>
    );
  }
}

export default App;
