import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";

const WelcomePage = () => (
      <div>
        <h1>WELCOME TO THE BANK OF THE SUN</h1>

      <Link to="/LoginPage">LOGIN</Link>
      <br/>
      <Link to="/RegisterForm">REGISTER</Link>

      </div>
    );

export default WelcomePage;
