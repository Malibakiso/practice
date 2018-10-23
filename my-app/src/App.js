import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import style from './components/style.css';
import Header from "./components/Header";

import Personal_Acc from "./components/Personal_Acc";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import MainNav from "./components/MainNav";
import About from "./components/About";
import Payments from "./components/Payments";
import Beneficiary from "./components/Beneficiary";
import Buy from "./components/Buy";
import Prepaid from "./components/Prepaid";
import Manage_Account from "./components/Manage_Account";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// import bootstrap from "./components/bootstrap.css";
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {username:"", password:""};
    this.state.storeLogin = this.storeLogin.bind(this);
  }

  storeLogin(username, password){
    this.setState({ username: username, password: password});
    console.log(this.state);
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <Header></Header>
          
          <Route path="/" exact component={HomePage}/>
          <Route path="/LoginPage" exact component={props=> <LoginPage username={this.state.username} password={this.state.password} store={this.state.storelogin}/>}/>
          <Route path="/RegisterForm" exact component={RegisterForm}/>
          {/* <Route path="/HomePage" exact component={HomePage}/> */}
          <Route path="/MainNav" exact component={MainNav}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Payments" exact component={Payments}/>
          <Route path="/Beneficiary" exact component={Beneficiary}/>
          <Route path="/Buy" exact component={Buy}/>
          <Route path="/Prepaid" exact component={Prepaid}/>
          <Route path="/Manage_Account" exact component={Manage_Account}/>
          <Route path="/Personal_Acc" render={props=> <Personal_Acc username={this.state.username} password={this.state.password}/>}/>
          {/* <Route component = {Error} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
