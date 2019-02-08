import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class PTSD extends Component {
  render() {    
    let PTSDSections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    return (
      <Section SectionContainer="PTSD-container" 
      SectionImage="PTSD-image"
      // address background image
      SectionContent="PTSD-content"      
      NavSections={PTSDSections}
      SectionBlurb="PTSD-blurb"
      SectionTitle="Post Traumatic Stress Disorder"
      SectionParagraph="
      When trauma strikes, it can be devastating. For some, we never expect it. For the other brave individuals who put themselves in harm's way, you do not expect the profound impact. Sometimes there are lasting effects such as nightmares, flashbacks, irritability, insomnia, loss of interest in activities, estrangement from others, hypervigilance, and avoidance of things that remind you of the trauma.
      You do not have to suffer for your service or misfortune. A specific form of CBT called cognitive reprogramming is indicated for PTSD. The trauma is worked through and detoxified very slowly. Several different medications are also available and are sometimes used to facilitate the therapy."
      ></Section>
    )
  }
}
