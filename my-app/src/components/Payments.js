import React from 'react';
import {Link} from 'react-router-dom';
const Payments = () => (
  <div>
    <div>
      <Link to={`/Transfers`}>Register a Beneficiary</Link>
      <Link to={`/Transfers1`}>Pay a Beneficiary</Link>
      <Link to={`/Transfers2`}>Remove a Beneficiary</Link>
    </div>
    <h1>PAYMENTS</h1>

  <Link to="/Beneficiary">BENEFICIARY</Link>
  <br/>


  </div>
);

export default Payments;
