import React, { useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import * as S from "../components/styles/HomePagestyles";
import { FaRecycle, FaLeaf, FaRegCalendarAlt } from "react-icons/fa";
import { ImDrawer } from "react-icons/im";
import BlogCard from "../components/BlogCard";
import LightBulb from "../assets/images/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg";
import Battery from "../assets/images/roberto-sorin-ZZ3qxWFZNRg-unsplash.jpg";
import Gaget from "../assets/images/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg";
import CutomAccordian from "../components/CutomAccordian";
import Flower from "../assets/images/danny-g-0iBY4HcL1Gk-unsplash.jpg";

import SingleTree from "../assets/images/simon-wilkes-S297j2CsdlM-unsplash.jpg";

import Aos from "aos";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "aos/dist/aos.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);
const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 8000 });
  }, []);

  return (
    <S.HomeContainer>
      <S.SwiperContainer>
        <Carousel className="h-100">
          <Carousel.Item className="h-100">
            <S.Slide>
              <S.SlideHeader>Welcome To Epragathy</S.SlideHeader>
              <S.SlideSubHeader>Electronics</S.SlideSubHeader>
              <S.SlideContent>
                We can solve your corporate IT disposition needs quickly and
                professionally. Save Your community, Save Your planet
              </S.SlideContent>
              <Button
                variant="success"
                className=" mt-5 px-5 rounded-pill py-3 border-0"
                style={{ backgroundColor: "yellowGreen" }}
              >
                ALL SERVICES
              </Button>
            </S.Slide>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <S.Slide2>
              <S.SlideHeader>WEEE Management</S.SlideHeader>
              <S.SlideSubHeader>save your communty</S.SlideSubHeader>
              <S.SlideContent>
                Waste Electrical and Electronic Equipment Management
                Redefined!!! ​ We are committed to seven objectives of
                Sustainable Development.
              </S.SlideContent>
              <Button
                variant="success"
                className=" mt-5 px-5 rounded-pill py-3 border-0"
                style={{ backgroundColor: "yellowGreen" }}
              >
                ALL SERVICES
              </Button>
            </S.Slide2>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <S.Slide3>
              <S.SlideHeader>Economy</S.SlideHeader>
              <S.SlideSubHeader>Circular</S.SlideSubHeader>
              <S.SlideContent>
                We can solve your corporate IT disposition needs quickly and
                professionally. Save Your community, Save Your planet
              </S.SlideContent>
              <Button
                variant="success"
                className=" mt-5 px-5 rounded-pill py-3 border-0"
                style={{ backgroundColor: "yellowGreen" }}
              >
                ALL SERVICES
              </Button>
            </S.Slide3>
          </Carousel.Item>
        </Carousel>
      </S.SwiperContainer>

      <S.AboutContainer
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="2000"
      >
        <S.HeaderContainer>
          <S.Icon>
            <FaRecycle />
          </S.Icon>

          <S.Header>WelCome To E-Pragathy</S.Header>
          <S.SmallHeader>MORE ABOUT US</S.SmallHeader>
          <S.About>
            EPragathi, India’s Government approved electronic waste recycler
            started operations from September 2012,is engaged in handling, use
            and reusing of Waste Electrical and Electronic Equipment(WEEE) in
            co-friendly approach. The initiative is to aim at reducing the
            buildup of used and discarded electronic and electrical equipment’s,
            that most find yourself in landfills or partially recycled in a very
            insanitary conditions by curtilage recyclers so partially thrown
            into waste streams damaging the setting.The objective of EPragathi
            is to make a chance to transfer waste into socially and industrially
            useful raw materials like valuable metals, plastics and glass
            mistreatment straightforward, value economical, home grown,
            environmental friendly technologies appropriate to Indian
            Conditions.
          </S.About>
        </S.HeaderContainer>
      </S.AboutContainer>

      <S.CardContainer>
        <S.Card
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <S.CardIcon className="cardIcon">
            <FaRegCalendarAlt />
          </S.CardIcon>
          <S.CardHeader>What is E-waste ?</S.CardHeader>
          <S.CardContent>
            E-Waste is defined as Electronic or Electrical Equipments/Products
            that have become obsolete because of advancement in technology or
            changes in fashion.
          </S.CardContent>
        </S.Card>

        <S.Card
          className="cardIcon"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-duration="3000"
        >
          <S.CardIcon className="cardIcon">
            <ImDrawer />
          </S.CardIcon>
          <S.CardHeader>Benefits of Recycling.</S.CardHeader>
          <S.CardContent>
            Economic Benefits – Revenue generation from recovered materials.
            Environmental Benefits – Natural resource Conservation and Reduction
            in Environmental pollution. Social Benefits – Employment generation.
          </S.CardContent>
        </S.Card>

        <S.Card
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-duration="3000"
        >
          <S.CardIcon className="cardIcon">
            <FaLeaf />
          </S.CardIcon>
          <S.CardHeader>Why Should We Recycle ?</S.CardHeader>
          <S.CardContent>
            The Earth’s Natural Resources are limited and hence we need to make
            sure that we preserve them and use them carefully. E-Waste disposed
            to municipal waste releases hazardous toxin materials in to
            environment causing Environmental pollution.
          </S.CardContent>
        </S.Card>
      </S.CardContainer>

      <S.ServicesContainer>
        <S.HeaderContainer>
          <S.Icon>
            <FaRecycle />
          </S.Icon>

          <S.Header>Our Services</S.Header>
          <S.SmallHeader>WHAT WE DO</S.SmallHeader>
        </S.HeaderContainer>
        <S.BlogCardContainer>
          <S.BlogCard>
            <BlogCard
              image={LightBulb}
              header="The Power of Recycling "
              content="When you discard Electrical and Electronic equipment as waste it has to go somewhere. We ensure the original materials are realized from this waste and returned back in its original form. Let us save precious resources and save planet from over exploitation for resources."
            />
          </S.BlogCard>
          <S.BlogCard>
            <BlogCard
              image={Battery}
              header="Environment
              Protection"
              content="We create awareness among enterprises and communities to responsibly dispose of hazardous Ewaste. We carry out programs to collect ewaste from communities interested in disposing of ewaste to responsible recyclers and thereby protect environment from hazardous waste."
            />
          </S.BlogCard>
          <S.BlogCard>
            <BlogCard
              image={Gaget}
              header="Circular Economy "
              content="A circular economy (Reduce, Reuse, Recycle) is an alternative to a traditional linear economy (make, use, dispose) in which we keep resources in use for as long as possible, extract the maximum value from them whilst in use, then we recover and regenerate products and materials at the end of each service life."
            />
          </S.BlogCard>
        </S.BlogCardContainer>
        <Button
          variant="success"
          className=" mt-5 px-5 rounded-pill py-3 border-0"
          style={{ backgroundColor: "yellowGreen" }}
        >
          ALL SERVICES
        </Button>
      </S.ServicesContainer>

      <div>
        <S.Header className="missionHeader mt-5 mb-3">Our Mission</S.Header>
        <S.OuerMissionContainer>
          <S.MisionContainer>
            <S.HeaderContainer
              className="missionHeader"
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="3000"
            >
              <S.Icon>
                <FaRecycle />
              </S.Icon>

              <S.Header>WHAT WE DO</S.Header>
              {/* <S.SmallHeader></S.SmallHeader> */}
              <p className="missionAbout">
                Our mission is to keep as much electronic waste from ending up
                in local landfills as we can
              </p>
            </S.HeaderContainer>
            <CutomAccordian />
          </S.MisionContainer>
          <S.ImageContainer>
            <img
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="3000"
              src={Flower}
              alt="flower"
              width="100%"
              height="100%"
            />
          </S.ImageContainer>
        </S.OuerMissionContainer>
      </div>

      <S.TestmonialContainer>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          // navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <S.TestmonialCard
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="500"
              data-aos-duration="3000"
            >
              <S.TestmonialImgContainer>
                <S.TestmonialImg
                  src={SingleTree}
                  alt="profile"
                  width="100%"
                  height="100%"
                />
              </S.TestmonialImgContainer>
              <S.TestmonialContent>
                I felt really comfortable and trust them. They have a lot of
                security measures in place. Pretty cheap for such great peace of
                mind!
              </S.TestmonialContent>
              <S.TestmonialAuthorName>Jhon Deo</S.TestmonialAuthorName>
              <S.TestmonialAuthorRole>Director</S.TestmonialAuthorRole>
            </S.TestmonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <S.TestmonialCard
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="500"
              data-aos-duration="3000"
            >
              <S.TestmonialImgContainer>
                <S.TestmonialImg
                  src={SingleTree}
                  alt="profile"
                  width="100%"
                  height="100%"
                />
              </S.TestmonialImgContainer>
              <S.TestmonialContent>
                I felt really comfortable and trust them. They have a lot of
                security measures in place. Pretty cheap for such great peace of
                mind!
              </S.TestmonialContent>
              <S.TestmonialAuthorName>Jhon Deo</S.TestmonialAuthorName>
              <S.TestmonialAuthorRole>Director</S.TestmonialAuthorRole>
            </S.TestmonialCard>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <S.TestmonialCard
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="500"
              data-aos-duration="3000"
            >
              <S.TestmonialImgContainer>
                <S.TestmonialImg
                  src={SingleTree}
                  alt="profile"
                  width="100%"
                  height="100%"
                />
              </S.TestmonialImgContainer>
              <S.TestmonialContent>
                I felt really comfortable and trust them. They have a lot of
                security measures in place. Pretty cheap for such great peace of
                mind!
              </S.TestmonialContent>
              <S.TestmonialAuthorName>Jhon Deo</S.TestmonialAuthorName>
              <S.TestmonialAuthorRole>Director</S.TestmonialAuthorRole>
            </S.TestmonialCard>
          </SwiperSlide>
        </Swiper>
      </S.TestmonialContainer>
    </S.HomeContainer>
  );
};

export default HomePage;
