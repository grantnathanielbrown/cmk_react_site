import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class MedicationManagement extends Component {
  render() {    
    let medicationSections = ['Psychotherapy', 'Medication-management', 'Genetic-testing' ]
    return (
      <Section SectionContainer="medication-container" 
      SectionImage="medication-image"
      // address background image
      SectionContent="medication-content"      
      NavSections={medicationSections}
      SectionBlurb="medication-blurb"
      SectionTitle="Medication Management"
      SectionParagraph="The use of decisions about medication are made through a discussion 
      of potential benefits and side effects during your appointment.
      Medications can help with symptoms of many disorders, and with sleep. 
      Psychotherapy may be facilitated if significant symptoms are controlled with medication."
      ></Section>
    )
  }
}
