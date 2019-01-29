import React, { Component } from 'react';
import MapContainer from "../../Global/MapContainer";

export default class ContactInformation extends Component {
  render() {
    return (
      <div className="m-container">
        <h2>1307 Dolley Madison Blvd</h2>
        <h2>Suite 3C</h2>
        <h2>McLean, VA 22101</h2>
        <h2>Phone: 703-734-7961</h2>
        <h2>Fax:   703-734-7962</h2>
        <MapContainer></MapContainer>
      </div>
    )
  }
}
