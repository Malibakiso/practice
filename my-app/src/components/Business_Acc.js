import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Table } from 'reactstrap';

const Business_Acc = () => (
      <div>
        <h1>BUSINESS ACCOUNT</h1>
        <Table striped>
       <thead>
         <tr>
           <th>Client ID</th>
           <th>Client Balance</th>
           <th>Client</th>
           <th>Client Description</th>
           <th>Client Account Type</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <th scope="row">1</th>
           <td>####</td>
           <td>####</td>
           <td>####</td>
           <td>####</td>
         </tr>
         <tr>
           <th scope="row">2</th>
           <td>####</td>
           <td>####</td>
           <td>####</td>
           <td>####</td>
         </tr>
         <tr>
           <th scope="row">3</th>
           <td>####</td>
           <td>####</td>
           <td>####</td>
           <td>####</td>
         </tr>
       </tbody>
     </Table>
     </div>

    );

export default Business_Acc;
