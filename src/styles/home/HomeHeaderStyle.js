import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  height: 5em;
  margin: 0;
  // background:red;
  // width: 100%;
  font-family: Open Sans;
font-style: normal;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  // box-shadow: 5px 2px 5px rgba(5, 5, 5, 0.2),
  //   0px 0px 10px rgba(255, 255, 255, 1);
`;

export const HeaderDesktop = styled.div`
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.8em;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const HeaderLeft = styled.section`
  width: 20%;
  display: flex;
  @media screen and (max-width: 1024px) {
    width: 20%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const HeaderMiddle = styled.section`
  display: flex;
  width: 40%;
  margin-right: 10%;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderRight = styled.section`
  display: flex;
  width: 30%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 40%;
    justify-content: unset;
  }
`;

export const HeaderLogo = styled.img`
  width: 10em;
  height: 4em;
`;

export const HeaderItem = styled.h4`
  color: rgb(110, 110, 110);
  font-weight: normal;
  font-family: Open Sans;
  font-style: normal;
  height: 22px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderButton = styled.button`
  font-weight: bolder;
  border: none;
  background: rgba(84, 130, 247, 1);
  outline: none;
  border-radius: 0.5em;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  height: 3em;
  margin: 10px;
  transition: 0.7s background;
  &:hover {
    background: rgba(84, 130, 247, 0.7);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const AnimateNavBar = keyframes`
    0% {
        opacity: 0;
        background:rgba(84, 130, 247, 1)
        // height:5em;
    }
   
    100% {
        opacity: 1;
        // height:18em;
    }
`;

export const HeaderNavBar = styled.div`
  width: 100%;
  height: 22px;
  position: relative;
  background: rgba(255, 255, 255, 1);
  z-index: 10000;
  text-align: center;
  display: none;
  box-shadow: 0px 8px 10px rgba(84, 130, 247, 0.2);
  @media screen and (max-width: 768px) {
    display: block;
    animation-name: ${AnimateNavBar};
    animation-duration: 1s;
  }
`;

export const HeaderNavBarItem = styled.h4`
  color: rgb(110, 110, 110);
  font-weight: normal;
  cursor: pointer;
  width: 10em;
  height: 3em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  height: 1.5em;
  text-decoration: none;
  &:hover {
    background: rgba(110, 110, 110, 0.3);
  }
`;

export const HeaderHideMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderHideDesktop = styled.div`
  display: none;
  margin-left: 70%;
  margin-top: 1em;
  color: rgba(84, 130, 247, 1);
  @media screen and (max-width: 768px) {
    display: block;
    float: right;
  }
`;
