import React, { useEffect } from "react";

import CustomCard from "../card/customcard";
import "../Pages/service.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../Parallaximg";
import Custompoints from "../card/custompoints";
import CustompointsLeft from "../card/custompointsleft";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/ckt.jpeg";
import img2 from "../assets/ew.jpeg";
import img3 from "../assets/fac.jpeg";
import img4 from "../assets/job.jpeg";
import img5 from "../assets/re.jpeg";
import img6 from "../assets/ss.webp";
import img7 from "../assets/ci.jpeg";
import img8 from "../assets/es.webp";

import img9 from "../assets/service1.jpg";
import img10 from "../assets/service2.jpg";
import img11 from "../assets/service3.jpg";
import img12 from "../assets/service4.jpg";
import img13 from "../assets/service5.jpg";
import img14 from "../assets/service6.jpg";

import Typical from "react-typical";
import { rgbToHex } from "@mui/system";
import { useHistory } from "react-router";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 8000 });
  }, []);
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
            / <span className="fs-3 fw-bold">Service</span>
          </div>
        </Parallaximg>
        <br />
        <br />
        <br />

        <span>
          <h4>BENEFITS OF RECYCLING</h4>
        </span>
        <br />
        <br />
        <br />

        <div className="wrapper">
          <div className="row">
            <div className="col-md-4">
              <div
                data-aos="flip-up"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="300"
                data-aos-duration="2000"
              >
                <CustomCard
                  title="Recycling Helps defend The atmosphere"
                  img={img2}
                  height={200}
                  body="Recycling sharply reduces the number of waste that gets deposited in our landfills or burned in furnace plants. designed landfills in most cities square measure designed to contain cytotoxic chemicals....."
                  children={<i class="fa fa-chevron-down"></i>}
                />
              </div>
              <br />
              <br />
              <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="300"
                data-aos-duration="2000"
              >
                <CustomCard
                  title="Recycling Helps Conserve restricted Resources"
                  img={img3}
                  height={200}
                  body="To put this profit in correct perspective, let’s take into account this statement from the Pennsylvania Department of Environmental Protection: “BY exercise over one million loads of steel in 2004, Pennsylvanians saved one.3 million loads of ore, 71B4O1)1) loads of coal, and 62,11:10tons of stone......."
                  children={<i class="fa fa-chevron-down"></i>}
                />
              </div>
              <br />
              <br />
              {/* <CustomCard title='CustomCard Title' img={img1} body='lorem added 1 package, and audited 1519 packages in 3s' /> */}
            </div>
            <div className="col-md-4 ">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="300"
                data-aos-duration="2000"
              >
                <CustomCard
                  title="Recycling Promotes Energy potency"
                  img={img6}
                  height={200}
                  body="Recycling is way a lot of economical, in terms of energy consumption, than manufacturing one thing out of recent stuff. Done on a nationwide scale, this might cause important reduction in our energy. costs. The energy needed to extract ......"
                  children={<i class="fa fa-chevron-down"></i>}
                />
              </div>
              <br />
              <br />
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="2000"
              >
                <CustomCard
                  title="Recycling Helps Build A Stnong Economy"
                  img={img5}
                  height={200}
                  body="Every cost-reduction, energy potency, materials conservation, and job generation advantage of exercise adds up to assist build a robust economy for our country. Recycling, done on a country-wide scale. includes a Brobdingnagian positive impact on the economy. There was dip within the worth of recyclables last year once...."
                  children={<i class="fa fa-chevron-down"></i>}
                />
              </div>
              <br />
              <br />

              {/* <CustomCard title='CustomCard Title' img={img1} body='lorem added 1 package, and audited 1519 packages in 3s' /> */}
            </div>
            <div className="col-md-4 ">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="2000"
              >
                <CustomCard
                  title="Recycling Creates Jobs"
                  img={img4}
                  height={220}
                  body="Recycling generates a lot of jobs than landfilling or incinerating waste. that is a profit we tend to cant lose sight of, during this time of recession and high percent. Let’s take into account the disposal of ten.1:100 loads of solid waste......."
                  children={<i class="fa fa-chevron-down"></i>}
                />
              </div>

              <br />
              <br />
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="2000"
              >
                <CustomCard
                  title="Recycling are often Financially gratifying"
                  img={img7}
                  height={200}
                  body="If you simply wish to form cash to urge by in these misfortune or begin a home business, exercise may be a profitable possibility. Its comparatively simple and cheap to begin a home-based exercise business. you simply got to set up on w’hat material (cell phone, paper, or metals, etc.) you propose to gather, set up storage. contact the works for rating,......"
                  children={<i class="fa fa-chevron-down"></i>}
                />
              </div>

              <br />
              <br />
              {/* <CustomCard title='CustomCard Title' img={img1} body='lorem added 1 package, and audited 1519 packages in 3s' /> */}
            </div>
          </div>
        </div>

        <Parallaximg image={img8} height={500} opacity="0.6">
          <div>
            <h5
              style={{ position: "relative", fontSize: "26px" }}
              data-aos="zoom-out-down"
              data-aos-duration="2000"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Typical
                loop={10}
                steps={["Benefits of E-waste Recycling", 1000]}
              ></Typical>
            </h5>

            <p
              style={{
                position: "relative",
                fontSize: "16px",
                fontWeight: "normal",
                paddingLeft: "20px",
                paddingRight: "20px",
                color: "white",
              }}
              data-aos="zoom-out-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <Typical
                loop={Infinity}
                steps={[
                  "These materials can be used to make new products, thus reducing the need to mine for new raw materials. For instance, various metals can be recovered from computer circuit boards and other electronics, and the plastics and glass found in computer monitors and televisions can be recycled.",
                  1000,
                ]}
              ></Typical>
            </p>
          </div>
          <br />
          <br />

          <br />
          <br />
        </Parallaximg>

        <br />
        <br />

        <span>
          <h2>WHY EPARGATHI</h2>
        </span>
        <br />
        <br />
        <div className="bs-example">
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            <Custompoints
              img={img9}
              body="EPragathi is one among the 7 associates of “National Referral Centre for Lead Poisoning in India” (NRCLPI)."
            >
              {" "}
            </Custompoints>
          </div>
          <br />
          <br />
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            <CustompointsLeft
              img={img10}
              body="EPragathi is India’s first E-Waste recycler to obtain both ISO 14001:2004 and OHSAS 1B001:2007 certifications. from TUV SUD."
            >
              {" "}
            </CustompointsLeft>
          </div>

          <br />
          <br />
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            <Custompoints
              img={img11}
              body="EPragathi is a role Model for the entire country for recycling of scrapped electronic materials using techniques suitable to Indian Conditions which has economic, environmental and social impacts."
            >
              {" "}
            </Custompoints>
          </div>

          <br />
          <br />
          <div
            data-aos="flip-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            <CustompointsLeft
              img={img12}
              body="EPragathi is India’s first E-waste recycler approved from both Central Pollution Control Board (CPCB) and Karnataka State Pollution Control Board (KSPCB)."
            >
              {" "}
            </CustompointsLeft>
            <br />
          </div>

          <br />
          <div
            data-aos="flip-down"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            <Custompoints
              img={img13}
              body="EPragathi has been assigned ‘NSIC-D&B-SMERA: SE 2B rating by SrvlE Rating Agency of India Ltd. This rating indicates ‘High Performance Capability and Moderate Financial Strength’."
            >
              {" "}
            </Custompoints>
          </div>

          <br />
          <br />
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            <CustompointsLeft
              img={img14}
              body="EPragathi has also obtained CFO (Consents for Establishment) from KSPCB for expansion from 600 MT/A to 18.00 POTiA of collection, storage. recovery and recycling of E-waste."
            >
              {" "}
            </CustompointsLeft>
          </div>

          {/* ecovery, refinement and reuse of gold & silver in gold plating and silver plating of watch pails, pen parts, imitation jewellery, temple items, etc. • All together we can proudly say that EPragathi cares about the society and environment and is working for the cleaner environment.</p> */}
        </div>
      </ParallaxProvider>

      <br></br>
      <br></br>
      <br></br>

      <br></br>
    </div>
  );
};

export default Services;
