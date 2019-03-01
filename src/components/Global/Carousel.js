import React, { Component } from 'react'
import Bike from '../Images/bike.png';
import Hike from '../Images/hike.png';
import Chess from '../Images/chess-3303829_960_720.jpg';
import Window from '../Images/istockphoto-841246134-612x612.jpg';
import DC from '../Images/8151987436_d05fa6aa07_b.jpg';
import Skyline from '../Images/Washington-DC-skyline.jpg';
import Sunset from '../Images/GettyImages_870316052.0.jpg';

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
      <img class="d-block w-100" src={Chess} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Window} alt="Fourth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={DC} alt="Fifth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Skyline} alt="Sixth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Sunset} alt="Seventh slide"/>
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
