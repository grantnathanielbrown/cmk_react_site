import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class SleepDisorders extends Component {
  render() {
    let sleepSections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    return (
      <Section SectionContainer="sleep-container"
      metaUrl="Sleep-disorders"  
      SectionImage="sleep-image"      
      SectionContent="sleep-content"      
      NavSections={sleepSections}
      SectionBlurb="sleep-blurb"
      SectionTitle="Sleep Disorders"
      SectionParagraph="
      The most important part of treating sleep problems is a complete 
      evaluation. Insomnia is often a symptom of other problems.
      Once I have a thorough understanding of what is causing your insomnia, 
      there are many appropriate and effective treatments from 
      sleep hygiene, to CBT, to a host of medications to ensure a good 
      night's sleep, which, of course, we all need!"
      ></Section>
    )
  }
}
