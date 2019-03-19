import React, { Component } from 'react';
import MapContainer from "../../Global/MapContainer";
import {Helmet} from "react-helmet";

export default class ContactInformation extends Component {
  render() {
    return (
      <div className="m-container">
      <Helmet>
      <meta charSet="utf-8" />

      <title>Christen's Contact Information</title>
      <meta name="description" content="This page describes the directions to Christen's office as well as her contact information." />
      <link rel="canonical" href="http://christenkerrmd.com/#/Contact-information" />
      </Helmet>
        <h2>Christen's office is located at 1307 Dolley Madison Blvd Suite 3C McLean, VA 22101. <a href="https://www.google.com/maps/place/1307+Dolley+Madison+Blvd,+McLean,+VA+22101/@38.9402127,-77.1787593,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b55f28762b15:0xf44a32d9017eb129!8m2!3d38.9402127!4d-77.1765706"><i class="fas fa-map-marker-alt"></i></a></h2>
        <h2>If you are a new patient and would like to schedule an initial consultation, please call <a href="tel:571-835-6474">571-835-6474</a>.</h2>
        <h2>To contact the office otherwise, please call <a href="703-734-7961">703-734-7961</a>.</h2>
        <h2>Fax: <a href="tel:703-734-7962">703-734-7962</a></h2>
        <MapContainer></MapContainer>
      </div>
    )
  }
}
