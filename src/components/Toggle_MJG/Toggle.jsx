import StyledToggle from './StyledToggle'

const Toggle = ({ size, checked, onChange }) => {
  return (
    <StyledToggle size={size}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={`toggle-${size}`}
      />
      <label htmlFor={`toggle-${size}`}></label>
    </StyledToggle>
  )
}

export default Toggle
