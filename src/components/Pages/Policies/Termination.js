import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Termination extends Component {
  render() {    
    let terminationSections = ['Treatment', 'Termination', 'Confidentiality', 'Fees', 'Cancellation']
    return (
      <Section SectionContainer="termination-container" 
      SectionImage="termination-image"
      // address background image
      SectionContent="termination-content"      
      NavSections={terminationSections}
      SectionBlurb="termination-blurb"
      SectionTitle="Termination"
      SectionParagraph="
      Ending therapy is an integral part of treatment. It should be considered carefully and discussed as one’s goals are achieved, in order to obtain maximum benefit from the termination process. In rare cases, it may be necessary to terminate for non-payment of fees."
      ></Section>
    )
  }
}
