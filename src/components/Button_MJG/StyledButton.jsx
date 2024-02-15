import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ $white, $bgColor }) => $white ? 'var(--white)' : $bgColor || 'var(--primary100)'};
  color: ${({ $white, $textColor }) => $white ? 'var(--primary100)' : $textColor || 'var(--white)'}; // Usando $textColor para el color del texto
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
    background-color: ${({ $hoverColor, $white }) => $white ? 'var(--primary100)' : $hoverColor || 'var(--primary40)'};
    color: ${({ $hoverTextColor, $white }) => $white ? 'var(--white)' : $hoverTextColor || 'var(--primary100)'};
    svg, i {
      fill: ${({ $hoverTextColor, $white }) => $white ? 'var(--white)' : $hoverTextColor || 'var(--primary100)'};
    }
  }

  i, svg {
    align-self: center;
    margin: 0 auto;
    font-size: 1em;
    fill: ${({ $white, $textColor }) => $white ? 'var(--primary100)' : $textColor || 'inherit'}; // Usando $textColor para el color de los íconos
  }

  ${({ $iconOnly }) => $iconOnly && `
    padding: 0;
    justify-content: center;
    width: 48px;
    height: 48px;
  `}
`

export default StyledButton
