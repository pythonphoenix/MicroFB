import styled from 'styled-components';

export const BankHeader = styled.header`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 5em;
  top: 0px;
  background: rgba(30, 50, 100, 1);
  font-family: Georgia, 'Times New Roman', Times, serif;
  box-shadow: 0px 1px 5px rgba(255, 255, 255, 0.1),
    0px 1px 20px rgba(0, 0, 0, 0.05), 0px -2px 20px rgba(0, 0, 0, 0.05);
`;

export const BankHeaderLogoBox = styled.div`
  margin-left: 10%;
  @media screen and (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const BankHeaderLogo = styled.img`
  width: 10em;
  margin-top: 0.5em;
  @media screen and (max-width: 768px) {
    width: 7em;
    margin-top: 1em;
  }
`;
