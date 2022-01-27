import styled from "styled-components";

export const FooterContainer = styled.div`
  color: white;
  width: 100%;
  padding: 90px 40px;
`;
export const GoGreenContainer = styled.div``;

export const Heading = styled.h2``;
export const Icon = styled.div``;
export const Content = styled.div`
  color: gray;
`;
export const Adress = styled.div`
  margin: 15px 0;
`;
export const Email = styled.div`
  color: greenyellow;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
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
export const ContactContainer = styled.div``;

export const NewsContainer = styled.div``;
export const News = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;
export const NewsHeadLine = styled.div`
  color: gray;
  cursor: pointer;
  line-height: 1.6;
  word-spacing: 6px;
  width: 60%;
  &:hover {
    color: white;
  }
`;
export const NewsDate = styled.div`
  color: palegreen;
`;
