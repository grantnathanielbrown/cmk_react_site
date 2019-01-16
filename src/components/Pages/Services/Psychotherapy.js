import React, { Component } from 'react';
import SideNav from '../../Global/SideNav';

export default class Psychotherapy extends Component {
  render() {
    let sections = ['Psychotherapy', 'Pharmacology', 'Medication-management', 'Consultation'];  
    return (
      <div className="dropdown-content">
        <SideNav sections={sections}></SideNav>
        psychic
      </div>
    )
  }
}
