import React from "react";

function Slider() {
  return (
    <section id="slider">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div
              id="slider-carousel"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#slider-carousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#slider-carousel" data-slide-to="1"></li>
                <li data-target="#slider-carousel" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="item active">
                  <img
                    src="images/home/banner1.png"
                    class="banner img-responsive"
                    alt=""
                  />
                </div>
                <div class="item">
                  <img
                    src="images/home/banner2.png"
                    class="banner img-responsive"
                    alt=""
                  />
                </div>

                <div class="item">
                  <img
                    src="images/home/banner3.jpg"
                    class="banner img-responsive"
                    alt=""
                  />
                </div>
              </div>

              <a
                href="#slider-carousel"
                class="left control-carousel hidden-xs"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                href="#slider-carousel"
                class="right control-carousel hidden-xs"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
