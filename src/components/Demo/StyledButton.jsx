import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.primary ? 'var(--general100)' : 'var(--primary100)'};
  color: var(--general30);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;



  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor || 'var(--primary40)'};
    color: ${({ $hoverTextColor }) => $hoverTextColor || 'var(--primary100)'};
    
    }
  }
`
export default StyledButton
