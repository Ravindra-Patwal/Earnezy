import React from "react";
import Sidebar from "./Sidebar";

import { Link } from "react-router-dom";
function ProductDetails() {
  return (
    <section>
      <div class="container">
        <div class="row">
          <Sidebar />

          <div class="col-sm-9 padding-right">
            <div class="product-details">
              <div class="col-sm-5">
                <div class="view-product">
                  <img src="images/product-details/1.jpg" alt="" />
                  <h3>ZOOM</h3>
                </div>
              </div>
              <div class="col-sm-7">
                <div class="product-information">
                  <img
                    src="images/product-details/new.jpg"
                    class="newarrival"
                    alt=""
                  />
                  <h2>Mens Maroon Jacket</h2>
                  <p>Web ID: 1089772</p>
                  <img src="images/product-details/rating.png" alt="" />
                  <span>
                    <span>Rs 1000</span>
                    <label>Quantity:</label>
                    <input type="text" value="3" />
                    <Link to="/Login">
                      <button type="button" class="btn btn-fefault cart">
                        <i class="fa fa-shopping-cart"></i>
                        Proceed to buy
                      </button>
                    </Link>
                  </span>
                  <p>
                    <b>Availability:</b> In Stock
                  </p>

                  <p>
                    <b>Brand:</b> Earnezy
                  </p>
                </div>
              </div>
            </div>

            <div class="category-tab shop-details-tab">
              <div class="col-sm-12">
                <ul class="nav nav-tabs">
                  <li>
                    <a href="#details" data-toggle="tab">
                      Details
                    </a>
                  </li>
                  <li>
                    <a href="#companyprofile" data-toggle="tab">
                      Company Profile
                    </a>
                  </li>
                  <li>
                    <a href="#tag" data-toggle="tab">
                      Tag
                    </a>
                  </li>
                  <li class="active">
                    <a href="#reviews" data-toggle="tab">
                      Reviews (5)
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane fade" id="details">
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="companyprofile">
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="tag">
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/home/gallery4.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <button
                            type="button"
                            class="btn btn-default add-to-cart"
                          >
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade active in" id="reviews">
                  <div class="col-sm-12">
                    <ul>
                      <li>
                        <a href="">
                          <i class="fa fa-user"></i>EUGEN
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fa fa-clock-o"></i>12:41 PM
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fa fa-calendar-o"></i>31 DEC 2014
                        </a>
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <p>
                      <b>Write Your Review</b>
                    </p>

                    <form action="#">
                      <span>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Email Address" />
                      </span>
                      <textarea name=""></textarea>
                      <b>Rating: </b>{" "}
                      <img src="images/product-details/rating.png" alt="" />
                      <button type="button" class="btn btn-default pull-right">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
