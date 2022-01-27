import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../Parallaximg";

import img7 from "../assets/camera.jpeg";

import img1 from "../assets/blog1.webp";
import img2 from "../assets/blog2.webp";
import img3 from "../assets/blog3.webp";
import img4 from "../assets/blog4.webp";
import img5 from "../assets/blog5.webp";
import img6 from "../assets/blog6.webp";

import BlogCard from "../card/blogcard";
import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
// import "../Pages/blog.css";
import { withTheme } from "styled-components";
import { useHistory } from "react-router";

function Blog(props) {
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
        <Parallaximg image={img7} height="290px" opacity="0.6">
          <div>
            <span
              className="fs-3 fw-bold text-light routingText"
              onClick={() => history.push("/")}
            >
              Home
            </span>{" "}
            / <span className="fs-3 fw-bold">Blog</span>
          </div>
        </Parallaximg>
      </ParallaxProvider>
      <br />
      <br />

      <br />
      <br />

      <div className="row">
        <div className="col-md-4">
          <div className="header">
            <h3
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="3000"
            >
              <Typical loop={Infinity} steps={["GET IN TOUCH", 1000]}></Typical>
            </h3>
            <br />
            <div className="row py-2">
              <a
                class="btn btn-primary"
                href="#!"
                role="button"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="3000"
                data-aos-easing="ease-in-sine"
              >
                <i class="fa fa-facebook-f px-4" style={styles}></i>FaceBook
              </a>

              <div>
                <br />
              </div>

              <a
                class="btn btn-danger "
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="3000"
                data-aos-easing="ease-in-sine"
              >
                <i class="fa fa-google px-4" style={styles}></i>Google
              </a>
              <div>
                <br />
              </div>
              <a
                class="btn btn-warning "
                href="#!"
                role="button"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="3000"
                data-aos-easing="ease-in-sine"
              >
                <i class="fa fa-instagram px-4" style={styles}></i>Instagram
              </a>
              <div>
                <br />
              </div>
              <a
                class="btn btn-success"
                href="#!"
                role="button"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-duration="3000"
                data-aos-easing="ease-in-sine"
              >
                <i class="fa fa-whatsapp px-4" style={styles}></i>Whatsapp
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div
            className="latest-post"
            data-aos="flip-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-duration="3000"
          >
            <h3
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="3000"
            >
              <Typical loop={Infinity} steps={["Latest Post", 1000]}></Typical>
            </h3>

            <div className="row">
              <div
                className="col-md-4"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
              >
                <img src={img1} height={70}></img>
              </div>
              <div
                className="col-md-8"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
              >
                <div className="posts">
                  <h5>The future for our forests</h5>
                  <p>Jul 27,2020</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
              >
                <img src={img2} height={70}></img>
              </div>
              <div
                className="col-md-8"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
              >
                <div className="posts">
                  <h5>10 actions we can take to protect wildlife</h5>
                  <p>Jul 27,2020</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
              >
                <img src={img3} height={70}></img>
              </div>
              <div
                className="col-md-8"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
              >
                <div className="posts">
                  <h5>How the smallest bugs make the biggest impact</h5>
                  <p>Jul 27,2020</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
              >
                <img src={img4} height={70}></img>
              </div>
              <div
                className="col-md-8"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
              >
                <div className="posts">
                  <h5>Amazing discoveries of new marine life</h5>
                  <p>Jul 27,2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-duration="3000"
          >
            <BlogCard
              img={img5}
              title=" Why grass is more important than you think"
              body="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
            ></BlogCard>
          </div>
          <br />
          <br />
          <div
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-duration="3000"
          >
            <BlogCard
              img={img6}
              title="15 of the most beautiful crop fields"
              body="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
            ></BlogCard>
          </div>
        </div>
      </div>
      <br />
      <br />

      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />

      <br />
    </div>
  );
}

export default Blog;
