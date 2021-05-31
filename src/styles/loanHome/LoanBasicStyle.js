import styled from 'styled-components';

export const CardTitle = styled.h3`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: 0.266667px;
  color: #1e3264;
`;

export const CardSubtitle = styled.h5`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  letter-spacing: 0.183333px;
  color: #6e6e6e;
`;

export const CardTextField = styled.input`
  width: 100%;
  height: 3em;
  border: 1px solid rgba(5, 5, 5, 0.3);
  outline: none;
  border-radius: 0.3em;
  background: #ffffff;
  border: 1px solid #cecece;
  // box-sizing: border-box;
  border-radius: 5px;
`;

export const CardTextFieldName = styled.h5`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.233333px;
  color: #6e6e6e;
`;

export const LoanSelectField = styled.select`
  width: 100%;
  height: 3em;
  border: none;
  color: rgba(5, 5, 5, , 0.5);
  outline: none;
  background: rgba(98, 2, 238, 0.0001);
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 4px;
`;

export const CardButton2 = styled.button`
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

export const LoanCurrentRoute = styled.div`
  height: 3em;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  // font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.233333px;
  color: #6e6e6e;
  margin-bottom:-1em;
  @media screen and (max-width:769px){
    text-align:center;
    font-weight:bold
  }
`;

export const LoanCurrentSteps = styled.div`
  // height:5em;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.233333px;
  color: #6e6e6e;
  display: flex;
  margin-bottom: 1em;
  width: 100%;
`;

export const LoanCurrentRule = styled.div`
  position: absolute;
  width: 197px;
  border: 2px solid #e4e7eb;
`;
