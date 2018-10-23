import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Table } from 'reactstrap';
import axios from 'axios';
import jsSha from 'jssha';

import ReactTable from "react-table";
import 'react-table/react-table.css';

export default class Personal_Acc extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username:"lazymeercat116",
      password:"hottest",
      columns: [
        {
          Header: 'Type',
          accessor: 'type'
        },
        {
          Header: 'Amount',
          accessor: 'amount',
          
        },
        {
          Header: 'Current Balance',
          accessor: 'balance',
        },
      ],
      transactions: [],
      accountName: [],
    }
  }
  
  componentDidMount(){
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
      const res = await api.get('/clients');
      const accounts = await api.get(`/accounts/${res.data[0]._id}`)
      const transactions = await api.get(`/transactions/${accounts.data[0]._id}/.*`)
      // console.log(res);
      // console.log(transactions.data);
      console.log(accounts);
      this.setState({transactions: transactions.data, accountName: accounts.data[0].description})
    })();
  }
  
  render() {
    return(
      <div>
        <h1>PERSONAL ACCOUNT</h1>
        <h2>{this.state.username}</h2>
        <p>{this.state.accountName}</p>
        <ReactTable
          data={this.state.transactions}
          columns={this.state.columns}
        >
        </ReactTable>
      </div>
    )
  }
}