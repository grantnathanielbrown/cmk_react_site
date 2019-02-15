import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Anxiety extends Component {
  render() {    
    let anxietySections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    return (
      <Section SectionContainer="anxiety-container" 
      SectionImage="anxiety-image"
      // address background image
      SectionContent="anxiety-content"      
      NavSections={anxietySections}
      SectionBlurb="anxiety-blurb"
      SectionTitle="Anxiety"
      SectionParagraph={["Anxiety allows us to be alert and take action when needed. But when it becomes overwhelming and paralyzes us, treatment can help.Generalized Anxiety disorder is a condition of excess worry, feeling on edge, fatigue, poor concentration, irritability, muscle tension, and insomnia. Panic attacks are waves of intense anxiety with physical symptoms such as palpitations, sweating, trembling, shortness of breath, choking, chest pain, nausea, dizziness, chills, numbness, fear of dying, or even derealization (a feeling of unreality)These conditions lead to avoidance of normal activities, and cause significant distress. A combination of CBT and an understanding of the triggers of anxiety can be helpful...Anxiolytic and antidepressant medications are indicated for Generalized Anxiety Disorder and Panic Attacks. Relaxation techniques, meditation, and yoga play a role as well as enhanced leisure activities.", <hr></hr>, "Obsessive Compulsive Disorder is a specific anxiety disorder that includes obsessions: recurrent thoughts that are experienced as unwanted and compulsions: repetitive behaviors the individual feels driven to perform.Studies show the efficacy of antidepressant medication and a specific type of CBT referred to as'exposure and response prevention.'"]}
      ></Section>
    )
  }
}
