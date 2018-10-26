import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import "./css/stylish-portfolio.min.css";
// import "./vendor/bootstrap/css/bootstrap.min.css";
// import "./vendor/fontawesome-free/css/all.min.css";
// import "./vendor/simple-line-icons/css/simple-line-icons.css";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import Navigation from "./components/Navigation";
import Beneficiary from "./components/Beneficiary";
import About from "./components/About";
import Payments from "./components/Payments";
import Buy from "./components/Buy";
import ContactUs from "./components/ContactUs";
import Transactions from "./components/Transactions";
import PersonalAcc from "./components/PersonalAcc";
import BusinessAcc from "./components/BusinessAcc";
import AccountMan from "./components/AccountMan";
import FAQ from "./components/FAQ";


// import ViewAccount from "./components/ViewAccount";
//  import CreateAccount from "./components/CreateAccount";
//  import CreateAccountSavings from "./components/CreateAccountSavings";
// import CreateAccountCredit from "./components/CreateAccountCredit";
//  import CreateAccountSpecialInvestments from "./components/CreateAccountSpecialInvestments";
//  import Invest from "./components/Invest";
// import Error from "./components/Error";
//
// import Utility from "./components/Utility";
//  import Electricity from "./components/Electricity";
//  import AirtimeAndBundles from "./components/AirtimeAndBundles";
//  import Credit from "./components/Credit";



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
  <Route path="/Buy" render={props => <Buy username={this.state.username} password={this.state.password}/>} />
  <Route path="/ContactUs" render={props => <ContactUs username={this.state.username} password={this.state.password}/>} />
  <Route path="/Transactions" render={props => <Transactions username={this.state.username} password={this.state.password}/>} />
  <Route path="/PersonalAcc" render={props => <PersonalAcc username={this.state.username} password={this.state.password}/>} />
  <Route path="/BusinessAcc" render={props => <BusinessAcc username={this.state.username} password={this.state.password}/>} />
  <Route path="/AccountMan" render={props => <AccountMan username={this.state.username} password={this.state.password}/>} />
  <Route path="/FAQ" render={props => <FAQ username={this.state.username} password={this.state.password}/>} />

 {/*  <Route path="/ViewAccount" render={props => <ViewAccount username={this.state.username} password={this.state.password}/>} />
 // // <Route path="/CreateAccount" render={props => <CreateAccount username={this.state.username} password={this.state.password}/>} />
 // // <Route path="/CreateAccountSavings" render={props => <CreateAccountSavings username={this.state.username} password={this.state.password}/>} />
 // // <Route path="/CreateAccountCredit" render={props => <CreateAccountCredit username={this.state.username} password={this.state.password}/>} />
 // // <Route path="/CreateAccountSpecialInvestments" render={props => <CreateAccountSpecialInvestments username={this.state.username} password={this.state.password}/>} />
 // // <Route path="/Invest" render={props => <Invest username={this.state.username} password={this.state.password}/>} />
 //
 //  <Route path="/Utility" render={props => <Utility username={this.state.username} password={this.state.password}/>} />
 // <Route path="/Electricity" render={props => <Electricity username={this.state.username} password={this.state.password}/>} />
 // <Route path="/AirtimeAndBundles" render={props => <AirtimeAndBundles username={this.state.username} password={this.state.password}/>} />
 // <Route path="/Credit" render={props => <Credit username={this.state.username} password={this.state.password}/>} /> */}
 //


 {/* <Route component={Error} /> */}

 </Switch>
 </div>

 </BrowserRouter>

 );
 }
}

export default App;
