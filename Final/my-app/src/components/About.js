import React from "react";
import reactDOM from 'react-dom';
// import 1.jpg from "./images/1.jpg";

  const index = () => {
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
        {/* <!-- //fonts -->
        <!-- scrolling script --> */}
        {/* <script type="text/javascript">
        	jQuery(document).ready(function($)
          {
        		$(".scroll").click(function(event){
        			event.preventDefault();
        			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
        		});
        	});
        </script> */}
      </head>

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
    			<a href="index.html"><i class="fa fa-inr" aria-hidden="true"></i> The Bank<span> of the Sun</span></a>
    		</div>

        {/* <!-- about --> */}
        <section class="about" id="about">
        	<div class="container">
        	<div class="about-heading">
        		<h2>About</h2>
        	</div>
        		<div class="about-grids">
        		<div class="col-md-6 about-left">
        			<img src="images/1.jpg" alt="" />
        		</div>
        		<div class="col-md-6 about-right">
        			<h3>The Bank of the Sun, pride themselves in making sure our clients needs are always met.</h3>
        			<p>Access the true meaning of efficiency with The Bank of the Sun with it's simplified complexity!</p>
        			<p>We create and deliver innovative advisory, funding, trading, corporate banking and principal investing
        				 solutions for our clients. We are innovative thinkers who turn challenges into opportunities.</p>
        			<div class="more">
        				<a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
        			</div>
        		</div>
        		<div class="clearfix"></div>
        		</div>
        		</div>
        </section>
        {/* <!-- //about --> */}

        <section class="about" id="about">
        	<div class="container">
        	<div class="about-heading">
        	</div>
        		<div class="about-grids">
        		<div class="col-md-6 about-left">
        			<img src="images/2.jpg" alt="" />
        		</div>
        		<div class="col-md-6 about-right">
        			<h3>Tips on stretching your retirement savings</h3>
        			<p>29 August 2018: - When you finally reach retirement age, you need to be in a position where you can afford to maintain a similar lifestyle which you have been accustomed to prior to retirement. The only way to achieve this is making sure you start planning and saving for retirement much earlier.</p>
        			<div class="more">
        				<a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
        			</div>
        		</div>
        		<div class="clearfix"></div>
        		</div>
        		</div>
        </section>
        {/* <!-- modal --> */}
        	<div class="modal about-modal fade" id="myModal" tabindex="-1" role="dialog">
        		<div class="modal-dialog" role="document">
        			<div class="modal-content">
        				<div class="modal-header">
        					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="span1"aria-hidden="true">&times;</span></button>
        						<h4 class="modal-title"> The Bank<span> Of the Sun</span></h4>
        					</div>
        					<div class="modal-body">
        					<div class="agileits-w3layouts-info">
        						<img src="images/business.jpg" alt="" />
        						<p>valuate costs: Look at your current household expenses and identify areas where you can cut costs. These expenses can be filtered down based on your needs and wants. The key is to prioritise things that matter the most such as insurance and medical care.
        Budget: This is a very important element, it allows you to plan your finances and also give you a view of what you can and cannot afford to ensure that you don"t outlive your retirement savings. Therefore, you need to stick to your monthly budget and regularly review if you are living within your means.
        Monitor investments: Environmental shifts, inflationary changes are some of the things you need to consider that can have a direct impact on your investments. Therefore, it is advisable to enlist the service of a financial advisor who will help you monitor and ensure that your savings are safe from market fluctuations.</p>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        {/* <!-- //modal --> */}
        {/* <!-- copyright --> */}
        <section class="copyright">
        	<div class="agileits_copyright text-center">
        			<p>© 2018 Corporate Bank. All rights reserved | Design by <a href="//w3layouts.com/" class="w3_agile">Ctrl Alt elite</a></p>
        	</div>
        </section>
        {/* <!-- //copyright --> */}

      </div>
    );
  };
  export default index;