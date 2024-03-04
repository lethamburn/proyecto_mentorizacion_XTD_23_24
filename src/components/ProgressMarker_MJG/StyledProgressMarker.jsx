import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const fillBar = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`

const waveAnimation = keyframes`
  0%, 40%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
`

const StyledProgressMarker = styled.div`
  ${({ type }) => type === 'circleWithPercentage' && css`
    position: relative;
    display: inline-block;
    width: ${({ size }) => (size === 'small' ? '40px' : size === 'medium' ? '60px' : '80px')};
    height: ${({ size }) => (size === 'small' ? '40px' : size === 'medium' ? '60px' : '80px')};
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: ${({ color }) => color};
    animation: ${rotate} 2s linear infinite;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0deg);
      font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px')};
      color: ${({ color }) => color};
    }
  `}

  ${({ type, color }) => type === 'bar' && css`
    position: relative;
    display: block;
    width: ${({ size }) => (size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px')};
    height: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    &::before {
      content: '';
      display: block;
      height: 100%;
      background-color: ${color};
      animation: ${fillBar} 2s infinite ease-in-out;
    }

  `}


  ${({ type, color }) => type === 'wave' && css`
    position: relative;
    display: flex;
    justify-content: space-around;
    width: ${({ size }) => (size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px')};
    & > div {
      background-color: ${color};
      height: 20px;
      width: 20px;
      border-radius: 50%;
      animation: ${waveAnimation} 1.5s infinite ease-in-out;
    }
    & > div:nth-child(odd) { animation-delay: -0.75s; }
  `}
`

export default StyledProgressMarker
