import styled from 'styled-components';

export const Wrapper = styled.header`
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-columns: 70px 1fr;
  background: ${props => props.theme.color.a};
  background: linear-gradient(
    90deg,
    rgb(38, 80, 119) 0%,
    rgb(95, 167, 235) 33%,
    rgb(95, 167, 235) 66%,
    rgb(38, 80, 119) 100%
  );
  ${p => {
    if (p.status === null) return;
    return p.status
      ? `grid-template-columns: 220px 1fr; animation-name: animationMenuOpen;`
      : `grid-template-columns: 70px 1fr; animation-name: animationMenu;`;
  }}

  animation-duration: 400ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes animationMenuOpen {
    0% {
      grid-template-columns: 100px 1fr;
    }
    100% {
      grid-template-columns: 220px 1fr;
    }
  }
  @keyframes animationMenu {
    0% {
      grid-template-columns: 220px 1fr;
    }
    100% {
      grid-template-columns: 100px 1fr;
    }
  }
`;
