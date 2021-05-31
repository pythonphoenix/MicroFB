import styled from 'styled-components';

export const ProfilePageTitle = styled.h3`
  font-family: Ubuntu;
  font-style: normal;
  // font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.3px;
  color: #6e6e6e;
`;

export const ProfilePageDivider = styled.div`height: 2em;`;

export const ProfileCardInner = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`;

export const ProfileCardInnerLeft = styled.div`
  width: 90%;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s background;
  &:hover {
    background: rgba(5, 5, 5, 0.1);
  }
`;

export const ProfileCardInnerRight = styled.div`
  width: 10%;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s background;
  &:hover {
    background: rgba(5, 5, 5, 0.1);
  }
`;

export const ProfileCardTitle = styled.h4`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.266667px;
  color: #1e3264;
`;

export const ProfileCardSubtitle = styled.h6`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  letter-spacing: 0.183333px;
  color: #6e6e6e;
  margin-top: -1em;
`;

export const ProfileInfoCardLeft = styled.div`
  width: 45%;
  margin-top: 8vh;
  height: 80%;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
`;

export const ProfileInfoCardRight = styled.div`
  width: 45%;
  margin-top: 10vh;
  font-size: 1.2em;
`;


export const ProfileAvatar = styled.div`
width:7em;
height:7em;
margin-left:auto;
margin-right:auto;`;