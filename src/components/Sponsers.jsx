import React from "react";

const Sponsers = () => {
  return (
    <div
      id="sponsers"
      className="client-section ptb-100"
      style={{
        background: "url('img/client-bg.jpg') no-repeat center center / cover",
      }}
    >
      <div className="container" id="#sponsers">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <h2> Our Sponsors </h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
            </div>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12">
            <div className="section-heading text-center">
              <h3 className="color-secondary" style={{ marginTop: "20px" }}>
                {" "}
                Gold{" "}
              </h3>
              <a href="https://devfolio.co/" target="_BLANK">
                <img
                  src="img/sponsors/dev.png"
                  style={{
                    width: "30%",
                    margin: "10px 15px",
                    borderBottom: "0px",
                  }}
                />
              </a>
            </div>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12">
            <div className="section-heading text-center">
              <h3 className="color-secondary" style={{ marginTop: "20px" }}>
                {" "}
                Silver{" "}
              </h3>
              <center>
                <a href="https://matic.network/" target="_BLANK">
                  <img
                    src="img/sponsors/matic.png"
                    style={{
                      height: "40px",
                      width: "150px",
                      margin: "50px 15px",
                      borderBottom: "0px",
                    }}
                  />
                </a>
                <a href="https://fold.money/" target="_BLANK">
                  <img
                    src="img/sponsors/fold.png"
                    style={{
                      height: "35px",
                      width: "100px",
                      margin: "50px 50px",
                      borderBottom: "0px",
                    }}
                  />
                </a>
                <a href="https://www.echoar.xyz/" target="_BLANK">
                  <img
                    src="img/sponsors/echoAR.png"
                    style={{
                      height: "35px",
                      width: "150px",
                      margin: "50px 50px",
                      borderBottom: "0px",
                    }}
                  />
                </a>
                <a href="https://cloudsploit.com/" target="_BLANK">
                  <img
                    src="img/sponsors/cloudsploit.png"
                    style={{
                      height: "35px",
                      width: "150px",
                      margin: "50px 50px",
                      borderBottom: "0px",
                    }}
                  />
                </a>
              </center>
            </div>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12">
            <div className="section-heading text-center">
              <h3 className="color-secondary" style={{ marginTop: "20px" }}>
                Associate{" "}
              </h3>
              <a href="https://givemycertificate.com/" target="_BLANK">
                <img
                  src="img/sponsors/give_my_cert.png"
                  style={{
                    width: "250px",
                    height: "70px",
                    margin: "10px 15px",
                    borderBottom: "0px",
                  }}
                />
              </a>
              <a href="http://silveroakhealth.com/" target="_BLANK">
                <img
                  src="img/sponsors/SOH.png"
                  style={{
                    width: "120px",
                    height: "90px",
                    margin: "10px 15px",
                    borderBottom: "0px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
