import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import {Link} from 'react-router-dom';

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
      const res = await api.get('/clients');
      console.log(this.props);
      // this.props.store(username, password);
      // window.location = '/Personal_Acc';
    })();

    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    const isLoggedIn = false;
    return (
      <div>
        <div>
          <h2>Log In</h2>
          Username:
          <input 
            type="text"
            name = "username"
            placeholder = "Your Username"
            value = {this.state.username}
            onChange = {e => this.change(e)}
          />
          Password:
          <input 
            name = "password"
            type="password"
            placeholder = "Your Password"
            value = {this.state.password}
            onChange = {e => this.change(e)}
          />
          {isLoggedIn ? 'User logged in' : 'User not logged in'}

        <br></br>
      </div>

      <button onClick = {e => this.onSubmit (e)}>LOG IN</button>
    </div>
    )
  }
}

// export default LoginPage;
