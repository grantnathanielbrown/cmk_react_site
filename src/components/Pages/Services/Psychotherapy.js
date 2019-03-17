import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Psychotherapy extends Component {
  render() {    
    let psychotherapySections = ['Psychotherapy', 'Medication-management', 'Genetic-testing' ]
    return (
      <Section SectionContainer="psychotherapy-container"
      metaUrl="Psychotherapy"  
      SectionImage="psychotherapy-image"
      SectionContent="psychotherapy-content"      
      NavSections={psychotherapySections}
      SectionBlurb="psychotherapy-blurb"
      SectionTitle="Psychotherapy"
      SectionParagraph="Psychotherapies vary in their approaches, but all involve talking about feelings,
      thoughts, and behaviors in ways that lead to meaningful constructive change. 
      The most extensively studied psychotherapy is cognitive behavioral therapy. 
      This technique focuses on thoughts that cause distress, and ways to manage them,
      as well as the feelings and behaviors they influence.
      I provide CBT, psychodynamic therapy for relationship issues, cognitive reprogramming for PTSD
      , motivational interviewing for substance use issues, exposure and
      response prevention for OCD, help with bereavement for losses and 
      expressive therapy for other issues such as like transitions, 
      aging issues and the like.

      "
      
      ></Section>
    )
  }
}
