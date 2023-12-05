import React, { Component } from 'react';
import { Link   } from 'react-router-dom';


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
    let disappearingContent = document.getElementsByClassName(`section-container fade-in ${this.props.SectionContainer}`);
    
    let x = e.target.getAttribute("href");
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
      let modifiedSection = section.replace("-", " ");
      return <li><Link onClick={this.fadeOut} to={`/${section}`}>{modifiedSection}</Link></li>
    })
    return (
      <div className="side-nav-container">
        <ul>
          {NavSections}           
        </ul>
      </div>
    )
  }
}
