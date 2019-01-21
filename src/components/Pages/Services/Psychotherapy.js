import React, { Component } from 'react';
import SideNav from '../../Global/SideNav';




export default class Psychotherapy extends Component {
  render() {
    let sections = ['Psychotherapy', 'Medication-management' ];  
    return (
    <div className="psycho">
      <div className='section-image'>

      </div>
      <div className="dropdown-content">

        <SideNav sections={sections}></SideNav>
        <div className='blurb'>
          <h1>Psychotherapy</h1>          
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
        </div>
      </div>
    </div>
    )
  }
}
