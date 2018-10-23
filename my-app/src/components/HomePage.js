import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";

const HomePage = () => (
	<div>
		<form>
		  <div class="banner-main jarallax">
        <div class="container">
          <div class="banner-inner">
            <div class="col-md-5 banner-left">
              <form action="#" method="post">
                <h3>Open a Personal Account now!</h3>
                <input type="text" placeholder="Full name" required=""/><br/>
                <input type="email" placeholder="Email" required=""/><br/>
                <input type="tel" placeholder="Phone number" required=""/><br/>
                <input type="text" placeholder="Location" required=""/><br/>
                <div class="submit">
                <Link to="/Manage_Account">CONFIRM</Link>
                </div>
              </form>

              <p>Have an account? <Link to="/LoginPage">Login</Link></p>
              <div class="clearfix"></div>
              
              <div class="jumbotron">
                <h1 class="display-4">Open an account with us today!</h1>
                <p class="lead">THE BANK OF THE SUN, PRIDE THEMSELVES IN MAKING SURE OUR CLIENTS NEEDS ARE ALWAYS MET.</p>
                
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
		</form>
	</div>
);
	
export default HomePage;
	