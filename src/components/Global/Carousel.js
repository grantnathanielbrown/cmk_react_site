import React, { Component } from 'react'
import Bike from '../Images/bike.jpg';
import Hike from '../Images/hike.jpg';
import Island from '../Images/island.jpg';

export default class Carousel extends Component {
  render() {
    return (     
<div id="homeCarousel" class="carousel slide" data-ride="carousel" data-interval="5000" data-keyboard="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={Bike} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Hike} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Island} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
  }
}
