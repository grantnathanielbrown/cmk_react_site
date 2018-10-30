import React, { Component } from 'react';
import './App.css';

// components
import Navbar from './components/Global/Navbar'
import Main from "../src/components/Global/Main"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;