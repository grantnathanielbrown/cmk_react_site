import React, { Component } from 'react';
import SideNav from './SideNav';
import {Helmet} from "react-helmet";

export default class Section extends Component {
    render() {      
      return (
      <div className={`section-container fade-in ${this.props.SectionContainer}`}>
        <Helmet>
<meta charSet="utf-8" />

<title>Christen's {this.props.SectionTitle}</title>
<meta name="description" content={`This page describes Christen's treatment methods and pertinent information concerning ${this.props.SectionTitle}.`} />
<link rel="canonical" href={`http://christenkerrmd.com/#/${this.props.metaUrl}`}/>
</Helmet>
        <div className={`section-image ${this.props.SectionImage}`}>
          
        </div>

        <div className={`dropdown-content ${this.props.SectionContent}`}>
  
          <SideNav className="sidenav" SectionContainer={this.props.SectionContainer} NavSections={this.props.NavSections}></SideNav>
          <div className={`blurb ${this.props.SectionBlurb}`}>
            <h1>{this.props.SectionTitle}</h1>          
            <p>{this.props.SectionParagraph}</p>
          </div>
        </div>
      </div>
      )
    }
  }
  