import React from "react";

const ParticipationCertification = () => {
  return (
    <section className="promo-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <h2> PARTICIPATION CERTIFICATE </h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="support-cta  mt-5">
              <h5 className="mb-1 text-center">
                <span>
                  <i className="fa-solid fa-bolt"></i>
                </span>{" "}
                PARTICIPATION CERTIFICATE{" "}
              </h5>
              <div className="col-md-12 col-lg-12">
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    <span className="ti-control-forward mr-2 color-secondary"></span>
                    Even if you are not able to win any awards no problems, we
                    will be offering Participation certificates to the teams
                    submitting solutions.
                  </li>
                </ul>
              </div>
              <br />
              <h5 className="mb-1 text-center">
                <span>
                  <i className="fa-solid fa-bolt"></i>
                </span>{" "}
                MASTERCLASS ATTENDEE CERTIFICATE{" "}
              </h5>
              <div className="col-md-12 col-lg-12">
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    <span className="ti-control-forward mr-2 color-secondary"></span>
                    All attendees of our masterclass will be provided attendee
                    certificate. Keep a look out on our Telegram channel and
                    Twitter handle to keep yourself updated with the latest
                    Master className sessions scheduled
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationCertification;
