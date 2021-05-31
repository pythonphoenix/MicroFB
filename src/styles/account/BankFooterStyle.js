import styled from 'styled-components';

export const BankFooter = styled.footer`
  width: 100%;
  background: #1e3264;
//   position: absolute;
  height: 107px;
`;

export const BankFooterText = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.233333px;
  color: #ffffff;
  margin-left: 10%;
  margin-top: 3em;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-left: unset;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
  }
`;
