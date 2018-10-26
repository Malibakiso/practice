import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import { NavLink } from "react-router-dom";
import ReactTable from "react-table";
import 'react-table/react-table.css';

export default class PersonalAcc extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:[],
      password:[],
      // columns: [
      //   {
      //     Header: 'Type',
      //     accessor: 'type'
      //   },
      //   {
      //     Header: 'Description',
      //     accessor: 'description',
      //
      //   },
      //   {
      //     Header: 'Client',
      //     accessor: 'client',
      //   },
      //   {
      //     Header: 'Balance',
      //     accessor: 'balance',
      //
      //   },
      //
      //
      //   {
      //     Header: 'ID',
      //     accessor: '_id',
      //   },
      // ],
      accounts: [],
      accountName: [],
    };
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
      const transactions = await api.get(`/accounts/:client/${accounts.data[0]._id}/.*`)
      console.log(res);
      console.log(transactions.data);
      // console.log(accounts);
      // this.setState({
      // accounts: accounts.data,
      // transactions: transactions.data});
      // this.setState({
      //   transactions: transactions.data, accountName: accounts.data[0].description})
    })();
  }

  render() {
    return(
      <body className="bodystyle">
      <div className="container text-center my-auto">
      <br />
      <div className="boxAccountspecific">
      <br></br>
      <h2 className="mb-1">Personal Account</h2>
      <br/>
      <div id="Personal" className="tabcontent">
      <table className="C">
      <thead>
      <th className="C" >Client_ID</th>
      <th className="C" >Type</th>
      <th className="C" >Description</th>
      <th className="C" >Client</th>
      <th className="C" >Balance</th>

      </thead>
      <tbody>
      {this.state.accounts.map(x =>
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
      <td className="C" >{x._id}</td>
      <td className="C" >{x.type}</td>
      <td className="C" >{x.description}</td>
      <td className="C" >{x.client}</td>
      <td className="C" >{x.balance}</td>

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
//       <div className="Container-pc">
//         <h1>PERSONAL ACCOUNT</h1>
//         <h2>{this.state.username}</h2>
//         <p>{this.state.accountName}</p>
//         <ReactTable
//           className="personal-acc-table"
//           data={this.state.accounts}
//           columns={this.state.columns}
//         >
//         </ReactTable>
//       </div>
//     )
//   }
// }
