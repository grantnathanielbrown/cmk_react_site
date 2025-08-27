import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Covid extends Component {
  render() {
    return (
      <div className="covid-container">
        <div className="covid-content">
          <h1>Covid-19 Update</h1>
          Your health and safety are my first concern. In-person appointments
          are available to fully vaccinated patients and provide the highest
          quality experience. I recommend all initial consultations be done
          in-person, unless you are not fully vaccinated. Before initiating an
          in-person appointment, please review my Covid-19 guidelines below, and
          my policies by clicking <Link to="/Policies">here.</Link>
          <br />
          <br />
          <p>
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target="#guidelines"
              aria-expanded="false"
              aria-controls="guidelines"
            >
              Covid-19 Guidelines
            </button>
          </p>
          <div className="collapse" id="guidelines">
            <div className="card card-body">
              Please understand that by coming to the office, you are assuming
              the risk of exposure to the coronavirus (or other public health
              risk).
              <br />
              <br />
              This risk may increase if you travel by public transportation,
              cab, or ride sharing service.
              <br />
              <br />
              Do not come into the office if:
              <br />
              <br />
              1. You have symptoms of Covid such as cough, shortness of breath,
              fever, nausea, headache or sore throat.
              <br />
              <br />
              2. You have tested positive for Covid-19 in the last 10 days.
              <br />
              <br />
              3. You have been exposed to someone with symptoms of Covid-19 or
              who has tested positive for Covid-19 in the last 10 days. You will
              not be charged a late cancellation fee if you are unable to come
              to your appointment for these reasons.
              <br />
              <br />
              4. In compliance with CDC guidelines for healthcare settings, use
              of masks is optional. A mask is available if you need one.
              <br />
              <br />
              5. If you have tested positive for the coronavirus, I may be
              required to notify local health authorities that you have been in
              the office. If I have to report this, I will only provide the
              minimum information necessary for their data collection and will
              not go into any details about the reason(s) for our visits.
              <br />
              <br />
              Thank you for your attention to these guidelines. Your safety is
              my highest priority. Christen Kerr MD, PC
            </div>
          </div>
          <br />
          Certain circumstances, such as inclement weather or high levels of Covid in the community, may require conversion to virtual appointments. I will also offer virtual treatment when I am away for 2 weeks in the summer.
          To do your appointment via videoconference, review the instructions contained in the informed consent below.
          <br />
          <br />
          <p>
            <button
              id="about-button"
              className="btn btn-primary button-triad"
              type="button"
              data-toggle="collapse"
              data-target="#consent"
              aria-expanded="false"
              aria-controls="consent"
            >
              Informed Consent For Videoconferencing
            </button>
          </p>
          <div className="collapse" id="consent">
            <div className="consent-text card card-body">
              <h1>Informed consent for appointments via video conference</h1>
              <br />
              For virtual appointments, please notify me in advance, and then log on to
<a href="https://doxy.me/DrKerr">doxy.me/DrKerr</a>
<br />
 The Doxy.me site
          requires no account, is free of charge and is available on Desktop,
          Laptop, Tablet and Smartphone. Please test your microphone, camera and
          internet connection prior to your appointment and be in the virtual
          waiting room 5 minutes prior to your appointment time. If you have any
          problems with setup, please let me know so we do not spend your
          appointment time troubleshooting technical issues.
              <br />
              <br />
              At the start of your appointment, please let me know your
              location.
              <br />
              <br />
              Prescriptions will be filled electronically. Please provide the
              name, address, and phone number of the pharmacy.
              <br />
              <br />
              To schedule appointments or to contact me with routine questions
              between appointments, please call my office at 703-734-7961.
              <br />
              <br />
              Refer to the "Resources" link on this website for forms and
              questionnaires.
              <br />
              <br />I use a secure encrypted platform for videoconferencing but
              all technologies involve some risk to your privacy.
              <br />
              <br />
              Your medical records remain secure in my possession. I take care
              not to release protected health information without your written
              consent, except in situations where the patient or others are at
              risk of injury or under certain court orders.
              <br />
              <br />
              In case of emergency, please go to the nearest emergency room..
              Alternatively, you may page me by following the steps below. 1.
              Dial 301-901-2170. 2. Dial your own telephone number. 3. Press #
              and hang up. If you page me, please leave a message at my office
              at 703-734-7961.
              <br />
              <br />
              In the case of a technical failure during a video conference,
              please call me at 703-867-4710 or use the instructions above to
              page me.
              <br />
              <br />
              If you would like for me to collaborate with your primary care
              physician or other specialists or caregivers, please notify me and
              print out an authorization for release of information under the
              policies link on this website and return it to me.
              <br />
              <br />I do not participate with any insurance companies. I have
              opted out of Medicare. Any insurance reimbursement would be paid
              directly to you and subtracted from your total cost. Payment
              should be made directly to me at time of service by check or
              credit card. There is a 3% surcharge for credit card payments. The
              statement will be provided to you by mail. You may present that to
              your insurance company for reimbursement. Your good faith estimate
              can be calculated by adding your initial consultation fee of $600
              with weekly or bi-weekly followup visits X the fee of $340. The
              following fees are provided for you as a good faith estimate for
              the cost of your treatment:
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
              <br />A fee of $340 is charged for missed appointments unless
              they’re canceled or rescheduled at least 24 hours prior. Fees are
              subject to a 4% increase every January.
              <br />
              <br />
              If you feel that treatment outside the office is not meeting your
              needs or if I feel that your condition is not appropriate for this
              mode of treatment, a referral to another practitioner can be made.
            </div>
          </div>
          <br />
          Welcome to my practice. I hope this information provides guidelines
          for your therapy experience. If you have questions, please bring them
          to my attention. I look forward to taking this journey together.
          <br />
          <br />~ Christen M. Kerr, M.D. P.C.
        </div>
      </div>
    );
  }
}
