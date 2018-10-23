import React from 'react';
// import {Link} from 'react-router-dom';
// import ReactDOM from "react-dom";


const Manage_Account = () => (
      <div>
        <h1>MY ACCOUNT</h1>
        <meta charSet="utf-8" />
         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <title>The Bank of the Sun</title>
         <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:700, 600,500,400,300" rel="stylesheet" type="text/css" />
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
         <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
         <link rel="stylesheet" href="main.css" />
         <style dangerouslySetInnerHTML={{__html: "\n\t\t\t.ad {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 300px;\n\t\t\t\theight: 250px;\n\t\t\t\tborder: 1px solid #ddd;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\ttop: 250px;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t\t.ad .close {\n\t\t\t\tposition: absolute;\n\t\t\t\tfont-family: 'ionicons';\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tcolor: #fff;\n\t\t\t\tbackground-color: #999;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tleft: -20px;\n\t\t\t\ttop: -1px;\n\t\t\t\tdisplay: table-cell;\n\t\t\t\tvertical-align: middle;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t" }} />

       <div className="header">
         <div className="logo">
           <i className="fa fa-tachometer" />
           <span>MANAGE MY ACCOUNT</span>
         </div>
         <a href="#" className="nav-trigger"><span /></a>
       </div>
       <div className="side-nav">
         <div className="logo">
           <i className="fa fa-tachometer" />
           <span>Profile</span>
         </div>
         <nav>
           <ul>
             <li className="active">
               <a href="#">
                 <span><i className="fa fa-user" /></span>
                 <span>Profile Details</span>
               </a>
             </li>
             <li>
               <a href="#">
                 <span><i className="fa fa-money" /></span>
                 <span>Personal Banking</span>
               </a>
             </li>
             <li>
               <a href="#">
                 <span><i className="fa fa-bold" /></span>
                 <span>Business Banking</span>
               </a>
             </li>
             <li>
               <a href="#">
                 <span><i className="fa fa-credit-card" /></span>
                 <span>History &amp; Transactions</span>
               </a>
             </li>
             <li>
               <a href="#">
                 <span><i className="fa fa-credit-card" /></span>
                 <span>Account Summary</span>
               </a>
             </li>
           </ul>
         </nav>
       </div>
       <p />
     </div>
   );


export default Manage_Account;
