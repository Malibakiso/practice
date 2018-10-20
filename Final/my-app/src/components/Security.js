import React from "react";
import reactDOM from 'react-dom';


  const index = () => {
    return(
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
      <div>
      {/* </head> */}
      {/* // <!-- //Head -->
      // <!-- Body --> */}
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
            <a href="index.html"> The Bank<span> of the Sun</span></a>
          </div>

          <section class="profile section-padding">
            <div class="container">
              <div class="row">
                <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                  {/* <!-- blog title --> */}
                  <div class="template-title text-center">
                    {/* <!-- DETAILS --> */}
                    <section id="services" class="section w3-red w3-hover-opacity">
                        <form>
                        <fieldset>
                      <h2><legend>Security</legend></h2><br/>

                       <div>
                  <label for="text">Active Token/OTP - Security:</label><br/>
                  <input type="text" name="Phone" placeholder="Phone" required=""
                         required /><br/>

                  <label for="text">SMS Update:</label><br/>
                  <input type="text" name="Phone" placeholder="Phone" required=""
                                required /><br/>
                      </div><br/>

              <div>
                  <label for="text">Mobile Banking:</label><br/>
                  <input type="text" name="Phone" placeholder="Phone" required="" required
                         placeholder="8 characters minimum" /><br/>
              </div><br/>
              <input type="submit" value="Confirm"/><br/>
            </form>
                        {/* <!-- react will be used for pad and then update button --> */}
            </div>
          </section>
                    <br/>
            <br/>
            <div class="template-title text-center">
                    <form>
                    <fieldset>
                   <h2><legend>Update Username & Password</legend></h2><br/>

                   <div>
              <label for="username">Current Username:</label><br/>
              <input type="text" id="username" name="username"
                     required /><br/>
              <label for="username">New Username:</label><br/>
              <input type="text" id="username" name="username"
                            required /><br/>
                  </div>

          <div>
              <label for="password">Current Password:</label><br/>
              <input type="password" id="password" name="password"
                     minlength="8" required
                     placeholder="8 characters minimum" /><br/>
              <label for="password">New Password:</label><br/>
              <input type="password" id="password" name="password"
                            minlength="8" required
                            placeholder="8 characters minimum" /><br/>
          </div>
          <br/>
          <input type="submit" value="Confirm"/><br/>

        </fieldset>
      </form>
    </div>
          <br/>
            <div>
              <br/>
                <a href= index.html><button type="submit">Back to Profile..</button><a>
                </div>
                  <br/>

                  {/* <!-- //footer -->

                  <!-- copyright --> */}
                  <section class="copyright">
                    <div class="agileits_copyright text-center">
                        <p>© 2018 The Bank of The Sun. All rights reserved | Design by <a href="//w3layouts.com/" class="w3_agile">Control Alt elite</a></p>
                    </div>
                  </section>

      </div>
  );
};
export default index;
