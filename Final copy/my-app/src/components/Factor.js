import React from "react";
import reactDOM from 'react-dom';
import sunmain from '../images/sunmain.png';


  const Factor = () => {
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
      						Enter the one-time password that has been sent to your cellphone
      					</span>

      					<div className="wrap-input100 validate-input" data-validate = "Valid pin">
      						<input className="input100" type="text" name="pin" placeholder="*****"/>
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">

      						</span>
      					</div>

      					<div className="container-login100-form-btn">
      						<button className="login100-form-btn">
      							Submit
      						</button>
      					</div>

      					<div className="text-center p-t-136">
      					</div>
      				</form>
      			</div>
      		</div>
      	</div>
      </div>
  );
};
export default Factor;
