import StyledCodeButton from './StyledCodeButton'

const CodeButton = ({ selected, onChange }) => {
  return (
    <StyledCodeButton>
      <div className="switch">
        <input
          name="radio"
          type="radio"
          value="optionone"
          id="optionone"
          checked={selected === 'optionone'}
          onChange={() => onChange('optionone')}
        />
        <label htmlFor="optionone">Preview</label>

        <input
          name="radio"
          type="radio"
          value="optiontwo"
          id="optiontwo"
          checked={selected === 'optiontwo'}
          onChange={() => onChange('optiontwo')}
        />
        <label htmlFor="optiontwo" className="right">Html</label>

        <span className={selected === 'optiontwo' ? 'right' : ''}></span>
      </div>
    </StyledCodeButton>
  )
}

export default CodeButton
