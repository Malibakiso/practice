import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Button, Form, FormGroup, Label, Input, InputGroup, FormText, InputGroupAddon } from 'reactstrap';

const Prepaid = () => (

      <div>
        <h1>PREPAID AND UTILTIY OPTIONS</h1>

        <h3>Airtime</h3>

        <Form>
        <FormGroup>
          <Label for="network">Network Provider</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Cell C</option>
            <option>MTN</option>
            <option>Telkom</option>
            <option>Virgin Mobile</option>
            <option>Vodacom</option>
          </Input>
        </FormGroup>

        <br  />
        <InputGroup>
        <InputGroupAddon addonType="prepend">R</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </Form><br/>


        <h3>Data Bundles</h3>
        <Form>
        <FormGroup>
          <Label for="network">Network Provider</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Cell C</option>
            <option>MTN</option>
            <option>Telkom</option>
            <option>Virgin Mobile</option>
            <option>Vodacom</option>
          </Input>
        </FormGroup>
        <br  />
        <InputGroup>
        <InputGroupAddon addonType="prepend">R</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </Form><br/>

      <h3>Electricity</h3>
      <Form>
      <FormGroup>
        <Label for="network">Electricity Provider</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>City of Cape Town Metropolitan Municipality</option>
          <option>City of Johannesburg Metropolitan Municipality</option>
          <option>Mangaung Metropolitan Municipality</option>
          <option>Nelson Mandela Bay Metropolitan Municipality</option>
          <option>City of Tshwane Metropolitan Municipality</option>
        </Input>
      </FormGroup>
      <br  />
      <InputGroup>
      <InputGroupAddon addonType="prepend">R</InputGroupAddon>
      <Input placeholder="Amount" type="number" step="1" />
      <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      </Form><br/>
      <Button>Advance & Submit</Button>
      <br/>
      <br/>
      <Button>Abort Mission..</Button>
      </div>
    );

export default Prepaid;
