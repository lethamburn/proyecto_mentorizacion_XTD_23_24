import StyledToggle from './StyledToggle'

const Toggle = ({ size, checked, onChange, color }) => {
  return (
    <StyledToggle size={size} color={color}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={`toggle-${size}-${color}`}
      />
      <label htmlFor={`toggle-${size}-${color}`}></label>
    </StyledToggle>
  )
}

export default Toggle
