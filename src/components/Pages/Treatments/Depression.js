import React, { Component } from 'react';
import Section from '../../Global/Section';


export default class Depression extends Component {
  render() {    
    let depressionSections = ['Anxiety', 'Depression', 'Sleep-disorders', 'PTSD', 'Geriatric-psychiatry']
    
    
    return (
      <Section SectionContainer="depression-container"
      metaUrl="Depression"       
      SectionImage="depression-image"      
      SectionContent="depression-content"      
      NavSections={depressionSections}
      SectionBlurb="depression-blurb"
      SectionTitle="Depression"      
      SectionParagraph={["Depression is a potentially life threatening disorder characterized by depressed mood, loss of pleasure in activities, decreased energy, disturbed sleep / wake cycle and self-destructive thoughts. Milder forms go unrecognized and compromise quality of life. My treatment includes psychotherapy and antidepressant medication. Efficacy of CBT and psychodynamic therapy has been shown in numerous studies.",
      <hr></hr>,
      
      "Sometimes depressive episodes are accompanied by mania which includes excess energy, grandiose delusions, pressured speech, and disinhibition. Hypomania is a mild form of mania. These occur in Bipolar disorder. Treatment consists of mood stabilizing medication and therapy to help individuals recognize early signs of the illness and manage triggers of the episode."]}
      ></Section>
    )
  }
}
