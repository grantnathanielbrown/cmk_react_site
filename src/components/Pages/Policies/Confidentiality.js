import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Confidentiality extends Component {
  render() {    
    let confidentialitySections = ['Treatment', 'Termination', 'Confidentiality', 'Fees', 'Cancellation']
    return (
      <Section SectionContainer="confidentiality-container" 
      SectionImage="confidentiality-image"
      // address background image
      SectionContent="confidentiality-content"      
      NavSections={confidentialitySections}
      SectionBlurb="confidentiality-blurb"
      SectionTitle="Confidentiality"
      SectionParagraph="
      I am not a covered entity under HIPPA. I do not use like electronic transfer protected medical information. Your medical records remain secure in my office. I take care to not release protected health information without your written consent, except in situations where the patient or others are at risk of injury or under certain court orders."
      ></Section>
    )
  }
}
