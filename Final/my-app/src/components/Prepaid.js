import React from "react";
import reactDOM from 'react-dom';
import ReactTable from 'react-table'
import a from '../images/a.jpg';
import b from '../images/b.jpg';
  const Prepaid = () => {
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
    			<a href="index.html">The Bank<span> of the Sun</span></a>
    		</div>
    {/* <!-- about --> */}
    <section class="about" id="about">
    	<div class="container">
    	<div class="about-heading">
    		<h2>Prepaid Options</h2>
    	</div>
    		<div class="about-grids">
    		<div class="col-md-6 about-left">
    			<img src={a} alt="" />
    		</div>
    		<div class="col-md-6 about-right">
    			<h3>AIRTIME</h3>
    			<p> Access your airtime here! </p>
    			<div class="more">
    			{/* <!-- 	<a href="#" data-toggle="modal" data-target="#myModal">Select Amount</a> --> */}
            <label>Choose Amount:
                    <input list="Amount" name="myBrowser" /></label>
                      <datalist id="Amount">
                          <option value="R12"/>
                          <option value="R20"/>
                          <option value="R35"/>
                          <option value="R50"/>
                          <option value="R65"/>
                          <option value="R80"/>
                          <option value="R95"/>
                          <option value="R100"/>
                          <option value="R200"/>
                      </datalist>

              <label>Service Provider:
                      <input list="Service" name="myBrowser" /></label>
                          <datalist id="Service">
                                <option value="Telkom"/>
                                <option value="MTN"/>
                                <option value="Vodacom"/>
                                <option value="CellC"/>
                            </datalist>
                    <button type="submit" form="nameform" value="Submit">Submit</button>
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
    			<img src={b} alt="" />
    		</div>
    		<div class="col-md-6 about-right">
    			<h3>DATA BUNDLES</h3>
    			<p>Get your Data Bundles here!</p>
    			<div class="more">
    		{/* <!-- 		<a href="#" data-toggle="modal" data-target="#myModal">Select Amount</a> --> */}
        <label>Choose Amount:
                <input list="Amount" name="myBrowser" /></label>
                  <datalist id="Amount">
                    <option value="5MB"/>
                    <option value="10MB"/>
                    <option value="20MB"/>
                    <option value="40MB"/>
                    <option value="60MB"/>
                    <option value="75MB"/>
                    <option value="90MB"/>
                    <option value="150MB"/>
                    <option value="200MB"/>
                    <option value="350MB"/>
                    <option value="400MB"/>
                    <option value="500MB"/>
                  </datalist>

          <label>Service Provider:
                  <input list="Service" name="myBrowser" /></label>
                      <datalist id="Service">
                            <option value="Telkom"/>
                            <option value="MTN"/>
                            <option value="Vodacom"/>
                            <option value="CellC"/>
                        </datalist>
                  <button type="submit" form="nameform" value="Submit">Submit</button>
    			</div>
    		</div>
    		<div class="clearfix"></div>
    		</div>
    		</div>
    </section>

    {/* <!-- //about --> */}
      </div>
    );
  };
  export default Prepaid;
