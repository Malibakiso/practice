// Page Description:  When a error occurs or in correct information is added, this page appears
// Last Modified: 25 October 2018


import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";

const Error = () => (
      <div>
        <h1>ERROR ERROR</h1>

        <section className="main-agile">
          <div className="error-agile">
            <div className="error-center">
              <h1>bright error page</h1>
            </div>
            <div className="page-agile">
              <h2>404</h2>
              <span>seem like the page does not exist you can search instead </span>
              <div className="form-agile">
                <form action="#" method="get">
                  <input type="text" name="uname" placeholder="search" required />
                  <input type="submit" className="button" defaultValue />
                </form>
              </div>
              <div className="clear" />
              <div className="social-agile">
                <ul className="icons-agile">
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <div className="clear" />
            </div>
          </div>
        </section>
      </div>
    );

export default Error;
