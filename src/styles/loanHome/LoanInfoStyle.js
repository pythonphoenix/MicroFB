import styled from 'styled-components';

export const CardButton3 = styled.button`
  background: rgba(255,255,255,1);
  border-radius: 0.3em;
  width: 100%;
  height: 3em;
  border: 1px solid rgb(84, 130, 247);
  color: rgb(84, 130, 247);
  margin-top: 3em;
  margin-bottom: 1em;
  cursor: pointer;
  transition: 0.5s background;
  outline: none;
  &:hover {
    background: rgba(84, 130, 247, 0.7);
  }
`;

export const CardButton4 = styled.button`
  background: rgb(84, 130, 247);
  border-radius: 0.3em;
  width: 100%;
  height: 3em;
  border: none;
  color: rgba(255, 255, 255, 1);
  margin-top: 3em;
  margin-bottom: 4em;
  cursor: pointer;
  transition: 0.5s background;
  outline: none;
  &:hover {
    background: rgba(84, 130, 247, 0.7);
  }
`;

export const CardTextFieldDisabled = styled.input`
width: 100%;
height: 3em;
border: 1px solid rgba(5, 5, 5, 0.3);
outline: none;
border-radius: 0.3em;
background: rgba(5, 5, 5, 0.3);
border: 1px solid #CECECE;
// box-sizing: border-box;
border-radius: 5px;`;
