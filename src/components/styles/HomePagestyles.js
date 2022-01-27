import styled from "styled-components";
import Flower from "../../assets/images/danny-g-0iBY4HcL1Gk-unsplash.jpg";
import LightBubles from "../../assets/images/nick-fewings-e9ygr3coiRI-unsplash.jpg";
import SingleTree from "../../assets/images/simon-wilkes-S297j2CsdlM-unsplash.jpg";
import { keyframes } from "styled-components";

const iconanimation = keyframes`
 0% {
    transform: scaleY(0.1);
    opacity:0;
}
40% {
    transform: scaleY(1.02);
}
60% {
    transform: scaleY(0.98);
}
80% {
    transform: scaleY(1.01);
}
100% {
    transform: scaleY(0.98);
}
80% {
    transform: scaleY(1.01);
}
100% {
    transform: scaleY(1);
    opacity:1;

}
 
 `;

export const HomeContainer = styled.div`
  background-color: white;

  overflow: hidden;
`;

export const SwiperContainer = styled.header`
  z-index: 0;
  height: 90vh;
  /* margin-top: 80px; */
  .carousel-inner {
    height: 100%;
  }
`;
export const Slide = styled.div`
  background-image: url(${LightBubles});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;
export const Slide2 = styled.div`
  background-image: url(${SingleTree});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;
export const Slide3 = styled.div`
  /* background-color: linear-gradient(to top, #99cf97 35%, #cdcf84 86%); */
  background: url(${Flower}), rgba(0, 0, 0, 0.35);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.4; */
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;
export const SlideHeader = styled.h1`
  color: white;
  text-align: center;
  font-size: 80px;
  width: 100%;
  @media (max-width: 1024px) {
    font-size: 60px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const SlideSubHeader = styled.h4`
  /* background: linear-gradient(to top, #99cf97 35%, #cdcf84 86%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: yellow;
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0;
  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const SlideContent = styled.p`
  color: lightgray;
  text-align: center;
  width: 50%;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const Icon = styled.div`
  color: green;
  font-size: 40px;
`;
export const Header = styled.h1`
  background-color: white;

  overflow: hidden;
  font-weight: 800;
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
export const SmallHeader = styled.p`
  background-color: white;

  overflow: hidden;
  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const About = styled.nav`
  background-color: white;
  margin-top: 30px;
  overflow: hidden;
  width: 90%;
  line-height: 1.4;
  color: gray;
  @media (max-width: 1024px) {
    font-size: 15px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 10px;
  }
`;

export const CardContainer = styled.p`
  background-color: white;

  margin-top: 100px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 70px;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Card = styled.p`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }

  &:hover {
    cursor: pointer;
    .cardIcon {
      animation: ${iconanimation} 1.1s ease-in-out 1 forwards;
    }
  }
`;
export const CardIcon = styled.p`
  font-size: 30px;
  background-color: green;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  margin-top: -60px;
`;
export const CardHeader = styled.h4`
  margin: 20px 0;

  &:hover {
    color: palegreen;
  }
`;
export const CardContent = styled.p`
  color: gray;
`;
export const ScheduleConatinaer = styled.p`
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const FormContainer = styled.p`
  color: gray;
  margin-top: 30px;
`;

export const ServicesContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const BlogCardContainer = styled.p`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const BlogCard = styled.p`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OuerMissionContainer = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const ImageContainer = styled.p`
  width: 100%;
  height: 600px;
  transform: scaleX(1.3);
  z-index: 2;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MisionContainer = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 10px 20px 50px;
  border-radius: 10px;

  z-index: 4;
  background-color: white;
  .missionHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
    @media (max-width: 768px) {
      align-items: center;
    }
  }
  .missionAbout {
    color: gray;
    text-align: center;
    margin: 0;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const TestmonialContainer = styled.div``;

export const TestmonialCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 50px;
  &::before {
    content: "\f10d";
    position: absolute;
    top: 160px;
    left: 110px;
    font-family: FontAwesome;
    font-style: normal;
    color: #54be73;
    font-size: 40px;
    @media (max-width: 1024px) {
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  &::after {
    content: "\f10e";
    position: absolute;
    top: 160px;
    right: 110px;
    font-family: FontAwesome;
    font-style: normal;
    color: #54be73;
    font-size: 40px;
    @media (max-width: 1024px) {
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const TestmonialImgContainer = styled.div`
  height: 100px;
  width: 100px;
`;
export const TestmonialImg = styled.img`
  border-radius: 50%;
`;

export const TestmonialContent = styled.div`
  text-align: center;
  width: 70%;
  font-size: 25px;
  font-style: italic;
  color: #808080;
  margin-top: 20px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export const TestmonialAuthorName = styled.h3`
  text-align: center;
  font-style: normal;
  text-transform: none;
  text-align: center;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #323232;
  display: inline-block;
  width: 100%;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 30px;
`;
export const TestmonialAuthorRole = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  font-style: normal;
  display: block;
  margin-bottom: 15 px;
  line-height: 1;
  letter-spacing: 0.2em;
  text-indent: 0.2 em;
  color: #808080;
`;
