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
        <h2>1307 Dolley Madison Blvd</h2>
        <h2>Suite 3C</h2>
        <h2>McLean, VA 22101</h2>
        <h2>For an appointment, call <a href="tel:703-734-7961">703-734-7961</a> and leave a message. I will return your call with available appointment times.</h2>
        <h2>Fax: <a href="tel:703-734-7962">703-734-7962</a></h2>
        <MapContainer></MapContainer>
      </div>
    )
  }
}
