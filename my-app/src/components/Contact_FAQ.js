import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";

const Contact_FAQ = () => (
<div>

  <section className="about" id="about">
            <div className="container">
              <div className="about-heading">
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="about-grids">
                <div className="col-md-6 about-left">
                  <img src="images/box-1.jpg" alt />
                </div>
                <div className="col-md-6 about-right">
                  <h3>The Bank of the Sun, pride themselves in making sure our clients needs are always met.</h3>
                  <p>Sometimes banking is not as easy as it seems, with that being said we at The Bank of the Sun are always looking to enhance our systems just for you!</p>
                  <p>We create and deliver innovative advisory, funding, trading, corporate banking and principal investing
                    solutions for our clients. We are innovative thinkers who turn challenges into opportunities.</p>
                  <div className="more">
                    <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </section>
          {/* //about */}
          <section className="about" id="about">
            <div className="container">
              <div className="about-heading">
              </div>
              <div className="about-grids">
                <div className="col-md-6 about-left">
                  <img src="images/faqsmain.png" alt />
                </div>
                <div className="col-md-6 about-right">
                  <h3>Our FAQs..</h3>
                  <br />
                  <h6>What are the benefits of the Internet Banking service?</h6>
                  <p>•It is a simple, convenient and timely way to access and transact on your account. <br />
                    •The elimination of the manual process of requesting the transfer of funds.
                  </p>
                  <h6>Is Internet Banking available 24 hours a day?</h6>
                  <p>No, it will only be available from 7am until 4pm, Monday to Friday.</p>
                  <h6>What if I forget my PIN?</h6>
                  <p>Your PIN does not expire but you can change it on any digital banking device whenever you wish. We recommend that you change your PIN regularly.</p>
                  <h6>What type of beneficiaries can be added online?</h6>
                  <p>You may add any beneficiary to your profile once you have additionally authenticated yourself via an SMS reference number.<br />
                    &nbsp;        The following beneficiaries may be added to your profile:<br />
                    • Beneficiaries with other South African bank accounts<br />
                    • Bank of the Sun accounts<br />
                    • Approved Beneficiaries*<br />
                    • Credit Card/Debit Card accounts<br />
                    *An "approved beneficiary" is a company or institution with which The Bank of the Sun has a special payment agreement for your convenience (e.g. Telkom). When paying an `approved beneficiary', you don't need the beneficiary's banking details.</p>
                  <h6>Can I link new beneficiaries over the telephone whilst speaking to the consultant?</h6>
                  <p>Yes. You may instruct the consultant to add any beneficiary to your profile, however you will be required to provide the consultant with the SMS reference number in order to authorise the consultant to proceed with the transaction&nbsp;</p>
                  <h6>How soon will a payment go through?</h6>
                  <p>When you pay a third-party beneficiary, your payment may not go through immediately. Always allow for a delay, especially when making payments to accounts at banks other than The Bank of the Sun. As a guide: when you make a payment to another bank on Wednesday morning, the funds will be available on Friday.</p>
                  <h6>What is my daily payment/transfer limit?</h6>
                  <p>For security reasons you are allocated a daily maximum limit for transfers and payments. This limit can be arranged with The Bank of the Sun Contact Centre or the branch for a value up to R 130&nbsp;000.</p>
                  <h6>How do I increase or decrease my payment/transfer limits</h6>
                  <p>To increase your payment or transfer limits you may call the The Bank of the Sun Contact Centre on 021 2320 564, a consultant will assist to increase or decrease the limits up to a MAX value of R 130&nbsp;000.</p>
                  <div className="more">
                    <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </section>

          <div className="clearfix" />

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
</div>



);

export default Contact_FAQ;
