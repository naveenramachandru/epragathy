import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../Parallaximg";
import img1 from "../assets/bord.jpeg";
import img2 from "../assets/phone.webp";
import img3 from "../assets/about.webp";
import Aos from "aos";
import "aos/dist/aos.css";

import Typical from "react-typical";
import { useHistory } from "react-router";

function OurProcess(props) {
  useEffect(() => {
    Aos.init({ duration: 8000 });
  }, []);
  const history = useHistory();
  return (
    <div>
      <ParallaxProvider>
        <Parallaximg image={img1} height="390px" opacity="0.6">
          <div>
            <span
              className="fs-3 fw-bold text-light routingText"
              onClick={() => history.push("/")}
            >
              Home
            </span>{" "}
            / <span className="fs-3 fw-bold">Our Process</span>
          </div>
        </Parallaximg>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h3 data-aos="fade-right">
          <Typical loop={Infinity} steps={["WE RECYCLE", 1000]}></Typical>
        </h3>
        <br></br>
        <br></br>

        <div className="container text-start" data-aos="fade-left">
          <div className="row " data-aos="fade-down">
            <div className="col-md-7" data-aos="fade-left">
              <h5>
                Recycling precious and other valuable metals begins and ends
                with the experts
              </h5>
              <br></br>
              <br></br>
              <p
                data-aos="flip-down"
                data-aos-easing="circular"
                data-aos-duration="2000"
              >
                We Recycle end of Life, Obsolete, Discarded Electronics and
                Electrical Equipments like
              </p>
              <p
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                Computers, Monitors, CPUs, Peripherals, CRT’s, Servers,
                Printers, Plotters, Fax Machines, Scanners, Copiers, Mother
                boards, Printed Circuit Boards, Laptops, CDs, Floppies, Tapes,
                Cartridges, Telephones, Cell phones, Telecom Equipments, TVs,
                Audio & Video, Dry cells, Lithium Batteries, Fluorescent & CFL
                Lamps, Household Microwave, Washing Machines, Vacuum Cleaners,
                Card Readers, Swipe machine, fans, Electrical Items (Regulators,
                Meters, Switches, Starters, Chokes, converter, Wires, Cables
                etc), HUB’s, Tube lights, CFLs, Bulbs, LCDs, Transformers and
                Condensers containing cooling oil, Industrial, Medical, Military
                & Space Electronics etc in ENVIRONMENTAL FRIENDLY WAY to Recover
                raw materials like Metals, Plastics & Glass
              </p>
            </div>
            <div
              className="col-md-5 position-relative"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <img src={img2} height={500} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Parallaximg image={img1} height="550px" opacity="0.6">
          <div className="row">
            <div className="col-md-6">
              <img
                src={img3}
                data-aos="zoom-out-right"
                data-aos-easing="linear"
                data-aos-duration="2000"
              ></img>
            </div>
            <div className="col-md-6" style={{ textDecorationColor: "wheat" }}>
              <br></br>
              <br></br>

              <h3
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <Typical
                  loop={Infinity}
                  steps={["E-waste recycling you can trust", 1000]}
                ></Typical>
              </h3>
              <br></br>

              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
              >
                As a responsible recycler, we take initiatives to spread
                awareness about hazards of ewaste disposal in landfill and
                municipal solid waste. We have conducted awareness programs
                across enterprises and education institutions to spread the
                awareness. As our CSR initiatives we have placed collection bins
                in many colleges and offices for disposal of ewaste responsibly
              </p>
            </div>
          </div>
        </Parallaximg>

        <br></br>
        <br></br>
        <br></br>

        <h2
          data-aos="zoom-out-right"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          {" "}
          <Typical loop={Infinity} steps={["CSR", 1000]}></Typical>
        </h2>

        <br></br>
        <br></br>

        <div className="row" style={{ textAlign: "left" }}>
          <div
            className="col-md-6"
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
          >
            <h4> Participated in various exhibitions:</h4>

            <p>1. World Environmental Day 2004 to 2010, Bangalore</p>
            <p>2. World Earth Day 2006 to 2010, Bangalore</p>
            <p>3. GO GREEN Fest</p>
            <p>
              4. The European Union-India Workshop on Management of Electronic
              Waste
            </p>
            <p>5. National Environment Awareness Campaign</p>
            <p>
              6. Workshop on E-waste Awareness and disseminate information among
              industries
            </p>
            <p>7. Programs organized by TERI,TOXIC LINK, CMCA, Saahas etc</p>
            <p>8. Presented more than 100 presentation across the country</p>
            <p>
              9. Shortfilms were made & telecasted on E-Waste recycling at
              EPragathi by DO National Network, CNN-IBN, Ajtak, NDTV, Kasturi,
              NHK (Japan) , ETV, UTV, CNN-Hongkong.
            </p>
            <p>
              10. Sponsor E-Waste awareness programs in schools by conducting
              painting, debate, essay competitions
            </p>
            <p>
              11. Donation of computers & furniture to rural and disabled
              schools
            </p>
          </div>
          <div className="col-md-6">
            <h6
              data-aos="flip-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              EPragathi has signed a MoU with E-Waste Agency (EWA) and Umicore
              Precious Metals Refining, Belgium for ‘CRYSTAL PROJECT•to buy
              hazardous materials like printed circuit boards from informal
              sector depending on the quality and export to Umicore Precious
              Metals Refining to minimize the hazardous processes and maximize
              resource recovery.
            </h6>
            <br></br>
            <br></br>
            <h4
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              {" "}
              Advantages of crystal project are :
            </h4>
            <br></br>
            <br></br>

            <div
              data-aos="flip-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              <p>
                1. Informal sector can stop doing hazardous circuit board
                recycling operation in which they use Mercury and Toxic
                chemicals thereby causing permanent damage to Environment and
                Health.
              </p>

              <p>
                2. Efficient resource recovery compared to inefficient recovery
                process of informal recyclers.
              </p>

              <p>
                3. The Economic values are paid to them by a separate account.
              </p>

              <p>
                EPragathi is open for visits from Universities like IIT’s,
                IIM’s, schools, colleges etc. Many competent peoples from NGO’s,
                Associations, Government officers, researchers etc., visit us
                regularly.
              </p>

              <p>
                Many Undergraduate and postgraduate students carry out their
                academic project works at EPragathi.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </ParallaxProvider>
    </div>
  );
}

export default OurProcess;
