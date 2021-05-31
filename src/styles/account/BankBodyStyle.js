import styled from 'styled-components';

export const BankContainer = styled.section`
  width: 100%;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  height:fit-content;

`;

export const BankContainerInner = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-bottom: 10em;
  @media screen and (max-width: 768px) {
    width: 90%;
    display: block;
  }
`;

export const BankContainerLeft = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BankContainerRight = styled.div`
  width: 45%;
  margin-left:5%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left:unset
  }
`;

export const BankContainerTitle = styled.h1`
  font-family: Ubuntu;
  font-style: normal;
  // font-weight: 500;
  // font-size: 43px;
  line-height: 49px;
  letter-spacing: 0.716667px;
  color: rgba(30, 50, 100, 0.5);
  margin-top: 5em;
  margin-left: 10%;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-left: unset;
    margin-top:3em;
  }
`;

export const BankImg1 = styled.img`
  width: 70%;
  height: 60vh;
`;

export const BankImg2 = styled.img`
  // display:inline-block;
  width: 40%;
  margin-left: -42%;
  height: 30vh;
  margin-top: 28vh;
  border-left: 2vh solid white;
  border-top: 2vh solid white;
`;

export const BankImg3 = styled.img`
  // display:inline-block;
  width: 30%;
  height: 30vh;
  margin-top: 28vh;
  border-left: 2vh solid white;
  border-top: 2vh solid white;
`;

export const BankForm = styled.div`
  background: #eff4fc;
  border-radius: 26px;
  height: fit-content;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(255, 255, 255, 1);
  @media screen and (max-width: 768px) {
    width: 100%;
    background: none;
  }
`;

export const BankFormInner = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1en;
`;

export const BankFormTitle = styled.h3`
  font-family: Ubuntu;
  font-style: normal;
  // font-weight: 500;
  line-height: 31px;
  margin-top: 1em;
  text-align: center;
  letter-spacing: 0.45px;
  color: #1e3264;
  @media screen and (max-width: 768px) {
    font-weight: bold;
    margin-top: 0em;
    margin-bottom: 2em;
  }
`;

export const BankFormBottom = styled.div`
  text-align: center;
  display: block;
`;

export const BankFormBottomText = styled.h5`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  // font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.233333px;
  color: #6e6e6e;
  margin-top: 0em;
`;
