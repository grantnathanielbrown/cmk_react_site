import React, { Component } from "react";

export default class Videoconferencing extends Component {
  render() {
    return (
      <div className="videoconferencing">
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
            </div>
          </div>
      </div>
    );
  }
}
