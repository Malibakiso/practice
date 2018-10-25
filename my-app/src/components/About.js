// Description: The About Page for the application which includes extra information
// Last modified: 25 October 2018


import React from 'react';
import {Container} from 'reactstrap';
// import {Carousel } from 'react-bootstrap';
// import {CarouselItem } from 'react-bootstrap';
// import {CarouselCaption } from 'react-bootstrap';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// // import RBCarousel from "react-bootstrap-carousel";

const About = () => (

<div>
  <div class ="container" className="text-center">
    <h1>About Us</h1>
    <section className="about" id="about" className="text-center">
      <div className="container-about" className="text-center">
        <div className="container" className="text-center">
          <div className="Col sm={6} md={4} / about-center">
            <h3 className="text-center">The Bank of the Sun</h3>
            <p style={{fontSize:'15px', textAlign:'center'}}>Access the true meaning of efficiency with The Bank of the Sun with our simplified complexity!<br />
            We create and deliver innovative advisory, funding, trading, corporate banking and principal investing
            solutions for our clients. We are innovative thinkers who turn challenges into opportunities.</p>
           </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </section>
</div>

<Container>
  <div id="carouselAboutUs" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-interval="10" data-slide-to="0" class="active"></li>
      <li data-interval="10" data-slide-to="1"></li>
      <li data-interval="10" data-slide-to="2"></li>
      <li data-interval="10" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="./assets/stellies1.jpg" alt="First slide"/>
        <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./assets/stellies6.jpg" alt="Second slide"/>
        <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./assets/stellies8.jpg" alt="Third slide"/>
        <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./assets/stellies7.jpg" alt="Third slide"/>
        <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</Container>
</div>
);

export default About;
