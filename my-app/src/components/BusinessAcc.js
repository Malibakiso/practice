//Description: Business Account Page
//Last modified: 25 October 2018


import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import { NavLink } from "react-router-dom";
import ReactTable from "react-table";
import 'react-table/react-table.css';

export default class BusinessAcc extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        username:[],
        password:[],
        columns: [
          {
            Header: 'Type',
            accessor: 'type'
          },
          {
            Header: 'Description',
            accessor: 'description',

          },
          {
            Header: 'Client',
            accessor: 'client',
          },
          {
            Header: 'Balance',
            accessor: 'balance',

          },


          {
            Header: 'ID',
            accessor: '_id',
          },
        ],
        accounts: [],
        accountName: [],
      }
    }
  componentDidMount(){
    const user = this.props.username;
    const password = this.props.password;
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
      const res = await api.get('/accounts/:client');
      const accounts = await api.get(`/accounts/:client/${res.data[0]._id}`)
      const transactions = await api.get(`/transactions/${accounts.data[0]._id}/.*`)
      console.log(res);
      console.log(transactions.data);
  //     console.log(accounts);
  //     this.setState({
  //     accounts: accounts.data, accountName: accounts.data[0].description})
   })();
   }

  render() {
    return(
      <div className="Container-pc">
        <h1>BUSINESS ACCOUNT</h1>
        <h2>{this.state.username}</h2>
        <p>{this.state.accountName}</p>
        <p style={{fontSize:'15px', textAlign:'center'}}>{this.state.accountName}</p>
        <ReactTable className="personal-acc-table"
          data={this.state.acounts}
          columns={this.state.columns}
        >
        </ReactTable>
      </div>
    )
  }
}
