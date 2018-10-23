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
    this.state= {transactions: []}
  }

  componentDidMount(){
    const hmac = new jsSha('SHA-256','TEXT');
    hmac.setHMACKey(this.props.password, 'TEXT');
    hmac.update(this.props.username);
    hmac.update(Date.now().toString(36).substring(0, 4));

    const token = `${hmac.getHMAC('HEX')}%${this.props.username}`;
    const api = axios.create({
      baseURL: 'http://45.77.58.134:8080',
      headers: { 'Authorization': 'Bearer ' + token }
    });


    (async () => {
      try{
        const res = await api.get('/clients');
        const accounts = await api.get(`/accounts/${res.data[0]._id}`)
        const transactions = await api.get(`/transactions/${accounts.data[0]._id}/.*`)
        console.log(transactions.data);
        console.log(accounts);
        this.setState({transactions: transactions.data})
      } catch (e){
        console.log(e)
      }

    })();
  }

  render() { return(


        <div>
          <ul>
            {this.state.transactions.map(x =>
              <li key={x._id}>
                {`${x.type} ${x.amount} | ${x.balance}`}
              </li>
            )}
          </ul>
          <h1>PERSONAL ACCOUNT</h1>
          <h2>{this.props.username}</h2>
          <Table striped>
         <thead>
           <tr>
             <th>Client ID</th>
             <th>Client Balance</th>
             <th>Client</th>
             <th>Client Description</th>
             <th>Client Account Type</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th scope="row">1</th>
             <td>R5000</td>
             <td></td>
             <td></td>
             <td></td>
           </tr>
           <tr>
             <th scope="row">2</th>
             <td>####</td>
             <td>####</td>
             <td>####</td>
             <td>####</td>
           </tr>
           <tr>
             <th scope="row">3</th>
             <td>####</td>
             <td>####</td>
             <td>####</td>
             <td>####</td>
           </tr>
         </tbody>
       </Table>
      </div>
    )}
}
