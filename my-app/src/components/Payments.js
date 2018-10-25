// Description: The payments section allows fo the registering, paying and removing of beneficiaries
// Last modified:

import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import axios from 'axios';
import jsSha from 'jssha';
// import {Carousel } from 'react-bootstrap';
// import {CarouselItem } from 'react-bootstrap';
// import {CarouselCaption } from 'react-bootstrap';
import ReactTable from "react-table";
import 'react-table/react-table.css';


// const Payments = () => (
//   <div>
//     <div class= "container-p">
//       <Link to={`/Beneficiary`}>Register a Beneficiary</Link> //links to the beneficiary sections
//       <Link to={`/Beneficiary1`}>Pay a Beneficiary</Link>
//       <Link to={`/Beneficiary2`}>Remove a Beneficiary</Link>
// </div>
//   <Container>
//     <h1>PAYMENTS</h1>
//     </Container>
//   </div>
// );
//
// export default Payments;
export default class payments extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "redfrog136",
      // this.state.username,
      password:"lalakers",
      // this.state.password,
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
      const transactions = await api.get(`/transactions/${accounts.data[1]._id}/.*`)
      // console.log(res);
      // console.log(transactions.data);
      console.log(accounts);
      this.setState({transactions: transactions.data, accountName: accounts.data[1].description})
    })();
  }

  render() {
    return(
      <div className="Container-pc">
        <h1>Make Payments</h1>
        <h2> Hi,{this.state.username}</h2>
        <p>{this.state.accountName}</p>
         <ReactTable
          className="personal-acc-table"
          data={this.state.transactions}
          columns={this.state.columns}
        >
        </ReactTable>
      </div>










    )
  }
}
