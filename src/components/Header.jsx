import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div id="header-top-bar" className="primary-bg py-2">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-7 d-none d-md-block d-lg-block">
              <div className="topbar-text text-white">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/RestartIndiaorg"
                      target="_blank"
                      className="rounded"
                    >
                      <span className="fab fa-facebook-f"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/company/restartindia"
                      target="_blank"
                      className="rounded"
                    >
                      <span className="fab fa-linkedin-in"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="http://twitter.com/restartIndiaorg/"
                      target="_blank"
                      className="rounded"
                    >
                      <span className="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.youtube.com/channel/UCFuwG7YFUwx34qFzeiGt90w"
                      target="_blank"
                      className="rounded"
                    >
                      <span className="fab fa-youtube"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="topbar-text text-white">
                <ul className="list-inline text-md-right text-lg-right text-left  mb-0">
                  <li className="list-inline-item">
                    <a href="https://t.me/restartindia" className="rounded">
                      <span className="fas fa-paper-plane"></span> &nbsp;&nbsp;
                      Join Telegram Group
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="includedheader">
        <nav
          style={{ width: "100vw" }}
          className="navbar navbar-expand-md fixed-top white-bg"
        >
          <div className="container">
            <a
              style={{ width: "30%" }}
              className="navbar-brand"
              href="#header-top-bar"
            >
              <img
                style={{ width: "22%", height: "auto" }}
                src="img/LOGO.png"
                alt="logo"
                className="img-fluid"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse h-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto menu">
                <li>
                  <a href="#schedule"> Schedule </a>
                </li>
                <li>
                  <a href="#challenges"> Themes </a>
                </li>
                <li>
                  <a href="#prizes"> Prizes </a>
                </li>
                <li>
                  <a href="#sponsers"> Sponsers</a>
                </li>
                <li>
                  <a href="#faq"> FAQs</a>
                </li>
                <li>
                  <a
                    href="http://restartindia.org/register/"
                    className="btn secondary-solid-btn check-btn"
                  >
                    {" "}
                    Apply with Devfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
