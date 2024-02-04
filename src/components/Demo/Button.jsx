import StyledButton from './StyledButton'

const Button = ({ children, primary }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>
}

export default Button
