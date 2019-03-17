import React, { Component } from 'react'
import {Helmet} from "react-helmet";

class About extends Component {
  render() {
    return (
    <div className="about-container">
    <Helmet>
        <meta charSet="utf-8" />

        <title>About Christen</title>
        <meta name="description" content="This page describes Christen's background and qualifications as a psychiatrist." />
        <link rel="canonical" href="http://christenkerrmd.com/#/about" />
    </Helmet>
        <div className="section-image about-background">

        </div>
      <div className="about">
        <h1>About Me</h1>
        
        <p>My medical training was completed at Indiana University School 
          of Medicine between 1980 and 1984. From there, I went on to an 
          internship and residency as well as a geriatric fellowship at
           Georgetown University hospital between 1984 and 1989. I stayed 
           on as an assistant clinical professor at the Department of Psychiatry 
           from 1989 through 1993, and as an adjunct clinical professor 
           from 1993 to 2000. From 1989 through the present, I have had extensive
           experience in private practice.
          

        </p>

        <ul>
          <h1>PROFESSIONAL SOCIETIES</h1>
          <li> - Member, Washington Psychiatric Society</li>
          <li> - Member and Fellow, American Psychiatric Association</li>
          <h1>CERTIFICATIONS</h1>
          <li> - Diplomat, American Board of Psychiatry and Neurology 1989.</li>
          <li> - Board-certified in Geriatric Psychiatry, American Board of Psychiatry and Neurology, March 1994-2004. Certified again 2016-2026.</li>
        </ul>
      </div>
    </div>
    )
  }
}

export default About