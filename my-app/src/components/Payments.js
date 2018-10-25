// Description: The payments section allows fo the registering, paying and removing of beneficiaries
// Last modified:

import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import {Carousel } from 'react-bootstrap';
import {CarouselItem } from 'react-bootstrap';
import {CarouselCaption } from 'react-bootstrap';

const Payments = () => (
  <div>
    <div class= "container-p">
      <Link to={`/Beneficiary`}>Register a Beneficiary</Link> //links to the beneficiary sections
      <Link to={`/Beneficiary1`}>Pay a Beneficiary</Link>
      <Link to={`/Beneficiary2`}>Remove a Beneficiary</Link>
</div>
  <Container>
    <h1>PAYMENTS</h1>
    </Container>
  </div>
);

export default Payments;
