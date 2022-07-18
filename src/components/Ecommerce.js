import React from "react";
import "./ecommerce.css";

const Ecommerce = () => {
  return (
    <div className="anigim">
      <nav
        class="navbar navbar-expand-lg shadow-lg fixed-top pr-3"
        id="anigim1"
      >
        <a class="navbar-brand" href="#" id="heading">
          Ecommerce
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse dil" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link text-light navitems" href="/Products">
              Products
            </a>
            <a class="nav-link text-light navitems" href="/Login">
              Login
            </a>
            <a class="nav-link text-light navitems" href="/SignUp">
              SignUp
            </a>
          </div>
        </div>
      </nav>

      <div class="products-section mt-3 pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="product-heading">Our Products</h1>
            </div>
            <div class="col-12 col-md-6 first-card mb-3">
              <div class="products-theory d-flex flex-column justify-content-end">
                <div class="hands p-4">
                  <h2 class="products-card-one-heading">Smart Headphones</h2>
                  <p class="products-para">
                    Head phones with deep Bass sound touch..
                  </p>

                  <button
                    type="button"
                    class="btn btn-light text-warning viewdetails"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    View Details
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body modelbody">
                          <div class="features">
                            <h3 class="topheading">
                              Sony WH-1000XM4 Noise Cancelling Headphones
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Iste eaque error maiores
                              quisquam veritatis dolore, ipsum debitis libero
                              corporis magni?
                            </p>
                            <div class="characters">
                              <p>
                                <span>Voice Assistance</span>:Alexa,Google
                                Assistance and Siri
                              </p>
                              <p>
                                <span>Smart Listening</span>:Lorem ipsum dolor
                                sit amet.
                              </p>
                              <p>
                                <span>Long Batter Life</span>:Lorem ipsum dolor
                                sit amet.
                              </p>
                              <p>
                                <span>Long Batter Life</span>:Lorem ipsum dolor
                                sit amet.
                              </p>
                              <p>
                                <span>Long Batter Life</span>:Lorem ipsum dolor
                                sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary buynow"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 first-card">
              <div class="products-theory1 d-flex flex-column justify-content-end">
                <div class="hands p-4">
                  <h2 class="products-card-one-heading">Laptops</h2>
                  <p class="products-para">
                    Head phones with deep Bass sound touch..
                  </p>

                  <button
                    type="button"
                    class="btn btn-light text-warning viewdetails"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    View Details
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="features">
                            <h3 class="topheading">
                              Sony WH-1000XM4 Noise Cancelling Headphones
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Iste eaque error maiores
                              quisquam veritatis dolore, ipsum debitis libero
                              corporis magni?
                            </p>
                            <div class="characters">
                              <p>
                                <span>Voice Assistance</span>:Alexa,Google
                                Assistance and Siri
                              </p>
                              <p>
                                <span>Smart Listening</span>:Lorem ipsum dolor
                                sit amet.
                              </p>
                              <p>
                                <span>Long Batter Life</span>:Lorem ipsum dolor
                                sit amet.
                              </p>
                              <p>
                                <span>Long Batter Life</span>:Lorem ipsum dolor
                                sit amet.
                              </p>
                              <p>
                                <span>Long Batter Life</span>:Lorem ipsum dolor
                                sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex flex-row justify-content-end">
              <a href="#" class="link-view-more">
                See All Offers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="dealssection">
        <div class="container">
          <div class="col-12">
            <h3 class="deal-heading">Explore Deals andOffers</h3>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="deals-first-car p-3 shadow-lg">
                <h5 class="first-card-offers">
                  up to 80%off | Electronics and Gadgets
                </h5>
                <div class="offer-products-one mb-5 mt-3 d-flex flex-row">
                  <div class="sub-one mr-3 ml-2">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-mamba-watch-img.png"
                      alt=""
                      class="w-100 smartwatch"
                    />
                    <h5 class="mt-3">Smart Watch</h5>
                  </div>
                  <div class="sub-one">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-camera-img.png"
                      alt=""
                      class="w-100 smartwatch"
                    />
                    <h5 class="mt-3">Cemeras</h5>
                  </div>
                </div>
                <div class="offer-products-two d-flex flex-row">
                  <div class="sub-one mr-3 ml-2">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-sport-and-fitness-img.png"
                      alt=""
                      class="w-100 smartwatch"
                    />
                    <h5 class="mt-3">Gym Euipments</h5>
                  </div>
                  <div class="sub-one">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-ear-phones-pink-img.png"
                      alt=""
                      class="w-100 smartwatch"
                    />
                    <h5 class="mt-3">Headphones</h5>
                  </div>
                </div>
                <div class="mt-5">
                  <a href="#" class="link-view-more" id="readmore">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="deals-first-car p-3 shadow-lg">
                <h5 class="first-card-offers">
                  up to 80%off | Electronics and Gadgets
                </h5>
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-tv-img.png"
                  alt=""
                  class="w-100 tvimages"
                />
                <div class="mt-3">
                  <a href="#" class="link-view-more" id="readmore">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="deals-first-car p-3 shadow-lg">
                <h5 class="first-card-offers">
                  up to 80%off | Electronics and Gadgets
                </h5>
                <div class="offer-products-one mb-5 mt-3 d-flex flex-row">
                  <div class="sub-one mr-3 ml-2">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-tablet-device-img.png"
                      alt=""
                      class="w-100 smartwatch"
                    />
                    <h5 class="mt-3">Smart Watch</h5>
                  </div>
                  <div class="sub-one">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-joy-stick-img.png"
                      alt=""
                      class="w-100 smartwatch"
                    />
                    <h5 class="mt-3">Cemeras</h5>
                  </div>
                </div>
                <div class="offer-products-two d-flex flex-row">
                  <div class="sub-one mr-3 ml-2">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-speakers-big-img.png"
                      alt=""
                      class="w-100 smartwatch"
                    />
                    <h5 class="mt-3">Gym Euipments</h5>
                  </div>
                  <div class="sub-one">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-vr-set-img.png"
                      alt=""
                      class="w-100 smartwatch"
                    />
                    <h5 class="mt-3">Headphones</h5>
                  </div>
                </div>
                <div class="mt-5">
                  <a href="#" class="link-view-more" id="readmore">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="contact-theory">
                <h1 class="letusjoin">Let us Join together</h1>
                <button class="btn btn-warning contactus">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-section">
        <div class="container">
          <div class="row">
            <div class="col-12 mt-3 col-md-6 col-lg-3 col-xl-3">
              <div class="first-footer">
                <div class="dummy d-flex flex-row justify-content-center">
                  <div class="footer-image">
                    <img
                      src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png"
                      alt=""
                      class="w-100 footer-image-date"
                    />
                  </div>
                </div>
                <div class="footer-icons mb-3">
                  <i class="fa-brands fa-instagram icon-section"></i>
                  <i class="fa-brands fa-google icon-section"></i>
                  <i class="fa-brands fa-facebook icon-section"></i>
                  <i class="fa-brands fa-twitter icon-section"></i>
                </div>
                <div class="footeradress mb-4">
                  <p>37,ayur,vidhya nagar,new delhi,india</p>
                </div>
              </div>
            </div>
            <div class="col-6 mt-3 col-md-6 col-lg-3 col-xl-3">
              <div class="gettoknow">
                <h3>Get to know us</h3>
                <p>About us</p>
                <p>Career</p>
                <p>Press Release</p>
                <p>gift a smaile</p>
              </div>
            </div>
            <div class="col-6 mt-3 col-lg-3 col-xl-3">
              <div class="gettoknow">
                <h3>Contact with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>instagram</p>
              </div>
            </div>
            <div class="col-6 mt-3 mb-3 col-lg-3 col-xl-3">
              <div class="gettoknow">
                <h3>Get to know us</h3>
                <p>About us</p>
                <p>Career</p>
                <p>Press Release</p>
                <p>gift a smaile</p>
              </div>
            </div>

            <div class="col-12 copy-section mb-4">
              <hr class="hori" />
              <i class="fa-solid fa-copyright"></i>
              <span>2021 by mangala madhu with bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
