import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Service</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link to="/Contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Order Status</Link>
                  </li>
                  <li>
                    <Link to="#">Change Location</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ’s</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Policies</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Our Advertising Partners</Link>
                  </li>
                  <li>
                    <Link to="#">Third Party Privacy Policies</Link>
                  </li>
                  <li>
                    <Link to="#">Children's Information</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>About Earnezy</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link to="#">Company Information</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                  <li>
                    <Link to="#">Store Location</Link>
                  </li>
                  <li>
                    <Link to="#">Affillate Program</Link>
                  </li>
                  <li>
                    <Link to="#">Copyright</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 col-sm-offset-1">
              <div className="single-widget">
                <h2>Download App</h2>
                <form action="#" class="searchform">
                  <input type="text" placeholder="Enter Mobile No" />
                  <button type="submit" class="btn btn-default">
                    <i class="fa fa-arrow-circle-o-right"></i>
                  </button>
                  <p>
                    Download Earnezy App, Enter your mobile number and we will
                    sent you the app link by sms.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="pull-left">
              © Copyright 2019-2022. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
