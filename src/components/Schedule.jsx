import React from "react";

const Schedule = () => {
  return (
    <section
      className="work-process-section ptb-100 gray-light-bg"
      id="schedule"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <strong className="color-secondary">When to Join?</strong>
              <h2> Hackathon Schedule </h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
              <p>
                {" "}
                Registrations are now open for RestartIndia Hackathon Below is
                the timeline of the Hackathon.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 col-lg-5 process-width">
            <div className="process-box process-left">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step-number">
                    <strong>20th May </strong>
                    <h6>
                      {" "}
                      <b>06:OO AM </b>
                    </h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>Registeration Starts</h5>
                  <p>
                    Submit Idea along with team details. You can start building
                    if you are ready. <br />{" "}
                  </p>
                </div>
              </div>
              <div className="process-line-l"></div>
            </div>
          </div>
          <div className="col-md-2 process-none"></div>
          <div className="col-md-5 col-md-5 col-lg-5 process-none">
            <div className="process-point-right"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-lg-5 process-none">
            <div className="process-point-left"></div>
          </div>
          <div className="col-md-2 process-none"></div>
          <div className="col-md-12 col-lg-5 process-width">
            <div className="process-box process-right">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step-number">
                    <strong>12th June</strong>
                    <h6>
                      <b>05:OO PM </b>
                    </h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>Hackathon Starts</h5>
                  <p>
                    Hackathon Kickoff using online webinar. Get to work and
                    Start building.{" "}
                  </p>
                </div>
              </div>
              <div className="process-line-r"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-5 process-width">
            <div className="process-box process-left">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step-number">
                    <strong>14th June</strong>
                    <h6>
                      <b> 1:00 PM</b>{" "}
                    </h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5> Development Ends</h5>
                  <p>
                    Development to be stopped. Submit your solution for
                    evaluation.{" "}
                  </p>
                </div>
              </div>
              <div className="process-line-l"></div>
            </div>
          </div>
          <div className="col-md-2 process-none"></div>
          <div className="col-md-5 col-lg-5 process-none">
            <div className="process-point-right"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-lg-5 process-none">
            <div className="process-point-left"></div>
          </div>
          <div className="col-md-2 process-none"></div>
          <div className="col-md-12 col-lg-5 process-width">
            <div className="process-box process-right">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step-number">
                    <strong>14th June</strong>
                    <h6>
                      <b> 1PM - 5 PM </b>
                    </h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>Semi Finals</h5>
                  <p>
                    {" "}
                    Top 10 teams to be selected from overall submissions based
                    on the 1 minute video submitted.{" "}
                  </p>
                </div>
              </div>
              <div className="process-line-r"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-5 process-width">
            <div className="process-box process-left">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step-number">
                    <strong>14th June</strong>
                    <h6>
                      <b> 7:00PM-8:00 PM</b>{" "}
                    </h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5> Grand Finale </h5>
                  <p>
                    {" "}
                    Final to streamed live. Top teams present in front of
                    Judges. Jury selects the winner.{" "}
                  </p>
                </div>
              </div>
              <div className="process-line-l"></div>
            </div>
          </div>
          <div className="col-md-2 custom-none"></div>
          <div className="col-md-5 col-lg-5 custom-none">
            <div className="process-point-right process-last"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
