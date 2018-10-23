import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import {Link} from 'react-router-dom';
// import readline from 'readline-sync';
// import ReactDOM from "react-dom";

import LoginForm from "./LoginForm";
// export class LoginPage extends React.Component {
export default class LoginPage extends React.Component {

state = {
  username: '',
  password: '',
};

handleEmail(text){
  this.setSate({username: text.target.value})
}

handlePassword(text){
  this.setState({password: text.target.value})
}


change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};


onSubmit = (e) => {
  e.preventDefault();

// const rs = require('readline-sync');
// const jssha = require('jssha');
//
// const user = rs.question('Username: ');
// const password = rs.question('Password: ');
const username = this.state.username;
const password = this.state.password;

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
  try{
    const res = await api.get('/clients');
    console.log(this.state.username);
    this.props.store(username, password);
  } catch {
    console.log('Incorrect')
  }
})();

this.setState({
  username: '',
  password: '',
});

};

render (){
  return (
    <div id= " ">
      {/* <img src = {} id=" "/> */}
      <div>
        <br></br>
      <h2 id = " ">Log In</h2>
        <br></br>

        Username: <br></br><br></br>
        <input name = "username"
          placeholder = "Your Username"
          value = {this.state.username}
          onChange = {e => this.change(e)}
        /><br></br><br></br>

        Password: <br></br><br></br>
        <input name = "password"
          placeholder = "Your Password"
          value = {this.state.password}
          onChange = {e => this.change(e)}
        /><br></br><br></br>

      <br></br>
    </div>

    <button onClick = {e => this.onSubmit (e)}>LOG IN</button>
  </div>
  )
 }
}





// const res = await api.get('/clients');
// const accounts = await api.get(`/accounts/${res.data[0]._id}`)
// this.setState({clients: res.data});
// console.log(accounts);
// })();
// };
//
// this.setState({
//
// })






      //   constructor(params) {
      //     super(params);
      //     this.state = { clients: [] };
      //   };
      //
      //     const token = `${hmac.getHMAC('HEX')}%${user}`;
      //     const api = axios.create({
      //       baseURL: 'http://45.77.58.134:8080',
      //       headers: { 'Authorization': 'Bearer ' + token }
      //     });
      //     (async () => {
      //       const res = await api.get('/clients');
      //       const accounts = await api.get(`/accounts/${res.data[0]._id}`)
      //       this.setState({clients: res.data});
      //       console.log(accounts);
      //     })();
      //   };
      //   render() {
      //     return <ul>
      //       {this.state.clients.map(x =>
      //         <li key={x._id}>
      //           {`${x.first} ${x.last} - ${x.id}`}
      //         </li>
      //       )}
      //     </ul>;
      //   }
      // }
// export default LoginPage;
