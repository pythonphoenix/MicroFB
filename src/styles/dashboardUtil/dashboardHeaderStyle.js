import styled from 'styled-components';

export const UserHeader = styled.header`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 5em;
  top: 0px;
  background: rgba(30, 50, 100, 1);
  display: flex;
  font-family: Georgia, 'Times New Roman', Times, serif;
  box-shadow: 0px 1px 5px rgba(255, 255, 255, 0.1),
    0px 1px 20px rgba(0, 0, 0, 0.05), 0px -2px 20px rgba(0, 0, 0, 0.05);
`;

export const UserHeaderLeft = styled.section`
  width: 75%;
  margin-left: 7.5%;
`;

export const UserHeaderRight = styled.section`
  width: 10%;
  margin-right: 7.5%;
`;

export const UserHeaderMenuIcon = styled.div`
  margin-top: 1.7em;
  color: rgba(255, 255, 255, 1);
  // cursor: pointer;
`;

export const UserHeaderMsgIcon = styled.div`
  margin-top: 1.7em;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  float: right;
  display:flex;
`;

export const UserHeaderLogo = styled.img`
width:5em;
margin-top:-0.3em;
margin-left:1em`;

export const UserProfileBox = styled.div`
margin-top:3em;
width:80%;
margin-left:auto;
margin-right:auto;
text-align:center;
margin-bottom:2em;`;

export const UserImg = styled.img`
width:7em;
height:7em;
border-radius:500px;`

export const UserFullname = styled.h3`
color:rgba(5,5,5,0.7)`;

export const UserLastLogin = styled.h6`
color:rgba(5,5,5,0.7);
font-weight:normal`;

export const UserEachMenuIcons = styled.div`
width:80%;
margin-left:auto;
margin-right:auto;
margin-bottom:0.5em;
&:hover{
    background:rgba(5,5,5,0.1);
    border-radius:0.3em;
    border-left:2px solid rgba(30, 50, 100, 1);
}`;

// export const UserHeaderLogo = styled.img``;