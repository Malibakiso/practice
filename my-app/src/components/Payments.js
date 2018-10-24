import React from 'react';
import {Link} from 'react-router-dom';
const Payments = () => (
  <div>
    <div>
      <Link to={`/Beneficiary`}>Register a Beneficiary</Link>
      <Link to={`/Beneficiary1`}>Pay a Beneficiary</Link>
      <Link to={`/Beneficiary2`}>Remove a Beneficiary</Link>
    </div>
    <h1>PAYMENTS</h1>


  </div>
);

export default Payments;
