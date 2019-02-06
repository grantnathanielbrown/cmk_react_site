import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class SleepDisorders extends Component {
  render() {
    let sleepSections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    return (
      <Section SectionContainer="sleep-container" 
      SectionImage="#"
      // address background image
      SectionContent="sleep-content"      
      NavSections={sleepSections}
      SectionBlurb="sleep-blurb"
      SectionTitle="Sleep Disorders"
      SectionParagraph="
      The most important part of treating sleep problems is a complete evaluation. Insomnia is often a symptom of other problems such as Depression, Bipolar disorder, Generalized Anxiety Disorder, PTSD, Schizophrenia or Substance Abuse. Primary sleep disorders including parasomnia, Obstructive Sleep Apnea, Restless Leg Syndrome, and Rhythm Sleep / Wake Disorder should be considered.
      Once I have a thorough understanding of what is causing your insomnia, there are many appropriate and effective treatments from sleep hygiene, to CBT, to a host of medications to ensure a good night's sleep. Which, of course, we all need!"
      ></Section>
    )
  }
}
