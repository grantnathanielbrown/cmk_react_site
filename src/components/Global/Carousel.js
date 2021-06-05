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
<div id="homeCarousel" className="carousel slide" data-ride="carousel" data-interval="5000" data-keyboard="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Bike} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Hike} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Chess} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Window} alt="Fourth slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={DC} alt="Fifth slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Skyline} alt="Sixth slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Sunset} alt="Seventh slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
  }
}
