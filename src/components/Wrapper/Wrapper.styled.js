import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 20px;
  background: ${props => props.theme.color.a};
  background: linear-gradient(
    90deg,
    ${props => props.theme.color.b} 0%,
    ${props => props.theme.color.a} 33%,
    ${props => props.theme.color.a} 66%,
    ${props => props.theme.color.b} 100%
  );

  ${p => (p.status ? ` animation-name: perspectiveMenuOpen;` : ` animation-name: perspectiveMenu;`)}
  animation-duration: 600ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes perspectiveMenuOpen {
    0% {
      transform: perspective(100vh) rotateY(0deg);
    }
    100% {
      transform: perspective(99vh) rotateY(-30deg);
    }
  }
  @keyframes perspectiveMenu {
    0% {
      transform: perspective(99vh) rotateY(-30deg);
    }
    100% {
      transform: perspective(100vh) rotateY(0deg);
    }
  }
`;
