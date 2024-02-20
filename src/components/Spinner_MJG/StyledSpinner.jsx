import styled, { keyframes } from 'styled-components'

const sizes = {
  small: { size: '20px' },
  medium: { size: '30px' },
  large: { size: '40px' }
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledSpinner = styled.div`
  display: inline-block;
  width: ${({ size }) => sizes[size].size};
  height: ${({ size }) => sizes[size].size};
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${({ color }) => `var(--${color})`};
  animation: ${spin} 1s linear infinite;

  .spinner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export default StyledSpinner
