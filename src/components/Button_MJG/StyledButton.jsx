import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ $bgColor }) => $bgColor || 'var(--primary100)'};
  color: ${({ $textColor }) => $textColor || 'white'};
  border: ${({ $borderColor }) => $borderColor ? `1px solid ${$borderColor}` : 'none'};
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '40px'};
  padding: 10px ${({ $iconOnly }) => $iconOnly ? '10px' : '20px'};
  font-size: ${({ $textSize }) => $textSize || '16px'};
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;

  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor || 'var(--primary40)'};
    color: ${({ $hoverTextColor }) => $hoverTextColor || 'var(--primary100)'};
    svg, i {
      fill: ${({ $hoverTextColor }) => $hoverTextColor || 'var(--primary100)'};
    }
  }

  i, svg {
    align-self: center;
    margin: 0 auto;
    font-size: 1em;
    fill: ${({ $textColor }) => $textColor || 'inherit'};
  }

  ${({ $iconOnly, width, height }) => $iconOnly && `
    padding: 0;
    justify-content: center;
    width: ${width || '48px'};
    height: ${height || '48px'};
  `}
`

export default StyledButton
