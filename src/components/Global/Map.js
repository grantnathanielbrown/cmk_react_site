// import React, { Component } from 'react'

// export default class Map extends Component {

//     componentWillMount () {
//         const script = document.createElement("script");

//         script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwWYH7qv_xWDimFqdfB5-HEAwnVxIBbr8&libraries=places&callback=initMap";
//         script.async = true;

//         document.body.appendChild(script);
//     }
    
//   render() {

//     function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 38.9402272, lng: -77.1776478},
//           zoom: 15
//         });

//         var infowindow = new google.maps.InfoWindow();
//         var service = new google.maps.places.PlacesService(map);

//         service.getDetails({
//           placeId: 'ChIJFSt2KF-1t4kRKbF-AdkySvQ'
//         }, function(place, status) {
//           if (status === google.maps.places.PlacesServiceStatus.OK) {
//             var marker = new google.maps.Marker({
//               map: map,
//               position: place.geometry.location
//             });
//             google.maps.event.addListener(marker, 'click', function() {
//               infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//                 'Place ID: ' + place.place_id + '<br>' +
//                 place.formatted_address + '</div>');
//               infowindow.open(map, this);
//             });
//           }
//         });
//       }

//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
