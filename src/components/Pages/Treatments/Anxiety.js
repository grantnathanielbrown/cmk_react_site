import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Anxiety extends Component {
  render() {    
    let anxietySections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    return (
      <Section SectionContainer="anxiety-container"
      metaUrl="Anxiety"  
      SectionImage="anxiety-image"
      SectionContent="anxiety-content"      
      NavSections={anxietySections}
      SectionBlurb="anxiety-blurb"
      SectionTitle="Anxiety"
      SectionParagraph={["Healthy anxiety allows us to be alert and take action when needed. When anxiety becomes overwhelming, it can paralyze us. Treatment will help.", <hr></hr>, "My approach draws from a host of strategies that may include cognitive behavioral therapy with an understanding of triggers of anxiety, relaxation techniques, exercise, yoga, meditation, enhanced leisure activities and possibly anxiolytic medications."]}
      ></Section>
    )
  }
}
