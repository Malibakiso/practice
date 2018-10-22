import React from "react";
import reactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return(

    <nav>
      <div><Link to="/Home">Home</Link></div>
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to='/Account'>Account</Link>
      <Link to='/Services'>Services</Link>
      <Link to='/Profile'>Profile</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/Signout'>Signout</Link>

    </nav>

);
};
export default NavBar;
