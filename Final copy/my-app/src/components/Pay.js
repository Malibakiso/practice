import React from "react";
import reactDOM from 'react-dom';
import ReactTable from 'react-table'
  const Pay = () => {
    return(
      <div>
        <head>
        <title>The Bank of the Sun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charset="utf-8"/>
        <meta name="keywords" content="Corporate Bank a Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template,
        Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
        {/* <!-- .css files --> */}
        	<link href="css/bars.css" rel="stylesheet" type="text/css" />
        	<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" media="all" />
        	<link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
        	<link rel="stylesheet" href="css/font-awesome.css" />
        {/* <!-- //.css files -->
        <!-- Default-JavaScript-File --> */}
        	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
        	<script type="text/javascript" src="js/bootstrap.min.js"></script>
        {/* <!-- //Default-JavaScript-File -->
        <!-- fonts --> */}
        	<link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet"/>
        	<link href="//fonts.googleapis.com/css?family=Ropa+Sans:400,400i&amp;subset=latin-ext" rel="stylesheet"/>

        </head>
        <body>
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
        		</ul>
        		<div class="form-top">
        		  <form action="#" method="post" class="navbar-form navbar-left">
        			<div class="form-group">
        				<input type="search" class="form-control" placeholder="Search"/>
        			</div>
        				<button type="submit" class="btn btn-default"><i class="fa fa-search" aria-hidden="true"></i></button>
        				{/* <!-- <button type="submit" class="btn btn-default">Submit</button> --> */}
        			</form>
            </div>
              <div class="clearfix"></div>
            </div>
              <div class="clearfix"></div>
          </div>
        		<div>
        			<div class="clearfix"></div>
              {/* </div> */}
          		<div class="logo">
          			<a href="index.html">
                  {/* <!--<i class="fa fa-inr" aria-hidden="true"></i>-->  */}
                  The Bank<span> of the Sun</span></a>
          		</div>

        		<h3 style={{textAlign: 'center'}}>Make Payments</h3>
        		<br/>
        		<br/>

                <label for="fname">Fund a Transfer with a Specified amount now</label>
              </div>
              <div class="col-75">
                <input type="text" id="fname" name="name" placeholder="Your name.."/>
              </div>

        		<br/>
            <div class="row">
              <div class="col-25">
                <label for="lname">From Account</label>
              </div>
              <div class="col-75">
                <input type="text" id="accno" name="accno" placeholder="Your account number.."/>
              </div>
            </div>
        		<br/>
        		<br/>
        		<div class="row">
              <div class="col-25">
                <label for="reference">To Account</label>
              </div>
              <div class="col-75">
                <input type="text" id="accno" name="accno" placeholder=" "/>
              </div>
            </div>
        		<br/>
        		<div class="row">
              <div class="col-25">
                <label for="ben-reference">Amount</label>
              </div>
              <div class="col-75">
                <input type="text" id="accno" name="accno" placeholder=" "/>
              </div>
            </div>
        		<br/>
             <form>
        			<input type="submit" value="Submit"/>
        			<br/>
            </form>
        			<label for="fname">Fund a Transfer once on a specified Date</label>
        		{/* </div> */}
        		<div class="col-75">
        			<input type="text" id="fname" name="name" placeholder="Your name.."/>
        		</div>
        	{/* </div> */}
        	<br/>
        	<div class="row">
        		<div class="col-25">
        			<label for="lname">From Account</label>
        		</div>
        		<div class="col-75">
        			<input type="text" id="accno" name="accno" placeholder="Your account number.."/>
        		</div>
        	</div>
        	<br/>
        	<br/>
        	<div class="row">
        		<div class="col-25">
        			<label for="reference">To Account</label>
        		</div>
        		<div class="col-75">
        			<input type="text" id="accno" name="accno" placeholder=" "/>
        		</div>
        	</div>
        	<br/>
        	<div class="row">
        		<div class="col-25">
        			<label for="ben-reference">Amount</label>
        		</div>
        		<div class="col-75">
        			<input type="text" id="accno" name="accno" placeholder=" "/>
        		</div>
        	</div>
        	<br/>
        	 <form>
        		<input type="submit" value="Submit"/>
          </form>
        		<br/>
        		<label for="fname">Fund a Transfer more than once in future</label>
        	{/* </div> */}
        	<div class="col-75">
        		<input type="text" id="fname" name="name" placeholder="Your name.."/>
        	</div>
        {/* </div> */}
        <br/>
        <div class="row">
        	<div class="col-25">
        		<label for="lname">From Account</label>
        	</div>
        	<div class="col-75">
        		<input type="text" id="accno" name="accno" placeholder="Your account number.."/>
        	</div>
        </div>
        <br/>
        <br/>
        <div class="row">
        	<div class="col-25">
        		<label for="reference">To Account</label>
        	</div>
        	<div class="col-75">
        		<input type="text" id="accno" name="accno" placeholder=" "/>
        	</div>
        </div>
        <br/>
        <div class="row">
        	<div class="col-25">
        		<label for="ben-reference">Amount</label>
        	</div>
        	<div class="col-75">
        		<input type="text" id="accno" name="accno" placeholder=" "/>
        	</div>
        </div>
        <br/>
         <form>
        	<input type="submit" value="Submit"/>
        	<br/>
        			<input type="submit" value="Exit"/>
        		</form>


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
            </body>
      </div>
    );
  };
  export default Pay;
