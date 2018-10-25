// Page Description: This is the beneficiary page for the application
// Last modified: 25 October 2018

import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

const Beneficiary = () => (
  <div>
    <h1>REGISTER A NEW BENEFICIARY</h1>
<div className = "Container-RB">
<Container>
    <Form>
    <FormGroup>
      <Label for="exampleSelect">Choose your default payment account</Label>
      <Input type="select" name="select" id="exampleSelect" placeholder="Account">
        <option>Cheque Account</option>
        <option>Credit Account</option>
        <option>Savings Account</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="text">Beneficiary Name</Label>
      <Input type="text" name="text" id="text" placeholder="Name of Beneficiary" />
    </FormGroup>
    <FormGroup>
      <Label for="bank">Beneficiary  Bank</Label>
      <Input type="select" name="select" id="exampleSelect">
        <option>The Bank of the Sun</option>
        <option>Standard Bank</option>
        <option>FNB</option>
        <option>ABSA</option>
        <option>Capitec Bank</option>
      </Input>
    </FormGroup>
    {/* <FormGroup>
      <Label for="text">Payment References</Label>
      <Input type="textarea" name="text" id="text" placeholder="Their reference?" /><br/>
      <Input type="textarea" name="text" id="text" placeholder="My reference?" />
    </FormGroup> */}
    <FormGroup tag="fieldset">
      <legend>Proof of Payment</legend>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
          Email
        </Label>
      </FormGroup>
    <br/>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
          SMS
        </Label>
      </FormGroup>
      {/* <FormGroup check disabled>
        <Label check>
          <Input type="radio" name="radio1" disabled />{' '}
          Option three is disabled
        </Label>
      </FormGroup> */}
    </FormGroup>
    <FormGroup>
      <Label for="text">Beneficiary Account Number</Label>
      <Input type="tel" name="accNum" id="accNum" maxlength="13" placeholder="000-00000-000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
    </FormGroup>
    <FormGroup>
      <Label for="text">Account Type</Label>
      <Input type="select" name="accType" id="accType" placeholder="Account type">
        <option>Cheque Account</option>
        <option>Credit Account</option>
        <option>Savings Account</option>
      </Input>
    </FormGroup>
    <Button href = "Beneficiary1">Submit </Button>
    <br/>
    <br/>
    <Button href = "Payments">Cancel </Button>
  </Form>
 </Container>
  </div>
</div>
);

export default Beneficiary;
