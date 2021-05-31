import styled from 'styled-components';

import FirstCardImg from '../../images/home/pexels-joslyn-pickens-3833052.png';
import SecondCardImg from '../../images/home/pexels-burak-k-187041.png';
import ThirdCardImg from '../../images/home/pexels-kindel-media-7578882.png';

export const BodyContainer = styled.div`background: rgba(255, 255, 255, 1);`;

export const BodyFirstLayer = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  @media screen and (max-width: 1024px) {
 width:90%;
};
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  // display:none;
`;

export const BodyFirstLayerLeft = styled.div`
  width: 50%;
  margin-top: 2em;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1em;
  }
`;

export const BodyFirstLayerRight = styled.div`
  width: 60%;
  // background:red;
  // border: 1px solid red;
  margin-top: 2em;
  margin-left: -10%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BodyFirstLayerLeftTitle = styled.h1`
  color: rgb(30, 50, 100);
  font-size: 72px;
  line-height: 1.5em;
  font-family: Ubuntu;
font-style: normal;
  @media screen and (max-width: 1024px) {
    line-height: 1.5em;
    font-size: 3em;
   };
  @media screen and (max-width: 768px) {
    font-size: 2em;
    width: 100%;
    line-height: 1.5em;
  }
`;

export const BodyFirstLayerLeftText = styled.p`
  line-height: 1.7em;
  margin-top: -0.5em;
  width: 90%;
  font-size: 1.5em;
  color: rgba(110, 110, 110, 1);
  font-family: Open Sans;
font-style: normal;
  @media screen and (max-width: 1024px) {
    line-height: 2.5em;
    font-size: 1.2em;
   };
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    line-height: 2em;
    margin-top: 0em;
  }
`;

export const BodyFirstLayerLeftBtn = styled.button`
  font-weight: bolder;
  border: none;
  background: rgba(84, 130, 247, 1);
  outline: none;
  border-radius: 0.5em;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  height: 3em;
  width: 10em;
  transition: 0.7s background;
  &:hover {
    background: rgba(84, 130, 247, 0.7);
  }
`;

export const BodyFirstLayerImg1 = styled.img`
border: 10px solid white;

@media screen and (max-width: 768px) {
 border-radius:1em;
 border:none;
}`;

export const BodyFirstLayerImgBoxOne = styled.div`
display:flex;
height:369.96px;
width: 369.96px;
margin-top: 20px;
// background:red
@media screen and (max-width: 768px) {
  width: 90%;
  display: none;
  height:10em;
  margin-top:-20em;
}
`;
export const BodyFirstLayerImgBoxTwo = styled.div`
display:flex;
height:369.96px;
width:369.96px;
margin-top: 250px;
margin-right: -9em;
// background:red
@media screen and (max-width: 768px) {
  width: 90%;
  display: none;
  height:10em;
  margin-top:-20em;
}
`;

// export const BodyFirstLayerImg2 = styled.img`
//   width: 50%;
//   margin-top: -30vh;
//   height: 50vh;
//   margin-left: 10%;
//   border: 20px solid rgba(255, 255, 255, 1);
//   @media screen and (max-width: 1024px) {
//     height:40vh;
//     margin-top:-20vh
//     };
// `;

export const BodySecondLayer = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1024px) {
    width:90%;
    };
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const BodyLayerMiddleTitle = styled.h1`
  font-family: Ubuntu;
  font-style: normal;
  margin-top: 1em;
  font-weight: 500;
  font-size: 3em;
  line-height: 2em;
  text-align: center;
  letter-spacing: 0.8px;
  color: #1e3264;
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    margin-top: 1.5em;
  }
`;

export const BodyLayerMiddleText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5em;
  line-height: 2em;
  margin-top: -2em;
  text-align: center;
  letter-spacing: 0.4px;
  color: #6e6e6e;
  @media screen and (max-width: 768px) {
    font-size: 1em;
    margin-top:-1em
  }
`;

export const BodySecondLayerCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const BodyEachLayerCard = styled.div`
  height: 15em;
  width: 30%;
  background: red;
  margin-top: 1em;
  margin-bottom: 2em;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 0.3em;
  background: linear-gradient(180deg, rgba(5, 5, 5, 0.2), rgba(5, 5, 5, 0.2)),
    url(${FirstCardImg});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BodyEachLayerCard2 = styled.div`
  height: 15em;
  width: 30%;
  background: red;
  margin-top: 1em;
  margin-bottom: 2em;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 0.3em;
  background: linear-gradient(180deg, rgba(5, 5, 5, 0.2), rgba(5, 5, 5, 0.2)),
    url(${SecondCardImg});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BodyEachLayerCard3 = styled.div`
  height: 15em;
  width: 30%;
  background: red;
  margin-top: 1em;
  margin-bottom: 2em;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 0.3em;
  background: linear-gradient(180deg, rgba(5, 5, 5, 0.2), rgba(5, 5, 5, 0.2)),
    url(${ThirdCardImg});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BodyEachLayerCardText = styled.h3`
  margin-top: 5.7em;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
`;

export const BodyThirdLayer = styled.section`
  width: 80%;
  height: fit-content;
  margin-left: auto;
  margin-top: 5em;
  margin-right: auto;
  display: flex;
  @media screen and (max-width: 1024px) {
    width:90%;
    };
  @media screen and (max-width: 768px) {
    width: 90%;
    display: block;
  }
`;

export const BodyThirdLayerLeft = styled.div`
  width: 45%;
  // background:red;
  height: 50vh;
  margin-left: 5%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BodyThirdLayerRight = styled.div`
  width: 45%;
  // height:50vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BodyThirdLayerLeftTitle = styled.h1`
  color: rgb(30, 50, 100);
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  // line-height: 55.15px;
  letter-spacing: 0.8px;
  margin-bottom: 0em;
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: -0.5em;
  }
`;

export const BodyThirdLayerLeftDropdown = styled.div`
  // background:red;
  // height:5em;
  margin-top: -0.5em;
`;

export const BodyThirdLayerLeftDropdownTitle = styled.h4`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: 41px;
  letter-spacing: 0.5px;
  color: #6e6e6e;
  margin-bottom: -1em;
`;

export const BodyThirdLayerLeftDropdownDesc = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  // font-size: 18px;
  // line-height: 25px;
  letter-spacing: 0.3px;
  color: #6e6e6e;
  margin-left: 2em;
  font-size: 0.9em;
`;

export const BodyThirdLayerRightBox = styled.div`
  width: 100%;
  margin-top: 3em;
  @media screen and (max-width: 768px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -3em;
  }
`;

export const BodyFourthLayer = styled.section`
  width: 80%;
  height: fit-content;
  margin-left: auto;
  margin-top: 5em;
  margin-right: auto;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    display: block;
  }
`;

export const BodyFourthLayerFirstImgBox = styled.div`
display:flex;
height:20em;
// background:red
@media screen and (max-width: 768px) {
  width: 90%;
  display: block;
  height:fit-content;
  margin-top:2em
}
`;

export const BodyFourthLayerSecondImgBox = styled.div`
display:flex;
height:20em;
margin-top:-5em;
margin-left: 5em;
// @media screen and (max-width: 1024px) {
//   margin-left:3em;
// margin-top:-4em;
// };
@media screen and (max-width: 768px) {
  width: 90%;
  display: block;
  height:fit-content;
  margin-top:4em;
  margin-left:0em;
}`;

export const BodyFourthLayerLeft = styled.div`
width:30%;
@media screen and (max-width: 768px) {
  width: 100%;
  text-align:center
}`;

export const BodyFourthLayerRight = styled.div`
width:70%;
margin-left:8em;
@media screen and (max-width: 1024px) {
  margin-left:10em;
};
@media screen and (max-width: 768px) {
  width: 100%;
  margin-left:unset;
  text-align:center

}`;

export const BodyFourthLayerImg = styled.img`
border: 10px solid white;

@media screen and (max-width: 768px) {
 border-radius:1em;
 border:none;
}`;

export const BodyFourthLayerReview = styled.p`
width:70%;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
line-height: 1.5em;
letter-spacing: 0.266667px;
color: #6E6E6E;
min-height:5em;
@media screen and (max-width: 1024px) {
  width:100%;
  line-height:1.5em;
};
@media screen and (max-width: 768px) {
  width: 100%;
  font-size:0.9em;
}`;

export const BodyFourthLayerCustName = styled.h3`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.266667px;
color: #1E3264;
margin-bottom:-1em;
font-weight:bold`;

export const BodyFourthLayerCustJob = styled.h5`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.266667px;
color: #6E6E6E;`;


export const BodyFourthLayerBottomImg = styled.img`
width:4em;`;

export const BodyFourthLayerBottom = styled.div`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 0.9em;
line-height: 22px;
/* identical to box height */
letter-spacing: 0.266667px;
color: #6E6E6E;
text-align:center;
margin-bottom:0em;
margin-top:8em;`;

// export const BodyFourthLayer