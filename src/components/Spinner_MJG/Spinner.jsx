import StyledSpinner from './StyledSpinner'

const Spinner = ({ size }) => {
  return (
    <StyledSpinner size={size}>
      <div className="spinner"></div>
    </StyledSpinner>
  )
}

export default Spinner
