import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class PTSD extends Component {
  render() {    
    let PTSDSections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    return (
      <Section SectionContainer="PTSD-container" 
      metaUrl="PTSD" 
      SectionImage="PTSD-image"      
      SectionContent="PTSD-content"      
      NavSections={PTSDSections}
      SectionBlurb="PTSD-blurb"
      SectionTitle="Post Traumatic Stress Disorder"
      SectionParagraph="
      When trauma strikes, it can be devastating. There are many types
      of trauma. For some, we never expect it. For the other brave 
      individuals who put yourselves in harm's way, you do not expect 
      the profound impact. You do not have to suffer for your service or
      misfortune. A specific form of CBT called cognitive reprogramming 
      is very helpful for PTSD. Together we work through the trauma and detoxify it
      very slowly. I offer several different medications to assist
      the working through, if needed"
      ></Section>
    )
  }
}
