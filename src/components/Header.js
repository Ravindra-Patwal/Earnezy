import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header id="header">
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">
                <Link to="/">
                  <img src="images/home/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="#">
                      <i className="fa fa-user"></i> Account
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-star"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/checkout">
                      <i className="fa fa-crosshairs"></i> Checkout
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-shopping-cart"></i> Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <i className="fa fa-lock"></i> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      Shop<i className="fa fa-angle-down"></i>
                    </Link>
                    <ul role="menu" className="sub-menu">
                      <li>
                        <Link to="/Products">Products</Link>
                      </li>
                      <li>
                        <Link to="/ProductDetails">Product Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
