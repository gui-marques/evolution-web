import styled, {keyframes} from 'styled-components';


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
const appearFromLeft = keyframes`
from {
  opacity: 0px;
  transform: translateX(-50px);
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

animation: ${appearFromLeft} 1s;
form {
  margin: 60px 0;
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
export const Icons = styled.div`


a {
  position: relative;
    top: -25px;
    font-Size: 35px;
      color: #ffffff;
      margin: 6px;


    }


`;

export const Background = styled.div`
flex: 1;
background: url(${sigInBackground}) no-repeat center;
background-size: cover;


`;
