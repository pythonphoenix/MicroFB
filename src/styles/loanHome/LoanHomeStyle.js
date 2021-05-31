import styled from 'styled-components';

export const UserContainer = styled.div`
    // background: rgba(255, 255, 255, 1);
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  margin-top: 7em;
  margin-bottom:5em;
`;

export const LayerContainer = styled.section`
  height:fit-content;
  width: 100%;
`;

export const LayerContainerLeft = styled.div`
  width: 100%;
  background: yellow;
  // display:flex;
  height: 15em;
  // justify-content: space-between;
`;

export const LayerContainerRight = styled.div``;

export const EachCard = styled.div`
  height: fit-content;
  background: red;
  background: rgba(255, 255, 255, 1);
  border: 0.5px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-left: auto;
  margin-right:auto;
  margin-bottom: -0.2em;
`;

export const EachCardCalculator = styled.div`
  height: fit-content;
  width: 60%;
  background: red;
  background: rgba(255, 255, 255, 1);
  border: 0.5px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right:auto;
  margin-bottom: -0.2em;
`;

export const EachCardTitle = styled.h5`
  margin-top: 2em;
  color: rgba(5, 5, 5, 0.7);
  text-align: center;
`;

export const EachCardSegment = styled.div`
  // border-bottom:1px solid rgba(5,5,5,0.7);
  height: 4em;
  width: 100%;
  // display:flex;
`;

export const CardLeft = styled.div`
  float: left;
  display: inline-block;
  color: rgba(5, 5, 5, 0.7);
  margin-top: 1.3em;
  margin-left: 1em;
  font-size: 0.85em;
`;

export const CardRight = styled.div`
  float: right;
  display: inline-block;
  color: rgba(5, 5, 5, 0.7);
  margin-top: 1.3em;
  margin-right: 1em;
  font-size: 0.85em;
  font-weight:bold;
`;
export const CardButton = styled.button`
  background: rgb(84, 130, 247);
  border-radius: 0.3em;
  width: 10em;
  height: 3em;
  border: none;
  color: rgba(255, 255, 255, 1);
  margin-top: 3em;
  margin-bottom: 2em;
  cursor: pointer;
  transition: 0.5s background;
  outline: none;
  &:hover {
    background: rgba(84, 130, 247, 0.7);
  }
`;

export const CardLoadingButton = styled.button`
  background: rgb(84, 130, 247);
  border-radius: 0.3em;
  width: 10em;
  height: 5em;
  border: none;
  color: rgba(255, 255, 255, 1);
  margin-top: 3em;
  margin-bottom: 2em;
  cursor: pointer;
  transition: 0.5s background;
  outline: none;
  &:hover {
    background: rgba(84, 130, 247, 0.7);
  }
`;

export const CalculatorCardTitle = styled.h5`color: rgba(5, 5, 5, 0.5);
margin-bottom:0em`;

export const CalculatorBox = styled.div`
  height: fit-content;
  margin-left: 1.5em;
  margin-right: 1.5em;
  margin-top:-0.5em;
`;

export const CalculatorField = styled.input`
  width: 100%;
  height: 3em;
  border: 1px solid rgba(5, 5, 5, 0.3);
  outline: none;
  border-radius: 0.3em;
`;

export const CalculatorSlider = styled.input`
width: 100%;
height: 2em;
border: 1px solid rgba(5, 5, 5, 0.3);
outline: none;
border-radius: 0.3em;
`;

export const CalculatorInfo = styled.h6`color: rgba(5, 5, 5, 0.7);`;

export const CardDataSegment = styled.div`
  // border-bottom:1px solid rgba(5,5,5,0.7);
  width: 100%;
  // display:flex;
  height: 90vh;
`;

export const CardSelectSort = styled.select`
  width: 5em;
  height: 2.5em;
  border: none;
  color: rgba(5, 5, 5, .0.7);
  outline: none;
  background: rgba(98, 2, 238, 0.0001);
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 4px;
`;
