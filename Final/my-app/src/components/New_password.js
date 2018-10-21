import React from "react";
import reactDOM from 'react-dom';
import sunmain from '../images/sunmain.png';


  const New_password = () => {
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
      						Please enter the information below
      					</span>

      					<div className="wrap-input100 validate-input" data-validate = "Valid password required">
      						<input className="input100" type="text" name="pw" placeholder="Enter new Password"/>
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">

      						</span>
      					</div>

      					<div className="wrap-input100 validate-input" data-validate = "Password is required">
      						<input className="input100" type="password" name="pass" placeholder="Confirm password"/>
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">

      						</span>
      					</div>

      					<div className="container-login100-form-btn">
      						<button className="login100-form-btn">
      							Submit
      						</button>
      					</div>
              </form>
      			</div>
      		</div>
      	</div>
      </div>
  );
};
export default New_password;
