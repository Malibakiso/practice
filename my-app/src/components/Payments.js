import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import {Carousel } from 'react-bootstrap';
import {CarouselItem } from 'react-bootstrap';
import {CarouselCaption } from 'react-bootstrap';

const Payments = () => (
  <div>
    <div class= "container-p">
      <Link to={`/Beneficiary`}>Register a Beneficiary</Link>
      <Link to={`/Beneficiary1`}>Pay a Beneficiary</Link>
      <Link to={`/Beneficiary2`}>Remove a Beneficiary</Link>
</div>
  <Container>
    <h1>PAYMENTS</h1>
   <Carousel>
      <Carousel.Item>
        <img width={500} height={100} alt="500x100" src="/carousel.png" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={100} alt="500x100" src="/carousel.png" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={100} alt="500x100" src="/carousel.png" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  </div>
);

export default Payments;
