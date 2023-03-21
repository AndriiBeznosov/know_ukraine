import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  z-index: 7;
  width: 100vw;
  height: 100vh;

  animation-name: changeOpacity;
  animation-fill-mode: forwards;
  @media screen and (min-width: 1200px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 1199px) {
    justify-content: center;
  }
  ${props => {
    return props.status === null
      ? ` animation-duration: 5000ms;
   animation-delay: 5000ms;
   opacity: 0;
    @keyframes changeOpacity {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }`
      : ` animation-duration: 500ms;
      animation-timing-function: linear;
   @keyframes changeOpacity {
    0% {
      transform: rotateY(0);
      opacity: 0;
    }
  
40%{
      transform: rotateY(90deg);
    }
60%{
  opacity: 0;
}
    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  }`;
  }}
`;

export const FormContainer = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 20px;
  width: 300px;
  border-radius: 20px;
  background: ${props => props.theme.color.a};
  background: linear-gradient(
    90deg,
    rgba(38, 80, 119, 0.8) 0%,
    rgba(95, 167, 235, 0.8) 33%,
    rgba(95, 167, 235, 0.8) 66%,
    rgba(38, 80, 119, 0.8) 100%
  );

  -webkit-box-shadow: 0px 2px 24px 0px rgba(235, 235, 251, 0.74);
  box-shadow: 0px 2px 24px 0px rgba(235, 235, 251, 0.74);
`;

export const Input = styled(Field)`
  display: block;
  padding: 10px 15px;
  border-radius: 20px;
  border: transparent;
  outline: none;
  box-shadow: inset 0px 0px 11px 5px ${props => props.theme.color.a};

  font-size: 16px;
  color: ${props => props.theme.color.white};

  &::placeholder {
    color: ${props => props.theme.color.c};
  }
  background: linear-gradient(
    0deg,
    rgba(38, 80, 119, 1) 0%,
    rgba(95, 167, 235, 1) 24%,
    rgba(95, 167, 235, 1) 33%,
    rgba(38, 80, 119, 1) 100%
  );
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  color: ${props => props.theme.color.b};
  letter-spacing: 0.07em;
  & svg {
    width: 15px;
    height: 15px;
    fill: ${props => props.theme.color.b};
  }
  & button {
    position: absolute;
    top: 31px;
    right: 11px;
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: transform ${props => props.theme.transition};

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
  & span {
    position: absolute;
    top: 100%;
    right: 10px;
    color: ${props => props.theme.color.red};
    font-size: 10px;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  border-radius: 20px;
  border: transparent;
  cursor: pointer;
  width: 140px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: ${props => props.theme.color.white};
  background: linear-gradient(
    0deg,
    ${props => props.theme.color.b} 0%,
    ${props => props.theme.color.a} 24%,
    ${props => props.theme.color.a} 33%,
    ${props => props.theme.color.b} 100%
  );
  box-shadow: inset 0px 0px 11px 5px ${props => props.theme.color.a};
  transition: transform ${props => props.theme.transition};

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;

export const ButtomGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 900;
  border-color: transparent;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.74);
  transition: transform ${props => props.theme.transition};
  margin-bottom: 20px;

  & svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & button {
    font-size: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.color.b};
    transition: transform ${props => props.theme.transition};

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
  & svg {
    margin-right: 5px;
    fill: ${props => props.theme.color.b};
  }
`;
