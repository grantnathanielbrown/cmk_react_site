import React, { Component } from 'react';

import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Header from '../Global/Header';
import MapContainer from '../Global/MapContainer';
import RyanGosling from '../Images/RyanGosling10-19.JPG';
import Dock from '../Images/dock.jpg';
import Bench from '../Images/bench.jpg';
import Carousel from '../Global/Carousel';
export default class Home extends Component {
  render() {
    return (      
<div className="home-container">
    <Header></Header>
    <Carousel></Carousel>
    <div className="sideways">
<figure>
    <img src={RyanGosling} alt='missing' />
    <figcaption>Christen M. Kerr</figcaption>
</figure>
      

    {/* <p className="welcome">WELCOME TO MY PRACTICE</p> */}
    <p className="description">Dr. Kerr is a compassionate physician who calls upon many years of experience plus the latest in cutting edge science to design unique treatments for each patient.  
    A thorough understanding of each individual allows for treatment that may include psychotherapy and medication management, as needed. 
    Therapy is delivered in an environment of confidentiality and support. </p>
    </div>

    <div className="extra-links">

    <figure className="extra-images">
        <img src={Bench} alt='missing' />
        <figcaption><Link to="/Anxiety">Find out what I treat.</Link></figcaption>

    </figure>

    <figure className="extra-images">
        <img src={Dock} alt='missing' />
        <figcaption><Link to="/Contact-information">Contact me.</Link></figcaption>
    </figure>
    </div>  
</div>    

    )
  }
}
