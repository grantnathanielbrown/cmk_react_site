import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Header from '../Global/Header';
import MapContainer from '../Global/MapContainer';
import CMK from '../Images/ChristenKerr-245.JPG';
import oldPeople from '../Images/hey.jpg';
import Bench from '../Images/serenity.jpeg';
import Carousel from '../Global/Carousel';
export default class Home extends Component {
  render() {
    return (

<div className="home-container">
<Helmet>
<meta charSet="utf-8" />

<title>Christen's Homepage</title>
<meta name="description" content="This page introduces the patient to Christen's psychiatric practice." />
<link rel="canonical" href="http://christenkerrmd.com" />
</Helmet>
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
        <figcaption className="fig-bottom"><Link to="/Contact-information">Make an appointment.</Link></figcaption>
    </figure>
    </div>  
</div>    

    )
  }
}
