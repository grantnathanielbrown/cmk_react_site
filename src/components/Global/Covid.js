import React, { Component } from "react";
import { Link } from "react-router-dom";
import Videoconferencing from "./Videoconferencing";
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
          <Videoconferencing />
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
