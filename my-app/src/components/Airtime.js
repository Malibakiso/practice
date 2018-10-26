// Description: This page allows the user to buy certain
// Last modified: 25 October 2018


import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { NavLink } from "react-router-dom";


export default class Airtime extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
    }
  }


  onSubmit(type) {
    const data = {
      'time': new Date(),
      'type': type,
      'src': 'Source Account',
      'dest': 'Destination Account or bank info (freeform text)',
      'amount': 'Cents (integer)',
      'ref': 'Reference Text'
    }
    alert(type);
    console.log(data);

    const hmac = new jsSha('SHA-256','TEXT');
    hmac.setHMACKey(this.state.password, 'TEXT');
    hmac.update(this.state.username);
    hmac.update(Date.now().toString(36).substring(0, 4));

    const token = `${hmac.getHMAC('HEX')}%${this.state.username}`;
    const api = axios.create({
      baseURL: 'http://45.77.58.134:8080',
      headers: { 'Authorization': 'Bearer ' + token }
    });

    (async () => {
      const res = await api.post('/transactions', data);
      console.log(res);
      // this.props.store(username, password);
      // window.location = '/Personal_Acc';
    })();
  }

  // console.log();

  render() {
    return (
<div>
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <NavLink className="navThing" to="/Airtime">Airtime</NavLink>
  </li>
  <li class="nav-item">
    <NavLink className="navThing" to="/Data">Data</NavLink>
  </li>
  <li class="nav-item">
    <NavLink className="navThing" to="/Electricity">Electricity</NavLink>
  </li>
</ul>
      <div class= "container-buy" className="text-center">

        <h1>Prepaid or Utility Services</h1>
        <h5>Bank of the Sun clients have the ability to purchase airtime, data bundles and electricity without worrying about the stress of leaving their homes.</h5>
        <br></br>
        <Container>
          <section>
          </section>
          <Row>
            <Col>
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

                <InputGroup>
                  <InputGroupAddon addonType="prepend">R</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <br/>
                <Button onClick = {e => this.onSubmit('Airtime')}>Buy Airtime</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
  </div>
    )
  }
}
