import React from "react";

function Contact() {
  return (
    <div id="contact-page" class="container">
      <div class="bg">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="title text-center">
              Contact <strong>Us</strong>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <div class="contact-form">
              <h2 class="title text-center">Get In Touch</h2>
              <div class="status alert alert-success"></div>
              <form
                id="main-contact-form"
                class="contact-form row"
                name="contact-form"
                method="post"
              >
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    required="required"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-md-12">
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    required="required"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group col-md-12">
                  <textarea
                    name="message"
                    id="message"
                    required="required"
                    class="form-control"
                    rows="8"
                    placeholder="Your Message Here"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <input
                    type="submit"
                    name="submit"
                    class="btn btn-primary pull-right"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="contact-info">
              <h2 class="title text-center">Our Office</h2>
              <address>
                <i class="fas fa-map-marker-alt" />
                <p>
                  Instaoffice Business Centre , Unit No.401-402,4th floor, Green
                  Wood Plaza, Netaji Subhash Marg, Block B, Sector 45, Gurugram,
                  Haryana 122001
                </p>
              </address>

              <div class="social-networks">
                <h2 class="title text-center">Follow Us</h2>
                <ul>
                  <li>
                    <a href="https://linksredirect.com?cid=70416&amp;source=js&amp;url=https%3A//www.facebook.com/EarnezyOfficial/">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/earnezy/?hl=en">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/earnezy/">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UC9ftXMEznIBLZd0L4Okbt_w">
                      <i class="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
