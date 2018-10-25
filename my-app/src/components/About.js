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
<Container>
  <div class ="container" className="text-center">
    <h1>About Us</h1>
    <section className="about" id="about" className="text-center">
      <div className="container-about" className="text-center">
        <div className="container" className="text-center">
          <div className="Col sm={3} md={1} ">
            {/* <h3 className="text-center">The Bank of the Sun</h3> */}
            <p style={{fontSize:'15px', textAlign:'justify',margin:'30px'}}>Access the true meaning of efficiency with The Bank of the Sun with our simplified complexity!<br />
            We create and deliver innovative advisory, funding, trading, corporate banking and principal investing
            solutions for our clients. We are innovative thinkers who turn challenges into opportunities.</p>
           </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </section>
</div>
</Container>
<br/>
<br/>

<Container>
  <div class="container" className="text-center">
    <h2 style={{fontSize:'25px', textAlign:'center',color:'black'}}>Meet the Team</h2>
  <section class="section-padding darker-bg" className="text-center">
      <div class="row" className="text-center">
        <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8">
          <div class="intro-title" className="text-center">
            <div className="hidden-xs">
              {/* <p style={{fontSize:'15px', textAlign:'center'}}>The Bank of the Sun can confidently say they have established this Bank with the Top Young Web Developers in the Country.</p> */}
              <br/>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        {/* <!-- single intro --> */}
        <div class="col-md-3">
          <div class="single-intro">
            <div class="intro-img intro-bg1"></div>
            <div class="intro-details text-center">
              <h3>Zvikomborero Chitiyo</h3>
              <p>The master Typer & a soon to be Curator of Web development.</p>
            </div>
          </div>
        </div>
        {/* <!-- single intro --> */}
        <div class="col-md-3">
          <div class="single-intro">
            <div class="intro-img intro-bg2"></div>
            <div class="intro-details text-center">
              <h3>Courtney Terrence Yon</h3>
              <p>Mr Direction, as he sets the pace and route the Team should take.</p>
            </div>
          </div>
        </div>
        {/* <!-- single intro --> */}
        <div class="col-md-3">
          <div class="single-intro">
            <div class="intro-img intro-bg3"></div>
            <div class="intro-details text-center">
              <h3>Malibakiso Mpeke</h3>
              <p>The Queen of styling and the refinement leader of all areas for The Bank of the Sun.</p>

            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="single-intro">
            <div class="intro-img intro-bg4"></div>
            <div class="intro-details text-center">
              <h3>Vincent C Ndyafi</h3>
              <p>The Developer, all relevant components must go through him before execution.    </p>

            </div>
          </div>
        </div>
      </div>

  </section>
  </div>
  {/* <!-- intro area end --> */}
</Container>
</div>
);

export default About;
