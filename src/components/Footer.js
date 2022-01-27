import React from "react";
import { Form, Button } from "react-bootstrap";
import * as S from "./styles/Footer.styles";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { AiFillGoogleCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className=" bg-dark">
      <S.FooterContainer className="row justify-content-center align-items-stretch">
        <S.GoGreenContainer className="col-md-4 ">
          <S.Heading>Go Green</S.Heading>
          <S.Content className="mt-4">
            Family-owned company from San Diego proudly serving individuals and
            businesses in Southern California.
          </S.Content>
          <S.Adress>
            140 Horizon Circle, San Diego, CA <br /> 01 123 456 789
          </S.Adress>
          <S.Email>email@gmail.com</S.Email>
          <S.SocialMediaContainer>
            <S.SocialLogo>
              <TiSocialFacebookCircular />
            </S.SocialLogo>
            <S.SocialLogo>
              <TiSocialTwitterCircular />
            </S.SocialLogo>
            <S.SocialLogo>
              <AiFillGoogleCircle />{" "}
            </S.SocialLogo>
          </S.SocialMediaContainer>
        </S.GoGreenContainer>

        <S.ContactContainer className="col-md-4 ">
          <S.Heading>Contact Form</S.Heading>
          <Form className="mt-4">
            <Form.Group
              className="mb-3 d-flex flex-column justify-content-center
            align-items-stretch            "
              controlId="exampleForm.ControlInput1"
              style={{ gap: "20px" }}
            >
              <Form.Control
                type="text"
                placeholder="Enter Name"
                className="p-3"
              />

              <Form.Control
                type="email"
                className="p-3"
                placeholder="Email Adress"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>

            <Button variant="success" className="px-5 rounded-pill py-2">
              Order PickUp
            </Button>
          </Form>
        </S.ContactContainer>

        <S.NewsContainer className="col-md-4 ">
          <S.Heading>Recent News</S.Heading>
          <S.News className="mt-4">
            <S.NewsHeadLine>
              Chuck alcatra short ribs strip steak shoulder jowl
            </S.NewsHeadLine>
            <S.NewsDate>July 30, 2017</S.NewsDate>
          </S.News>
          <S.News>
            <S.NewsHeadLine>
              Chuck alcatra short ribs strip steak shoulder jowl
            </S.NewsHeadLine>
            <S.NewsDate>July 30, 2017</S.NewsDate>
          </S.News>
          <S.News>
            <S.NewsHeadLine>
              Chuck alcatra short ribs strip steak shoulder jowl
            </S.NewsHeadLine>
            <S.NewsDate>July 30, 2017</S.NewsDate>
          </S.News>
        </S.NewsContainer>
      </S.FooterContainer>
    </footer>
  );
};

export default Footer;
