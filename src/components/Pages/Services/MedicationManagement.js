import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class MedicationManagement extends Component {
  render() {    
    let medicationSections = ['Psychotherapy', 'Medication-management' ]
    return (
      <Section SectionContainer="medication-container" 
      SectionImage="#"
      // address background image
      SectionContent="medication-content"      
      NavSections={medicationSections}
      SectionBlurb="medication-blurb"
      SectionTitle="Medication Management"
      SectionParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></Section>
    )
  }
}
