import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Container } from 'reactstrap';
// import { Grid, Row, Col, Clearfix } from 'react-boostrap';

const FAQ = () => (
<div>
 <Container className="faq">
          <section className="about" id="about">
            <div className="container-imag">
              <div className="about-heading">
              </div>
              <div className="about-grids">
                <div className="col">
                  <img src="./assets/faqsmain.png" alt class="center"/>
                </div>
                <div className="faq2">
                  {/* <h3>Our Frequently Asked Questions..</h3> */}
                  <br />
                  <h6>What are the benefits of the Internet Banking service?</h6>
                  <p style={{fontSize:'15px', textAlign:'center'}} class="solid">•It is a simple, convenient and timely way to access and transact on your account. <br />
                    •The elimination of the manual process of requesting the transfer of funds.
                  </p>
                  <h6>Is Internet Banking available 24 hours a day?</h6>
                  <p style={{fontSize:'15px', textAlign:'center'}} class="solid">No, it will only be available from 7am until 4pm, Monday to Friday.</p>
                  <h6>What if I forget my PIN?</h6>
                  <p style={{fontSize:'15px', textAlign:'center'}} class="solid">Your PIN does not expire but you can change it on any digital banking device whenever you wish. We recommend that you change your PIN regularly.</p>
                  <h6>What type of beneficiaries can be added online?</h6>
                  <p style={{fontSize:'15px', textAlign:'center'}} class="solid">You may add any beneficiary to your profile once you have additionally authenticated yourself via an SMS reference number.<br />
                    &nbsp;        The following beneficiaries may be added to your profile:<br />
                    • Beneficiaries with other South African bank accounts<br />
                    • Bank of the Sun accounts<br />
                    • Approved Beneficiaries*<br />
                    • Credit Card/Debit Card accounts<br />
                    •*An "approved beneficiary" is a company or institution with which The Bank of the Sun has a special payment agreement for your convenience (e.g. Telkom). When paying an `approved beneficiary', you don't need the beneficiary's banking details.</p>
                  <h6>Can I link new beneficiaries over the telephone whilst speaking to the consultant?</h6>
                  <p style={{fontSize:'15px', textAlign:'center'}} class="solid">Yes. You may instruct the consultant to add any beneficiary to your profile, however you will be required to provide the consultant with the SMS reference number in order to authorise the consultant to proceed with the transaction&nbsp;</p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </section>

          <div className="clearfix" />
  </Container>
</div>



);

export default FAQ;
