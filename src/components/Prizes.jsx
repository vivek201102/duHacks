import React from "react";

const Prizes = () => {
  return (
    <section id="prizes" className="our-blog-section ptb-100 gray-light-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center mb-5">
              <strong className="color-secondary"> What is at stake?</strong>
              <h2> HACKATHON PRIZES </h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
              <p className="lead">
                Prizes and Goodies from our Sponsors for RestartIndia Hackathon
                Winners
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="single-blog-card card border-0 shadow-sm">
              <div className="blog-img position-relative">
                <img
                  src="img/sponsors/1.png"
                  className="card-img-top"
                  alt="blog"
                />
              </div>
              <div className="card-body">
                <h3 className="h5 mb-2 card-title">
                  <a href="#"> Devfolio </a>
                </h3>
                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span> Devfolio Swags for
                  Top 3 Teams. (Devfolio branded T-shirts and stickers )
                </p>
                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span>Internship and
                  Full-time opportunities eligibility for hackathon winners
                  (higher priority application review)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-blog-card card border-0 shadow-sm">
              <div className="blog-img position-relative">
                <img
                  src="img/sponsors/3.png"
                  className="card-img-top"
                  alt="blog"
                />
              </div>
              <div className="card-body">
                <h3 className="h5 mb-2 card-title">
                  <a href="#"> Matic </a>
                </h3>
                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span> Cash prize for the
                  best hack built on top of Ethereum (Rs.10,000){" "}
                </p>
                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span> For teams that
                  integrate Matic in their hacks as well the prize money will be
                  higher (Rs.15000){" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-blog-card card border-0 shadow-sm">
              <div className="blog-img position-relative">
                <img
                  src="img/sponsors/2.png"
                  className="card-img-top"
                  alt="blog"
                />
              </div>
              <div className="card-body">
                <h3 className="h5 mb-2 card-title">
                  <a href="#"> Fold </a>
                </h3>
                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span> Premium Access
                  account{" "}
                </p>
                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span>
                  Internship and Full-time opportunities eligibility for
                  hackathon winners higher priority application review
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-blog-card card border-0 shadow-sm">
              <div className="blog-img position-relative">
                <img
                  src="img/sponsors/4.png"
                  className="card-img-top"
                  alt="blog"
                />
              </div>
              <div className="card-body">
                <h3 className="h5 mb-2 card-title">
                  <a href="#"> echoAR </a>
                </h3>
                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span> 1 month free access
                  to Business Tier of echoAR
                </p>
                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span> 50$ Amazon gift card{" "}
                </p>

                <p className="card-text">
                  {" "}
                  <span className="ti-arrow-right"></span> Feature in AR/VR
                  newsletter to be sent to investors.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
