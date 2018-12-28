import React, { Component } from 'react';
import SideNav from '../../Global/SideNav';

export default class Pharmacology extends Component {
  render() {
    let sections = ['Psychotherapy', 'Pharmacology', 'medication-management', 'consultation'];  
    return (
      <div>
        <SideNav sections={sections}></SideNav>
        farmer
      </div>
    )
  }
}
