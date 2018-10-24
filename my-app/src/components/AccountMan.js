import React from 'react';
import reactCSS from 'reactcss'
import { Table } from 'reactstrap';


const AccountMan = () => (
      <div>
        <div className="container">
          <div className="split left">
            <h1> My Personal Account </h1>
            <a href="/PersonalAcc" className="button">Enter</a>
          </div>
          <div className="split right">
            <h1> My Business Account</h1>
            <a href="/BusinessAcc" className="button">Enter</a>
          </div>
        </div>
      </div>
      );


   export default AccountMan;
