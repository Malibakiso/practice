// Page Description: The Header Page for the application
// Last modified: 25 October 2018


import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (

<div class ="container" className="text-center">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/HomePage">The Bank of the Sun</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mt-2lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="/HomePage">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Payments">Payments</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/ScheduledPayments">Scheduled Payments</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/Buy">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Transfers">Transfers</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/InterAccount">Inter-Account Transfers</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/AccountMan">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ContactUs">Contact  Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/FAQ">FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Sign_Out">Sign Out</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>


  </div>
);

export default Header;
