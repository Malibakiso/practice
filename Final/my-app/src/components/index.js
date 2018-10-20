import React from "react";
import reactDOM from 'react-dom';


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
        	jQuery(document).ready(function($) {
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
    		{/* <!-- //Top-Bar --> */}
    		<div className="banner-main jarallax">
    			<div className="container">
    				<div className="banner-inner">
    					<div className="col-md-5 banner-left">
    						<form action="#" method="post">
    						<h3>Open a personal account now!</h3>
    							<input type="text" placeholder="Full name" required=""/>
    							<input type="email" placeholder="email" required=""/>
    							<input type="tel" placeholder="Phone number" required=""/>
    							<input type="text" placeholder="Location" required=""/>
    							<div className="submit">
    								<input type="submit" value="confirm" href="Profile.html"/>
    							</div>

    						</form>
    					</div>
    					<div className="col-md-7 banner-right">
    						<h1>Open an account with us today!</h1>
    						<h4>The Bank of the Sun, pride themselves in making sure our clients needs are always met.</h4>
    							<div className="banner-right-text">
    								<div className="main-icon">
    									<i className="fa fa-share" aria-hidden="true"></i>
    								</div>
    								<p>Create profile.</p>
    							<div className="clearfix"></div>
    							</div>
    							<div className="banner-right-text">
    								<div className="main-icon">
    									<i className="fa fa-share" aria-hidden="true"></i>
    								</div>
    								<p>Login using username and password.</p>
    							<div className="clearfix"></div>
    							</div>
    							<div className="banner-right-text">
    								<div className="main-icon">
    									<i className="fa fa-share" aria-hidden="true"></i>
    								</div>
    								<p>Select account type.</p>
    							<div className="clearfix"></div>
    							</div>
    							<div className="banner-right-text">
    								<div className="main-icon">
    									<i className="fa fa-share" aria-hidden="true"></i>
    								</div>
    								<p>Select service.</p>
    							<div className="clearfix"></div>
    							</div>
    							<div className="banner-right-text">
    								<div className="main-icon">
    									<i className="fa fa-share" aria-hidden="true"></i>
    								</div>
    								<p>Customer service.</p>
    							<div className="clearfix"></div>
    							</div>
    					</div>
    					<div className="clearfix"></div>
    				</div>
    				<div className="clearfix"></div>
    			</div>
    		</div>

        {/* Trial and; */}

        {/* <!-- //footer --> */}

{/* <!-- copyright --> */}
<section class="copyright">
	<div class="agileits_copyright text-center">
			<p>© 2018 Corporate Bank. All rights reserved | Design by <a href="//w3layouts.com/" class="w3_agile">Ctrl alt elite</a></p>
	</div>
</section>


      </div>
    );
  };

  export default index;
