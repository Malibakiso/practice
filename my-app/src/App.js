import React from 'react';
import css from './App.css';
// // import css from './accMan.css';
// import js from './accMan.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header";
import PersonalAcc from "./components/PersonalAcc";
import BusinessAcc from "./components/BusinessAcc";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Payments from "./components/Payments";
import Beneficiary from "./components/Beneficiary";
import Buy from "./components/Buy";
import ScheduledPayments from './components/ScheduledPayments';
import Transfers from './components/Transfers';
import Transfers1 from './components/Transfers1';
import Transfers2 from './components/Transfers2';
import InterAccount from './components/InterAccount';
import AccountMan from './components/AccountMan';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';

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

          <Route path="/HomePage" exact component={HomePage}/>
          <Route path="/LoginPage" exact component={props=> <LoginPage username={this.state.username} password={this.state.password} store={this.state.storelogin}/>}/>
          <Route path="/RegisterForm" exact component={RegisterForm}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Payments" exact component={Payments}/>
          <Route path="/Beneficiary" exact component={Beneficiary}/>
          <Route path="/Buy" exact component={Buy}/>
          <Route path="/ScheduledPayments" exact component={ScheduledPayments}/>
          <Route path="/PersonalAcc" render={props=> <PersonalAcc username={this.state.username} password={this.state.password}/>}/>
          <Route path="/BusinessAcc" render={props=> <BusinessAcc username={this.state.username} password={this.state.password}/>}/>
          <Route path="/Transfers" exact component={Transfers}/>
          <Route path="/Transfers1" exact component={Transfers1}/>
          <Route path="/Transfers2" exact component={Transfers2}/>
          <Route path="/InterAccount" exact component={InterAccount}/>
          <Route path="/AccountMan" exact component={AccountMan}/>
          <Route path="/ScheduledPayments" exact component={ScheduledPayments}/>
          <Route path="/ContactUs" exact component={ContactUs}/>
          <Route path="/FAQ" exact component={FAQ}/>
          {/* <Route component = {Error} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
