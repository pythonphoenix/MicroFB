import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: fit-content;
  width: 100%;
  position: absolute;
  background: #1e3264;
`;

export const FontSize = styled.div`
  font-size: 16px;
  }
`;

export const FooterDivisionBox = styled.div`
  display: flex;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 90%;
    display: block;
  }
`;

export const MapBottom = styled.div`
  
  width: 297.2px;
  height: 162px;
  top: 3353.94px;
  @media screen and (max-width: 768px) {
    width: 90%;
    display: block;
  }
`;

export const FooterEachDivision = styled.section`
  width: 20%;
  margin-top: 2em;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterLogoImg = styled.img`width: 10em;`;

export const FooterDivisionTitle = styled.h4`color: rgba(255, 255, 255, 1);
font-family: open sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
`;

export const FooterAlignRow = styled.div`
display: flex;
flex-wrap: wrap;


`;

export const FooterDivisionItem = styled.h5`color: rgba(255, 255, 255, 0.7);
font-family: Open Sans;
font-style: default;
text-align: justify;
font-size:16px;

`;

export const AlignIconText = styled.div`
flex-direction: row;
justify-content: center;
align-items: center;
padding-left: 5px;
`;

export const FooterCopyRight = styled.div`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
margin-top:2.5rem
margin-bottom:1.5em;
text-align: center;
letter-spacing: 0.233333px;
color: #FFFFFF;
`;

export const FooterImg = styled.img`
width:100%;`;