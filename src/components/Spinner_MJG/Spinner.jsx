import StyledSpinner from './StyledSpinner'

const Spinner = ({ size, color, type = 'circle' }) => (
  <StyledSpinner size={size} color={color} type={type}>
    {['dot', 'barLoader'].includes(type) && Array.from({ length: 3 }, (_, index) => <div key={index} />)}
  </StyledSpinner>
)

export default Spinner
