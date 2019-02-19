import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Treatment extends Component {
  render() {    
    let treatmentSections = ['Treatment', 'Termination', 'Confidentiality', 'Fees', 'Cancellation']
    return (
      <Section SectionContainer="treatment-container" 
      SectionImage="treatment-image"
      // address background image
      SectionContent="treatment-content"      
      NavSections={treatmentSections}
      SectionBlurb="treatment-blurb"
      SectionTitle="Treatment"
      SectionParagraph="
      I believe treatment proceeds best during regularly scheduled appointments in the consistent and private setting of my office. I provide individual therapy and medication management. Because of my extensive psychotherapy training, I do not provide medication management for patients in therapy with other providers. All work is done on an outpatient basis. If inpatient treatment is needed, I am available to facilitate a transfer to another provider in a hospital setting. I do participate in the VA Prescription Monitoring program."
      ></Section>
    )
  }
}
