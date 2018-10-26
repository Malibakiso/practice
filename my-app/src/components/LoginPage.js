import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import jsSHA from 'jssha';
import {Grid, Jumbotron} from 'react-bootstrap';
import { Container } from 'reactstrap';



class Login extends Component {

  //set the states and bind the functions
  constructor(props) {
      super(props);
      this.state ={
        username: '',
        password: '',
        login: false,
      }
      this.loginFunction = this.loginFunction.bind(this);
      this.onChange = this.onChange.bind(this);
  }

  //fetch the data from the API and authenticate the loginFunction
  //async stores the user globally
  loginFunction(){
    console.log(this.props);
    const user = this.state.username;
    const password = this.state.password;
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
       try {
         const res = await api.get('/clients');
         console.log(res);
         this.props.store(this.state.username, this.state.password, this.state.login);
       } catch {
         console.log("Incorrect Credentials");
         alert('Incorrect Credentials')
       }

     })();
  }

  //a function to simplify setting the states for each field on the page
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    //console.log(this.state);
  }

  render() {
    return (
      <div>
          <div id="over">
           <span class="Centerer"></span>
           <img class="Centered" src="./assets/sunmain.png" />
         </div>
        <body class="bodystyle">
          <div className="container text-center my-auto">
            <div className="box">
            <br/><br/>
            <Grid>
              <Jumbotron>
            <h1 className="mb-1">Log In</h1>
            <h5 className="mb-5"><em>Please provide details below..<br/>
            Just a disclaimer, only The Bank of the Sun clients are allowed access by the way.
           </em></h5>

            <div className="contain_txt">
              <div className="borderReg">

              <table>
                <tr>
                  <td>Username:</td>
                  <td><input  name="username" onChange={this.onChange}/></td>
                </tr><br/>
                <tr>
                  <td>Password:</td>
                  <td><input  name="password" onChange={this.onChange} type="password"/></td>
                </tr>
              </table>

              <br/><br/>
              <NavLink className="btn btn-primary btn-xl js-scroll-trigger" onClick={e=>this.loginFunction()} to="HomePage" >Login</NavLink>
              <NavLink className="btn btn-primary btn-xl js-scroll-trigger" onClick={e=>this.loginFunction()} to="RegisterForm" >Register</NavLink>


              </div>
            </div>
            </Jumbotron>
            </Grid>
            </div>
            <Container>
            <a href="../html-link.htm"><img src="./assets/facebook.png" style={{width: 82, height: 86}} title="Facebook" alt="Facebook" /></a>
            <a href="../html-link.htm"><img src="./assets/twitter.jpg" style={{width: 82, height: 86}} title="Twitter" alt="Twitter" /></a>
            <a href="../html-link.htm"><img src="./assets/youtube.png" style={{width: 82, height: 86}} title="YouTube" alt="YouTube" /></a>
            </Container>
          </div>
        </body>
      </div>
      
    );
  }
};

export default Login;
