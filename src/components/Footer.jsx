import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-9">
              <div className="row footer-top-wrap">
                <div className="col-md-4 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <p>
                      RestartIndia's goal is to bring the community together for
                      building Innovative solutions for India to emerge strongly
                      during these uncertain times.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white"> Useful Links </h4>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#challenges">
                          {" "}
                          Themes{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="schedule.html">
                          {" "}
                          Schedule
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#faq">
                          {" "}
                          FAQ's
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="speakers_and_judges.html">
                          {" "}
                          Speakers{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <a
                      className="twitter-timeline"
                      data-width="330"
                      data-height="200"
                      data-theme="light"
                      href="https://twitter.com/restartIndiaorg?ref_src=twsrc%5Etfw"
                    >
                      Tweets
                    </a>
                    <script
                      async
                      src="https://platform.twitter.com/widgets.js"
                      charSet="utf-8"
                    ></script>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="row footer-top-wrap mt-md-4 mt-sm-0 mt-lg-0">
                <div className="col-12">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white">GET IN TOUCH</h4>
                    <ul className="get-in-touch-list">
                      <li className="d-flex align-items-center py-2">
                        <span className="fas fa-paper-plane mr-2"></span>
                        <a href="https://t.me/restartindia"> Telegram Group </a>
                        <br />
                      </li>
                      <li className="d-flex align-items-center py-2">
                        <span className="fas fa-envelope mr-2"></span>{" "}
                        <a href="mail:help@restartindia.org">
                          {" "}
                          help@restartindia.org{" "}
                        </a>
                      </li>
                    </ul>
                    <div className="social-nav mt-4">
                      <ul className="list-unstyled social-list mb-0">
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://www.facebook.com/RestartIndiaorg"
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-facebook-f"></span>
                          </a>
                          <div className="tooltip-item">Facebook</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="http://twitter.com/restartIndiaorg/"
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-twitter"></span>
                          </a>
                          <div className="tooltip-item">Twitter</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://www.linkedin.com/company/restartindia"
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-linkedin-in"></span>
                          </a>
                          <div className="tooltip-item">Linkedin</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://www.youtube.com/channel/UCFuwG7YFUwx34qFzeiGt90w"
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-youtube"></span>
                          </a>
                          <div className="tooltip-item">Youtube</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom gray-light-bg py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-lg-5">
              <p className="copyright-text pb-0 mb-0">
                Copyrights © 2020. All rights reserved by
                <a href="#">RestartIndia</a>
              </p>
            </div>
            <div className="col-md-7 col-lg-6 d-none d-md-block d-lg-block">
              <ul className="list-inline policy-nav text-right social-list">
                <li className="list-inline-item">
                  <a href="https://devfolio.co/code-of-conduct" target="_blank">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
