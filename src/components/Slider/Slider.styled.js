import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 800px;
  max-height: 500px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 700px) {
    margin: 0 10px;
  }
`;

export const ContainerDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding: 10px;
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;

  ${p => (p.anime ? `opacity: 1;` : 'opacity: 0;')}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${p =>
    p.button
      ? `top: 50%;
  left: 10px;
  transform: translateY(-60%);`
      : `top: 50%;
  right: 10px;
  transform: translateY(-60%);`}

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: ${p => (p.dot ? ` rgb(32, 32, 32)` : `#f1f1f1`)};
`;
