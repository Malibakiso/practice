import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import {Container} from 'reactstrap';

export default class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleEmail(text){
    this.setSate({username: text.target.value})
  }

  handlePassword(text){
    this.setState({password: text.target.value}) //handles password targets
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

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
      if(res) {
        window.location = '/PersonalAcc';
      }
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
        <section>
        <div class = "container">
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
            name = "password" //password inputs
            type="password"
            placeholder = "Your Password"
            value = {this.state.password}
            onChange = {e => this.change(e)}
          />
          {isLoggedIn ? 'User logged in' : 'User not logged in'} //if user does not logged on it is called for better user interface and experience

        <br></br>
      </div>
    </section>
      <button onClick = {e => this.onSubmit (e)}>LOG IN</button>
    </div>
    )
  }
}

// export default LoginPage;
