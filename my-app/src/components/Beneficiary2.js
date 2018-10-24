import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { ControlLabel, FormControl } from 'react-bootstrap';

const Beneficiary2 = () => (
  <div>
  <Container>
    <Form>
    <h1>REMOVE AN EXISTING BENEFICIARY</h1>

      <Form inline>
      <FormGroup controlId="formInlineName">
        <ControlLabel>Name:</ControlLabel>{' '}
        <FormControl type="text" placeholder="Beneficiary Name" />
      </FormGroup>{' '}
      <FormGroup controlId="formInlineEmail">
        <ControlLabel>Username:</ControlLabel>{' '}
        <FormControl type="email" placeholder="Beneficiary Username" />
      </FormGroup>{' '}
      <Button type="submit">Remove as Beneficiary</Button>
      </Form>
        </Form>
       </Container>

     <br/>
     <br/>

       <Container>
         <Form>
       <Form inline>
       <FormGroup controlId="formInlineName">
         <ControlLabel>Name:</ControlLabel>{' '}
         <FormControl type="text" placeholder="Beneficiary Name" />
       </FormGroup>{' '}
       <FormGroup controlId="formInlineEmail">
         <ControlLabel>Username:</ControlLabel>{' '}
         <FormControl type="email" placeholder="Beneficiary Username" />
       </FormGroup>{' '}
       <Button type="submit">Remove as Beneficiary</Button>
       </Form>
         </Form>
        </Container>
        </div>
);

export default Beneficiary2;
