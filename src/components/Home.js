import React from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Slider />
      <section>
        <div class="container">
          <div class="row">
            <Sidebar />
            <div className="col-sm-9 padding-right">
              <div className="category-tab">
                <div className="col-sm-12">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a href="#tshirt" data-toggle="tab">
                        Fashion
                      </a>
                    </li>
                    <li>
                      <a href="#blazers" data-toggle="tab">
                        Grocery
                      </a>
                    </li>
                    <li>
                      <a href="#sunglass" data-toggle="tab">
                        Electronics
                      </a>
                    </li>
                    <li>
                      <a href="#kids" data-toggle="tab">
                        Health & Beauty
                      </a>
                    </li>
                    <li>
                      <a href="#poloshirt" data-toggle="tab">
                        Education
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  <div className="tab-pane fade active in" id="tshirt">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery1.jpg" alt="" />
                            </Link>
                            <p>Mens Brown Jacket</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery2.jpg" alt="" />
                            </Link>
                            <p>Mens Blue Jacket</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery3.jpg" alt="" />
                            </Link>
                            <p>Mens Maroon Jacket</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery4.jpg" alt="" />
                            </Link>

                            <p>Mens Grey Hood</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="blazers">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery5.jpg" alt="" />
                            </Link>

                            <p>Vivel Neem Oil</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery6.jpg" alt="" />
                            </Link>
                            <p>Aashirwaad Aatta</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery7.jpg" alt="" />
                            </Link>

                            <p>NeamEasy Dishwash Gel</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="sunglass">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery8.png" alt="" />
                            </Link>

                            <p>Boat Rockerz 450</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery9.png" alt="" />
                            </Link>
                            <p>Boat Airpods 421v2</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery10.png" alt="" />
                            </Link>
                            <p>Boat Rockerz 255</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <Link to="/productdetails">
                              <img src="images/home/gallery11.png" alt="" />
                            </Link>
                            <p>Boat Explorer O2</p>
                            <Link to="/cart"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="kids">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />

                            <p>Easy Polo Black Edition</p>
                            <Link to="#"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />

                            <p>Easy Polo Black Edition</p>
                            <Link to="#"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />

                            <p>Easy Polo Black Edition</p>
                            <Link to="#"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />

                            <p>Easy Polo Black Edition</p>
                            <Link to="#"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="poloshirt">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />

                            <p>Easy Polo Black Edition</p>
                            <Link to="#"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />

                            <p>Easy Polo Black Edition</p>
                            <Link to="#"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <p>Easy Polo Black Edition</p>
                            <Link to="#"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />

                            <p>Easy Polo Black Edition</p>
                            <Link to="#"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recommended_items">
                <h2 className="title text-center">Install apps & earn</h2>

                <div
                  id="recommended-item-carousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend1.png" alt="" />

                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className=""></i>Rs 5/Install
                              </Link>
                              <p> Cashback Rates & terms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend2.png" alt="" />

                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className=""></i>Rs 100/Install
                              </Link>
                              <p> Cashback Rates & terms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend3.png" alt="" />
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className=""></i>Rs 10/Install
                              </Link>
                              <p> Cashback Rates & terms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend4.png" alt="" />

                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className=""></i>Rs 110/Install
                              </Link>
                              <p> Cashback Rates & terms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend5.png" alt="" />
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className=""></i>Rs 70/Install
                              </Link>
                              <p> Cashback Rates & terms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend6.png" alt="" />
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className=""></i>Rs 60/Install
                              </Link>
                              <p> Cashback Rates & terms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="left recommended-item-control"
                    href="#recommended-item-carousel"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left"></i>
                  </a>
                  <a
                    className="right recommended-item-control"
                    href="#recommended-item-carousel"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>

              <div class="col-sm-12">
                <img src="images/home/offer.jpeg" class="refer_earn_money" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
