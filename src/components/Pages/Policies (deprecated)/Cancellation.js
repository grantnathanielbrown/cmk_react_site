import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Cancellation extends Component {
  render() {    
    let cancellationSections = ['Treatment', 'Termination', 'Confidentiality', 'Fees', 'Cancellation']
    return (
      <Section SectionContainer="cancellation-container" 
      SectionImage="cancellation-image"
      // address background image
      SectionContent="cancellation-content"      
      NavSections={cancellationSections}
      SectionBlurb="cancellation-blurb"
      SectionTitle="Cancellation"
      SectionParagraph="A fee of $255 is charged for missed appointments unless they are canceled or rescheduled at least 24 hours prior.
      Note: A diagnostic and treatment fees are subject to a 2% increase every January"
      ></Section>
    )
  }
}
