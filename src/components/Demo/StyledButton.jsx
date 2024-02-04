import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.primary ? 'var(--general100)' : 'var(--primary100)'};
  color: var(--general30);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`
export default StyledButton
