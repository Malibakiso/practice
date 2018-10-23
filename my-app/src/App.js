import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header";

import PersonalAcc from "./components/PersonalAcc";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Payments from "./components/Payments";
import Beneficiary from "./components/Beneficiary";
import Buy from "./components/Buy";
import ScheduledPayments from './components/ScheduledPayments';

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
          <Route path="/About" exact component={About}/>
          <Route path="/Payments" exact component={Payments}/>
          <Route path="/Beneficiary" exact component={Beneficiary}/>
          <Route path="/Buy" exact component={Buy}/>
          <Route path="/ScheduledPayments" exact component={ScheduledPayments}/>
          <Route path="/PersonalAcc" render={props=> <PersonalAcc username={this.state.username} password={this.state.password}/>}/>
          {/* <Route component = {Error} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
