import React from "react";

const Hero = () => {
  return (
    <section className="ptb-70 gradient-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className="hero-slider-content text-white pt-5">
              <strong>12th - 14th June 2020 </strong>
              <h1 className="text-white">RestartIndia Hackathon</h1>
              <p className="lead">
                Post COVID19 India will never return to the way that it was;
                together, we can bring about change and invent a bright new
                future.
              </p>

              <div className="action-btns mt-3">
                <a href="#schedule" className="btn secondary-solid-btn">
                  {" "}
                  Schedule{" "}
                </a>{" "}
                &nbsp; &nbsp;
                <a href="#prizes" className="btn secondary-solid-btn">
                  {" "}
                  Prizes{" "}
                </a>{" "}
                &nbsp; &nbsp;
                <a href="#sponsers" className="btn secondary-solid-btn">
                  {" "}
                  Sponsers{" "}
                </a>{" "}
                &nbsp; &nbsp;
                <a href="#team" className="btn secondary-solid-btn">
                  {" "}
                  Our Team{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div style={{ textAlign: "center" }} className="pt-5">
              <iframe
                height="240px"
                width="280px"
                src="https://www.youtube.com/embed/BUCFX36MMBM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
