import styled from 'styled-components'

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  margin-top: 20px; 
`

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.primary ? 'var(--primary100)' : 'var(--general100)'};
  color: ${(props) => (props.primary ? 'var(--general30)' : 'var(--primary30)')};
  padding: 14px 24px;
  margin-right: 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 100px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background-color: ${(props) =>
      props.primary ? 'var(--primary80)' : 'var(--general80)'};
    color: ${(props) => (props.primary ? 'var(--general20)' : 'var(--primary20)')};
  }

  &:active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`

const ButtonContainer = () => {
  return (
    <StyledButtonContainer>
      <StyledButton>Click</StyledButton>
      <StyledButton primary>Button</StyledButton>
    </StyledButtonContainer>
  )
}

export default ButtonContainer
