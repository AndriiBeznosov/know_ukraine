import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 20px 10px;
  width: 60px;
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
      ? `width: 240px; animation-name: animationMenuOpen;`
      : `width: 60px; animation-name: animationMenu;`;
  }}

  animation-duration: 400ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes animationMenuOpen {
    0% {
      width: 60px;
    }
    100% {
      width: 240px;
    }
  }
  @keyframes animationMenu {
    0% {
      width: 240px;
    }
    100% {
      width: 60px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.color.b};
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.05em;
  opacity: 0;

  a:not(:last-child) {
    margin-bottom: 20px;
  }

  ${p => {
    if (p.status === null) return;
    return p.status
      ? `animation-name:animationNavOpen; animation-delay: 400ms; `
      : `animation-name:animationNav;`;
  }}

  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes animationNavOpen {
    0% {
      opacity: 0;
      transform: scale(0.5);
      font-size: 8px;
    }
    100% {
      opacity: 1;
      transform: scale(1);
      font-size: 16px;
    }
  }
  @keyframes animationNav {
    0% {
      opacity: 1;
      transform: scale(1);
      font-size: 16px;
    }

    100% {
      opacity: 0;
      transform: scale(0.5);
      font-size: 0px;
    }
  }
`;
export const Title = styled.h2`
  color: ${p => p.theme.color.white};
  margin-bottom: 20px;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-align: center;
  opacity: 0;

  ${p => {
    if (p.status === null) return;
    return p.status
      ? `animation-name:animationTitleOpen; animation-delay: 400ms;`
      : `animation-name:animationTitle;`;
  }}

  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes animationTitleOpen {
    0% {
      opacity: 0;
      transform: scale(0.5);
      font-size: 8px;
    }
    90% {
      transform: scale(1.02);
    }
    100% {
      opacity: 1;
      transform: scale(1);
      font-size: 24px;
    }
  }
  @keyframes animationTitle {
    0% {
      opacity: 1;
      transform: scale(1);
      font-size: 24px;
    }
    10% {
      transform: scale(1.02);
    }
    100% {
      opacity: 0;
      transform: scale(0.5);
      font-size: 8px;
    }
  }
`;

export const NavItem = styled(NavLink)`
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  color: #212121;
  transition: color ${props => props.theme.transition};
  &.active {
    color: ${p => p.theme.color.red};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.color.f};
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  width: 45px;
  height: 50px;
  background-color: transparent;
  border: transparent;
  z-index: 2;

  svg {
    margin-left: auto;
    width: 100%;
    height: 100%;
    fill: ${p => p.theme.color.white};

    animation-name: animationButton;
    animation-duration: 700ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    @keyframes animationButton {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  ${p =>
    p.status
      ? `right: -10px; transform: translateY( -50%)`
      : `right:50%; transform: translate(50%, -50%)`};
`;
