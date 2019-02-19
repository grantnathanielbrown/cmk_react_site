import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Fees extends Component {
  render() {    
    let feesSections = ['Treatment', 'Termination', 'Confidentiality', 'Fees', 'Cancellation']
    return (
      <Section SectionContainer="fees-container" 
      SectionImage="fees-image"
      // address background image
      SectionContent="fees-content"      
      NavSections={feesSections}
      SectionBlurb="fees-blurb"
      SectionTitle="Fees"
      SectionParagraph="
      I do not participate with any insurance companies. Payment should be made directly to me at the time of service. A statement will be provided for your convenience, which you may present to your insurance company for reimbursement. Some fees are listed below.
      Diagnostic evaluation: $475
      45 minute follow-up visit: $255
      Completion of forms: $50"
      ></Section>
    )
  }
}
