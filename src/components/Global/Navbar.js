import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom';




export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.dropdownSlide = this.dropdownSlide.bind(this);
    this.createLine = this.createLine.bind(this);
    this.removeLine = this.removeLine.bind(this);
    // 
    // this.addAnimation = this.addAnimation.bind(this);
  }
  // componentDidMount() {
  //   this.addAnimation();
  //   this.cancelAnimation();
  // }

  // addAnimation() {
  //   let x = document.getElementsByClassName("redline");
  //   console.log(x);
  //   for (let i = 0; i < x.length ; i++) {
  //     console.log(x[i]);
  //     x[i].classList.add("huge");
  //     x[i].addEventListener("onMouseOver", this.createLine);
  //     x[i].addEventListener("onMouseOut", this.removeLine);
  //     console.log(x[i]);
  //   }
    
  // }

  // cancelAnimation() {
  //   let x = document.getElementsByClassName("redline");
  //   console.log(x);
  //   for (let i = 0; i < x.length ; i++) {
  //     console.log(x[i]);
  //     x[i].removeEventListener("onMouseOver", this.createLine);
  //     console.log(x[i]);
  //   }
    
  // }
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
    // LORD FORGIVE ME FOR WHAT I MUST DO
    let a;
    let b;
    let c;
    let d;
    let e;
    let f;
    let g;
    let h;
    let i;
    let j;
    let k;
    let l;

    if (window.innerHeight > 500) {
      console.log(window.innerHeight);
      console.log("it's not most phones");
      
        a = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Home</p>
        b = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>About</p>      
        c = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Psychotherapy</p>      
        d = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Medication Management</p>      
        e = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Genetic Testing</p>      
        f = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Anxiety</p>      
        g = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Depression</p>      
        h = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Sleep Disorders</p>      
        i = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>PTSD</p>      
        j = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Geriatric Psychiatry</p>
        k = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Policies</p>      
        l = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>Contact</p>            

    } else {
      a = <p>Home</p>
      b = <p>About</p>
      c = <p>Psychotherapy</p>
      d = <p>Medication Management</p>
      e = <p>Genetic Testing</p>
      f = <p>Anxiety</p>
      g = <p>Depression</p>
      h = <p>Sleep Disorders</p>
      i = <p>PTSD</p>
      j = <p>Geriatric Psychiatry</p>
      k = <p>Policies</p> 
      l = <p>Contact</p>



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
        <Link  to="/" className="nav-link slider">{a}</Link>        
      </li>
      

      <li className="nav-item">
        <Link to="/about" className="nav-link slider">{b}</Link>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Psychotherapy" className="nav-link">{c}</Link>          
          <Link to="/Medication-management" className="nav-link">{d}</Link>    
          <Link to="/Genetic-testing" className="nav-link">{e}</Link>    
        </div>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" onMouseOver={this.dropdownSlide} href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          What I Treat
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/Anxiety" className="nav-link">{f}</Link>
          <Link to="/Depression" className="nav-link">{g}</Link>
          <Link to="/Sleep-disorders" className="nav-link">{h}</Link>
          <Link to="/PTSD" className="nav-link">{i}</Link>
          <Link to="/Geriatric-psychiatry" className="nav-link">{j}</Link>
        </div>
      </li>

      <li className="nav-item">
        <Link to="/Policies" className="nav-link slider">{k}</Link>
      </li>

      <li className="nav-item">
        <Link to="/Contact-information" className="nav-link slider">{l}</Link>
      </li>

    </ul>
  </div>
</nav>
      </div>
    )
  }
}
