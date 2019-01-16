import React, { Component } from 'react';
import SideNav from '../../Global/SideNav';
import Horse from '../../Images/horse.png';


export default class Pharmacology extends Component {
  render() {
    let sections = ['Psychotherapy', 'Pharmacology', 'Medication-management', 'Consultation'];  
    return (
    <div>
      <div className='section-image'>
        {/* <img src={Horse} /> */}
      </div>
      <div className="dropdown-content">
        <SideNav sections={sections}></SideNav>
        <div className='blurb'>
          <h1>Pharmacology</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>        
        </div>
      </div>
    </div>
    )
  }
}
