// Page Description: Contact us page for client relations
// Last modified: 25 October 2018


import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Container } from 'reactstrap';
import { FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
const ContactUs = () => (

<div>
<center>
 <Container className="contact">
   <div className="profile-update-wrapper">
          <div className="single-post-title comment-title">
            {/* <h1>Please feel free to contact us? What do you have to lose?</h1> */}
          </div>
          <form className="contact-form" id="contactForm" name="contact-form" action="sendemail.php" method="POST">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <FormGroup className="text-center">
                    <InputGroup>
                      <InputGroup.Addon></InputGroup.Addon>
                      <FormControl type="text" placeholder="Your username" />
                    </InputGroup>
                  </FormGroup>
                  <br />
                  <br />
                  <div className="form-group" className="text-center">
                    <label className="sr-only" htmlFor="address">Comments</label>
                    <textarea name="message" className="form-control" id="message" placeholder="What can we help you with?" defaultValue={""} />
                  </div>
                </div><br />
                <div className="text-center">
                  <button type="submit" name="submit" className="btn btn-primary input-btn"><span>Submit</span></button>
                </div>
                <p />
              </div>
            </div>
            </form>
            </div>
              <div className=" col-md-6 map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4258.600614926214!2d18.863204715729832!3d-33.932657080638556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb25d605f7069%3A0xb8a7267b68e9efcd!2sNeelsie+Student+Centre%2C+Stellenbosch+Central%2C+Stellenbosch%2C+7600%2C+South+Africa!5e1!3m2!1sen!2sin!4v1539894146901" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />	</div>
      <div className="clearfix" />
  </Container>
  </center>
</div>



);

export default ContactUs;
