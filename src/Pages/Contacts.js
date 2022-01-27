import React, { useEffect } from "react";
import "../Pages/contact.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../Parallaximg";
import img1 from "../assets/technical.jpeg";
import Typical from "react-typical";
import img2 from "../assets/Epragathimap.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router";

function Contacts(props) {
  useEffect(() => {
    Aos.init({ duration: 8000 });
  }, []);
  const styles = {
    color: "white",
  };
  const history = useHistory();

  return (
    <div>
      <ParallaxProvider>
        <Parallaximg image={img1} height="290px" opacity="0.6">
          <div>
            <span
              className="fs-3 fw-bold text-light routingText"
              onClick={() => history.push("/")}
            >
              Home
            </span>{" "}
            / <span className="fs-3 fw-bold">Contact</span>
          </div>
        </Parallaximg>
        <div class="container contact">
          <div class="row">
            <div class="col-md-3">
              <div class="contact-info">
                <img
                  src="https://image.ibb.co/kUASdV/contact-image.png"
                  alt="image"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="2500"
                />
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="2500"
                >
                  Contact Us
                </h2>
                <h4
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="2500"
                >
                  We would love to hear from you !
                </h4>
              </div>
            </div>
            <div class="col-md-9">
              <div
                class="contact-form"
                data-aos="flip-left"
                data-aos-duration="2500"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div class="form-group">
                  <label class="control-label col-sm-2" for="fname">
                    First Name:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="fname"
                      placeholder="Enter First Name"
                      name="fname"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="lname">
                    Last Name:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="lname"
                      placeholder="Enter Last Name"
                      name="lname"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">
                    Email:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="comment">
                    Comment:
                  </label>
                  <div class="col-sm-10">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                    ></textarea>
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Parallaximg image={img1} height="490px" opacity="0.6">
          <p
            style={{
              position: "absolute",
              fontSize: "16px",
              fontWeight: "lighter",
            }}
            data-aos="zoom-out-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <Typical
              loop={Infinity}
              steps={[
                "Kindly get in touch with our team either on toll free number 1800-2585-106 or email epragathi@epragathi.com. ",
                1000,
              ]}
            ></Typical>
          </p>
          <div>
            <h5
              style={{ position: "absolute", fontSize: "26px" }}
              data-aos="zoom-out-down"
              data-aos-duration="2000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Typical
                loop={10}
                steps={["GET IN TOUCH WITH EPRAGATHY!", 1000]}
              ></Typical>
            </h5>
          </div>
          <br />
          <br />
        </Parallaximg>
        <br />
        <br />
        <br />
        <br />
        <img
          src={img2}
          height={450}
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        ></img>
        <br />
        <br />
        <br />

        <div className="row">
          {/* <div className="col"> */}
          <br />
          <br />
          <br />
          <h2
            data-aos="zoom-out-down"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Typical
              loop={Infinity}
              steps={["EPRAGATHI GROUPS", 1000]}
            ></Typical>
          </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* <div className="row border"> */}
          <div
            className="mx-auto d-flex justify-content-start col-sm-6 "
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="custom card bg-dark ">
              <a class="btn btn-dark " href="#!" role="button">
                <i class="fa fa-map" style={styles}></i>
              </a>

              <div className="custom card-body py-2 px-4">
                <h5 className="card-title  text-light">
                  Peenya: M/s Epragathi
                </h5>
                <p className=" card-text  text-light">
                  #M-405, 7th & 9th Cross, Peenya 1st Stage, Near TVS Cross,
                  Bangalore - 560058, Karnataka INDIA
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div
            className="mx-auto d-flex justify-content-start col-sm-6 "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="custom card bg-dark ">
              <a class="btn btn-dark " href="#!" role="button">
                <i class="fa fa-map" style={styles}></i>
              </a>
              <div className=" card-body py-2">
                <h5 className="card-title text-light">
                  Tumakuru: M/s Epragathi Recycling
                </h5>
                <p className="card-text text-light">
                  #66, 18th main Road, KIADB Industrial Area 2nd Phase ,
                  Antharasanahalli, Tumakuru- 572106 Karnataka INDIA Tel:
                  1800-2585-106
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

          {/* <div className="border col-xl-4"> */}
          <div
            className="mx-auto d-flex justify-content-center col-sm-8 py-4"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="custom card bg-dark ">
              <a class="btn btn-dark " href="#!" role="button">
                <i class="fa fa-map" style={styles}></i>
              </a>

              <div className="custom card-body py-2">
                <h5 className="card-title  text-light">
                  Bengaluru: M/s Integrated System Soft
                </h5>
                <p className="card-text  text-light">
                  #77/B, 8th cross Road,West of Chord road 1st Block,
                  Rajajinagar, Bengaluru- 560010 Karnataka INDIA
                  Tel:080-41239407
                </p>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div
            className="mx-auto d-flex justify-content-center col-sm-4 py-4"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="custom card bg-dark ">
              <i class="fa fa-location px-4" style={styles}></i>
              {/* <a href="https://icons8.com/icon/p5n5ZAUprZsA/location"></a>
               */}
              <a class="btn btn-dark " href="#!" role="button">
                <i class="fa fa-map" style={styles}></i>
              </a>

              <div className="contactcard card-body py-2">
                <h5 className="card-title  text-light">
                  Ringus, Sikar, Rajasthan: GS International
                </h5>
                <p className="card-text  text-light">
                  G1-101, SKS Industrial Area, RIICO, Ringus, Sikar, Rajasthan-
                  332404 Toll Free: 18002128245 www.gs-int.in
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}

        <br />
        <br />

        <br />

        <br />

        <br />

        <br />
        <br />
        <br />
      </ParallaxProvider>
    </div>
  );
}

export default Contacts;
