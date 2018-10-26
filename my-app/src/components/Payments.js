import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import jsSHA from 'jssha';

class Payments extends Component {

 //set the states and bind the functions
 constructor() {
 super()
 this.state = {
 accounts:[],
 transactions: [],
 };
 }

 //authenticate user and pull the transaction data
 componentDidMount() {
 const user = this.props.username;
 const password = this.props.password;
 const hmac = new jsSHA('SHA-256', 'TEXT');
 hmac.setHMACKey(password, 'TEXT');
 hmac.update(user);
 hmac.update(Date.now().toString(36).substring(0, 4));
 const token = `${hmac.getHMAC('HEX')}%${user}`;
 const api = axios.create({
 baseURL: 'http://45.77.58.134:8080',
 headers: { 'Authorization': 'Bearer ' + token }
 });

 (async () => {
 const res = await api.get('/clients');
 const accounts = await api.get(`/accounts/${res.data[0]._id}`)
 const transactions = await api.get(`/transactions/${accounts.data[0]._id}/.*`)
 this.setState({
 accounts: accounts.data,
 transactions: transactions.data});
 console.log(accounts);
 console.log(transactions);
 })();
 };


render(){
 return (
    <body className="bodystyle">
      <div className="container text-center my-auto">
      <br />
 <div className="boxAccountspecific">
      <br></br>
 <h2 className="mb-1">Statements</h2>
      <br/>
 <div id="Personal" className="tabcontent">
     <table className="C">
             <thead>
                <th className="C" >Time</th>
                <th className="C" >Type</th>
                <th className="C" >Source</th>
                <th className="C" >Destination</th>
                <th className="C" >Amount</th>
                <th className="C" >Reference</th>
          </thead>
  <tbody>
 {this.state.transactions.map(x =>
  <tr key = {x._id}>
  <td className="C" >{new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day:'2-digit',
      hour:'2-digit',
      minute: '2-digit',
      second: '2-digit'
                    }).format(x.time)}
  </td>
       <td className="C" >{x.type}</td>
       <td className="C" >{x.src}</td>
       <td className="C" >{x.dest}</td>
       <td className="C" >{x.amount}</td>
       <td className="C" >{x.ref}</td>
  </tr>
          )}
 </tbody>
 </table>

 <br></br>
           <div id='accountButtons'>
           <NavLink className="btn btn-primary btn-xl js-scroll-trigger" to="ViewAccount">Back</NavLink> <br/><br/>
                  </div>
              </div>
        </div>
   </div>
</body>
  );
    };
       };

export default Payments;
