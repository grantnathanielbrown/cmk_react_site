import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Videoconferencing from "../Global/Videoconferencing";

export default class Policies extends Component {
  render() {
    return (
      <div className="policies-container">
        <Helmet>
          <meta charSet="utf-8" />

          <title>Christen's Policies</title>
          <meta
            name="description"
            content="This page describes Christen's treatments, fees, and cancellation policies."
          />
          <link rel="canonical" href="http://christenkerrmd.com/#/policies" />
        </Helmet>
        <h1 className="policy-header">Policies</h1>
        <div id="treatment">
          <h1>Treatment</h1>I believe treatment proceeds best during regularly
          scheduled appointments in the consistent and private setting of my
          office, or via video conference. I provide individual therapy and
          medication management. Because of my extensive psychotherapy training,
          I do not provide medication management for patients in therapy with
          other providers. Please let me know how you would like to be addressed
          and what pronouns you would prefer.
          <br />
          <br />
          All work is done on an outpatient basis. If inpatient treatment is
          needed, I am available to facilitate a transfer to another provider in
          a hospital setting.
          <br />I do participate in the VA Prescription Monitoring program."
        </div>

        <div id="video">
          <h1>Video</h1>
          <Videoconferencing />
        </div>

        <div id="termination">
          <h1>Termination</h1>
          Ending therapy is an integral part of treatment. It should be
          considered carefully and discussed as one’s goals are achieved, in
          order to obtain maximum benefit from the termination process.
        </div>
        <div id="fees">
          <h1>Fees</h1>I do not participate with any insurance companies. I have
          opted out of Medicare. Any insurance reimbursement would be paid
          directly to you and subtracted from your total cost. Payment should be
          made directly to me at time of service by check or credit card. There
          is a 3% surcharge for credit card payments. The statement will be
          provided to you by mail. You may present that to your insurance
          company for reimbursement. Your good faith estimate can be calculated
          by adding your initial consultation fee of $600 with weekly or
          bi-weekly followup visits X the fee of $340. The following fees are
          provided for you as a good faith estimate for the cost of your
          treatment:
          <br />
          <br />
          Diagnostic evaluation (1 and a half hours): $600
          <br />
          <br />
          45 minute follow-up visit: $340
          <br />
          <br />
          Completion of forms: $75
          <br />
          <br />A fee of $340 is charged for missed appointments unless they’re
          canceled or rescheduled at least 24 hours prior. Fees are subject to a
          4% increase every January.
          <br />
          <br />
        </div>
        <div id="confidentiality">
          <h1>Confidentiality</h1>I am a covered entity under HIPAA. I use AI
          for medical notes. Your appointments will be recorded and processed by
          AI. As per our zero retention agreement with OpenAI, they do not store
          recordings of your visits. Your medical records remain secure in my
          office. I take care to not release protected health information
          without your written consent, except in situations where the patient
          or others are at risk of injury or under certain court orders.
          <br />
          My office is in my home. Please do not bring any weapons to your
          appointments.
        </div>
      </div>
    );
  }
}
