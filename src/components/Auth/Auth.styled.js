import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.color.b};
  overflow: hidden;
`;

export const CloudAnime1 = styled.img`
  position: absolute;

  animation-name: changeCloud1;
  animation-duration: 10000ms;
  animation-fill-mode: forwards;
  z-index: 1;

  @media screen and (max-width: 320px) {
    @keyframes changeCloud1 {
      0% {
        bottom: 48px;
        right: 0;
        width: 120%;
      }

      100% {
        bottom: 34px;
        right: -50px;
        width: 120%;
      }
    }
  }
  @media screen and (min-width: 321px) and (max-width: 767px) {
    @keyframes changeCloud1 {
      0% {
        bottom: 0;
        right: 0;
        width: 120%;
      }

      100% {
        bottom: -50px;
        right: -50px;
        width: 120%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    @keyframes changeCloud1 {
      0% {
        bottom: 0;
        right: 0;
        width: 120%;
      }

      100% {
        bottom: -50px;
        right: -50px;
        width: 120%;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    @keyframes changeBgColor {
      0% {
        bottom: 0;
        right: 0;
        width: 120%;
      }

      100% {
        bottom: -50px;
        right: -50px;
        width: 120%;
      }
    }
  }
`;

export const CloudAnime2 = styled.img`
  position: absolute;
  z-index: 3;
  animation-name: changeCloud2;
  animation-duration: 10000ms;
  animation-fill-mode: forwards;

  @media screen and (max-width: 320px) {
    @keyframes changeCloud2 {
      0% {
        width: 1500px;
        bottom: 20%;
        left: -150%;
      }

      100% {
        bottom: 50%;
        left: -100%;
        width: 1500px;
      }
    }
  }
  @media screen and (min-width: 321px) and (max-width: 767px) {
    @keyframes changeCloud2 {
      0% {
        width: 1500px;
        bottom: 20%;
        left: -150%;
      }

      100% {
        bottom: 60%;
        left: -100%;
        width: 1500px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    @keyframes changeCloud2 {
      0% {
        width: 1500px;
        bottom: 20%;
        left: -150%;
      }

      100% {
        bottom: 65%;
        left: -45%;
        width: 1500px;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    @keyframes changeCloud2 {
      0% {
        width: 2000px;
        bottom: 0;
        left: -100%;
      }

      100% {
        bottom: 65%;
        left: -50%;
        width: 1500px;
      }
    }
  }
`;

export const CloudAnime3 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  animation-name: changeCloud3;
  animation-duration: 10000ms;
  animation-fill-mode: forwards;
  z-index: 2;

  @media screen and (max-width: 320px) {
    @keyframes changeCloud3 {
      0% {
        top: 0;
        left: 0;
      }

      100% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 900px;
      }
    }
  }
  @media screen and (min-width: 321px) and (max-width: 767px) {
    @keyframes changeCloud3 {
      0% {
        top: 0;
        left: 0;
      }

      100% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 900px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    @keyframes changeCloud3 {
      0% {
        top: 0;
        left: 0;
      }

      100% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 900px;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    @keyframes changeCloud3 {
      0% {
        top: 0;
        left: 0;
      }

      100% {
        top: 50%;
        left: 60%;
        transform: translate(-50%, -50%);
        width: 1200px;
      }
    }
  }
`;

export const CloudAnime4 = styled.img`
  position: absolute;

  animation-name: changeCloud4;
  animation-duration: 10000ms;
  animation-fill-mode: forwards;
  z-index: 1;

  @keyframes changeCloud4 {
    0% {
      bottom: 0;
      left: 0;
      width: 300px;
    }

    100% {
      width: 400px;
      bottom: -25%;
      left: 0;
    }
  }
`;

export const CloudAnime5 = styled.img`
  position: absolute;

  animation-name: changeCloud5;
  animation-duration: 10000ms;
  animation-fill-mode: forwards;
  z-index: 1;

  @keyframes changeCloud5 {
    0% {
      bottom: -25%;
      left: -50%;
      width: 500px;
    }

    100% {
      width: 700px;
      bottom: -25%;
      left: 0;
    }
  }
`;

export const Div = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.color.b};
  animation-name: block;
  animation-duration: 12000ms;
  animation-fill-mode: forwards;
  z-index: 4;
`;

export const Block = styled.div`
  position: absolute;
  bottom: 50px;
  right: -2px;
  width: 100px;
  height: 100px;
  border-radius: 42%;
  box-shadow: 48px 64px 0 0 ${props => props.theme.color.b};

  z-index: 3;
`;
