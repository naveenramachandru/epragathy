import React, { useState } from "react";
import * as S from "./styles/NavBar.styles";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  console.log(splitLocation[1]);
  return (
    <>
      <div>
        <S.CenterNavBar>
          <S.CenterMenu>
            <S.CenterMenuList>
              Welcome to Electronics Recycling
            </S.CenterMenuList>
            <S.CenterMenuList> How To Find Us</S.CenterMenuList>
            <S.CenterMenuList>Give FeedBack</S.CenterMenuList>
          </S.CenterMenu>
          <S.SearchBarContainer></S.SearchBarContainer>
        </S.CenterNavBar>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
          top={20}
        >
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <S.MenuItem active={splitLocation[1] === "" ? true : false}>
                    <NavLink to="/">HOME</NavLink>
                  </S.MenuItem>
                </Nav.Link>
                <Nav.Link>
                  <S.MenuItem
                    active={splitLocation[1] === "services" ? true : false}
                  >
                    <NavLink to="/services">SERVICES</NavLink>
                  </S.MenuItem>
                </Nav.Link>
                <Nav.Link>
                  <S.MenuItem
                    active={splitLocation[1] === "ourprocess" ? true : false}
                  >
                    <NavLink to="/ourprocess">OUR PROCESS</NavLink>
                  </S.MenuItem>
                </Nav.Link>
                <Nav.Link>
                  <S.MenuItem
                    active={splitLocation[1] === "blog" ? true : false}
                  >
                    <NavLink to="/blog">BLOG</NavLink>
                  </S.MenuItem>
                </Nav.Link>
                <Nav.Link>
                  <S.MenuItem>
                    <NavLink to="/contacts">CONTACT</NavLink>
                  </S.MenuItem>
                </Nav.Link>
              </Nav>
              <Nav>
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
              </Nav>
            </Navbar.Collapse>
          </Container>



        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
{
  /* <S.NavBarContainer>
    //   <S.LogoWrapper>Logo</S.LogoWrapper>

    //   <S.MenuConatiner>
    //     <S.MenuItem>HOME</S.MenuItem>
    //     <S.MenuItem>SERVICES</S.MenuItem>
    //     <S.MenuItem>PAGES</S.MenuItem>
    //     <S.MenuItem>BLOG</S.MenuItem>
    //     <S.MenuItem>SHOP</S.MenuItem>
    //   </S.MenuConatiner>

    //   <S.SocialMediaContainer>
    //     <S.SocialLogo>
    //       <TiSocialFacebookCircular />
    //     </S.SocialLogo>
    //     <S.SocialLogo>
    //       <TiSocialTwitterCircular />
    //     </S.SocialLogo>
    //     <S.SocialLogo>
    //       <AiFillGoogleCircle />{" "}
    //     </S.SocialLogo>
    //   </S.SocialMediaContainer>
    // </S.NavBarContainer> */
}

{
  /* <S.NavBarContainer>
<S.LogoWrapper>Logo</S.LogoWrapper>
<S.Menu nav={nav}>
  <S.MenuConatiner nav={nav}>
    {/* <S.CloseHanburgerIcon>
    <AiOutlineClose />
  </S.CloseHanburgerIcon> 
    <S.MenuItem active={splitLocation[1] === "" ? true : false}>
      <NavLink to="/">HOME</NavLink>
    </S.MenuItem>
    <S.MenuItem
      active={splitLocation[1] === "services" ? true : false}
    >
      <NavLink to="/services">SERVICES</NavLink>
    </S.MenuItem>
    <S.MenuItem active={splitLocation[1] === "pages" ? true : false}>
      <NavLink to="/pages">OUR PROCESS</NavLink>
    </S.MenuItem>
    <S.MenuItem active={splitLocation[1] === "blog" ? true : false}>
      <NavLink to="/blog">BLOG</NavLink>
    </S.MenuItem>
    <S.MenuItem>
      <NavLink to="/contacts">CONTACT</NavLink>
    </S.MenuItem>
  </S.MenuConatiner>
</S.Menu>
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

<S.HanburgerIcon
  nav={nav}
  onClick={() => {
    handleClick();
  }}
></S.HanburgerIcon>
</S.NavBarContainer> */
}
