import StyledSpinner from './StyledSpinner'

const Spinner = ({ size, color }) => {
  return (
    <StyledSpinner size={size} color={color}>
      <div className="spinner"></div>
    </StyledSpinner>
  )
}

export default Spinner
