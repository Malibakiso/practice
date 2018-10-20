import React from "react";
import reactDOM from 'react-dom';

  const Profile = () => {
      return (
        <div>
          {/* Hello world */}
          <div className="awesome" style={{border: '1px solid red'}}>
            <label htmlFor="name">Enter your name: </label>
            <input type="text" id="name" />
          </div>
          <p>
            {/* //Head */}
            {/* Body */}
          </p><div className="top-main">
            <div className="number">
              <h3><i className="fa fa-phone" aria-hidden="true" />021 2320 564</h3>
              <div className="clearfix" />
            </div>
            <div className="social-icons">
              <ul className="top-icons">
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
              </ul>
              <div className="form-top">
                <form action="#" method="post" className="navbar-form navbar-left">
                  <div className="form-group">
                    <input type="search" className="form-control" placeholder="Search" />
                  </div>
                  <button type="submit" className="btn btn-default"><i className="fa fa-search" aria-hidden="true" /></button>
                  {/* <button type="submit" class="btn btn-default">Submit</button> */}
                </form>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
          {/* Top-Bar */}
          <div className="top-bar">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right" data-in data-out>
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
            <a href="index.html">{/*<i class="fa fa-inr" aria-hidden="true"></i>*/} The Bank<span> of the Sun</span></a>
          </div>
          {/* ::::::::::::::::::::: Profile Section:::::::::::::::::::::::::: */}
          <div id="profile-container">
            <img id="profileImage" src="#" />
          </div>
          <input id="imageUpload" type="file" name="profile_photo" placeholder="Photo" required capture />
          <article>
            <div className="card-header">
              <img className="profile-photo" />
            </div>
            <ul className="card-links">
              <a href="active">
                <li>
                  <i className="icon icon-user" /><span className="label">Profile</span>
                </li>
              </a>
              <hr />
              <a href="Beneficiary.html">
                <li className="#">
                  <i className="icon icon-list-alt" /><span className="label">Beneficiaries</span>
                </li>
              </a>
              <hr />
              <a href="#">
                <li>
                  <i className="icon icon-time" /><span className="label">Buy</span>
                </li>
              </a>
              <hr />
              <a href="#">
                <li>
                  <i className="icon icon-file-text-alt" /><span className="label">Manage</span>
                </li>
              </a>
              <hr />
              <a href="FAQ.html">
                <li className="link-favorites">
                  <i className="icon icon-heart" /><span className="label">Help</span>
                </li>
              </a>
            </ul>
          </article><br />
          {/* //Top-Bar */}
          <br />
          <section className="blog-area ptb-140 bg-1">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12 col">
                  <div className="blog-wrap mb-30">
                    <div className="blog-img">
                      <img src="images/details.png" alt />
                    </div>
                    <div className="blog-content wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <div className="blog-meta">
                      </div>
                      <h3><a href="Details.html">Details</a></h3>
                      <a href="Details.html" className="btn btn-default btn_font_16">Click Here</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 col wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                  <div className="blog-wrap  mb-30">
                    <div className="blog-img">
                      <img src="images/security.png" alt />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                      </div>
                      <h3><a href="Security.html">Security</a></h3>
                      <a href="Security.html" className="btn btn-default btn_font_16">Click Here</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 col wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                  <div className="blog-wrap  mb-30">
                    <div className="blog-img">
                      <img src="images/summary.png" alt />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                      </div>
                      <h3><a href="Summary.html">Summary</a></h3>
                      <a href="Summary.html" className="btn btn-default btn_font_16">Click Here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          {/* //footer */}
          <section className="copyright">
            <div className="agileits_copyright text-center">
              <p>© 2018 The Bank of The Sun. All rights reserved | Design by <a href="//w3layouts.com/" className="w3_agile">Control Alt elite</a></p>
            </div>
          </section>
          {/* //copyright */}
          {/* here stars scrolling icon */}
          {/* //here ends scrolling icon */}
          <p />
        </div>
      );
  };

  export default Profile;
