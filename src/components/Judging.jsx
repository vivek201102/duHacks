import React from "react";

const Judging = () => {
  return (
    <section className="promo-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <h2> Judging Criteria </h2>
              <span className="animate-border mr-auto ml-auto mb-4">
                Each entry will be judged by a panel of experts based on the
                below criteria
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-lg-3">
            <a href="#">
              <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                <div className="circle-icon">
                  <span>
                    <i className="fa-brands fa-slack text-white"></i>
                  </span>
                </div>
                <h5>Relevant</h5>
                <p>
                  {" "}
                  How relevant is your idea to the goal of Restarting India
                  which is to revive our country back from the impact of COVID19
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-lg-3">
            <a href="#">
              <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                <div className="circle-icon">
                  <span>
                    <i className="fa-regular fa-star text-white"></i>
                  </span>
                </div>
                <h5>Practical </h5>
                <p>
                  {" "}
                  The solution should be feasible and likely to succeed in real
                  work circumstances
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-lg-3">
            <a href="#">
              <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                <div className="circle-icon">
                  <span>
                    <i
                      className="fab fa-free-code-camp text-white"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <h5> Impact </h5>
                <p>
                  {" "}
                  The proposed solution should have the capability to provide
                  immense value to a business, community or any other
                  stakeholder.
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-lg-3">
            <a href="#">
              <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                <div className="circle-icon">
                  <span>
                    <i
                      className="fa fa-headphones text-white"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <h5> Innovation </h5>
                <p> How original and creative your solution is. </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judging;
