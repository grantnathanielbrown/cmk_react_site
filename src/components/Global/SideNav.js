import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';


export default class SideNav extends Component {
  constructor(props) {
    super(props)
    this.fadeOut = this.fadeOut.bind(this);
  }

  fadeOut() {
    console.log(this.props.SectionContainer);
    let disappearingContent = document.getElementsByClassName(this.props.SectionContainer);
    console.log(disappearingContent);
    // disappearingContent.classList.add("fade-out");
    disappearingContent.className += " fade-out";
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
