import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';


export default class SideNav extends Component {
  render(props) {
    let NavSections = this.props.NavSections.map((section, i) => {
      return <li><Link to={`/${section}`}>{section}</Link></li>
    })
    return (
      <div>
        <ul>
          {sections}           
        </ul>
      </div>
    )
  }
}
