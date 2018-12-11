import React, { Component } from 'react';
// import Footer from '../Global/Footer';
import Header from '../Global/Header';

export default class Home extends Component {
  render() {
    return (      
<div class="row">
    <Header></Header>      
    <div class="col-lg-1">
    </div>
    <div class="col-lg-2">
      <img src="C:\Users\Grant\Desktop\hohohohoho\220px-Ryan_Gosling_by_Gage_Skidmore.jpg"/>
    Christen M Kerr
    </div>
    <div class="col-lg-8">
    <p class="welcome">WELCOME TO MY PRACTICE</p>
    <p class="description">Dr. Kerr is a compassionate physician who calls upon many years of experience plus the latest in cutting edge science to design unique treatments for each patient.  A thorough understanding of each individual allows for treatment that may include psychotherapy and medication management, as needed.  Therapy is delivered in an environment of confidentiality and support.</p>
    </div>
    <div class="col-lg-1">
    </div>

</div>    

    )
  }
}
