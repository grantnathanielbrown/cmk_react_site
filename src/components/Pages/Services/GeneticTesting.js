import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class GeneticTesting extends Component {
  render() {    
    let geneticSections = ['Psychotherapy', 'Medication-management', 'Genetic-testing' ]
    return (
      <Section SectionContainer="genetic-container"
      metaUrl="Genetic-testing" 
      SectionImage="genetic-image"
      // address background image
      SectionContent="genetic-content"      
      NavSections={geneticSections}
      SectionBlurb="genetic-blurb"
      SectionTitle="Genetic Testing"
      SectionParagraph="Your genes influence the way your body responds 
      to specific medications. Testing is available that analyzes your 
      genetic content and provides individualized information.
      A sample of your DNA can be collected with a simple cheek swab and 
      results provide guidance for medication selection. 
      When combined with a thorough history and clinical evaluation, genetic testing 
      can yield valuable guidance."
      ></Section>
    )
  }
}
