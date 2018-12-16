import React, { Component } from 'react';
// import Footer from '../Global/Footer';
import Header from '../Global/Header';
import RyanGosling from './RyanGosling10-19.JPG';
export default class Home extends Component {
  render() {
    return (      
<div>
    <Header></Header>
    <div className="sideways">
<figure>
    <img src={RyanGosling} alt='missing' />
    <figcaption>Christen M. Kerr</figcaption>
</figure>
      

    {/* <p className="welcome">WELCOME TO MY PRACTICE</p> */}
    <p className="description">Dr. Kerr is a compassionate physician who calls upon many years of experience plus the latest in cutting edge science to design unique treatments for each patient.  
    A thorough understanding of each individual allows for treatment that may include psychotherapy and medication management, as needed. 
    Therapy is delivered in an environment of confidentiality and support.
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
</div>    

    )
  }
}
