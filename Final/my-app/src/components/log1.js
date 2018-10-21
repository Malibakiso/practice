import React from "react";
import reactDOM from 'react-dom';
import sunmain from '../images/sunmain.png';


  const index = () => {
    return(
      <div>
        <title>The Sun of the Bank Login Page</title>
      	<meta charset="UTF-8"/>
      	<meta name="viewport" content="width=device-width, initial-scale=1"/>
      	<link rel="icon" type="image/png" href="images/sunmain"/>
      	<link rel="stylesheet" type="text/css" href="css/util.css"/>
      	<link rel="stylesheet" type="text/css" href="css/main.css"/>

      	<div className="limiter">
      		<div className="container-login100">
      			<div className="wrap-login100">
      				<div className="login100-pic js-tilt" data-tilt>
      					<img src={sunmain} alt="IMG"/>
      				</div>

      				<form className="login100-form validate-form">
      					<span className="login100-form-title">
      						Welcome.
      					</span>

      					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
      						<input className="input100" type="text" name="email" placeholder="Email"/>
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">
      							<i className="fa fa-envelope" aria-hidden="true"></i>
      						</span>
      					</div>

      					<div className="wrap-input100 validate-input" data-validate = "Password is required">
      						<input className="input100" type="password" name="pass" placeholder="Password"/>
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">
      							<i className="fa fa-lock" aria-hidden="true"></i>
      						</span>
      					</div>

      					<div className="container-login100-form-btn">
      						<button className="login100-form-btn">
      							Login
      						</button>
      					</div>

      					<div className="text-center p-t-12">
      						<span className="txt1">
      							Forgot
      						</span>
      						<a className="txt2" href="#">
      							Username / Password?
      						</a>
      					</div>

      					<div className="text-center p-t-136">
      						<a className="txt2" href="#">
      							Don't have an account? Register here
      							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
      						</a>
      					</div>
      				</form>
      			</div>
      		</div>
      	</div>
      </div>
  );
};
export default index;
