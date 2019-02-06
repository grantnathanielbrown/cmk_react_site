import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class GeneticTesting extends Component {
  render() {    
    let geneticSections = ['Psychotherapy', 'Medication-management', 'Genetic-testing' ]
    return (
      <Section SectionContainer="genetic-container" 
      SectionImage="#"
      // address background image
      SectionContent="genetic-content"      
      NavSections={geneticSections}
      SectionBlurb="genetic-blurb"
      SectionTitle="Genetic Testing"
      SectionParagraph="Genes influence the way a person's body responds to specific medications. 
      Testing is available that analyzes a patients genetic content and provide individual information.
      DNA is collected with a simple cheek swab and results provide guidance for medication selection. 
      When combined with a thorough history and clinical evaluation, genetic testing 
      can yield valuable guidance."
      ></Section>
    )
  }
}
