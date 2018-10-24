import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Container } from 'reactstrap';

const ContactUs = () => (
<div>
 <Container>
          <section className="contact" id="contact">
          <div className="container">
            <div className="contact-heading">
              <h3>Contact Us</h3>
            </div>
            <div className="contact-grids">
              <div className=" col-md-6 contact-form">
                <form action="https://cms.jotform.com/uploads/answers/answer/btzap/595457_111.jpg" method="post">
                  <input type="text" placeholder="Subject" required />
                  <input type="text" placeholder="Your name" required />
                  <input type="email" placeholder="Your mail" required />
                  <textarea placeholder="Message" required defaultValue={""} />
                  <div className="submit1">
                    <input type="submit" defaultValue="submit" />
                  </div>
                </form>
              </div>
              <div className=" col-md-6 map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4258.600614926214!2d18.863204715729832!3d-33.932657080638556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb25d605f7069%3A0xb8a7267b68e9efcd!2sNeelsie+Student+Centre%2C+Stellenbosch+Central%2C+Stellenbosch%2C+7600%2C+South+Africa!5e1!3m2!1sen!2sin!4v1539894146901" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />			</div>
              <div className="clearfix" />
            </div>
          </div>
        </section>
  </Container>
</div>



);

export default ContactUs;
