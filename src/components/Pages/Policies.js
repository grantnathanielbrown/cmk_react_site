import React, { Component } from 'react';
import {Helmet} from "react-helmet";

export default class Policies extends Component {
  render() {
    return (

      <div className="policies-container">
      <Helmet>
      <meta charSet="utf-8" />

      <title>Christen's Policies</title>
      <meta name="description" content="This page describes Christen's treatments, fees, and cancellation policies." />
      <link rel="canonical" href="http://christenkerrmd.com/#/policies" />
      </Helmet>
      <h1 className="policy-header">Policies</h1>

      
      <div id="treatment">
      <h1>Treatment</h1>
      I believe treatment proceeds best during regularly scheduled appointments in the consistent 
      and private setting of my office, or via video conference. I provide individual therapy and medication management. 
      Because of my extensive psychotherapy training, I do not provide medication management for 
      patients in therapy with other providers. Please let me know how you would like to be addressed and what pronouns you would prefer. 
      <br>
      </br>
      <br>
      </br>
      All work is done on an outpatient basis. 
      If inpatient treatment is needed, I am available to facilitate a transfer to another provider 
      in a hospital setting. 
      
      
      <br>
      </br>
      
      I do participate in the VA Prescription Monitoring program."
      </div>

      <div id="termination">
      <h1>Termination</h1>      
      Ending therapy is an integral part of treatment. It should be considered carefully and discussed as one’s goals are achieved, in order to obtain maximum benefit from the termination process.
      </div>

      <div id="fees">
      <h1>Fees</h1>
      I do not participate with any insurance companies, and I have opted out of Medicare. Payment should be made directly to me at the time of service. I accept credit cards with an additional 5% surcharge. A statement will be provided for your convenience, which you may present to your insurance company for reimbursement. A good faith estimate of the cost of your treatment is as follows:
      <br></br>
      <br></br>
      Diagnostic evaluation <b>90872</b>: $600
      <br></br>
      <br></br>
      45 minute follow-up visits are billed as follows:
      <br></br>
      <br></br>
      Individual Therapy <b>90834</b>: $300
      <br></br>
      Medication Evaluation and Management <b>99213</b>: $150 and Individual Psychotherapy with Medication Management <b>90836</b>: $150, for a total charge of $300.
      <br></br>
      <br></br>
      Completion of forms: $75
      <br></br>
      <br></br>
      You may contact your insurance company with the <b>procedure codes</b> listed above to estimate your out-of-pocket costs.
      <br></br>
      <br></br>
      A fee of $300 is charged for missed appointments unless they’re canceled or rescheduled at least 24 hours prior. Fees are subject to a 8% increase every January.
      </div>

      <div id="confidentiality">
      <h1>Confidentiality</h1>
      I am not a covered entity under HIPPA. I do not use electronic transfer of protected medical 
      information. Your medical records remain secure in my office. I take care to not release 
      protected health information without your written consent, except in situations where the 
      patient or others are at risk of injury or under certain court orders.
      <br>
      </br>

      My office is in a shared space. I am a solo practitioner and not part of a group.
      </div>


      
      </div>
    )
  }
}
