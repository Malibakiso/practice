// Page Description: The second Beneficiary page created
// Date modified: 25 October 2018


import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { ControlLabel, FormControl } from 'react-bootstrap';

const Beneficiary2 = () => (
  <div class= "Container-rm">
  <Container>
    <Form>
    <h1>REMOVE AN EXISTING BENEFICIARY</h1>

      <Form inline>
      <FormGroup controlId="formInlineName">
        <ControlLabel>Name:</ControlLabel>{' '}
        <FormControl type="text" placeholder="Beneficiary Name" />
        {/* form control for the name of the benneficiary */}
      </FormGroup>{' '}
      <FormGroup controlId="formInlineEmail">
        <ControlLabel>Username:</ControlLabel>{' '}
        <FormControl type="email" placeholder="Beneficiary Username" />
        {/* username which needs to be added as information in order to work and post properly */}
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
         {/* inline name */}
         <ControlLabel>Name:</ControlLabel>{' '}
         <FormControl type="text" placeholder="Beneficiary Name" />
       </FormGroup>{' '}
       <FormGroup controlId="formInlineEmail">
         {/* email form */}
         <ControlLabel>Username:</ControlLabel>{' '}
         <FormControl type="email" placeholder="Beneficiary Username" />
       </FormGroup>{' '}
       <Button type="submit">Remove as Beneficiary</Button>
       {/* this submit button will allow for the removal of information */}
       </Form>
         </Form>
        </Container>
        <br/>
        <br/>
        <Container>
          <Form>
        <Form inline>
        <FormGroup controlId="formInlineName">
          {/* inline name */}
          <ControlLabel>Name:</ControlLabel>{' '}
          <FormControl type="text" placeholder="Beneficiary Name" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineEmail">
          {/* email form */}
          <ControlLabel>Username:</ControlLabel>{' '}
          <FormControl type="email" placeholder="Beneficiary Username" />
        </FormGroup>{' '}
        <Button type="submit">Remove as Beneficiary</Button>
        {/* this submit button will allow for the removal of information */}
        </Form>
          </Form>
         </Container>
         <br/>
         <br/>
         <Container>
           <Form>
         <Form inline>
         <FormGroup controlId="formInlineName">
           {/* inline name */}
           <ControlLabel>Name:</ControlLabel>{' '}
           <FormControl type="text" placeholder="Beneficiary Name" />
         </FormGroup>{' '}
         <FormGroup controlId="formInlineEmail">
           {/* email form */}
           <ControlLabel>Username:</ControlLabel>{' '}
           <FormControl type="email" placeholder="Beneficiary Username" />
         </FormGroup>{' '}
         <Button type="submit">Remove as Beneficiary</Button>
         {/* this submit button will allow for the removal of information */}
         </Form>
           </Form>
          </Container>

          <br/>
          <br/>
          <Container>
            <Form>
          <Form inline>
          <FormGroup controlId="formInlineName">
            {/* inline name */}
            <ControlLabel>Name:</ControlLabel>{' '}
            <FormControl type="text" placeholder="Beneficiary Name" />
          </FormGroup>{' '}
          <FormGroup controlId="formInlineEmail">
            {/* email form */}
            <ControlLabel>Username:</ControlLabel>{' '}
            <FormControl type="email" placeholder="Beneficiary Username" />
          </FormGroup>{' '}
          <Button type="submit">Remove as Beneficiary</Button>
          {/* this submit button will allow for the removal of information */}
          </Form>
            </Form>
           </Container>
        </div>
);

export default Beneficiary2;
