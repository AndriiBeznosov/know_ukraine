import styled from 'styled-components';

export const Wrapper = styled.header`
  overflow: hidden;
  height: 100vh;
  display: flex;
  background: ${props => props.theme.color.a};
  background: linear-gradient(
    90deg,
    rgb(38, 80, 119) 0%,
    rgb(95, 167, 235) 33%,
    rgb(95, 167, 235) 66%,
    rgb(38, 80, 119) 100%
  );
`;
