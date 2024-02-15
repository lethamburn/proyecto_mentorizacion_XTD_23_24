import { useState } from 'react'
import Toggle from './Toggle'
import styled from 'styled-components'

const ToggleViewerContainer = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ToggleViewer = () => {
  const [checked, setChecked] = useState({ small: false, medium: false, large: false })

  const handleChange = (size) => {
    setChecked(prevState => ({ ...prevState, [size]: !prevState[size] }))
  }

  return (
    <ToggleViewerContainer>
      <div>
        <h3>Small</h3>
        <Toggle size="small" checked={checked.small} onChange={() => handleChange('small')} />
      </div>

      <div>
        <h3>Medium</h3>
        <Toggle size="medium" checked={checked.medium} onChange={() => handleChange('medium')} />
      </div>

      <div>
        <h3>Large</h3>
        <Toggle size="large" checked={checked.large} onChange={() => handleChange('large')} />
      </div>
    </ToggleViewerContainer>
  )
}

export default ToggleViewer
