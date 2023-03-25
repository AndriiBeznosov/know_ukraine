import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 20px;
  background: ${props => props.theme.color.a};
  background: linear-gradient(
    90deg,
    ${props => props.theme.color.b} 0%,
    ${props => props.theme.color.a} 33%,
    ${props => props.theme.color.a} 66%,
    ${props => props.theme.color.b} 100%
  );
`;
