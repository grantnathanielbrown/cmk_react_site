import React, { Component } from 'react';

import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Header from '../Global/Header';
import MapContainer from '../Global/MapContainer';
import CMK from '../Images/cmk_full.jpg';
import oldPeople from '../Images/hey.jpg';
import Bench from '../Images/serenity.jpeg';
import Carousel from '../Global/Carousel';
export default class Home extends Component {
  render() {
    return (      
<div className="home-container">
    <Header></Header>
    <Carousel></Carousel>
    <div className="sideways">
<figure className="cmk_full">
    <img src={CMK} alt='missing' />
    <figcaption>Christen M. Kerr</figcaption>
</figure>
      
    {/* <p className="description"> I call upon many years of experience plus the latest in cutting edge science to design unique treatments for each patient.   */}
    A thorough understanding of each individual allows for treatment including psychotherapy with or without medication management, as needed. 
    Therapy is delivered in an environment of confidentiality and support.
    
    <br>
    </br>
    <br>
    </br>
    
    You are invited to explore below to learn about my expertise and practice.
    I look forward to having an opportunity to work with you.
    
    {/* </p> */}
    
    </div>

    <div className="extra-links">

    <figure className="extra-images">
        <img src={oldPeople} alt='missing' />
        <figcaption><Link to="/Anxiety">Find out about treatment.</Link></figcaption>

    </figure>

    <figure className="extra-images">
        <img src={Bench} alt='missing' />
        <figcaption><Link to="/Contact-information">Contact me.</Link></figcaption>
    </figure>
    </div>  
</div>    

    )
  }
}
