import styled from 'styled-components'

const sizes = {
  small: { width: '40px', height: '20px', circleSize: '16px' },
  medium: { width: '60px', height: '30px', circleSize: '26px' },
  large: { width: '80px', height: '40px', circleSize: '36px' }
}

const StyledToggle = styled.div`
  position: relative;
  width: ${({ size }) => sizes[size].width};
  height: ${({ size }) => sizes[size].height};
  border-radius: ${({ size }) => sizes[size].height};
  background-color: var(--general50);
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  label {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--general80);
    transition: 0.4s;
    border-radius: ${({ size }) => sizes[size].height};

    &:before {
      position: absolute;
      content: "";
      height: ${({ size }) => sizes[size].circleSize};
      width: ${({ size }) => sizes[size].circleSize};
      left: 4px;
      bottom: 2px;
      background-color: var(--general30);
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + label {
    background-color: var(--primary100);
  }

  input:checked + label:before {
    transform: translateX(${({ size }) => `calc(${sizes[size].width} - ${sizes[size].circleSize} - 8px)`});
  }
`

export default StyledToggle
