import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from 'axios';
import jsSHA from 'jssha';
import {Link} from "react-router-dom";
import sunmain from '../images/sunmain.png';

class sign_in extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      login:false,
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

login(){
  console.log(this.props);
  const user = this.state.username;
  const password = this.state.password;
  const hmac = new jsSHA('SHA-256','TEXT');
  hmac.setHMACKKey(password,'TEXT');
  hmac.update(user);
  hmac.update(Date.now().toString(36).substring(0, 4));
  const token = `${hmac.getHMAC('HEX')}%${user}`;
  const api = axios.create({
    baseURL: 'http://45.77.58.134:8080',
    headers: { 'Authorization': 'Bearer ' + token }
});

(async () => {
  try{
    const res = await api.get('/clients');
    console.log(res)
    this.props.store(this.state.username, this.state.password, this.state.login);

  } catch {
    console.log('error')
  }

  })();

  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  render(){
    return(
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src= {sunmain} alt="IMG"/>
            </div>

            <form className="login100-form validate-form">
              <span className="login100-form-title">
                <h1>Login</h1>
              </span>

              <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email"/>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password"/>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Login
                </button>
              </div>

              <div className="text-center p-t-12">
                <span className="txt1">
                  Forgot
                </span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>

              <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Don't have an account? Register here
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
                <a>
                  <div>
                    <Link to ={"/log1"}>
                      <input type ="submit" value = "Login" class="btn btn-secondary" onClick={this.login}/>
                    </Link>
                  </div>
                </a>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default sign_in;
