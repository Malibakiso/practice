import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Button, Container, Form, FormGroup, Label, Input, InputGroup, FormText, InputGroupAddon } from 'reactstrap';

const Transfers1 = () => (

<div>
  <Container>
          <h3>Fund a Transfer once on a specified Date</h3>

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
      <Button>Abort Mission..</Button>
  </Container>
</div>
);

export default Transfers1;
