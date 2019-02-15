import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom';




export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.dropdownSlide = this.dropdownSlide.bind(this);
    this.createLine = this.createLine.bind(this);
    this.removeLine = this.removeLine.bind(this);
  }

  createLine(e) {

    // 1. onHover event associated with nav items
    // 2. get class from hover items for example first – nav
    // 3. create hr
    // 4. append hr to hover item
    // 5. mouse away delete hr separatefunction 
    var x = document.getElementsByClassName(".dropdown-toggle");
    // let fakeParagraph = document.createElement("")

    console.log("line created");
    let targetedNav = e.target;
    console.log(targetedNav.innerHTML.length);
    if (targetedNav.innerHTML.length > 0 ) {
      let underline = document.createElement("hr");
      underline.classList.add("slide-in");
      targetedNav.appendChild(underline);

    }
    

  }

  removeLine(e) {
    // on mouse away
    // 1. get parent element of hr
    // 2. note list remove
    // 3.
    let targetedNav = e.target;
    let p = targetedNav.childNodes[0];
    // console.log(targetedNav.classList);
    console.log(p);
    // if (targetedNav.classList.value.length > 1 ) {
    //   targetedNav.removeChild(targetedNav.childNodes[0]);
    //   console.log(targetedNav.childNodes[0]);
    // }
    targetedNav.removeChild(targetedNav.childNodes[1]);
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

      <li  class="nav-item">
        <Link  to="/" class="nav-link slider"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >Home</p></Link>        
      </li>
      

      <li class="nav-item">
        <Link to="/about" class="nav-link slider"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >About</p></Link>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Psychotherapy" class="nav-link"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >Psychotherapy</p></Link>          
          <Link to="/Medication-management" class="nav-link"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >Medication Management</p></Link>    
          <Link to="/Genetic-testing" class="nav-link"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >Genetic Testing</p></Link>    
        </div>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          What I Treat
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Anxiety" class="nav-link"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >Anxiety</p></Link>
          <Link to="/Depression" class="nav-link"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >Depression</p></Link>
          <Link to="/Sleep-disorders" class="nav-link"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >Sleep Disorders</p></Link>
          <Link to="/PTSD" class="nav-link"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >PTSD</p></Link>
          <Link to="/Geriatric-psychiatry" class="nav-link"><p onMouseOver={this.createLine} onMouseOut={this.removeLine} >Geriatric Psychiatry</p></Link>
        </div>
      </li>

      <li class="nav-item">
        <Link to="/Policies" class="nav-link slider"><p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Policies</p></Link>
      </li>

      <li class="nav-item">
        <Link to="/Contact-information" class="nav-link slider"><p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Contact</p></Link>
      </li>

    </ul>
  </div>
</nav>
      </div>
    )
  }
}
