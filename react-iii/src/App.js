import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controller from './components/Controller'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Controller />
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </div>
    );
}
}
export default App;
