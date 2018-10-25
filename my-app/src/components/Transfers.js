// Description: Transfers of Student, Savings and credit Accounts
// Date: 16 October 2018

import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Button, Container, Form, FormGroup, Label, Input, InputGroup, FormText, InputGroupAddon } from 'reactstrap';


const Transfers = () => (

    <div>
       <div class= "container-t">
       <Link to={`/InterAccount`}>Inter-Account Transfers..</Link> // links for different types of transfers
       <Link to={`/Transfers`}>Fund a Transfer Now..</Link>
       <Link to={`/Transfers1`}>Fund a Transfer on a certain Date..</Link>
       <Link to={`/Transfers2`}>Fund a Transfer more than once..</Link>
   </div>

                  <Container>
                            <h1>TRANSFERS</h1>
                             <h3>Fund a Transfer with a Specified amount now</h3>

                            <Form>
                              <FormGroup>
                                <Label for="text">Your Full Name..</Label>
                                <Input type="text" name="text" id="text" placeholder="Name and Surname" />
                              </FormGroup>
                            <br  />
                            <FormGroup>
                              <Label for="text">From Your Account Number</Label>
                              <Input type="tel" name="accNum" id="accNum" maxlength="13" placeholder="000-00000-000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                            </FormGroup>

                            <FormGroup>
                              <Label for="text">Account Type</Label>
                              <Input type="select" name="accType" id="accType" placeholder="Account type">
                                <option>Student Account</option>
                                <option>Savings Account</option>
                                <option>Credit Account</option>
                              </Input>
                            </FormGroup>
                            <FormGroup>
                              <Label for="text">To which Account</Label>

                              <Input type="tel" name="accNum" id="accNum" maxlength="13" placeholder="000-00000-000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                            </FormGroup>
                                 <InputGroup>
                                 <InputGroupAddon addonType="prepend">R</InputGroupAddon>
                                 <Input placeholder="Amount" type="number" step="1" />
                                 <InputGroupAddon addonType="append">.00</InputGroupAddon>
                          </InputGroup>
                        </Form>
                        <br/>

                          <FormGroup>
                               <Label for="text">Payment References</Label>
                               <Input type="textarea" name="text" id="text" placeholder="Their reference?" /><br/>
                               <Input type="textarea" name="text" id="text" placeholder="My reference?" />
                          </FormGroup>
                             <br/>
                          <Button>Submit & Transfer</Button>
                             <br/>
                        <br/>
                             <Button>Abort Mission..</Button> //this type of button for better options for User Interface
                    </Container>
          </div>
    );

export default Transfers;
