import React from "react";
import reactDOM from 'react-dom';

  const Contact = () => {
    return(
      <div>
        <div class="logo">
          <a href="index.html">
            {/* <!--<i class="fa fa-inr" aria-hidden="true"></i>-->  */}
            The Bank<span> of the Sun</span></a>
        </div>
    {/* <!-- contact --> */}
    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-heading">
          <h3>Contact us</h3>
        </div>
        <div class="contact-grids">
          <div class=" col-md-6 contact-form">
             <form action="https://cms.jotform.com/uploads/answers/answer/btzap/595457_111.jpg" method="post">
                <input type="text" placeholder="Subject" required=""/>
                <input type="text" placeholder="Your name" required=""/>
                <input type="email" placeholder="Your mail" required=""/>
                <textarea placeholder="Message" required=""></textarea>
                <div class="submit1">
                  <input type="submit" value="submit"/>
                </div>
            </form>
          </div>
          <div class=" col-md-6 map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4258.600614926214!2d18.863204715729832!3d-33.932657080638556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb25d605f7069%3A0xb8a7267b68e9efcd!2sNeelsie+Student+Centre%2C+Stellenbosch+Central%2C+Stellenbosch%2C+7600%2C+South+Africa!5e1!3m2!1sen!2sin!4v1539894146901" width="600" height="450" frameborder="0" style={{border: '0'}} allowfullscreen></iframe>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </section>
    {/* <!-- //contact -->
    <!-- footer --> */}
    <section class="footer">
      <div class="container">
        <div class="footer-grids">
          <div class="col-md-4 footer-grid1">
            <div class="logo1">
              <a href="index.html">The Bank <span>Of The Sun</span></a>
            </div>
            <p> We create and deliver innovative advisory, funding, trading, corporate banking and principal investing
               solutions for our clients.</p>
            <p> We are innovative thinkers who turn challenges into opportunities.</p>
          </div>
          <div class="col-md-3 footer-grid2">
            <h4>Locations</h4>
            <p class="p1">Neelsie Student center,Stellenbosch</p>
            <p>1 De Beer Street, Stellenbosch,7600</p>
            <p class="p1">Stellenbosch,Neelsie</p>
            <p>Near Pulp cinema</p>
          </div>
          <div class="col-md-2 footer-grid3">
            <h4>menu</h4>
              <p><a href="#index.html" class="scroll">home</a></p>
              <p><a href="#about" class="scroll">about</a></p>
              <p><a href="#services" class="scroll">services</a></p>
              <p><a href="#account" class="scroll">account</a></p>
              <p><a href="#profile" class="scroll">profile</a></p>
              <p><a href="#contact" class="scroll">contact</a></p>
              <p><a href="#signout" class="scroll">signout</a></p>
          </div>
          <div class="col-md-3 footer-grid4">
            <h4>our links</h4>
            <p><a href="#">Funds transfer</a></p>
            <p><a href="#">Mobile banking</a></p>
            <p><a href="#">Deposits</a></p>
            <p><a href="#">New joint accounts</a></p>
            <p><a href="#">Internet online banking</a></p>
            <p><a href="#">Balance enquiry</a></p>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </section>
    {/* <!-- //footer -->

    <!-- copyright --> */}
    <section class="copyright">
      <div class="agileits_copyright text-center">
          <p>© 2018 The Bank of The Sun. All rights reserved | Design by <a href="//w3layouts.com/" class="w3_agile">Control Alt elite</a></p>
      </div>
    </section>
      </div>
    );
  };
  export default Contact;
