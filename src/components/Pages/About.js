import React, { Component } from 'react'
import MedicalThingy from '../Images/35459605-medical-symbol-caduceus-with-snakes-and-wings.jpg'
class About extends Component {
  render() {
    return (
    <div className="about-container">
        <div className="section-image about-background">

        </div>
      <div className="about">
        <h1>About Me</h1>
        
        <p>My medical training was completed at Indiana University School of Medicine between 1980 and 1984. From there, I went on to an internship and residency as well as a geriatric fellowship at Georgetown University hospital between 1984 at 1989. I stayed on as an assistant clinical professor at the Department of Psychiatry from 1989 through 1993, and as an adjunct clinical professor from 1993 to 2000.
          

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