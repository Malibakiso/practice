import React from "react";
import reactDOM from 'react-dom';
import sunmain from '../images/sunmain.png';

  const Business_acc = () => {
    return(
      <div>
        <div class="top-main">
      		<div class="number">
      			<h3><i class="fa fa-phone" aria-hidden="true"></i>021 2320 564</h3>
      			<div class="clearfix"></div>
      		</div>
      		<div class="social-icons">
      		<ul class="top-icons">
      			<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
      			<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      			<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
      			<li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
      			<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <link rel="icon" type="image/png" href="images/sunmain"/>
      		</ul>
      		<div class="form-top">
      		  <form action="#" method="post" class="navbar-form navbar-left">
      			<div class="form-group">
      				<input type="search" class="form-control" placeholder="Search"/>
      			</div>
      				<button type="submit" class="btn btn-default"><i class="fa fa-search" aria-hidden="true"></i></button>

      			</form>
      		</div>
      			<div class="clearfix"></div>
      		</div>
      			<div class="clearfix"></div>
      	</div>
      		{/* <!-- Top-Bar --> */}
      		<div class="top-bar">
      			<nav class="navbar navbar-default">
      				<div class="container-fluid">
      				{/* <!-- Brand and toggle get grouped for better mobile display --> */}
      					<div class="navbar-header">
      						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
      							<span class="sr-only">Toggle navigation</span>
      							<span class="icon-bar"></span>
      							<span class="icon-bar"></span>
      							<span class="icon-bar"></span>
      						</button>
      					</div>
      					<div class="collapse navbar-collapse" id="myNavbar">
      						<ul class="nav navbar-nav navbar-right" data-in="" data-out="">
      							<li class="active"><a href="index.html">home</a></li>
      							<li><a href="About.html">about</a></li>
      							<li><a href="Services.html">services</a></li>
      							<li><a href="Account.html">account</a></li>
      							<li><a href="Profile.html">profile</a></li>
      							<li><a href="Contact.html">contact</a></li>
      							<li><a href="Signout.html">signout</a></li>

      						</ul>
      					</div>
      				</div>
      			</nav>
      		</div>
      		<div class="logo">
            {/* <img src={sunmain} alt="small_logo" /> */}
      			<a href="index.html"> The Bank<span> of the Sun</span></a>
      		</div>
      {/* <!-- contact --> */}
      <section class="contact" id="contact">
      	<div class="container">
      		<div class="contact-heading">
      			<h3>Business Account</h3>
      			<h4>Run your business with a bank account that gives you more freedom and visibility, and the backing of specialists in cash flow money management.</h4>

      <table style={{width:"100%"}}>
        <caption>Monthly deposits</caption>
      	<tr>
          <th>Month</th>
          <th>Savings</th>
          <th>Balance</th>
          <th>Available</th>
        </tr>
        <tr>
          <td>October</td>
      		<form>
          	<td><input type="text" name="" value="R0.00"/><br/></td>
      		</form>
      		<form>
          	<td><input type="text" name="" value="R0.00"/><br/></td>
      		</form>
      		<form>
          	<td><input type="text" name="" value="R0.00"/><br/></td>
      		</form>
        </tr>

        <tr>
          <td>November</td>
      		<form>
          	<td><input type="text" name="" value="R0.00"/></td>
      		</form>
          <form>
          	<td><input type="text" name="" value="R0.00"/><br/></td>
      		</form>
          <form>
          	<td><input type="text" name="" value="R0.00"/><br/></td>
      		</form>
        </tr>
      </table>
          </div>
      			<div class="clearfix"></div>
      		</div>
        </section>

      	<a href="Account.html"><button>BACK..</button></a>


      {/* <!-- //footer --> */}

      {/* <!-- copyright --> */}
      <section class="copyright">
      	<div class="agileits_copyright text-center">
      			<p>© 2018 The Bank of The Sun. All rights reserved | Design by <a href="//w3layouts.com/" class="w3_agile">Control Alt Delete</a></p>
      	</div>
      </section>
      {/* <!-- //copyright --> */}
      </div>
    );
  };
  export default Business_acc;
