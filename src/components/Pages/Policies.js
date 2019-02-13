import React, { Component } from 'react';

import { BrowserRouter,Route, Link, Redirect, Switch } from 'react-router-dom';

export default class Policies extends Component {
  render() {
    return (

      <div className="policies-container">
      
      <h1>Policies</h1>

      
      <div id="treatment">
      <h1>Treatment</h1>
      I believe treatment proceeds best during regularly scheduled appointments in the consistent 
      and private setting of my office. I provide individual therapy and medication management. 
      Because of my extensive psychotherapy training, I do not provide medication management for 
      patients in therapy with other providers. All work is done on an outpatient basis. 
      If inpatient treatment is needed, I am available to facilitate a transfer to another provider 
      in a hospital setting. 
      
      
      <br>
      </br>
      
      I do participate in the VA Prescription Monitoring program."
      </div>

      <div id="termination">
      <h1>Termination</h1>      
      Ending therapy is an integral part of treatment. It should be considered carefully and discussed as one’s goals are achieved, in order to obtain maximum benefit from the termination process. In rare cases, it may be necessary to terminate for non-payment of fees.
      </div>

      <div id="fees">
      <h1>Fees</h1>
      I do not participate with any insurance companies. Payment should be made directly to me at the time of service. A statement will be provided for your convenience, which you may present to your insurance company for reimbursement. Some fees are listed below.
      <br>
      </br>
      Diagnostic evaluation: $450
      <br>
      </br>
      45 minute follow-up visit: $255
      <br>
      </br>
      Completion of forms: $50
      </div>

      <div id="confidentiality">
      <h1>Confidentiality</h1>
      I am not a covered entity under HIPPA. I do not use electronic transfer of protected medical 
      information. Your medical records remain secure in my office. I take care to not release 
      protected health information without your written consent, except in situations where the 
      patient or others are at risk of injury or under certain court orders.
      <br>
      </br>

      My office is in a shared space. I am a solo practioner and not part of a group.
      </div>

      <div id="cancellation">
      <h1>Cancellation</h1>
    A fee of $255 is charged for missed appointments unless they are canceled or rescheduled at least 24 hours prior.
      Note: A diagnostic and treatment fees are subject to a 2% increase every January  
      
      </div>




      <div className="policies-nav">
      <Link to="#treatment">Treatment</Link>
      </div>


      
      </div>
    )
  }
}
