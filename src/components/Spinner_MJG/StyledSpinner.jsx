import styled, { keyframes, css } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const dotAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`

const barGrow = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
  }
`

const StyledSpinner = styled.div`
  ${({ type }) => type === 'circle' && css`
    display: inline-block;
    width: ${({ size }) => (size === 'small' ? '20px' : size === 'medium' ? '30px' : '40px')};
    height: ${({ size }) => (size === 'small' ? '20px' : size === 'medium' ? '30px' : '40px')};
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: ${({ color }) => `var(--${color})`};
    animation: ${spin} 1s linear infinite;
  `}

  ${({ type, color, size }) => type === 'dot' && css`
    display: flex;
    justify-content: space-around;
    & > div {
      width: ${size === 'small' ? '6px' : size === 'medium' ? '8px' : '10px'};
      height: ${size === 'small' ? '6px' : size === 'medium' ? '8px' : '10px'};
      background-color: var(--${color});
      border-radius: 50%;
      animation: ${dotAnimation} 1.4s infinite ease-in-out both;
    }
    & > div:nth-child(1) { animation-delay: -0.32s; }
    & > div:nth-child(2) { animation-delay: -0.16s; }
  `}

  ${({ type, color, size }) => type === 'barLoader' && css`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: ${size === 'large' ? '50px' : size === 'medium' ? '35px' : '20px'};
    width: ${size === 'large' ? '40px' : size === 'medium' ? '30px' : '20px'};
    & > div {
      width: ${size === 'large' ? '8px' : size === 'medium' ? '6px' : '4px'};
      height: 100%;
      background-color: var(--${color});
      margin: 0 2px;
      animation: ${barGrow} 1.2s infinite ease-in-out;
    }
    & > div:nth-child(1) { animation-delay: -0.24s; }
    & > div:nth-child(2) { animation-delay: -0.12s; }
    & > div:nth-child(3) { animation-delay: 0s; }
  `}
`
export default StyledSpinner
