import React from "react";

function Sidebar() {
  return (
    <div class="col-sm-3">
      <div class="left-sidebar">
        <h2>Category</h2>
        <div class="panel-group category-products" id="accordian">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#">Website, Domain, Hosting</a>
              </h4>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#">Loan</a>
              </h4>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#">Health & Beauty</a>
              </h4>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#">Education</a>
              </h4>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#">Fashion</a>
              </h4>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#">Grocery</a>
              </h4>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="#">Electronics</a>
              </h4>
            </div>
          </div>
        </div>

        <div class="shipping text-center">
          <img src="images/home/shipping.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
