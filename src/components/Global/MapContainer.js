import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      
      <Map className="map-container" google={this.props.google}
      initialCenter={{
        lat: 38.940184,
        lng: -77.176601
      }} zoom={12}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Office'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDx6I9o8YnOnTWat39QRbNdf1a2CTW-Gh0')
})(MapContainer)