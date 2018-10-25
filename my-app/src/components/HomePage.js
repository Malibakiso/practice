// Page Description: The Home Page for the application
// Last modified: 25 October 2018


import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {Container} from 'reactstrap';>
export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:"lazymeercat116",
      password:"hottest",
      columns: [
        {
          Header: 'Username',
          accessor: 'usernames'
        },
        {
          Header: 'Title',
          accessor: 'title',

        },
				{
          Header: 'First Name',
          accessor: 'first',

        },
				{
          Header: 'Last Name',
          accessor: 'last',

        },
				{
          Header: 'Date of Birth',
          accessor: 'dob',

        },


        {
          Header: 'ID',
          accessor: 'id',
        },
				{
          Header: 'Email',
          accessor: 'email',

        },
				{
          Header: 'Client ID',
          accessor: '_id',

        },
      ],
      clients: [],
      profileDetails: [],
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
      const clients = await api.get(`/clients`);
      // const transactions = await api.get(`/clients`);
      // console.log(res);
      // console.log(transactions.data);
      console.log(clients);
      this.setState({clients: clients.data, profileDetails: clients.data[0].description})
    })();
  }

  render() {
    return(
      <div class="table-homepage">
        <Container>
        <h1>Personal Details</h1>
        <h2>Username : {this.state.username}</h2>
        <p style={{fontSize:'15px', textAlign:'center'}}>{this.state.profileDetails}</p>
        <ReactTable
          data={this.state.clients}
          columns={this.state.columns}
        >
        </ReactTable>
      </Container>
      </div>
    )
  }
}
