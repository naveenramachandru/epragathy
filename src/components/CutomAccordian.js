import React, { useEffect, useState } from "react";

import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
export const CustomToggleContainer = styled.div`
  background-color: yellowgreen;
  color: white;
  padding: 10px 30px;
  border-radius: 15px;
  width: 100%;
  &:hover {
    background-color: #56be73;
    transform: none;
  }

  ${(props) =>
    props.activeClass
      ? {
          backgroundColor: "yellowgreen",
        }
      : {
          backgroundColor: "#56be73",
        }}
`;

function CustomToggle({ children, eventKey, handleClick }) {
  useEffect(() => {
    Aos.init({ duration: 8000 });
  }, []);
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    handleClick();
  });
  console.log(children);
  return (
    <CustomToggleContainer
      className="w-100 d-flex align-items-center justify-content-between card-header "
      type="button"
      onClick={decoratedOnClick}
      activeClass={children[1] === "+" ? true : false}
    >
      <span>{children[0]}</span>
      <span>{children[1]}</span>
    </CustomToggleContainer>
  );
}

const CutomAccordian = () => {
  const [activeKey, setActiveKey] = useState(0);

  const data = [
    {
      title: "REDUCING WASTE",
      content:
        "The obvious solution to this has been recycling, which takes the parts within electronics, even the broken ones, that still have value and makes them available for new products. But the recycling rates for e-waste remain stubbornly low, which is why proponents of recycling are doing what they can to educate people about the long-term environmental and economic benefits of the approach.",
    },
    {
      title: "REDUCING POLLOUTION",
      content:
        "There are actually very simple ways that all of us can help reduce e-waste, which is especially important at a time when our ever-growing reliance on electronics has led to e-waste becoming the largest growing waste stream worldwide.",
    },
    {
      title: "RECYCLE MORE",
      content:
        "We can also help keep down the cost of new consumer goods by using recycled parts to make new products. This is a far less expensive proposition for manufacturers than having to go mining for virgin ore to make new metals. This means that the cost of making a new smartphone, or any other electronic device, goes down once manufacturers are able to access the parts they need from the recycling industry.",
    },
  ];
  return (
    <div className=" w-100">
      <Accordion defaultActiveKey={0} activeKey={activeKey}>
        {data.map((item, index) => (
          <Card
            key={index}
            className="mt-3 "
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="500"
            data-aos-duration="3000"
          >
            <CustomToggle
              as={Card.Header}
              eventKey={index}
              handleClick={() => {
                if (activeKey === index) {
                  setActiveKey(null);
                } else {
                  setActiveKey(index);
                }
              }}
            >
              {item.title}
              {activeKey === index ? "-" : "+"}
            </CustomToggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body className="p-5 p-lg-1">{item.content}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};
export default CutomAccordian;
