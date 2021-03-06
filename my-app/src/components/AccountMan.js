// Page Description: The linking for the accounts management of the application
// Last modified: 25 October 2018


import React from 'react';
import reactCSS from 'reactcss'
import { Table } from 'reactstrap';
import { NavLink } from "react-router-dom";
// import logo from '../logo.jpeg'

const AccountMan = () => (
  <div>
          <div className="split-left">
            <h1> My Personal Account </h1>
            <a href="/PersonalAcc" className="button-personal-acc"><button className="personal-acc" >Enter</button></a>
          </div>
          <div className="split-right">
            <h1> My Business Account</h1>
            <a href="/BusinessAcc" className="button-business-acc"><button className="business-acc">Enter</button></a>
          </div>
  </div>

      );


export default AccountMan;
