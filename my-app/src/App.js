import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import Navigation from "./components/Navigation";
import Beneficiary from "./components/Beneficiary";
import About from "./components/About";
import Payments from "./components/Payments";
import Airtime from "./components/Airtime";
import Data from "./components/Data";
import Electricity from "./components/Electricity";
import ContactUs from "./components/ContactUs";
import Transactions from "./components/Transactions";
import PersonalAcc from "./components/PersonalAcc";
import BusinessAcc from "./components/BusinessAcc";
import AccountMan from "./components/AccountMan";
import FAQ from "./components/FAQ";

class App extends Component {

 constructor(props){
 super(props);
 this.state={username:"", password:"", };
 this.storeLogin = this.storeLogin.bind(this);
 }

 storeLogin(username, password) {
 this.setState({username: username, password: password, });
 }

 render() {
 return (

 <BrowserRouter>
 <div>
 <Navigation username={this.state.username} password={this.state.password}/>
 <Switch>

 <Route path="/HomePage" component={HomePage} exact />
 <Route path="/LoginPage" render={props => <LoginPage store={this.storeLogin}/>}/>
 <Route path="/RegisterForm" render={props => <RegisterForm store={this.storeLogin}/>}/>
  <Route path="/Beneficiary" render={props => <Beneficiary username={this.state.username} password={this.state.password}/>} />
  <Route path="/About" render={props => <About username={this.state.username} password={this.state.password}/>} />
  <Route path="/Payments" render={props => <Payments username={this.state.username} password={this.state.password}/>} />
  <Route path="/Airtime" render={props => <Airtime username={this.state.username} password={this.state.password}/>} />
  <Route path="/Data" render={props => <Data username={this.state.username} password={this.state.password}/>} />
  <Route path="/Electricity" render={props => <Electricity username={this.state.username} password={this.state.password}/>} />
  <Route path="/ContactUs" render={props => <ContactUs username={this.state.username} password={this.state.password}/>} />
  <Route path="/Transactions" render={props => <Transactions username={this.state.username} password={this.state.password}/>} />
  <Route path="/PersonalAcc" render={props => <PersonalAcc username={this.state.username} password={this.state.password}/>} />
  <Route path="/BusinessAcc" render={props => <BusinessAcc username={this.state.username} password={this.state.password}/>} />
  <Route path="/AccountMan" render={props => <AccountMan username={this.state.username} password={this.state.password}/>} />
  <Route path="/FAQ" render={props => <FAQ username={this.state.username} password={this.state.password}/>} />


 </Switch>
 </div>

 </BrowserRouter>

 );
 }
}

export default App;
