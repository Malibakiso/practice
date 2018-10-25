// Description: This page allows the user to buy certain
// Last modified: 25 October 2018 


import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';


export default class Buy extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:"lazymeercat116",
      password:"hottest",
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

      <div class= "container-buy" className="text-center">
        <h1>Prepaid or Utility Services</h1>
        <br></br>
        <Container>
          <section>
          <h5>Bank of the Sun clients have the ability to purchase airtime, data bundles and electricity without worrying about the stress of leaving their homes.</h5>
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
            <Col>
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
                <InputGroup>
                  <InputGroupAddon addonType="prepend">R</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <br/>
                <Button onClick = {e => this.onSubmit('Data')}>Buy Data</Button>
              </Form>
            </Col>
            <Col>
              <h3>Electricity</h3>
              <Form>
                <FormGroup>
                  <Label for="network">Electricity Provider</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>City of Cape Town Metropolitan Municipality</option>
                    <option>City of Johannesburg Metropolitan Municipality</option>
                    <option>Mangaung Metropolitan Municipality</option>
                    <option>Nelson Mandela Bay Metropolitan Municipality</option>
                    <option>City of Tshwane Metropolitan Municipality</option> // the inputs via options tag.
                  </Input>
                </FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">R</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <br/>
                <Button onClick = {e => this.onSubmit('Electricity')}>Buy Electricity</Button> //buying of electricity
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
