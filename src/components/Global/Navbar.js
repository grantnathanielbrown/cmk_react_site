import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom';


export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.dropdownSlide = this.dropdownSlide.bind(this)
  }

  dropdownSlide(e) {
    e.preventDefault()
    console.log('hi');
    var x = document.getElementsByClassName(".dropdown-toggle");
  }
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
      <li class="nav-item">
        <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/about" class="nav-link" >About</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Psychotherapy" class="nav-link" >Psychotherapy</Link>
          <Link to="/Medication-management" class="nav-link" >Medication Management</Link>    
        </div>
        </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          What I Treat
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Anxiety" class="nav-link" >Anxiety</Link>
          <Link to="/Depression" class="nav-link" >Depression</Link>
          <Link to="/OCD" class="nav-link" >OCD</Link>
          <Link to="/Sleep-disorders" class="nav-link" >Sleep Disorders</Link>
          <Link to="/PTSD" class="nav-link" >PTSD</Link>
        </div>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Policies
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Confidentiality" class="nav-link" >Confidentiality</Link>
          <Link to="/Cancellation" class="nav-link" >Cancellation</Link>
          <Link to="/Payment" class="nav-link" >Payment</Link>
        </div>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contact
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Contact-information" class="nav-link" >Contact Information</Link>
          <Link to="/Location" class="nav-link" >Location</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
      </div>
    )
  }
}
