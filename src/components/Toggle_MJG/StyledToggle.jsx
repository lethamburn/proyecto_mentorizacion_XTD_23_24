import styled from 'styled-components'

const sizes = {
  small: { width: '26.3px', height: '20px', circleSize: '12px' },
  medium: { width: '44px', height: '24px', circleSize: '16px' },
  large: { width: '48px', height: '28px', circleSize: '20px' }
}

const colorMap = {
  blue: {
    base: 'var(--primary40)',
    hover: 'var(--primary60)',
    active: 'var(--primary100)'
  },
  red: {
    base: 'var(--red40)',
    hover: 'var(--red60)',
    active: 'var(--red100)'
  },
  grey: {
    base: 'var(--general40)',
    hover: 'var(--general60)',
    active: 'var(--general90)'
  }
}

const StyledToggle = styled.div`
  position: relative;
  width: ${({ size }) => sizes[size].width};
  height: ${({ size }) => sizes[size].height};
  border-radius: ${({ size }) => sizes[size].height};
  background-color: ${({ color }) => colorMap[color].base};

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
    background-color: ${({ color }) => colorMap[color].base};
    transition: 0.4s;
    border-radius: ${({ size }) => sizes[size].height};

    &:before {
      position: absolute;
      content: "";
      height: ${({ size }) => sizes[size].circleSize};
      width: ${({ size }) => sizes[size].circleSize};
      left: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
      bottom: ${({ size }) => `calc((${sizes[size].height} - ${sizes[size].circleSize}) / 2)`};
    }

    &:hover {
      background-color: ${({ color }) => colorMap[color].hover};
    }
  }

  input:checked + label {
    background-color: ${({ color }) => colorMap[color].active};
  }

  input:checked + label:before {
    transform: translateX(${({ size }) => `calc(${sizes[size].width} - ${sizes[size].circleSize} - 8px)`});
  }
`

export default StyledToggle
