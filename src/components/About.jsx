import React from "react";

const About = () => {
  return (
    <section className="about-us-section ptb-100 gray-light-bg" id="why">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="about-us-img">
              <img
                src="img/about-us-img.svg"
                alt="about us"
                className="img-fluid about-single-img"
              />
              <img
                src="img/about-us-img-bg.svg"
                alt="about bg"
                className="about-us-bg"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="about-us-content-wrap">
              <strong className="color-secondary">RestartIndia Mission</strong>
              <h3> Why Restart India?</h3>
              <span className="animate-border mb-4"></span>
              <p>
                {" "}
                RestartIndia Online Hackathon 2020 is an initiative for building
                solutions around problems that arose due to the ongoing COVID-
                19 pandemic.{" "}
              </p>
              <p>
                RestartIndia Hackathon invites techies from India's student and
                professionals community to adopt the
                Think→Ideate→Code→Build→Deploy framework on their solutions to
                fight the problems running rampant.
              </p>
              <p>
                Given the massive disruption caused by pandemic on the Indian
                economy and the people, there is a strong need to orchestrate an
                organised move to fight and prevent the Indian economy from
                capsizing. And as it is, we've seen unemployment figures in
                India rise by 20% and nearly 140 million people across various
                sectors losing employment during the lockdown within a month. We
                believe it's more important than ever to think about the future
                and make a positive difference for all us Indians. .
              </p>
              <ul className="list-unstyled tech-feature-list">
                <li className="py-1">
                  <span className="ti-control-forward mr-2 color-secondary"></span>
                  <strong>
                    {" "}
                    India will never return to the way that it was; together, we
                    can bring about change and invent a bright new future.
                  </strong>
                </li>
              </ul>
              <div className="row mt-4">
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">8+</h2>
                    <strong>Themes </strong>
                  </div>
                </div>
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">40+</h2>
                    <strong>
                      {" "}
                      Hours of Free <br /> Expert Sessions
                    </strong>
                  </div>
                </div>
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">500+</h2>
                    <strong>Expected Particpants</strong>
                  </div>
                </div>
              </div>
              <div className="action-btns mt-4">
                <a
                  href="http://restartindia.org/register/"
                  className="btn secondary-solid-btn mr-3"
                >
                  Apply with Devfolio
                </a>
                <a
                  href="https://t.me/restartindia"
                  className="btn secondary-outline-btn"
                >
                  Join Telegram Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
