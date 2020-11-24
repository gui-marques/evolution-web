import styled, { keyframes } from 'styled-components';
import sigInBackground from '../../assets/sign-in-background.png';


export const  Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;

`;


export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


place-content: center;

width: 100%;
max-width: 700px;


`;
const appearFromRight = keyframes`
from {
  opacity: 0px;
  transform: translateX(50px);
}
to{
  opacity: 1px;
  transform: translateX(0px);
}
`


export const AnimationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

animation: ${appearFromRight} 1s;
form {
  margin: 40px 0;
  width: 340px;
  text-align: center;
  h1{
    margin-bottom: 20px;
  }
  a {
      color: #fff;
      display: block;
      margin-top: 15px;
      text-decoration: none;
    }
  }


`

export const Background = styled.div`
flex: 1;
background: url(${sigInBackground}) no-repeat center;
background-size: cover;


`;
