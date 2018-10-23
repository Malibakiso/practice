import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import ReactTable from "react-table";
import 'react-table/react-table.css';


export default class Buy extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:"lazymeercat116",
      password:"hottest",
      columns: [
        {
          Header: 'Name',
          accessor: 'name'
        },
        {
          Header: 'Term',
          accessor: 'term',
          
        },
        {
          Header: 'Amount',
          accessor: 'amount',
        },
      ],
      payments: [],
    }
  }

  onSubmit() {
    this.state.payments.push({
        name: 'My payment',
        term: 'weekly',
        amount: 250,
    });
    console.log(this.state.payments);

    /* eslint-disable */
    return;

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
      const res = await api.post('/transactions');
      console.log(res);
      // this.props.store(username, password);
      // window.location = '/Personal_Acc';
    })();
    /* eslint-enable */
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Scheduled payments</h1>

          <Row>
            <Col>
              <h3>Create a new scheduled payment</h3>

              <Form>
                <InputGroup>
                    <Input placeholder="Payment name" type="text" />
                </InputGroup>

                <FormGroup>
                  <Label for="network">Term</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                  </Input>
                </FormGroup>

                <InputGroup>
                  <InputGroupAddon addonType="prepend">R</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>

                <Button onClick = {e => this.onSubmit()}>Add payment</Button>
              </Form>
            </Col>
          </Row>

          <Row>
              <Col>
                <ReactTable
                    data={this.state.payments}
                    columns={this.state.columns}
                >
                </ReactTable>
              </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
