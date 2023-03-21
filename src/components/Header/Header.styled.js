import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 220px;
  padding: 20px 15px;
  background: ${props => props.theme.color.a};
  background: linear-gradient(
    90deg,
    rgb(38, 80, 119) 0%,
    rgb(95, 167, 235) 33%,
    rgb(95, 167, 235) 66%,
    rgb(38, 80, 119) 100%
  );
`;
export const Title = styled.h2`
  color: ${p => p.theme.color.white};
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.color.b};
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.05em;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
