import StyledToggle from './StyledToggle'

const Toggle = ({ size, checked, onChange, color, type }) => {
  return (
    <StyledToggle size={size} color={color} type={type} checked={checked}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={`toggle-${type}-${size}-${color}`}
      />
      <label htmlFor={`toggle-${type}-${size}-${color}`}>
        {type === 'icon' && (
          checked ? <i className="fas fa-check" style={{ marginLeft: '4px', color: 'white', fontSize: 'var(--icon-size)' }}></i> : <i className="fas fa-times" style={{ marginRight: '4px', color: 'white', fontSize: 'var(--icon-size)' }}></i>
        )}
        {type === 'text' && (
          checked ? <span style={{ marginLeft: '4px', color: 'white' }}>ON</span> : <span style={{ marginRight: '4px', color: 'white' }}>OFF</span>
        )}
      </label>
    </StyledToggle>
  )
}

export default Toggle
