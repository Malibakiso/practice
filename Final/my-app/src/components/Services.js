import React from "react";
import reactDOM from 'react-dom';
import sun from '../images/sun.jpg';


  const Services = () => {
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
          <link rel="icon" type="image/jpg" href="images/sun"/>
        {/* <!-- //.css files -->
        <!-- Default-JavaScript-File --> */}
        	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
        	<script type="text/javascript" src="js/bootstrap.min.js"></script>
        {/* <!-- //Default-JavaScript-File -->
        <!-- fonts --> */}
        	<link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet"/>
        	<link href="//fonts.googleapis.com/css?family=Ropa+Sans:400,400i&amp;subset=latin-ext" rel="stylesheet"/>

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
      <div class="logo">
        <img src= {sun} alt="SunBank" width="200" height="200"/>
      </div>

  {/* // <!-- services --> */}
  <section class="services" id="services">
    <div class="container">
      <div class="services-heading">
        <h3>services</h3>
      </div>
      <div class="service-grids">
        <div class="service-grid-top">
          <div class="col-md-4 service-grid-1">
            <div class="service-grid-text">
              <div class="icon">
                <i class="fa fa-usd" aria-hidden="true"></i>
              </div>
              <h4><a href="#"><button>TEXTCASH</button></a></h4>
              <p>Text Cash Network allows people from over 142 countries to signup to receive text message advertisements.</p>
            </div>
          </div>
          <div class="col-md-4 service-grid-1">
            <div class="service-grid-text">
              <div class="icon">
                <i class="fa fa-money" aria-hidden="true"></i>
              </div>
              <h4><a href="#"><button>FOREX</button></a></h4>
              <p>Forex, or FX currency trading, is a decentralized global market where all the world's currencies trade.
              </p>
            </div>
          </div>
          <div class="col-md-4 service-grid-1">
            <div class="service-grid-text">
              <div class="icon">
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              <h4><a href="Profile.html"><button>MANAGE</button></a></h4>
              <p>What type of Bank would we be if we did not allow you to manage and handle your own personal profile?
              </p>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="service-grid-bottom">
          <div class="col-md-4 service-grid-1">
            <div class="service-grid-text">
              <div class="icon">
                <i class="fa fa-handshake-o" aria-hidden="true"></i></div>
              <h4><a href="#"><button>PAYMENTS</button></a></h4>
              <p>Payments through us is easy peezy lemon squeezy. Let's not fret about these. </p>
            </div>
          </div>
          <div class="col-md-4 service-grid-1">
            <div class="service-grid-text">
              <div class="icon">
                <i class="fa fa-briefcase" aria-hidden="true"></i>
              </div>
              <h4><a href="Prepaid.html"><button>PREPAID</button></a></h4>
              <p>You can buy airtime, electricity and data bundles. Easy access, easy pay. </p>
            </div>
          </div>
          <div class="col-md-4 service-grid-1">
            <div class="service-grid-text">
              <div class="icon">
                <i class="fa fa-credit-card" aria-hidden="true"></i>
              </div>
              <h4><a href="#"><button>SHARE/GOLD</button></a></h4>
              <p> See rates in the JSE. Really understand this knowledge is important is what we always say.</p>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- //services -->
  <!-- //footer -->

  <!-- copyright --> */}
  <section class="copyright">
    <div class="agileits_copyright text-center">
        <p>© 2018 The Bank of The Sun. All rights reserved | Design by <a href="//w3layouts.com/" class="w3_agile">Control Alt elite</a></p>
    </div>
  </section>
      </div>
    );
  };
  export default Services;
