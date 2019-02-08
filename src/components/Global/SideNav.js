import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';


export default class SideNav extends Component {
  constructor(props) {
    super(props)
    this.fadeOut = this.fadeOut.bind(this);
    this.state = {
      dynamicClass: `section-container fade-in ${this.props.SectionContainer}`,
      hasFaded: false
    }
  }

  fadeOut(e) {
    e.preventDefault();
    console.log(this.props.SectionContainer);
    let disappearingContent = document.getElementsByClassName(`section-container fade-in ${this.props.SectionContainer}`);
    
    let x = e.target.getAttribute("href");
    // disappearingContent.className = "fade-out";
    console.log(disappearingContent[0].className);
    console.log(this.state.dynamicClass);
    // disappearingContent[0].className += this.state.fadeClass;
    this.setState({
      dynamicClass: `section-container fade-in ${this.props.SectionContainer} fade-out`,
    })

    disappearingContent[0].className = this.state.dynamicClass;
    setTimeout( function(){
      window.location = x;
    }, 100 )
  } 




  render(props) {
    let NavSections = this.props.NavSections.map((section, i) => {
      return <li><Link onClick={this.fadeOut} to={`/${section}`}>{section}</Link></li>
    })
    return (
      <div>
        <ul>
          {NavSections}           
        </ul>
      </div>
    )
  }
}
