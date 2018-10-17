import React from "react";

  const index = () => {
    return(
      <div>
        <head>
        		<meta charset="utf-8">
      		<meta http-equiv="X-UA-Compatible" content="IE=edge">
      		<meta name="viewport" content="width=device-width, initial-scale=1">
              <meta name="description" content="Business HTML template">
              <meta name="keywords" content="advisor, corporate accountant, finance, financial, insurance, investment, consultation">
              <meta name="author" content="trendytheme.net">

      		<title>The Bank of The Sun</title>

              {/* <!--  favicon --> */}
              <link rel="shortcut icon" href="assets/img/ico/favicon.png"/>
              {/* <!--  apple-touch-icon --> */}
              <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/img/ico/apple-touch-icon-144-precomposed.png"/>
              <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/img/ico/apple-touch-icon-114-precomposed.png"/>
              <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/img/ico/apple-touch-icon-72-precomposed.png"/>
              <link rel="apple-touch-icon-precomposed" href="assets/img/ico/apple-touch-icon-57-precomposed.png"/>

      		{/* <!-- animate CSS --> */}
      		<link rel="stylesheet" href="assets/css/animate.min.css" media="all" />
      		{/* <!-- FontAwesome CSS --> */}
      		<link rel="stylesheet" href="assets/fonts/font-awesome/css/font-awesome.min.css" media="all" />
      		{/* <!-- Owl Carousel --> */}
      		<link rel="stylesheet" href="assets/css/owl.carousel.min.css" media="all" />
      		{/* <!-- Bootsnav Menu --> */}
      		<link rel="stylesheet" href="assets/css/bootsnav.css" media="all" />
      		{/* <!-- Bootstrap --> */}
      		<link rel="stylesheet"  href="assets/bootstrap/css/bootstrap.min.css" media="all" />
      		{/* <!-- Style CSS --> */}
      		<link rel="stylesheet" type="text/css" href="style.css" media="all" />
      	</head>


      	<body>

      		{/* <!-- ::::::::::::::::::::: Header Section:::::::::::::::::::::::::: --> */}
      		<header>
      			{/* <!-- start top bar --> */}
      			<div className="header-top-area">
      				<div className="container">
      					<div className="row">
      						<div className="col-sm-8 hidden-xs">
      							<div className="contact">
      								<p>
      									<i className="fa fa-phone"></i>
      									021 856 8462
      								</p>
      								<p>
      									<i className="fa fa-envelope"></i>
      									<a href="#">sunbank@domain.com</a>
      								</p>
      							</div>
      						</div>

      						<div className="col-sm-4">
      							<div className="social-icon">
      								<ul>
      									<li><a href=""><i className="fa fa-facebook"></i></a></li>
      									<li><a href=""><i className="fa fa-twitter"></i></a></li>
      									<li><a href=""><i className="fa fa-linkedin"></i></a></li>
      									<li><a href=""><i className="fa fa-google-plus"></i></a></li>
      									<li><a href=""><i className="fa fa-tumblr"></i></a></li>
      								</ul>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>

      	        {/* <!-- Start Navigation --> */}
      	        {/* <nav className="navbar navbar-default navbar-sticky bootsnav"> */}
      	            {/* <!-- Start Top Search --> */}
      	            <div className="top-search">
      	                <div className="container">
      	                    <div className="input-group">
      	                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
      	                        <input type="text" className="form-control" placeholder="Search"/>
      	                        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
      	                    </div>
      	                </div>
      	            </div>
      	            {/* <!-- End Top Search --> */}


      	                {/* <!-- Start Header Navigation --> */}
      	                <div className="navbar-header">
      	                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
      	                        <i className="fa fa-bars"></i>
      	                    </button>
      	                    <a className="navbar-brand" href="index.html"><img src="assets/img/logo.png" className="logo logo-scrolled" alt=""/></a>
      	                </div>
      	                {/* <!-- End Header Navigation --> */}

      	                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
      									<div>
      	                    <ul>
      	                        <li className="active"><a href="index.html">Home</a></li>
      	                        <li><a href="about.html">Prepaid</a></li>
      	                        <li><a href="services.html">Services</a></li>
      	                        <li className="dropdown">
      	                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Payments</a>
      	                            <ul className="dropdown-menu">
      	                                <li><a href="portfolio.html">Payment History</a></li>
      	                                <li><a href="payments.html">Make Payments</a></li>
      																	<li><a href="beneficiary.html">Add a Beneficiary</a></li>
      	                            </ul>
      	                        </li>
      	                        <li className="dropdown">
      	                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Profile</a>
      	                            <ul className="dropdown-menu">
      																<li><a href="profile.html">Profile details</a></li>
      																<li><a href="profile-details.html">Update details</a></li>
      	                            </ul>
      	                        </li>
      	                        <li><a href="accounts.html">Sign In</a></li>
      	                    </ul>
      	                </div>
      	            {/* </div> */}
      	        {/* </nav> */}
      	        {/* <!-- End Navigation --> */}
      	        <div className="clearfix"></div>
      		</header>

      		{/* <!-- ::::::::::::::::::::: Page Title Section:::::::::::::::::::::::::: --> */}
      		<section className="page-title">
      			<div className="container">
      				<div className="row">
      					<div className="col-md-12">
      						{/* <!-- breadcrumb content --> */}
      						<div className="page-breadcrumbd">
      							<h2>Prepaid Services</h2>
      							<p><a href="index.html">Home</a> / <a href="">Pages</a> / Prepaid</p>
      						</div>
      					</div>
      				</div>
      			</div>
      		</section>
          {/* <!-- end breadcrumb --> */}

      		{/* <!-- ::::::::::::::::::::: Block Section:::::::::::::::::::::::::: --> */}
      		<section className="block about-us-block section-padding">
      			<div className="container">
      				<div className="row">
      					<div className="col-md-6">
      						{/* <!-- block text --> */}
      						<div className="block-text">
      							<h2>Prepaid Services</h2>
      							<p>The Bank of the Sun's new and modernized platform allows you to pay for electricity, buy data and purchase airtime. Try it now!</p>

      	{/* <!-- SERVICES --> */}
      					    <section className="section w3-light-grey">
      					      <div className="w3-container w3-center">
      					        <div className="w3-row">
      					          <div className="w3-col m3">
      					            <i className="fa fa-comment w3-red w3-padding-small w3-round-xlarge"></i>
      					            <h3>Data</h3>
      					            <p>You can purchase data according to your desired network!</p>
      					          </div>
      					          <div className="w3-col m3">
      					            <i className="fa fa-search w3-red w3-padding-small w3-round-xlarge"></i>
      					            <h3>Electricity</h3>
      					            <p>Don't want to pay at the shop? Buy here!</p>
      					          </div>
      					          <div className="w3-col m3">
      					            <i className="fa fa-cloud w3-red w3-padding-small w3-round-xlarge"></i>
      					            <h3>Airtime</h3>
      					            <p>Need to call for days? Try it now!</p>
      					          </div>
      					        </div>
      					      </div>
      					    </section>


      						</div>
      					</div>
      					<div className="col-md-6">
      						{/* <!-- block image --> */}
      						<div className="block-img">
      							<img src="assets/img/about-us-block.jpg" alt="" />
      						</div>
      					</div>
      				</div>
      			</div>
      		</section>
          {/* <!-- block area end --> */}


      		{/* <!-- preloader --> */}
      		<div id="loading">
      			<div id="loading-center">
      				<div id="loading-center-absolute">
      					<div className="object" id="object_four"></div>
      					<div className="object" id="object_three"></div>
      					<div className="object" id="object_two"></div>
      					<div className="object" id="object_one"></div>
      				</div>
      			</div>
      		</div>

      		{/* <!-- main jQuery --> */}
      		<script src="assets/js/jquery-2.1.3.min.js"></script>
      		<script src="assets/bootstrap/js/bootstrap.min.js"></script>
      		<script src="assets/js/bootsnav.js"></script>
      		<script src="assets/js/owl.carousel.min.js"></script>
      		<script src="assets/js/wow.min.js"></script>
              <script src="assets/js/ajaxchimp.js"></script>
              <script src="assets/js/ajaxchimp-config.js"></script>
      		<script src="assets/js/script.js"></script>
      	</body>
      </div>
    );
  };

  export default index;
