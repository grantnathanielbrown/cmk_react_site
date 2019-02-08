import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class GeriatricPsychiatry extends Component {
  render() {    
    let geriatricSections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    return (
      <Section SectionContainer="geriatric-container" 
      SectionImage="geriatric-image"
      // address background image
      SectionContent="geriatric-content"      
      NavSections={geriatricSections}
      SectionBlurb="geriatric-blurb"
      SectionTitle="Geriatric Psychiatry"
      SectionParagraph="
      The aging process is as unique as the human experience. Everyone will experience the last third of his or her life differently. If you need help with aging gracefully, dealing with loss or medical problems, dealing with new or old psychiatric issues, or looking back over your life and taking an inventory, I am happy to help.
      My interest and expertise in medical and psychological issues of aging go back to 1989. I completed a Geriatric Fellowship at Georgetown during my training, was board certified, and renewed my certification in 2016. I bring a vast body of experience and training to my practice and your care.
      These are some examples of my areas of interest. Others include grief, relationships, medical illness, life transitions, and other psychiatric diagnoses."
      ></Section>
    )
  }
}
