import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import index from "./components/index";
import About from "./components/About";
import Account from "./components/Account";
import Beneficiary from "./components/Beneficiary";
import Business_acc from "./components/Business_acc";
import Contact from "./components/Contact";
import Personal_acc from "./components/Personal_acc";
import Prepaid from "./components/Prepaid";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Signout from "./components/Signout";
import Pay from "./components/Pay";
import Details from "./components/Details";
// import Questions from "./components/Questions";
import Security from "./components/Security";
import Summary from "./components/Summary";
import Change from "./components/Change";
import  New_password from "./components/New_password";
import Factor from "./components/Factor";
import log1 from "./components/log1";

// images




import style from "./style/style.css";
import './App.css';
import './style/bars.css';
import './style/bootstrap.css';
// import main from './style/main.css';
// import util from './style/util.css';
// import './style/font-awesome0.css';
// import './style/bootstrap.min.css';
// import './style/font-awesome.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>

      <Switch>
        <Route path = "/index" component = {index}/>
        <Route path = "/About" component = {About}/>
        <Route path = "/Account" component = {Account}/>
        <Route path = "/Beneficiary" component = {Beneficiary}/>
        <Route path = "/Business_acc" component = {Business_acc}/>
        <Route path = "/Contact" component = {Contact}/>
        <Route path = "/Personal_acc" component = {Personal_acc}/>
        <Route path = "/Prepaid" component = {Prepaid}/>
        <Route path = "/Profile" component = {Profile}/>
        <Route path = "/Services" component = {Services}/>
        <Route path = "/Signout" component = {Signout}/>
        <Route path = "/Pay" component ={Pay}/>
        <Route path = "/Details" component ={Details}/>
        {/* <Route path = "/Questions" component ={Questions}/> */}
        <Route path = "/Security" component ={Security}/>
        <Route path = "/Summary" component ={Summary}/>
        <Route path = "/Change" component ={Change}/>
        <Route path = "/Factor" component ={Factor}/>
        <Route path = "/New_password" component ={New_password}/>
        <Route path = "/log1" component ={log1}/>



      </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
