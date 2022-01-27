import styled from "styled-components";
export const NavBarContainer = styled.nav`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  /* position: fixed; */
  /* top: 0; */
  z-index: 20;
`;

export const LogoWrapper = styled.div`
  width: 10%;

  color: blue;
  font-size: 30px;
  font-weight: 700;
`;

export const Menu = styled.div`
  width: 60%;
  background-color: red;
  @media (max-width: 768px) {
    /* position: relative; */
  }
`;

export const MenuConatiner = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;
  z-index: 30;
  transform: translate(0);
  @media (max-width: 768px) {
    position: absolute;
    background-color: rgb(37, 155, 135);
    height: 90vh;
    width: 100%;
    right: 0;
    top: 85px;
    z-index: 3000;
    flex-direction: column;

    transition: transform 0.8s linear;
    ${(props) =>
      props.nav
        ? {
            transform: "translate(0%)",
          }
        : {
            transform: "translateX(-250%)",
          }}
  }
`;

export const MenuItem = styled.div`
  list-style-type: none;
  padding: 10px 30px;
  font-size: 15px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: green; // <Thing> when hovered
    }
    ${(props) =>
      props.active
        ? {
            color: "green",
          }
        : {
            color: "black",
          }}
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 20%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialLogo = styled.div`
  font-size: 40px;
  margin: 0 10px;

  &:hover {
    color: blue;
  }
  &:nth-child(3) {
    &:hover {
      color: red;
    }
  }
`;

export const TopNavBar = styled.div`
  /* position: fixed; */
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* position: fixed; */
  /* top: 0; */
  padding: 10px 40px;
  background-color: black;
`;

export const ToNavLogo = styled.div`
  font-size: 20px;
  margin: 0 10px;
  color: white;
`;
export const CenterNavBar = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  justify-content: space-between;
  /* position: fixed; */
  /* top: 0; */
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CenterMenu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 10px;
  background-color: #9cc02a;
  padding-left: 50px;
  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
`;
export const CenterMenuList = styled.div`
  &:nth-child(2) {
    color: white;
    border-left: 1px solid white;
    padding-left: 10px;
    &:hover {
      color: #d6ea95;

      cursor: pointer;
    }
  }
  &:nth-child(3) {
    color: white;
    border-left: 1px solid white;
    padding-left: 10px;
    &:hover {
      color: #d6ea95;

      cursor: pointer;
    }
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  background-color: #56be73;
  padding-right: 50px;
`;

export const HanburgerIcon = styled.div`
  /* z-index: 10000; */

  display: none;
  @media (max-width: 768px) {
    width: 40px;
    height: 5px;
    background-color: green;
    display: block;
    position: relative;
    transition: transform 0.3s ease-in-out;
    ${(props) =>
      props.nav
        ? { backgroundColor: "transparent" }
        : { backgroundColor: "green" }}
    &.active {
    }
    &:before {
      content: "";
      width: 40px;
      height: 5px;
      background-color: green;
      display: block;
      position: absolute;
      left: 0px;
      top: -10px;

      transition: transform 0.3s ease-in-out;
      ${(props) =>
        props.nav
          ? {
              transform: "rotate(135deg)",
              top: "0",
            }
          : null}
    }
    &:after {
      content: "";
      width: 40px;
      height: 5px;
      background-color: green;
      display: block;
      position: absolute;
      left: 0px;
      top: 10px;

      transition: transform 0.3s ease-in-out;
      ${(props) =>
        props.nav
          ? {
              transform: "rotate(45deg)",
              top: "0",
            }
          : null}
    }
  }
`;

export const CloseHanburgerIcon = styled.div`
  /* z-index: 10000; */

  display: none;
  color: black;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 30px;
    top: 20px;
    font-size: 40px;
    font-weight: 700;
    transition: transform 0.3s ease-in-out;
    z-index: 80px;
  }
`;
