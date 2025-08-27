import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class ContactInformation extends Component {
  render() {
    return (
      <div className="m-container">
        <Helmet>
          <meta charSet="utf-8" />

          <title>Christen's Contact Information</title>
          <meta
            name="description"
            content="This page describes the directions to Christen's office as well as her contact information."
          />
          <link
            rel="canonical"
            href="http://christenkerrmd.com/#/Contact-information"
          />
        </Helmet>
        <h1>Contact</h1>
        <h2>
          Christen's office is located in McLean. The address will be provided
          when you schedule your appointment.
        </h2>
        <h2>
          To contact the office, please call{" "}
          <a href="703-734-7961">703-734-7961</a>.
        </h2>
        <h2>Fax: 703-775-4770</h2>
      </div>
    );
  }
}
