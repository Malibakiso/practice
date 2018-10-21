import React from "react";
import reactDOM from 'react-dom';

  const Navigation = () => {
    return(
      <div>
        <div className="top-main">
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
</div>
  );
};
export default Navigation;
