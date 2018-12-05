import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <a class="navbar-brand" href="#">CHRISTEN M. KERR M.D., P.C.</a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/about" class="nav-link" >About</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/psychotherapy" class="nav-link" >Psychotherapy</Link>
          <Link to="/pharmacology" class="nav-link" >Pharmacology</Link>
          <Link to="/medication-management" class="nav-link" >Medication Management</Link>
          <Link to="/consultation" class="nav-link" >Consultation</Link>
        </div>
        </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          What I Treat
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/bipolar" class="nav-link" >Bipolar</Link>
          <Link to="/adhd" class="nav-link" >ADHD</Link>
          <Link to="/ocd" class="nav-link" >OCD</Link>
          <Link to="/anxiety" class="nav-link" >Anxiety</Link>
          <Link to="/depression" class="nav-link" >Depression</Link>
        </div>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Policies
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/payment" class="nav-link" >Payment</Link>
          <Link to="/confidentiality" class="nav-link" >Confidentiality</Link>
          <Link to="/cancellation" class="nav-link" >Cancellation</Link>
        </div>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contact
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/contact-information" class="nav-link" >Contact Information</Link>
          <Link to="/location" class="nav-link" >Location</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
      </div>
    )
  }
}
