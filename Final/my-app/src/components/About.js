import React from "react";
import reactDOM from 'react-dom';
import a from '../images/a.jpg';
import b from '../images/b.jpg';

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
          <link rel="icon" type="image/jpg" href="images/a"/>

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

      <div className="top-main">
    		<div className="number">
    			<h3><i className="fa fa-phone" aria-hidden="true"></i>021 2320 564</h3>
    			<div className="clearfix"></div>
    		</div>
    		<div className="social-icons">
    		<ul className="top-icons">
    			<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
    			<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
    			<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
    			<li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
    			<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
    		</ul>
    		<div className="form-top">
    		  <form action="#" method="post" className="navbar-form navbar-left">
    			<div className="form-group">
    				<input type="search" className="form-control" placeholder="Search"/>
    			</div>
    				<button type="submit" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
    				{/* <!-- <button type="submit" className="btn btn-default">Submit</button> --> */}
    			</form>
    		</div>
    			<div className="clearfix"></div>
    		</div>
    			<div className="clearfix"></div>
    	</div>
    		{/* <!-- Top-Bar --> */}
    		<div className="top-bar">
    			<nav className="navbar navbar-default">
    				<div className="container-fluid">
    				{/* <!-- Brand and toggle get grouped for better mobile display --> */}
    					<div className="navbar-header">
    						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
    							<span className="sr-only">Toggle navigation</span>
    							<span className="icon-bar"></span>
    							<span className="icon-bar"></span>
    							<span className="icon-bar"></span>
    						</button>
    					</div>
    					<div className="collapse navbar-collapse" id="myNavbar">
    						<ul className="nav navbar-nav navbar-right" data-in="" data-out="">
    							<li className="active"><a href="index.html">home</a></li>
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
    		<div className="logo">
    			<a href="index.html"><i className="fa fa-inr" aria-hidden="true"></i> The Bank<span> of the Sun</span></a>
    		</div>

        {/* <!-- about --> */}
        <section className="about" id="about">
        	<div className="container">
        	<div className="about-heading">
        		<h2>About</h2>
        	</div>
        		<div className="about-grids">
        		<div className="col-md-6 about-left">
        			<img src={a} alt="aimage" />
        		</div>
        		<div className="col-md-6 about-right">
        			<h3>The Bank of the Sun, pride themselves in making sure our clients needs are always met.</h3>
        			<p>Access the true meaning of efficiency with The Bank of the Sun with it's simplified complexity!</p>
        			<p>We create and deliver innovative advisory, funding, trading, corporate banking and principal investing
        				 solutions for our clients. We are innovative thinkers who turn challenges into opportunities.</p>
        			<div className="more">
        				<a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
        			</div>
        		</div>
        		<div className="clearfix"></div>
        		</div>
        		</div>
        </section>
        {/* <!-- //about --> */}

        <section className="about" id="about">
        	<div className="container">
        	<div className="about-heading">
        	</div>
        		<div className="about-grids">
        		<div className="col-md-6 about-left">
        			<img src={b} alt="logo" />
        		</div>
        		<div className="col-md-6 about-right">
        			<h3>Tips on stretching your retirement savings</h3>
        			<p>29 August 2018: - When you finally reach retirement age, you need to be in a position where you can afford to maintain a similar lifestyle which you have been accustomed to prior to retirement. The only way to achieve this is making sure you start planning and saving for retirement much earlier.</p>
        			<div className="more">
        				<a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
        			</div>
        		</div>
        		<div className="clearfix"></div>
        		</div>
        		</div>
        </section>
        {/* <!-- modal --> */}
        	<div className="modal about-modal fade" id="myModal" tabindex="-1" role="dialog">
        		<div className="modal-dialog" role="document">
        			<div className="modal-content">
        				<div className="modal-header">
        					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="span1"aria-hidden="true">&times;</span></button>
        						<h4 className="modal-title"> The Bank<span> Of the Sun</span></h4>
        					</div>
        					<div className="modal-body">
        					<div className="agileits-w3layouts-info">
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
        <section className="copyright">
        	<div className="agileits_copyright text-center">
        			<p>© 2018 Corporate Bank. All rights reserved | Design by <a href="//w3layouts.com/" className="w3_agile">Ctrl Alt elite</a></p>
        	</div>
        </section>
        {/* <!-- //copyright --> */}

      </div>
    );
  };
  export default index;
