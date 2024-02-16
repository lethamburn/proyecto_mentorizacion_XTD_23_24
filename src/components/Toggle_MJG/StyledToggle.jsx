import styled from 'styled-components'

const sizes = {
  small: { width: '26.3px', height: '20px', circleSize: '12px' },
  medium: { width: '44px', height: '24px', circleSize: '16px' },
  large: { width: '48px', height: '28px', circleSize: '20px' }
}

const StyledToggle = styled.div`
  position: relative;
  width: ${({ size }) => sizes[size].width};
  height: ${({ size }) => sizes[size].height};
  border-radius: ${({ size }) => sizes[size].height};
  background-color: var(--primary40);
  
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
    background-color: var(--primary40);
    transition: 0.4s;
    border-radius: ${({ size }) => sizes[size].height};

    &:before {
      position: absolute;
      content: "";
      height: ${({ size }) => sizes[size].circleSize};
      width: ${({ size }) => sizes[size].circleSize};
      left: 4px;
      background-color: var(--general30);
      transition: 0.4s;
      border-radius: 50%;
      bottom: ${({ size }) => `calc((${sizes[size].height} - ${sizes[size].circleSize}) / 2)`};
    }

    &:hover {
      background-color: var(--primary60);
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
