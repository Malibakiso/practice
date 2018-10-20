import React from "react";
import reactDOM from 'react-dom';

  const Beneficiary = () => {
    return(
      <div>
        <h3 style={{textAlign: 'center'}}>Add your own Beneficiary</h3>
    		<br/>
    		<br/>
    	<div class="container" style={{textAlign: 'center'}}>
      <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="fname" name="name" placeholder="Your name.."/>
          </div>
        </div>
      </form>
    		<br/>
        <div class="row">
          <div class="col-25">
            <label for="lname">Account number</label>
          </div>
          <div class="col-75">
            <input type="text" id="accno" name="accno" placeholder="Your account number.."/>
          </div>
        </div>
    		<br/>
        <div class="row">
          <div class="col-25">
            <label for="bank">Bank</label>
          </div>
          <div class="col-75">
            <select id="bank" name="bank">
              <option value="STB">Standard Bank</option>
              <option value="FNB">First National Bank</option>
              <option value="ABSA">ABSA</option>
    					<option value="CB">Capitec Bank</option>
            </select>
          </div>
        </div>
    		<br/>
    		<div class="row">
          <div class="col-25">
            <label for="reference">Your reference</label>
          </div>
          <div class="col-75">
            <input type="text" id="accno" name="accno" placeholder=" "/>
          </div>
        </div>
    		<br/>
    		<div class="row">
          <div class="col-25">
            <label for="ben-reference">Beneficiary reference</label>
          </div>
          <div class="col-75">
            <input type="text" id="accno" name="accno" placeholder=" "/>
          </div>
        </div>
    		<br/>
    		<label for="notification">Set up payment notification?</label><br/>

    		<form>
    		<input type="radio" name="true" value="Yes" checked/> <br/>
        <input type="radio" name="false" value="No"/> <br/>
    	  </form>
    		<br/>
    		<div class="row">
          <div class="col-25">
            <label for="recipient">Recipient name</label>
          </div>
          <div class="col-75">
            <input type="text" id="accno" name="accno" placeholder=" "/>
          </div>
        </div>
    		<br/>
    		<div class="row">
          <div class="col-25">
            <label for="recipient-email">Recipient email</label>
          </div>
          <div class="col-75">
            <input type="text" id="accno" name="accno" placeholder=" "/>
          </div>
    			<br/>

         <form>
    			<input type="submit" value="Submit"/>
    			<br/>
    			<input type="submit" value="Exit"/>
    		</form>
    		</div>
    		<div class="logo">
    			<a href="index.html">
            {/* <!--<i class="fa fa-inr" aria-hidden="true"></i>-->  */}
            The Bank<span> of the Sun</span></a>
    		</div>

        {/* <!-- footer --> */}
    		<section class="footer">
    			<div class="container">
    				<div class="footer-grids">
    					<div class="col-md-4 footer-grid1">
    						<div class="logo1">
    							<a href="index.html">The Bank<span> Of the Sun</span></a>
    						</div>
    						<p> We create and deliver innovative advisory, funding, trading, corporate banking and principal investing
    							 solutions for our clients.</p>
    						<p> We are innovative thinkers who turn challenges into opportunities.</p>
    					</div>
    					<div class="col-md-3 footer-grid2">
    						<h4>Locations</h4>
    						<p class="p1">Neelsie Student center,Stellenbosch</p>
    						<p>1 De Beer Street, Stellenbosch,7600</p>
    						<p class="p1">Stellenbosch,Neelsie</p>
    						<p>Near Pulp cinema</p>
    					</div>
        			<div class="col-md-2 footer-grid3">
        				<h4>menu</h4>
        					<p><a href="#index.html" class="scroll">home</a></p>
        					<p><a href="#about" class="scroll">about</a></p>
        					<p><a href="#services" class="scroll">services</a></p>
        					<p><a href="#skills" class="scroll">skills</a></p>
        					<p><a href="#team" class="scroll">team</a></p>
        					<p><a href="#payment" class="scroll">payment</a></p>
        					<p><a href="#blog" class="scroll">blog</a></p>
        					<p><a href="#contact" class="scroll">contact</a></p>
        			</div>
        			<div class="col-md-3 footer-grid4">
        				<h4>our links</h4>
        				<p><a href="#">Funds transfer</a></p>
        				<p><a href="#">Mobile banking</a></p>
        				<p><a href="#">Deposits</a></p>
        				<p><a href="#">New joint accounts</a></p>
        				<p><a href="#">Internet online banking</a></p>
        				<p><a href="#">Balance enquiry</a></p>
        			</div>
        			<div class="clearfix"></div>
        		</div>
        	</div>
        </section>
        {/* <!-- //footer -->

        <!-- copyright --> */}
    		<section class="copyright">
    			<div class="agileits_copyright text-center">
    					<p>© 2018 The Bank of The Sun. All rights reserved | Design by <a href="//w3layouts.com/" class="w3_agile">Control Alt elite</a></p>
    			</div>
    		</section>
        </div>
      </div>

    );
  };
  export default Beneficiary;
