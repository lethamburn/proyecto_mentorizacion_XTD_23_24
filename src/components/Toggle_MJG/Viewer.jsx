import { useState } from 'react'
import Toggle from './Toggle'
import styled from 'styled-components'

const ToggleViewerContainer = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`

const ToggleLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--general100);
  display: flex;
  align-items: center;
  gap: 10px;
`

const ToggleViewer = () => {
  const [checked, setChecked] = useState({ small: false, medium: false, large: false })

  const handleChange = (size) => {
    setChecked(prevState => ({ ...prevState, [size]: !prevState[size] }))
  }

  return (
    <ToggleViewerContainer>
      <ToggleLabel>
        <Toggle size="large" checked={checked.large} onChange={() => handleChange('large')} />
        <span>Large</span>
      </ToggleLabel>

      <ToggleLabel>
        <Toggle size="medium" checked={checked.medium} onChange={() => handleChange('medium')} />
        <span>Medium</span>
      </ToggleLabel>

      <ToggleLabel>
        <Toggle size="small" checked={checked.small} onChange={() => handleChange('small')} />
        <span>Small</span>
      </ToggleLabel>
    </ToggleViewerContainer>
  )
}

export default ToggleViewer
