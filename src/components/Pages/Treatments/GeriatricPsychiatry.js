import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class GeriatricPsychiatry extends Component {
  render() {    
    let geriatricSections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    return (
      <Section SectionContainer="geriatric-container" 
      metaUrl="Geriatric-psychiatry" 
      SectionImage="geriatric-image"      
      SectionContent="geriatric-content"      
      NavSections={geriatricSections}
      SectionBlurb="geriatric-blurb"
      SectionTitle="Geriatric Psychiatry"
      SectionParagraph="
      The aging process is as unique as the human experience.
      Everyone will experience the last third of his or her life differently.
      If you need help with aging gracefully, dealing with loss, cognitive impairment, or medical problems,
      dealing with new or old psychiatric issues, or looking back over your life and taking an 
      inventory, I am happy to help.
      My interest and expertise in medical and psychological issues of aging go back to my training.
      My Geriatric Fellowship and first board certification were in 1989.
      I renewed my board certification in 2016. 
      I bring a vast body of experience and training to my practice and your care.
      "
      ></Section>
    )
  }
}
