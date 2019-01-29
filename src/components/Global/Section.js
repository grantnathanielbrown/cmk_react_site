import React, { Component } from 'react';
import SideNav from '../../Global/SideNav';

export default class Section extends Component {
    render() {      
      return (
      <div className={this.props.SectionContainer}>
        <div className={`section-image + ${this.props.SectionImage}`}>
  
        </div>
        <div className={`dropdown-content + ${this.props.SectionContent}`}>
  
          <SideNav NavSections={this.props.NavSections}></SideNav>
          <div className={`blurb + ${this.props.SectionBlurb}`}>
            <h1>{this.props.SectionTitle}</h1>          
            <p>{this.props.SectionParagraph}</p>
          </div>
        </div>
      </div>
      )
    }
  }
  