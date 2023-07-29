import { useRef } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.main`
  overflow-y: scroll;
  width: 100%;
  padding: 20px;
  background: ${props => props.theme.color.a};
  background: linear-gradient(
    90deg,
    ${props => props.theme.color.b} 0%,
    ${props => props.theme.color.a} 33%,
    ${props => props.theme.color.a} 66%,
    ${props => props.theme.color.b} 100%
  );

  ${p => {
    const prevProps = useRef(p.status);

    if (prevProps.current === p.status && p.status) {
      return `transform: perspective(99vh) rotateY(-20deg);`;
    } else if (p.status === null) {
      return;
    } else if (p.status) {
      return `animation-name: perspectiveMenuOpen;`;
    } else {
      prevProps.current = p.status;
      return ` animation-name: perspectiveMenu;`;
    }
  }}

  animation-duration: 600ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes perspectiveMenuOpen {
    0% {
      transform: perspective(100vh) rotateY(0deg);
    }
    100% {
      transform: perspective(99vh) rotateY(-20deg);
    }
  }
  @keyframes perspectiveMenu {
    0% {
      transform: perspective(99vh) rotateY(-20deg);
    }
    100% {
      transform: perspective(100vh) rotateY(0deg);
    }
  }
`;
