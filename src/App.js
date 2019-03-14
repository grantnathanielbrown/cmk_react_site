import React, { Component } from 'react';
import './App.css';
// test comment
// components
import Navbar from './components/Global/Navbar'
import Main from "./components/Global/Main"

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