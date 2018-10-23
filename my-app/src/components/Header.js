import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => (
  <div>
    <Link to='/'>Home</Link><br/>
    <Link to='/About'>About</Link><br/>
    <Link to='/Payments'>Payments</Link><br/>
    <Link to='/Buy'>Buy</Link><br/>
    <Link to='/Transfer'>Transfer</Link><br/>
    <Link to='/ScheduledPayments'>ScheduledPayments</Link><br/>
    <Link to='/Manage_Account'>Manage Account</Link><br/>
    <Link to='/Sign_Out'>Sign Out</Link><br/>
    <Link to='/Personal_Acc'>Personal_Acc</Link><br/>
  </div>
);

export default Header;