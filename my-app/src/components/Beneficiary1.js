// Page Description: This is the initial beneficiary page for the application
// Last modified: 25 October 2018

import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

const Beneficiary1 = () => (
  <div className= "container-newb">
    <Container>
    <h1>PAY A NEW BENEFICIARY</h1>

    <Form>
    <FormGroup>
      <Label for="exampleSelect">Choose your payment account</Label>
      <Input type="select" name="select" id="exampleSelect" placeholder="Account">
        <option>Cheque Account</option> //account options
        <option>Credit Account</option>
        <option>Savings Account</option>
      </Input>
    </FormGroup>

    <FormGroup>
      <Label for="text">Beneficiary Name</Label>
      <Input type="text" name="text" id="text" placeholder="Name of Beneficiary" />
    </FormGroup>

    <FormGroup>
      <Label for="bank">Beneficiary Bank</Label>
      <Input type="select" name="select" id="exampleSelect">
        <option>The Bank of the Sun</option>
        <option>Standard Bank</option>
        <option>FNB</option>
        <option>ABSA</option>
        <option>Capitec Bank</option>
      </Input>
    </FormGroup>

    <FormGroup>
    <Label for="phone">Phone:</Label>
    <Input type="tel" id="phone" name="phone"
           placeholder="123-456-7890"
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
           required >
    </Input>
  </FormGroup>
    <FormGroup>
      <Label for="text">Payment References</Label>
      <Input type="textarea" name="text" id="text" placeholder="Their reference?" /><br/>
      <Input type="textarea" name="text" id="text" placeholder="My reference?" />
    </FormGroup>

    <FormGroup>
      <Label for="text">Beneficiary Account Number</Label>
      <Input type="tel" name="accNum" id="accNum" maxlength="13" placeholder="000-00000-000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
    </FormGroup>

    <FormGroup>
      <Label for="text">Account Type</Label>
      <Input type="select" name="accType" id="accType" placeholder="Account type">
        <option>Cheque Account</option> //account options
        <option>Credit Account</option>
        <option>Savings Account</option>
      </Input>
    </FormGroup>

    <Button href = "HomePage">Submit</Button>
    <br/>
    <br/>
    <Button href = "Payments">Cancel</Button>
  </Form>
 </Container>
  </div>
);

export default Beneficiary1;
