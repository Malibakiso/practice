import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Login from "./LoginPage";
// import Logo from "../img/logow.png"

//function to return the logged in or logged out state
function sneaky(test) {
 return(
 <div>
 {test}

 </div>
 );
}

class Navigation extends Component {

 constructor(props) {
 super(props);
 this.state = {

 }
 }

 render() {
 let log;
 this.state={test: "yes"}
 //show if logged out
 if(!this.props.username){
 return (
 <div>
 {sneaky()}
 <nav>
 <ul >
 <li>
 <NavLink className="navThing" to="/" >Home</NavLink>
 </li>
 <li>
 <NavLink className="navThing" to="/ContactUs">Contact Us</NavLink>
 </li>
 <li>
 <NavLink className="navThing" to="./LoginPage" >Login</NavLink>
 </li>


 </ul>
 </nav>
 </div>
 );
 }
 else{
 console.log("yep");
 console.log("orginal state value ", this.state.test);
 //show if logged in
 return (
 <div>
 <nav>
 <ul >
 {/* <li>
 <img width="120px" height="50px" src={Logo}/>
 </li> */}
 <li>
 <NavLink className="navThing" to="/HomePage" >Home</NavLink>
 </li>
 <li>
 <NavLink className="navThing" to="/About">AboutUs</NavLink>
 </li>

 <li>
 <NavLink className="navThing" to="/Buy">Buy</NavLink>
 </li>
 <li>
 <NavLink className="navThing" to="/Transactions">Transactions</NavLink>
 </li>
 <li>
 <NavLink className="navThing" to="/Beneficiary">Beneficiary</NavLink>
 </li>
 <li>
 <NavLink className="navThing" to="/ContactUs">Contact Us</NavLink>
 </li>
 <li>
 <NavLink style={{position:'absolute', right:0}} className="navThing" to="/" onClick={sneaky()}>Logout</NavLink>
 </li>

 </ul>
 </nav>
 </div>
 );
 }

 }
};

export default Navigation;
