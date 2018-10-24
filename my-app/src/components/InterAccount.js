import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Button, Container, Form, FormGroup, Label, Input, InputGroup, FormText, InputGroupAddon } from 'reactstrap';

const InterAccount = () => (

  <div>
  <h1>INTER-ACCOUNT TRANSFERS</h1>

   <h3>Transfer in between your own Accounts</h3>
<Container>
  <FormGroup>
    <Label for="text">From which Account</Label>
    <Input type="select" name="accType" id="accType" placeholder="Account type">
      <option>Cheque Account</option>
      <option>Savings Account</option>
      <option>Credit Account</option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="text">To which Account</Label>
    <Input type="select" name="accType" id="accType" placeholder="Account type">
      <option>Cheque Account</option>
      <option>Savings Account</option>
      <option>Credit Account</option>
    </Input>
  </FormGroup>
  <InputGroup>
  <InputGroupAddon addonType="prepend">R</InputGroupAddon>
  <Input placeholder="Amount" type="number" step="1" />
  <InputGroupAddon addonType="append">.00</InputGroupAddon>
</InputGroup>
<br/>
<FormGroup>
<Label for="text">Reference</Label>
<Input type="textarea" name="text" id="text" placeholder="Your personal reference?" />
</FormGroup>
<br/>
<Button>Submit & Transfer</Button>
<br/>
<br/>
<Button>Abort Mission..</Button>
</Container>
</div>
    );

export default InterAccount;
