import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import UnderlinedLinkText from './UnderlinedLinkText'; 
export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.dropdownSlide = this.dropdownSlide.bind(this);
  }

  dropdownSlide(e) {
    e.preventDefault()
    console.log('hi');
    var x = document.getElementsByClassName(".dropdown-toggle");
  }
  render() {
    let animationAllowed;
    if (window.innerWidth > 415) {
      animationAllowed = true;           
    } else {
      animationAllowed = false;
    }
        return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">CHRISTEN M. KERR M.D., P.C.</a>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">

    <ul className="navbar-nav">

      <li  className="nav-item">
               
      </li>
      <li  className="nav-item">
        <Link  to="/" className="nav-link slider">
          <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Home"}/>
        </Link>        
      </li>
      
    

      <li className="nav-item">
        <Link to="/about" className="nav-link slider">
          <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"About"}/>
        </Link>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Psychotherapy" className="nav-link">
            <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Psychotherapy"}/>
          </Link>          
          <Link to="/Medication-management" className="nav-link">
            <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Medication Management"}/>
          </Link>    
          <Link to="/Genetic-testing" className="nav-link">
            <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Genetic Testing"}/>
          </Link>    
        </div>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          What I Treat
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Anxiety" className="nav-link">
            <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Anxiety"}/>
          </Link>
          <Link to="/Depression" className="nav-link">
            <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Depression"}/>
          </Link>
          <Link to="/Sleep-disorders" className="nav-link">
            <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Sleep Disorders"}/>
          </Link>
          <Link to="/PTSD" className="nav-link">
            <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"PTSD"}/>
          </Link>
          <Link to="/Geriatric-psychiatry" className="nav-link">
            <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Geriatric Psychiatry"}/>
          </Link>
        </div>
      </li>

      <li className="nav-item">
        <Link to="/Policies" className="nav-link slider">
          <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Policies"}/>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/Resources" className="nav-link slider">
          <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Resources"}/>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/Contact-information" className="nav-link slider">
          <UnderlinedLinkText animationAllowed={animationAllowed} linkName={"Contact Information"}/>
        </Link>
      </li>


    </ul>
  </div>
</nav>
      </div>
    )
  }
}
