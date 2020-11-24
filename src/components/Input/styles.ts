import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #CCEEFF;
    border-radius: 20px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;
    display: flex;
    align-items: center;


    & + div {
      margin-top: 8px;
    }

${props => props.isErrored && css`
border-color: #c53030;
`}


${props => props.isFocused && css`
color: #ff9000;
border-color: #ff9000;
`}



${props => props.isFilled && css`
color: #ff9000;
`}

input {
flex: 1;
background: transparent;
border: transparent;
outline: 0;



    &::placeholder {
      color: black;
    }


  }
  svg {
    margin-right: 16px;
  }

`;

export const Error = styled(Tooltip)`
height: 20px;
margin-left: 16px;
svg{
  margin: 0;
}
span{
  background: #c53030;
  color: #fff;
  &::before {
    border-color: #c53030 transparent;
    }
}

`;
