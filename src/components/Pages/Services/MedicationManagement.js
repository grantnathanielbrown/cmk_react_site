import React, { Component } from 'react';
import SideNav from '../../Global/SideNav';

export default class MedicationManagement extends Component {
  render() {
    let sections = ['Psychotherapy', 'Pharmacology', 'Medication-management', 'Consultation'];  
    return (
      <div>
        <SideNav sections={sections}></SideNav>
        medic
      </div>
    )
  }
}
