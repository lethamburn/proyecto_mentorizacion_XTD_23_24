import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ $bgColor, $white }) => $white ? 'var(--white)' : $bgColor || 'var(--primary100)'};
  color: ${({ $hoverTextColor, $white }) => $white ? 'var(--primary100)' : $hoverTextColor || 'var(--general30)'};
  border: ${({ $white }) => $white ? '1px solid var(--general50)' : 'none'};
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '40px'};
  padding: 10px ${({ $iconOnly }) => $iconOnly ? '10px' : '20px'};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;

  &:hover {
    background-color: ${({ $hoverColor, $white }) => $white ? 'var(--primary100)' : $hoverColor || 'var(--primary80)'};
    color: ${({ $hoverTextColor, $white }) => $white ? 'var(--white)' : $hoverTextColor || 'var(--white)'};

    svg, i {
      fill: ${({ $hoverTextColor, $white }) => $white ? 'var(--white)' : $hoverTextColor || 'var(--white)'};
    }
  }

  i, svg {
    align-self: center;
    margin: 0 auto;
    font-size: 1em;
    fill: ${({ $hoverTextColor, $white }) => $white ? 'var(--primary100)' : $hoverTextColor || 'inherit'};
  }

  ${({ $iconOnly }) => $iconOnly && `
    padding: 0;
    justify-content: center;
    width: 48px;
    height: 48px;
  `}
`

export default StyledButton
